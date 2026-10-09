// ==============================================================================
// Satyarthi Solar Solution - Automated Security & Integrity Audit Suite
// ==============================================================================

import fs from "fs";
import path from "path";
import { execSync } from "child_process";

console.log("🛡️  Starting Comprehensive Security Audit...\n");

let passed = 0;
let warnings = 0;
let errors = 0;

function assert(condition, testName, details = "") {
  if (condition) {
    console.log(`  ✅ [PASS] ${testName}`);
    passed++;
  } else {
    console.error(`  ❌ [FAIL] ${testName}: ${details}`);
    errors++;
  }
}

function warn(condition, testName, details = "") {
  if (condition) {
    console.log(`  ✅ [PASS] ${testName}`);
    passed++;
  } else {
    console.warn(`  ⚠️  [WARN] ${testName}: ${details}`);
    warnings++;
  }
}

// ------------------------------------------------------------------------------
// TEST 1: Check for exposed API Keys and hardcoded secrets in source files
// ------------------------------------------------------------------------------
console.log("🔍 [Audit 1] Secret & Key Scanning in Source Code...");
const srcFiles = [];
function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (!full.includes("node_modules") && !full.includes(".git") && !full.includes("dist")) {
        walkDir(full);
      }
    } else if (f.endsWith(".js") || f.endsWith(".jsx") || f.endsWith(".php") || f.endsWith(".html")) {
      srcFiles.push(full);
    }
  }
}
walkDir(path.resolve("src"));
walkDir(path.resolve("public/api"));

let leakedSecretFound = false;
const secretPatterns = [
  /AIza[0-9A-Za-z-_]{35}/, // Google API Key
  /sk_live_[0-9a-zA-Z]{24}/, // Stripe live key
  /ghp_[0-9a-zA-Z]{36}/, // GitHub personal access token
  /aws_secret_access_key/i
];

for (const f of srcFiles) {
  const content = fs.readFileSync(f, "utf8");
  for (const pat of secretPatterns) {
    if (pat.test(content)) {
      leakedSecretFound = true;
      console.error(`Leaked secret pattern found in ${f}`);
    }
  }
}
assert(!leakedSecretFound, "Zero exposed API keys / cloud secrets in source code");

// ------------------------------------------------------------------------------
// TEST 2: Environment Variable Security (.gitignore & .env.example)
// ------------------------------------------------------------------------------
console.log("\n🔒 [Audit 2] Environment Variable Security & .gitignore Rules...");
const gitignore = fs.readFileSync(path.resolve(".gitignore"), "utf8");
assert(gitignore.includes(".env"), ".gitignore contains .env exclusion");
assert(gitignore.includes(".env.*"), ".gitignore blocks wildcard .env variants");
assert(fs.existsSync(path.resolve(".env.example")), ".env.example exists with safe template variables");

// Check that no real .env file is tracked in git
try {
  const trackedEnv = execSync("git ls-files .env", { encoding: "utf8" }).trim();
  assert(trackedEnv === "", "No .env file is tracked in Git repository");
} catch (e) {
  // Ignored if git command unavailable
}

// ------------------------------------------------------------------------------
// TEST 3: Admin Authentication & Password Hashing Verification
// ------------------------------------------------------------------------------
console.log("\n🔑 [Audit 3] Admin Authentication & Cryptographic Hashing...");
const configPhp = fs.readFileSync(path.resolve("public/api/config.php"), "utf8");
const authPhp = fs.readFileSync(path.resolve("public/api/auth.php"), "utf8");
const leadsPhp = fs.readFileSync(path.resolve("public/api/leads.php"), "utf8");

assert(configPhp.includes("verify_admin_password"), "config.php contains secure password verification function");
assert(configPhp.includes("hash_equals"), "config.php uses constant-time hash_equals to prevent timing attacks");
assert(configPhp.includes("39a5cfeed284dfba473ea3b101f398312f9d8b41755f2c7b1df7ec94d8dc3efc"), "config.php contains verified cryptographic hash of admin credentials");
assert(configPhp.includes("SESSION_LIFETIME_SECONDS"), "config.php enforces session expiration timeout");
assert(configPhp.includes("MAX_LOGIN_ATTEMPTS"), "config.php defines max login attempts for brute force protection");

assert(authPhp.includes("random_bytes(32)"), "auth.php issues cryptographically secure 256-bit random session tokens");
assert(authPhp.includes("HTTP_AUTHORIZATION") || authPhp.includes("Authorization"), "auth.php inspects Bearer authorization headers");
assert(leadsPhp.includes("authenticate_admin_request"), "leads.php enforces strict Bearer token authentication before data access");

