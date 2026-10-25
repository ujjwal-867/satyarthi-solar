import * as ftp from "basic-ftp";
import path from "path";
import fs from "fs";

const REPORT_FILE = path.resolve("deploy-report.txt");

function log(msg) {
  console.log(msg);
  try {
    fs.appendFileSync(REPORT_FILE, `${msg}\n`, "utf8");
  } catch (e) {
    // Ignore
  }
}

async function deploy() {
  fs.writeFileSync(REPORT_FILE, `=== Hostinger FTP Deploy Report - ${new Date().toISOString()} ===\n`, "utf8");

  const server = process.env.FTP_SERVER;
  const user = process.env.FTP_USERNAME;
  const password = process.env.FTP_PASSWORD;

  if (!server || !user || !password) {
    log("❌ Missing required FTP environment variables: FTP_SERVER, FTP_USERNAME, or FTP_PASSWORD.");
    process.exit(1);
  }

  // 1. Production Lead Protection:
  const distLeadsJson = path.resolve("dist", "api", "data", "leads.json");
  if (fs.existsSync(distLeadsJson)) {
    log("🛡️ Removing dist/api/data/leads.json from build output to protect live customer leads.");
    try {
      fs.unlinkSync(distLeadsJson);
    } catch (e) {
      log(`Could not remove dist leads.json: ${e.message}`);
    }
  }

  const client = new ftp.Client();
  client.ftp.verbose = true;

  try {
    const cleanHost = server.replace(/^ftp:\/\//, "").trim();
    log(`Connecting to Hostinger FTP host: ${cleanHost} (user: ${user.trim()})...`);
    await client.access({
      host: cleanHost,
      user: user.trim(),
      password: password.trim(),
      port: 21,
      secure: false
    });
    log("✅ Connected successfully to Hostinger FTP!");

    const initialPwd = await client.pwd();
    log(`📍 Initial FTP working directory: '${initialPwd}'`);

    const rootList = await client.list();
    log(`📂 Top-level directory files: ${JSON.stringify(rootList.map((f) => ({ name: f.name, isDir: f.isDirectory, size: f.size })))}`);

    // Check if initial working directory itself has index.html or assets
    const hasIndexInRoot = rootList.some((f) => f.name === "index.html");
    const hasPublicHtml = rootList.some((f) => f.name === "public_html" && f.isDirectory);
    const hasDomains = rootList.some((f) => f.name === "domains" && f.isDirectory);

    log(`🔎 Initial scan: hasIndexInRoot=${hasIndexInRoot}, hasPublicHtml=${hasPublicHtml}, hasDomains=${hasDomains}`);

    const targets = [];

    // If root itself is already the webroot (e.g. contains index.html or is public_html):
    if (hasIndexInRoot || !hasPublicHtml) {
      targets.push(".");
    }

    if (hasPublicHtml) {
      targets.push("public_html");
      try {
        const pubList = await client.list("public_html");
        log(`📂 Files inside 'public_html': ${JSON.stringify(pubList.map((f) => f.name))}`);
      } catch (e) {
        log(`Notice listing public_html: ${e.message}`);
      }
    }

    if (hasDomains) {
      try {
        const domList = await client.list("domains");
        log(`📂 Subdirectories inside 'domains': ${JSON.stringify(domList.map((f) => f.name))}`);
        for (const d of domList) {
          if (d.isDirectory && !d.name.startsWith(".")) {
            targets.push(`domains/${d.name}/public_html`);
            targets.push(`domains/${d.name}`);
          }
        }
      } catch (e) {
        log(`Notice listing domains: ${e.message}`);
      }
    }

    const uniqueTargets = [...new Set(targets)];
    log(`🎯 Target directories selected for upload: ${JSON.stringify(uniqueTargets)}`);

    const distPath = path.resolve("dist");

    for (const target of uniqueTargets) {
      log(`\n------------------------------------------------------`);
      log(`🚀 Syncing dist/ to target: '${target}'...`);
      try {
        await client.cd(initialPwd);
        if (target !== ".") {
          await client.cd(target);
        }
        const currentWorkingDir = await client.pwd();
        log(`📂 Confirmed working directory: '${currentWorkingDir}'`);

        await client.uploadFromDir(distPath);
        log(`✅ Successfully uploaded dist/ into '${currentWorkingDir}'!`);

        const verifyList = await client.list();
        const indexFile = verifyList.find((f) => f.name === "index.html");
        if (indexFile) {
          log(`📄 Verified index.html: size=${indexFile.size} bytes, date=${indexFile.rawModifiedAt || indexFile.date}`);
        }
      } catch (err) {
        log(`⚠️ Error uploading to '${target}': ${err.message}`);
      }
    }

    log("\n🎉 Deployment completed across all targets!");
  } catch (err) {
    log(`❌ FTP Deployment Critical Error: ${err.message}`);
    process.exit(1);
  } finally {
    client.close();
  }
}

deploy();
