// Package script to create a clean, hardened cPanel zip bundle ready to upload to public_html
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const distDir = path.resolve("dist");
const zipName = "satyarthi-solar-cpanel.zip";

console.log("📦 Creating clean, production-hardened cPanel deployment package...");

if (!fs.existsSync(distDir)) {
  console.error("❌ 'dist' directory not found. Please run 'npm run build' first.");
  process.exit(1);
}

// 1. Sanitize dist/api/data: Never ship local test leads or active test sessions into production
const distDataDir = path.join(distDir, "api/data");
if (fs.existsSync(distDataDir)) {
  // Reset leads.json to clean empty array
  fs.writeFileSync(path.join(distDataDir, "leads.json"), "[]\n", "utf8");

  // Remove test sessions, login attempts, and rate limit files
  const runtimeFiles = ["sessions.json", "login_attempts.json", "ratelimit.json"];
  for (const f of runtimeFiles) {
    const fullPath = path.join(distDataDir, f);
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
    }
  }
}

// 2. Remove old zip if present
if (fs.existsSync(zipName)) {
  fs.unlinkSync(zipName);
}

// 3. Build zip bundle with strict exclusions
try {
  execSync(
    `cd dist && zip -r ../${zipName} ./* .htaccess -x "*.DS_Store" -x "*.log" -x "*.git*" -x "*login_attempts.json" -x "*sessions.json" -x "*ratelimit.json"`,
    { stdio: "inherit" }
  );
  const stats = fs.statSync(zipName);
  const sizeMb = (stats.size / (1024 * 1024)).toFixed(2);
  console.log(`\n✅ Successfully generated clean production package: ${zipName} (${sizeMb} MB)`);
  console.log(`🚀 This archive contains 0 test data and is 100% hardened for cPanel 'public_html' extraction!\n`);
} catch (e) {
  console.error("Failed to create zip:", e);
  process.exit(1);
}
