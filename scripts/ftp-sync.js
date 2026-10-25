import * as ftp from "basic-ftp";
import path from "path";
import fs from "fs";

/**
 * Recursively scans remote FTP directory tree to find all webroots
 * that currently host (or are intended to host) the web application.
 */
async function findWebroots(client, currentPath = "", depth = 0) {
  if (depth > 4) return [];
  let found = [];
  try {
    const list = await client.list(currentPath || undefined);
    const hasIndex = list.some((f) => f.name === "index.html");
    const hasPublicHtml = list.some((f) => f.name === "public_html" && f.isDirectory);

    if (hasIndex) {
      found.push(currentPath || ".");
    }

    for (const item of list) {
      if (item.isDirectory && !item.name.startsWith(".")) {
        // Skip common non-web directories
        if (["node_modules", ".git", ".well-known", "ssl", "logs", "mail"].includes(item.name)) continue;

        const subPath = currentPath ? `${currentPath}/${item.name}` : item.name;
        
        // If it's a public_html directory, it's definitely a target
        if (item.name === "public_html") {
          found.push(subPath);
        }

        try {
          const nested = await findWebroots(client, subPath, depth + 1);
          found = found.concat(nested);
        } catch (e) {
          // Ignore directory access restrictions
        }
      }
    }
  } catch (err) {
    // Ignore listing errors for restricted folders
  }
  return found;
}

async function deploy() {
  const server = process.env.FTP_SERVER;
  const user = process.env.FTP_USERNAME;
  const password = process.env.FTP_PASSWORD;

  if (!server || !user || !password) {
    console.error("❌ Missing required FTP environment variables: FTP_SERVER, FTP_USERNAME, or FTP_PASSWORD.");
    process.exit(1);
  }

  // 1. Production Lead Protection:
  // Ensure dist/api/data/leads.json is NOT in dist before uploading,
  // so live customer inquiries in production are NEVER overwritten.
  const distLeadsJson = path.resolve("dist", "api", "data", "leads.json");
  if (fs.existsSync(distLeadsJson)) {
    console.log("🛡️ Removing dist/api/data/leads.json from build output to protect live customer leads.");
    try {
      fs.unlinkSync(distLeadsJson);
    } catch (e) {
      console.warn("Could not remove dist leads.json:", e.message);
    }
  }

  const client = new ftp.Client();
  client.ftp.verbose = true;

  try {
    const cleanHost = server.replace(/^ftp:\/\//, "").trim();
    console.log(`Connecting to Hostinger FTP host: ${cleanHost} (user: ${user.trim()})...`);
    await client.access({
      host: cleanHost,
      user: user.trim(),
      password: password.trim(),
      port: 21,
      secure: false
    });
    console.log("✅ Connected successfully to Hostinger FTP!");

    const initialPwd = await client.pwd();
    console.log(`📍 Initial FTP working directory: '${initialPwd}'`);

    const rootList = await client.list();
    console.log("📂 Top-level directory contents:", rootList.map((f) => f.name));

    // Discover all webroots automatically
    console.log("🔍 Scanning for webroot directories across Hostinger server...");
    const discovered = await findWebroots(client);
    
    // Always include explicit standard Hostinger paths if they exist
    const candidates = [
      "public_html",
      "domains/satyarthisolarsolution.in/public_html",
      ...discovered
    ];

    // Verify which candidates are valid directories on the remote server
    const validTargets = [];
    for (const c of [...new Set(candidates)]) {
      try {
        await client.cd(initialPwd);
        await client.cd(c);
        validTargets.push(c);
      } catch (e) {
        // Not a valid directory or not accessible
      }
    }

    if (validTargets.length === 0) {
      validTargets.push(".");
    }

    console.log("🎯 Confirmed target deployment webroot directories:", validTargets);

    const distPath = path.resolve("dist");

    for (const targetDir of validTargets) {
      console.log(`\n======================================================`);
      console.log(`🚀 Deploying to target: '${targetDir}'`);
      console.log(`======================================================`);

      // 1. Reset to initial working dir and navigate to target
      await client.cd(initialPwd);
      await client.cd(targetDir);
      const activePwd = await client.pwd();
      console.log(`📂 Active directory for sync: '${activePwd}'`);

      // 2. Upload dist contents directly into the current directory
      await client.uploadFromDir(distPath);
      console.log(`✅ Successfully uploaded dist/ files to '${targetDir}'!`);

      // 3. Verify index.html in the target directory
      try {
        const files = await client.list();
        const indexFile = files.find((f) => f.name === "index.html");
        if (indexFile) {
          console.log(`📄 Verified index.html: size=${indexFile.size} bytes, modified=${indexFile.rawModifiedAt || indexFile.date}`);
        }
        const hasAssets = files.some((f) => f.name === "assets");
        console.log(`📁 Assets directory present: ${hasAssets}`);
      } catch (verifyErr) {
        console.warn(`Notice during verification of ${targetDir}:`, verifyErr.message);
      }
    }

    // Reset back to initial
    await client.cd(initialPwd);
    console.log("\n🎉 Full deployment completed successfully across all webroots!");
  } catch (err) {
    console.error("❌ FTP Deployment Error:", err);
    process.exit(1);
  } finally {
    client.close();
  }
}

deploy();
