import * as ftp from "basic-ftp";
import path from "path";

async function deploy() {
  const server = process.env.FTP_SERVER;
  const user = process.env.FTP_USERNAME;
  const password = process.env.FTP_PASSWORD;

  if (!server || !user || !password) {
    console.error("❌ Missing required FTP environment variables: FTP_SERVER, FTP_USERNAME, or FTP_PASSWORD.");
    process.exit(1);
  }

  const client = new ftp.Client();
  client.ftp.verbose = true;

  try {
    const cleanHost = server.replace(/^ftp:\/\//, "").trim();
    console.log(`Connecting to Hostinger FTP host: ${cleanHost}...`);
    await client.access({
      host: cleanHost,
      user: user.trim(),
      password: password.trim(),
      port: 21,
      secure: false
    });
    console.log("✅ Connected successfully to Hostinger FTP!");

    const rootList = await client.list();
    console.log("📂 Remote directory contents:", rootList.map((f) => f.name));

    // If public_html exists as a child directory, cd into it
    const hasPublicHtml = rootList.some((f) => f.name === "public_html");
    if (hasPublicHtml) {
      console.log("📁 Navigating into 'public_html' directory...");
      await client.cd("public_html");
    } else {
      console.log("📁 Already inside public_html root.");
    }

    console.log("🚀 Syncing dist/ directory to Hostinger live server...");
    await client.uploadFromDir(path.resolve("dist"));
    console.log("✨ All files successfully synchronized to Hostinger live server!");
  } catch (err) {
    console.error("❌ FTP Deployment Error:", err);
    process.exit(1);
  } finally {
    client.close();
  }
}

deploy();
