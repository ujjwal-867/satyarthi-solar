// ==============================================================================
// Vite Local Development API Middleware
// Simulates the production PHP backend so you can test leads, authentication,
// and CRM status management locally without requiring a local PHP installation!
// ==============================================================================

import fs from "fs";
import path from "path";

export function localApiPlugin() {
  const dataDir = path.resolve("public/api/data");
  const leadsFile = path.join(dataDir, "leads.json");
  const sessionsFile = path.join(dataDir, "sessions.json");

  // Ensure data dir exists
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  function readJson(file, defaultVal = []) {
    try {
      if (fs.existsSync(file)) {
        return JSON.parse(fs.readFileSync(file, "utf8"));
      }
    } catch (e) {
      console.error("Error reading JSON file:", file, e);
    }
    return defaultVal;
  }

  function writeJson(file, data) {
    try {
      fs.writeFileSync(file, JSON.stringify(data, null, 2), "utf8");
    } catch (e) {
      console.error("Error writing JSON file:", file, e);
    }
  }

  function parseBody(req) {
    return new Promise((resolve) => {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", () => {
        try {
          resolve(body ? JSON.parse(body) : {});
        } catch (e) {
          resolve({});
        }
      });
    });
  }

  return {
    name: "vite-plugin-local-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = new URL(req.url, `http://${req.headers.host}`);
        const pathname = url.pathname;

        // ====================================================================
        // 1. /api/auth.php (Admin Authentication)
        // ====================================================================
        if (pathname === "/api/auth.php") {
          const action = url.searchParams.get("action") || "login";
          res.setHeader("Content-Type", "application/json");

          if (action === "login" && req.method === "POST") {
            const body = await parseBody(req);
            const password = body.password || "";

            // Check admin PIN (Default: satyarthi2026)
            if (password === "satyarthi2026") {
              const token = "dev_token_" + Date.now() + "_" + Math.random().toString(36).substring(2);
              const expiresAt = Math.floor(Date.now() / 1000) + 14400; // 4 hours

              const sessions = readJson(sessionsFile, []);
              sessions.push({ token, createdAt: Date.now(), expiresAt });
              writeJson(sessionsFile, sessions);

              res.statusCode = 200;
              return res.end(JSON.stringify({
                success: true,
                message: "Local dev admin authenticated.",
                token,
                expiresAt
              }));
            } else {
              res.statusCode = 401;
              return res.end(JSON.stringify({
                error: "Invalid administrative PIN. (Use 'satyarthi2026')"
              }));
            }
          }

          if (action === "verify") {
            const authHeader = req.headers["authorization"] || "";
            const token = authHeader.replace(/^Bearer\s+/i, "");

            const sessions = readJson(sessionsFile, []);
            const valid = sessions.some((s) => s.token === token);

            if (valid) {
              res.statusCode = 200;
              return res.end(JSON.stringify({ valid: true, message: "Session active." }));
            } else {
              res.statusCode = 401;
              return res.end(JSON.stringify({ valid: false, error: "Session invalid or expired." }));
            }
          }

          if (action === "logout" && req.method === "POST") {
            res.statusCode = 200;
            return res.end(JSON.stringify({ success: true, message: "Logged out." }));
          }

          res.statusCode = 400;
          return res.end(JSON.stringify({ error: "Invalid action." }));
        }

        // ====================================================================
        // 2. /api/lead.php (Public Lead Submission)
        // ====================================================================
        if (pathname === "/api/lead.php") {
          res.setHeader("Content-Type", "application/json");

          if (req.method === "POST") {
            const body = await parseBody(req);

            // Honeypot check
            if (body.website) {
              res.statusCode = 200;
              return res.end(JSON.stringify({ success: true, message: "Inquiry received." }));
            }

            if (!body.name || !body.phone) {
              res.statusCode = 400;
              return res.end(JSON.stringify({ error: "Name and Mobile Number are required." }));
            }

            const cleanPhone = String(body.phone).replace(/\D/g, "");
            if (cleanPhone.length !== 10) {
              res.statusCode = 400;
              return res.end(JSON.stringify({ error: "Please provide a valid 10-digit mobile number." }));
            }

            const newLead = {
              id: "LEAD-" + Date.now() + "-" + Math.floor(Math.random() * 900 + 100),
              name: String(body.name).trim().slice(0, 100),
              phone: cleanPhone,
              email: String(body.email || "").trim().slice(0, 100),
              location: String(body.location || "Gorakhpur").trim().slice(0, 100),
              service: String(body.service || "Residential Rooftop Solar").trim().slice(0, 120),
              bill: String(body.bill || "").trim().slice(0, 30),
              roofArea: String(body.roofArea || "").trim().slice(0, 30),
              message: String(body.message || "").trim().slice(0, 1000),
              status: "New",
              createdAt: new Date().toISOString()
            };

            const leads = readJson(leadsFile, []);
            leads.unshift(newLead);
            writeJson(leadsFile, leads);

            console.log(`\n📥 [Local API] New Lead Received: ${newLead.name} (${newLead.phone}) - ${newLead.location}`);

            res.statusCode = 200;
            return res.end(JSON.stringify({
              success: true,
              message: "Lead recorded in local dev storage.",
              leadId: newLead.id
            }));
          }

          res.statusCode = 405;
          return res.end(JSON.stringify({ error: "Method not allowed. Use POST." }));
        }

        // ====================================================================
        // 3. /api/leads.php (Protected Lead Retrieval & Status Updating)
        // ====================================================================
        if (pathname === "/api/leads.php") {
          res.setHeader("Content-Type", "application/json");

          // Require authorization header
          const authHeader = req.headers["authorization"] || "";
          const token = authHeader.replace(/^Bearer\s+/i, "");

          if (!token) {
            res.statusCode = 401;
            return res.end(JSON.stringify({ error: "Unauthorized. Admin token required." }));
          }

          if (req.method === "GET") {
            const leads = readJson(leadsFile, []);
            res.statusCode = 200;
            return res.end(JSON.stringify({
              success: true,
              count: leads.length,
              leads
            }));
          }

          if (req.method === "POST") {
            const body = await parseBody(req);
            const { leadId, status, notes } = body;

            if (!leadId || !status) {
              res.statusCode = 400;
              return res.end(JSON.stringify({ error: "leadId and status required." }));
            }

            const leads = readJson(leadsFile, []);
            const target = leads.find((l) => l.id === leadId);

            if (target) {
              target.status = status;
              if (notes) target.notes = notes;
              target.updatedAt = new Date().toISOString();
              writeJson(leadsFile, leads);

              res.statusCode = 200;
              return res.end(JSON.stringify({
                success: true,
                message: `Lead ${leadId} updated to ${status}.`
              }));
            } else {
              res.statusCode = 404;
              return res.end(JSON.stringify({ error: "Lead not found." }));
            }
          }

          if (req.method === "DELETE") {
            const id = url.searchParams.get("id");
            if (!id) {
              res.statusCode = 400;
              return res.end(JSON.stringify({ error: "Lead ID required for deletion." }));
            }

            let leads = readJson(leadsFile, []);
            const initial = leads.length;
            leads = leads.filter((l) => l.id !== id);

            if (leads.length < initial) {
              writeJson(leadsFile, leads);
              res.statusCode = 200;
              return res.end(JSON.stringify({ success: true, message: `Lead ${id} deleted.` }));
            } else {
              res.statusCode = 404;
              return res.end(JSON.stringify({ error: "Lead not found." }));
            }
          }

          res.statusCode = 405;
          return res.end(JSON.stringify({ error: "Method not allowed." }));
        }

        next();
      });
    }
  };
}
