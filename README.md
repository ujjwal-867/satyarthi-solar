# Satyarthi Solar Solution — Web Platform & Solar Sizing Portal

Official web application and automated solar sizing tool for **Satyarthi Solar Solution**, a UPNEDA-empanelled rooftop solar EPC contractor based at Motiram Adda, Deoria Road, Gorakhpur (Uttar Pradesh).

**Live Website:** [https://satyarthisolarsolution.in](https://satyarthisolarsolution.in)

---

## Organization Details

| Field | Details |
| :--- | :--- |
| **Organization** | Satyarthi Solar Solution (Solar & Electronics) |
| **Proprietor & Chief EPC Engineer** | Er. Satya Prakash Satyarthi |
| **UPNEDA Vendor Code** | `GKP2604066741` (PM Surya Ghar: Muft Bijli Yojana Phase-II) |
| **GSTIN** | `09JCNPS2666N1ZE` |
| **MSME Udyam** | `UDYAM-UP-32-0049022` |
| **Address** | Motiram Adda, Deoria Road, Gorakhpur, Uttar Pradesh – 273202 |
| **Contact** | `+91 8112991941` / `+91 8112991441` / Office: `+91 8112991914` |
| **Email** | `satyarthisolarsolution@gmail.com` |

---

## Key Modules

1. **Solar Capacity & Subsidy Calculator**: Client-side sizing calibrated to Eastern UP insolation (`120 units/kW/month`), UPPCL domestic tariff slabs, shadow-free roof area checks (`85 sq.ft/kW`), PM Surya Ghar 2026 DBT subsidy tiers (Central up to ₹78,000 + UP State ₹30,000 = ₹1,08,000), and reducing-balance 6.5% bank loan EMI estimates.
2. **Multi-Portal SPA Architecture**: Dedicated lazy-loaded views for On-Grid Solar (`/on-grid`), Off-Grid & Solar Aata Chakki (`/off-grid`), Electronics Showroom (`/appliances`), Project Gallery (`/gallery`), and UPNEDA/Dealership Certificates (`/certificates`).
3. **Lead Capture & Anti-Spam REST API**: Lightweight PHP 8 endpoint (`public/api/leads.php`) with Indian mobile regex validation (`^[6-9]\d{9}$`), XSS sanitization, CSS-hidden Honeypot bot trap, atomic `flock(LOCK_EX)` JSON persistence, `.htaccess` directory isolation, and structured WhatsApp dispatch.
4. **Solar Help Desk**: Rule-based bilingual FAQ drawer covering subsidy tiers, system sizing, store location, and site survey booking.
5. **Admin Lead Portal**: Protected lead management modal with status tracking and CSV export (credentials configured via server environment / private deployment config).

---

## Tech Stack

- **Frontend:** React 19, Vite 8 (Rolldown), Tailwind CSS v4, Framer Motion, Lucide React
- **Backend:** Native PHP 8.x REST endpoints + file-locked JSON persistence
- **Hosting & CI/CD:** Hostinger Cloud (Apache 2.4, TLS 1.3 SSL, `.htaccess` SPA routing & far-future caching) deployed via GitHub Actions (`.github/workflows/deploy.yml`)

---

## Local Development & Build

```bash
# Install dependencies
npm install

# Run local development server (includes Vite mock API plugin)
npm run dev

# Build production bundle
npm run build

# Package hardened cPanel archive (satyarthi-solar-cpanel.zip)
npm run package:cpanel
```

---

## Repository Structure

```text
src/
  components/    # Reusable UI sections, calculator, gallery, help desk, contact form
  pages/         # Lazy-loaded route views (OnGrid, OffGrid, Electronics, Gallery, Certificates)
  context/       # Language context provider
  data/          # Business credentials, tariffs, subsidy tiers, and site records
public/
  api/           # PHP REST endpoints and .htaccess-protected data directory
  images/        # Site installation photography, brand logos, and certificates
scripts/         # Build packaging, FTP deployment sync, and security audit scripts
```
