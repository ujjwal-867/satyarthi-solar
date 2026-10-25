import * as ftp from "basic-ftp";
import path from "path";
import fs from "fs";

async function deploy() {
  const server = process.env.FTP_SERVER;
  const user = process.env.FTP_USERNAME;
  const password = process.env.FTP_PASSWORD;

  if (!server || !user || !password) {
    console.error("❌ Missing required FTP environment variables: FTP_SERVER, FTP_USERNAME, or FTP_PASSWORD.");
    process.exit(1);
  }

  // 1. Lead data preservation guard:
  // Ensure dist/api/data/leads.json is NOT in dist before uploading,
  // so existing customer inquiries in production are NEVER overwritten.
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

    const rootList = await client.list();
    console.log("📂 Root directory contents:", rootList.map((f) => f.name));

    // Find all target webroot directories
    const targetDirs = [];

    // Check for 'domains' directory (Hostinger multi-domain architecture)
    const hasDomains = rootList.some((f) => f.name === "domains" && f.isDirectory);
    if (hasDomains) {
      console.log("🔍 Scanning 'domains/' directory...");
      const domainsList = await client.list("domains");
      console.log("📂 Domains found:", domainsList.map((f) => f.name));
      for (const d of domainsList) {
        if (d.isDirectory && !d.name.startsWith(".")) {
          const subPath = `domains/${d.name}`;
          const subList = await client.list(subPath);
          const hasPubHtml = subList.some((f) => f.name === "public_html");
          if (hasPubHtml) {
            targetDirs.push(`domains/${d.name}/public_html`);
          } else {
            targetDirs.push(`domains/${d.name}`);
          }
        }
      }
    }

    // Check for 'public_html' in root
    const hasPublicHtml = rootList.some((f) => f.name === "public_html");
    if (hasPublicHtml) {
      targetDirs.push("public_html");
    }

    // Fallback if neither found
    if (targetDirs.length === 0) {
      targetDirs.push(".");
    }

    // Deduplicate targets
    const uniqueTargets = [...new Set(targetDirs)];
    console.log("🎯 Target deployment webroot directories:", uniqueTargets);

    const distPath = path.resolve("dist");

    for (const targetDir of uniqueTargets) {
      console.log(`\n🚀 Uploading dist/ to target: '${targetDir}'...`);
      await client.uploadFromDir(distPath, targetDir);
      console.log(`✅ Successfully uploaded dist/ to '${targetDir}'.`);

      // Verify index.html in targetDir
      try {
        const files = await client.list(targetDir);
        const indexFile = files.find((f) => f.name === "index.html");
        if (indexFile) {
          console.log(`📄 Verified index.html in '${targetDir}' (size: ${indexFile.size} bytes)`);
        }
      } catch (err) {
        console.log(`Notice during verification of ${targetDir}:`, err.message);
      }
    }

    console.log("\n🎉 Deployment completed successfully to all target webroots!");
  } catch (err) {
    console.error("❌ FTP Deployment Error:", err);
    process.exit(1);
  } finally {
    client.close();
  }
}

deploy();
