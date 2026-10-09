// Package script to create a clean cPanel zip bundle ready to upload to public_html
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const distDir = path.resolve("dist");
const zipName = "satyarthi-solar-cpanel.zip";

console.log("📦 Creating cPanel deployment package...");

if (!fs.existsSync(distDir)) {
  console.error("❌ 'dist' directory not found. Please run 'npm run build' first.");
  process.exit(1);
}

// Remove old zip if present
if (fs.existsSync(zipName)) {
  fs.unlinkSync(zipName);
}

try {
  // Use system zip command with clean exclusions
  execSync(`cd dist && zip -r ../${zipName} ./* .htaccess -x "*.DS_Store" -x "*.log"`, { stdio: "inherit" });
  const stats = fs.statSync(zipName);
  const sizeMb = (stats.size / (1024 * 1024)).toFixed(2);
  console.log(`\n✅ Successfully generated: ${zipName} (${sizeMb} MB)`);
  console.log(`🚀 This file is ready to be uploaded and extracted directly into cPanel 'public_html'!\n`);
} catch (e) {
  console.error("Failed to create zip:", e);
  process.exit(1);
}
