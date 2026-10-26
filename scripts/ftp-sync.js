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
  client.ftp.timeout = 60000;

  try {
    const cleanHost = server.replace(/^ftp:\/\//, "").trim();
    let connected = false;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        log(`Connecting to Hostinger FTP host: ${cleanHost} (user: ${user.trim()}) [Attempt ${attempt}/3]...`);
        await client.access({
          host: cleanHost,
          user: user.trim(),
          password: password.trim(),
          port: 21,
          secure: false
        });
        connected = true;
        log("✅ Connected successfully to Hostinger FTP!");
        break;
      } catch (connErr) {
        log(`⚠️ Connection attempt ${attempt} failed: ${connErr.message}`);
        if (attempt < 3) {
          log("Waiting 5s before reconnecting...");
          await new Promise((res) => setTimeout(res, 5000));
        } else {
          throw connErr;
        }
      }
    }

    const initialPwd = await client.pwd();
    log(`📍 Initial FTP working directory: '${initialPwd}'`);

    // Test navigating up to parent directory
    let rootPath = initialPwd;
    try {
      log("Testing if client can navigate up via cd('..')...");
      await client.cd("..");
      const parentPwd = await client.pwd();
      log(`Parent directory pwd: '${parentPwd}'`);
      const parentList = await client.list();
      log(`Parent directory files: ${JSON.stringify(parentList.map((f) => f.name))}`);
      if (parentList.some((f) => f.name === "domains")) {
        rootPath = parentPwd;
      }
    } catch (e) {
      log(`Cannot navigate up: ${e.message}`);
    }

    // Return to rootPath
    await client.cd(rootPath);
    const currentList = await client.list();
    log(`📂 Current directory files: ${JSON.stringify(currentList.map((f) => f.name))}`);

    // Hostinger Document Root:
    // satyarthisolarsolution.in is served directly from /domains/satyarthisolarsolution.in/public_html
    const targets = [
      "domains/satyarthisolarsolution.in/public_html",
      "public_html"
    ];

    const distPath = path.resolve("dist");

    for (const target of targets) {
      log(`\n------------------------------------------------------`);
      log(`🚀 Syncing dist/ to target: '${target}'...`);
      try {
        await client.cd(rootPath);
        await client.cd(target);
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