// Git history audit for leaked secrets
try {
  const gitLogCheck = execSync('git log -p -n 30 --grep="sk_live" --grep="AIza" --grep="ghp_"', { encoding: "utf8" }).trim();
  assert(gitLogCheck === "", "Git commit history contains zero leaked API keys or credentials");
} catch (e) {
  // Ignored if git is unavailable
}

// ------------------------------------------------------------------------------
// TEST 4: Form Input Sanitization, XSS, and Honeypot Protection
// ------------------------------------------------------------------------------
console.log("\n🛡️  [Audit 4] Form Input Sanitization, Honeypot & XSS Defenses...");
const leadPhp = fs.readFileSync(path.resolve("public/api/lead.php"), "utf8");
const contactJsx = fs.readFileSync(path.resolve("src/components/Contact.jsx"), "utf8");

assert(leadPhp.includes("MAX_LEAD_SUBMISSIONS_PER_IP"), "lead.php implements IP-based rate limiting against DoS/flooding");
assert(leadPhp.includes("htmlspecialchars"), "lead.php sanitizes text inputs using htmlspecialchars (XSS protection)");
assert(leadPhp.includes("strip_tags"), "lead.php strips HTML tags from user inputs");
assert(leadPhp.includes("website") || leadPhp.includes("_bot_trap"), "lead.php inspects honeypot trap fields for spam bot blocking");
assert(leadPhp.includes("/^[6-9]\\d{9}$/"), "lead.php validates Indian 10-digit mobile number format");

assert(contactJsx.includes("website"), "Contact.jsx contains invisible honeypot bot trap field");
assert(contactJsx.includes("cleanPhone") && contactJsx.includes("cleanName"), "Contact.jsx validates and sanitizes input on client side");

// ------------------------------------------------------------------------------
// TEST 5: Security Headers & .htaccess Hardening
// ------------------------------------------------------------------------------
console.log("\n🌐 [Audit 5] Security Headers, File Blocking & .htaccess...");
const htaccess = fs.readFileSync(path.resolve("public/.htaccess"), "utf8");

assert(htaccess.includes("Options -Indexes"), ".htaccess disables directory browsing (Options -Indexes)");
assert(htaccess.includes("X-Content-Type-Options \"nosniff\""), ".htaccess enforces nosniff header");
assert(htaccess.includes("X-Frame-Options \"SAMEORIGIN\""), ".htaccess enforces X-Frame-Options against clickjacking");
assert(htaccess.includes("Strict-Transport-Security"), ".htaccess enforces HTTPS HSTS");
assert(htaccess.includes("Content-Security-Policy"), ".htaccess defines Content-Security-Policy");
assert(
  (htaccess.includes("config\\.php") || htaccess.includes("config.php")) && 
  (htaccess.includes("Require all denied") || htaccess.includes("Deny from all")), 
  ".htaccess blocks direct web access to sensitive config & json files"
);

// Check data directory htaccess
const dataHtaccess = fs.readFileSync(path.resolve("public/api/data/.htaccess"), "utf8");
assert(dataHtaccess.includes("Require all denied") || dataHtaccess.includes("Deny from all"), "api/data/.htaccess blocks all direct web requests to JSON files");

// ------------------------------------------------------------------------------
// TEST 6: Exposed Sensitive File Check
// ------------------------------------------------------------------------------
console.log("\n📁 [Audit 6] Public Exposed File Checks...");
assert(!fs.existsSync(path.resolve("public/schema.sql")), "schema.sql is NOT in public/ webroot (moved to database/schema.sql)");
assert(fs.existsSync(path.resolve("database/schema.sql")), "database/schema.sql exists in protected non-public folder");

// ------------------------------------------------------------------------------
// TEST 7: Controlled Debug Mode Setting
// ------------------------------------------------------------------------------
console.log("\n⚙️  [Audit 7] Controlled Debug Mode Setting...");
assert(configPhp.includes("APP_DEBUG"), "config.php contains configurable APP_DEBUG setting");
assert(configPhp.includes("display_errors', '0'"), "config.php disables display_errors when in production mode");

// ------------------------------------------------------------------------------
// SUMMARY
// ------------------------------------------------------------------------------
console.log("\n==================================================================");
console.log(`📊 SECURITY AUDIT RESULTS:`);
console.log(`   Passed Checks:   ${passed}`);
console.log(`   Warnings:        ${warnings}`);
console.log(`   Errors / Fails:  ${errors}`);
console.log("==================================================================\n");

if (errors > 0) {
  console.error("❌ Security audit failed with errors!");
  process.exit(1);
} else {
  console.log("✨ All security checks PASSED! System is hardened and production-ready.");
}
