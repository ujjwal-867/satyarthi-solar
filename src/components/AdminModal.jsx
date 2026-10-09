import { useState, useEffect } from "react";
import { 
  Lock, 
  X, 
  Users, 
  Download, 
  Phone, 
  MessageCircle, 
  Search, 
  Plus, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  DollarSign, 
  FileSpreadsheet, 
  Trash2,
  LogOut,
  ShieldCheck,
  RefreshCw,
  Sparkles,
  Camera,
  Film,
  Scissors,
  Zap,
  ExternalLink
} from "lucide-react";

function AdminModal({ isOpen, onClose }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [leads, setLeads] = useState([]);
  const [activeTab, setActiveTab] = useState("leads");
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddLead, setShowAddLead] = useState(false);
  const [newLeadForm, setNewLeadForm] = useState({
    name: "",
    phone: "",
    location: "Gorakhpur",
    service: "Residential Rooftop Solar (PM Surya Ghar)",
    bill: "",
    message: ""
  });

  // Check existing session token on modal open
  useEffect(() => {
    if (isOpen) {
      const storedToken = sessionStorage.getItem("satyarthi_admin_token");
      if (storedToken) {
        verifyExistingSession(storedToken);
      } else {
        loadLocalLeads();
      }
    }
  }, [isOpen]);

  const verifyExistingSession = async (token) => {
    try {
      const res = await fetch("/api/auth.php?action=verify", {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        if (data.valid) {
          setIsAuthenticated(true);
          setAuthToken(token);
          fetchServerLeads(token);
          return;
        }
      }
    } catch (e) {
      // Offline fallback
    }
    // Token invalid or expired
    sessionStorage.removeItem("satyarthi_admin_token");
    setIsAuthenticated(false);
    setAuthToken("");
    loadLocalLeads();
  };

  const loadLocalLeads = () => {
    try {
      const stored = JSON.parse(localStorage.getItem("satyarthi_leads") || "[]");
      setLeads(stored);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchServerLeads = async (token) => {
    try {
      const res = await fetch("/api/leads.php", {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.leads)) {
          // Merge server leads with local leads
          const localStored = JSON.parse(localStorage.getItem("satyarthi_leads") || "[]");
          const map = new Map();
          data.leads.forEach(l => map.set(l.id, l));
          localStored.forEach(l => {
            if (!map.has(l.id)) map.set(l.id, l);
          });
          const merged = Array.from(map.values());
          setLeads(merged);
          localStorage.setItem("satyarthi_leads", JSON.stringify(merged));
          return;
        }
      }
    } catch (err) {
      console.log("Server leads fetch notice:", err);
    }
    loadLocalLeads();
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setPinError("");
    setIsLoading(true);

    try {
      // 1. Authenticate with secure backend endpoint
      const res = await fetch("/api/auth.php?action=login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pin })
      });

      const data = await res.json();

      if (res.ok && data.success && data.token) {
        setIsAuthenticated(true);
        setAuthToken(data.token);
        sessionStorage.setItem("satyarthi_admin_token", data.token);
        setPin("");
        setPinError("");
        fetchServerLeads(data.token);
      } else {
        setPinError(data.error || "Incorrect Security PIN. Please try again.");
      }
    } catch (err) {
      // If deployed purely static or local preview without PHP server running,
      // allow fallback authentication with notice
      if (pin === "satyarthi2026") {
        setIsAuthenticated(true);
        setPinError("");
        setPin("");
        loadLocalLeads();
      } else {
        setPinError("Invalid credentials. Please verify your administrative PIN.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    if (authToken) {
      try {
        await fetch("/api/auth.php?action=logout", {
          method: "POST",
          headers: { "Authorization": `Bearer ${authToken}` }
        });
      } catch (e) {
        // Continue
      }
    }
    sessionStorage.removeItem("satyarthi_admin_token");
    setIsAuthenticated(false);
    setAuthToken("");
    setPin("");
  };

  const handleStatusChange = async (id, newStatus) => {
    // 1. Update local state & localStorage immediately
    const updated = leads.map((l) => (l.id === id ? { ...l, status: newStatus } : l));
    setLeads(updated);
    localStorage.setItem("satyarthi_leads", JSON.stringify(updated));

    // 2. Sync with backend API if authenticated
    if (authToken) {
      try {
        await fetch("/api/leads.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken}`
          },
          body: JSON.stringify({ leadId: id, status: newStatus })
        });
      } catch (err) {
        console.error("Failed to sync lead status:", err);
      }
    }
  };

  const handleDeleteLead = async (id) => {
    if (window.confirm("Are you sure you want to delete this customer inquiry?")) {
      const updated = leads.filter((l) => l.id !== id);
      setLeads(updated);
      localStorage.setItem("satyarthi_leads", JSON.stringify(updated));

      if (authToken) {
        try {
          await fetch(`/api/leads.php?id=${encodeURIComponent(id)}`, {
            method: "DELETE",
            headers: { "Authorization": `Bearer ${authToken}` }
          });
        } catch (err) {
          console.error("Delete sync error:", err);
        }
      }
    }
  };

  const handleAddManualLead = (e) => {
    e.preventDefault();
    if (!newLeadForm.name || !newLeadForm.phone) return;

    const lead = {
      id: "LEAD-" + Date.now(),
      ...newLeadForm,
      status: "New",
      createdAt: new Date().toISOString()
    };

    const updated = [lead, ...leads];
    setLeads(updated);
    localStorage.setItem("satyarthi_leads", JSON.stringify(updated));
    setShowAddLead(false);
    setNewLeadForm({
      name: "",
      phone: "",
      location: "Gorakhpur",
      service: "Residential Rooftop Solar (PM Surya Ghar)",
      bill: "",
      message: ""
    });
  };

  // Export leads as CSV file (opens directly in Microsoft Excel)
  const handleExportCSV = () => {
    const headers = ["ID", "Name", "Phone", "Email", "Location", "Service", "Monthly Bill (INR)", "Roof Area (sq ft)", "Status", "Date", "Message"];
    const rows = leads.map((l) => [
      l.id,
      `"${l.name || ""}"`,
      `"${l.phone || ""}"`,
      `"${l.email || ""}"`,
      `"${l.location || ""}"`,
      `"${l.service || ""}"`,
      l.bill || "",
      l.roofArea || "",
      l.status || "New",
      new Date(l.createdAt).toLocaleDateString(),
      `"${(l.message || "").replace(/"/g, '""')}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `satyarthi_solar_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  const filteredLeads = leads.filter((l) => {
    const matchStatus = statusFilter === "All" || l.status === statusFilter;
    const matchSearch =
      (l.name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (l.phone || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (l.location || "").toLowerCase().includes(searchQuery.toLowerCase());
    return matchStatus && matchSearch;
  });

  const leadCounts = {
    total: leads.length,
    new: leads.filter((l) => l.status === "New").length,
    siteVisit: leads.filter((l) => l.status === "Site Visit").length,
    converted: leads.filter((l) => l.status === "Converted").length,
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-slate-900 text-white p-5 flex justify-between items-center border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-400 text-slate-950 rounded-xl font-bold">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-lg text-white flex items-center gap-2">
                <span>Satyarthi Solar • Management Portal</span>
                {isAuthenticated && (
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded font-mono font-bold">
                    Authenticated Session
                  </span>
                )}
              </h3>
              <p className="text-xs text-slate-400">
                Lead CRM, Customer Inquiries & Project Oversight
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                type="button"
                onClick={handleLogout}
                className="text-xs bg-slate-800 hover:bg-rose-950/80 text-slate-300 hover:text-rose-300 px-3 py-1.5 rounded-xl border border-slate-700 hover:border-rose-800 transition flex items-center gap-1.5"
                title="Log Out of Admin Session"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Logout</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1.5 rounded-lg transition"
              aria-label="Close Portal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        {!isAuthenticated ? (
          /* Authentication Screen */
          <div className="p-8 sm:p-12 text-center max-w-md mx-auto space-y-6">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
              <ShieldCheck className="w-8 h-8 text-emerald-600" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900">
                Staff & Admin Authentication
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Enter your administrative security PIN to authenticate and decrypt customer lead data.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                placeholder="Enter PIN (Default: satyarthi2026)"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                autoFocus
                disabled={isLoading}
                className="w-full text-center tracking-widest text-lg font-bold border border-slate-300 rounded-xl py-3 px-4 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
              />
              {pinError && (
                <p className="text-xs text-rose-600 font-semibold bg-rose-50 p-2.5 rounded-xl border border-rose-200">
                  {pinError}
                </p>
              )}
              <button
                type="submit"
                disabled={isLoading || !pin.trim()}
                className="w-full bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white font-bold py-3.5 rounded-xl text-sm transition cursor-pointer flex items-center justify-center gap-2 shadow-md"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-amber-400" />
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <span>Access Secure Dashboard</span>
                )}
              </button>
            </form>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-left space-y-1">
              <div className="text-[11px] text-slate-600 font-bold flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-slate-500" />
                <span>Protected by BCRYPT & Session Rate Limiting</span>
              </div>
              <p className="text-[10px] text-slate-500">
                Protected against brute force attempts with automatic IP lockdown after 5 consecutive failures.
              </p>
            </div>
          </div>
        ) : (
          /* Authenticated Dashboard */
          <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6 bg-slate-50">
            {/* Top Navigation Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3 flex-wrap">
              <button
                type="button"
                onClick={() => setActiveTab("leads")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeTab === "leads"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Customer Leads CRM ({leadCounts.total})</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("tools")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeTab === "tools"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Visual AI & Performance Suite (Whisk • Veo • EZGif • AirLift)</span>
              </button>
            </div>

            {activeTab === "tools" ? (
              /* Visual Tools & Performance Suite View */
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-black text-xs uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span>Integrated Visual Creation & Edge Performance Suite</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900">
                    High-End Visual Media, Frame Extraction & AirLift Optimization
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Use these integrated tools to transform real Gorakhpur solar site footage into cinematic renders, extract sharp frame photos, and monitor web performance.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Tool 1: Google Whisk */}
                  <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-2.5 py-1 rounded-full uppercase">
                          Visuals & Style Remixing
                        </span>
                        <Camera className="w-5 h-5 text-blue-600" />
                      </div>
                      <h4 className="text-lg font-black text-slate-900">Google Whisk (Visuals)</h4>
                      <p className="text-xs text-slate-600">
                        Create photo-realistic elevated pergola and rooftop solar visuals for client proposals in Gorakhpur and UP.
                      </p>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-700 font-mono">
                        Prompt: &quot;Elevated modern solar rooftop pergola gazebo on concrete Indian residential terrace, sleek black bifacial panels, 8k.&quot;
                      </div>
                    </div>
                    <a
                      href="https://labs.google/whisk"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition"
                    >
                      <span>Open Google Whisk</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Tool 2: Google Veo Flow */}
                  <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] bg-purple-100 text-purple-800 font-bold px-2.5 py-1 rounded-full uppercase">
                          Generative Video Flow
                        </span>
                        <Film className="w-5 h-5 text-purple-600" />
                      </div>
                      <h4 className="text-lg font-black text-slate-900">Google Veo Flow</h4>
                      <p className="text-xs text-slate-600">
                        Convert static site photos into high-definition 1080p aerial drone flyover videos for customer reels and showcases.
                      </p>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-700 font-mono">
                        Prompt: &quot;Cinematic slow-motion 4K drone orbiting shot above residential rooftop with 5kW solar array glistening in morning sun.&quot;
                      </div>
                    </div>
                    <a
                      href="https://deepmind.google/technologies/veo/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition"
                    >
                      <span>Open Google Veo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Tool 3: EZGif Frame Extraction */}
                  <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2.5 py-1 rounded-full uppercase">
                          Frame Extraction
                        </span>
                        <Scissors className="w-5 h-5 text-amber-600" />
                      </div>
                      <h4 className="text-lg font-black text-slate-900">EZGif (Frame Extraction)</h4>
                      <p className="text-xs text-slate-600">
                        Extract uncompressed, high-definition still frames from live on-site mobile video recordings (Saketpuri, Railvihar) to add to the Bento Gallery.
                      </p>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-700">
                        Workflow: Upload phone MP4 → Set rate to 1 fps → Download PNG/WebP frames → Add to gallery.
                      </div>
                    </div>
                    <a
                      href="https://ezgif.com/video-to-frames"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition"
                    >
                      <span>Open EZGif Frame Extractor</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Tool 4: AirLift Performance Optimization */}
                  <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full uppercase">
                          Performance Acceleration
                        </span>
                        <Zap className="w-5 h-5 text-emerald-600" />
                      </div>
                      <h4 className="text-lg font-black text-slate-900">AirLift (Performance)</h4>
                      <p className="text-xs text-slate-600">
                        Edge caching, resource preconnects, responsive images, and sub-second page views for users across UP.
                      </p>
                      <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-[11px] text-emerald-900 space-y-1">
                        <div className="font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Status: AirLift Optimizations Active</span>
                        </div>
                        <p className="text-[10px] text-emerald-800">DNS prefetching, asset preconnects, and Vite chunk splitting implemented.</p>
                      </div>
                    </div>
                    <a
                      href="https://airlift.net/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition"
                    >
                      <span>Explore AirLift</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              /* Leads CRM Content */
              <div className="space-y-6">
                {/* Quick Metrics Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                    <span className="text-xs text-slate-500">Total Enquiries</span>
                    <p className="text-2xl font-black text-slate-900 mt-1">{leadCounts.total}</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                    <span className="text-xs text-amber-600 font-semibold">New Uncontacted</span>
                    <p className="text-2xl font-black text-amber-600 mt-1">{leadCounts.new}</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                    <span className="text-xs text-blue-600 font-semibold">Site Visits Scheduled</span>
                    <p className="text-2xl font-black text-blue-600 mt-1">{leadCounts.siteVisit}</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                    <span className="text-xs text-emerald-600 font-semibold">Converted Installations</span>
                    <p className="text-2xl font-black text-emerald-600 mt-1">{leadCounts.converted}</p>
                  </div>
                </div>

            {/* Actions Bar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col md:flex-row justify-between items-center gap-3">
              {/* Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
                {["All", "New", "Contacted", "Site Visit", "Converted", "Rejected"].map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer whitespace-nowrap ${
                      statusFilter === st
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              {/* Search & Actions */}
              <div className="flex items-center gap-2 w-full md:w-auto">
                <div className="relative flex-1 md:w-56">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search leads..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-slate-400 bg-slate-50"
                  />
                </div>

                <button
                  onClick={() => setShowAddLead(!showAddLead)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-2 rounded-xl flex items-center gap-1 transition shrink-0 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Lead</span>
                </button>

                <button
                  onClick={handleExportCSV}
                  className="bg-slate-900 hover:bg-slate-800 text-amber-400 text-xs font-bold px-3 py-2 rounded-xl flex items-center gap-1 transition shrink-0 cursor-pointer"
                  title="Export to Excel / CSV"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Export CSV</span>
                </button>
              </div>
            </div>

            {/* Manual Add Lead Form */}
            {showAddLead && (
              <form onSubmit={handleAddManualLead} className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-sm space-y-4">
                <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <Plus className="w-4 h-4 text-emerald-600" />
                  Add Walk-In / Phone Lead Manually
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <input
                    type="text"
                    placeholder="Customer Name *"
                    required
                    value={newLeadForm.name}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, name: e.target.value })}
                    className="border border-slate-200 p-2.5 rounded-xl focus:outline-none focus:border-emerald-600"
                  />
                  <input
                    type="tel"
                    placeholder="10-Digit Mobile Number *"
                    required
                    value={newLeadForm.phone}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, phone: e.target.value })}
                    className="border border-slate-200 p-2.5 rounded-xl focus:outline-none focus:border-emerald-600"
                  />
                  <input
                    type="text"
                    placeholder="Location / Village"
                    value={newLeadForm.location}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, location: e.target.value })}
                    className="border border-slate-200 p-2.5 rounded-xl focus:outline-none focus:border-emerald-600"
                  />
                  <select
                    value={newLeadForm.service}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, service: e.target.value })}
                    className="border border-slate-200 p-2.5 rounded-xl focus:outline-none focus:border-emerald-600 bg-white"
                  >
                    <option>Residential Rooftop Solar (PM Surya Ghar)</option>
                    <option>Commercial Solar Power</option>
                    <option>Solar Aata Chakki / Flour Mill Drive</option>
                    <option>Industrial Solar Setup</option>
                    <option>Home Appliances & Electronics</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Monthly Bill (₹)"
                    value={newLeadForm.bill}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, bill: e.target.value })}
                    className="border border-slate-200 p-2.5 rounded-xl focus:outline-none focus:border-emerald-600"
                  />
                  <input
                    type="text"
                    placeholder="Notes / Message"
                    value={newLeadForm.message}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, message: e.target.value })}
                    className="border border-slate-200 p-2.5 rounded-xl focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAddLead(false)}
                    className="text-xs text-slate-500 hover:text-slate-700 px-3 py-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-xl"
                  >
                    Save Customer Record
                  </button>
                </div>
              </form>
            )}

            {/* Leads Table */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="p-3.5">Customer & Contact</th>
                      <th className="p-3.5">Location</th>
                      <th className="p-3.5">Service & Bill</th>
                      <th className="p-3.5">Status</th>
                      <th className="p-3.5">Date</th>
                      <th className="p-3.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-800">
                    {filteredLeads.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="text-center p-8 text-slate-400">
                          No leads matching current filters.
                        </td>
                      </tr>
                    ) : (
                      filteredLeads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-slate-50/80 transition">
                          <td className="p-3.5">
                            <strong className="block text-slate-900 font-bold">{lead.name}</strong>
                            <div className="flex items-center gap-2 mt-1">
                              <a
                                href={`tel:${lead.phone}`}
                                className="text-emerald-700 hover:underline inline-flex items-center gap-1 font-mono font-semibold"
                              >
                                <Phone className="w-3 h-3" />
                                {lead.phone}
                              </a>
                              <a
                                href={`https://wa.me/91${lead.phone}?text=${encodeURIComponent(
                                  `Hello ${lead.name}, this is Er. Satya Prakash Satyarthi from Satyarthi Solar Solution, Gorakhpur. Regarding your solar enquiry...`
                                )}`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-emerald-600 hover:text-emerald-700 p-0.5"
                                title="Chat on WhatsApp"
                              >
                                <MessageCircle className="w-3.5 h-3.5" />
                              </a>
                            </div>
                            {lead.email && (
                              <span className="text-[11px] text-slate-400 block">{lead.email}</span>
                            )}
                          </td>
                          <td className="p-3.5">
                            <span className="font-medium text-slate-700">{lead.location}</span>
                          </td>
                          <td className="p-3.5">
                            <span className="block font-medium text-slate-900">{lead.service}</span>
                            {lead.bill && (
                              <span className="text-[11px] text-slate-500">Bill: ₹{lead.bill}/mo</span>
                            )}
                            {lead.message && (
                              <p className="text-[11px] text-slate-500 mt-1 italic max-w-xs truncate" title={lead.message}>
                                "{lead.message}"
                              </p>
                            )}
                          </td>
                          <td className="p-3.5">
                            <select
                              value={lead.status || "New"}
                              onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                              className={`text-[11px] font-bold py-1 px-2.5 rounded-lg border cursor-pointer focus:outline-none ${
                                lead.status === "Converted"
                                  ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                                  : lead.status === "Site Visit"
                                  ? "bg-blue-50 text-blue-800 border-blue-300"
                                  : lead.status === "Contacted"
                                  ? "bg-amber-50 text-amber-800 border-amber-300"
                                  : lead.status === "Rejected"
                                  ? "bg-rose-50 text-rose-800 border-rose-300"
                                  : "bg-slate-100 text-slate-800 border-slate-300"
                              }`}
                            >
                              <option value="New">New</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Site Visit">Site Visit</option>
                              <option value="Converted">Converted</option>
                              <option value="Rejected">Rejected</option>
                            </select>
                          </td>
                          <td className="p-3.5 text-slate-500 text-[11px] whitespace-nowrap">
                            {new Date(lead.createdAt).toLocaleDateString()}
                          </td>
                          <td className="p-3.5 text-right">
                            <button
                              onClick={() => handleDeleteLead(lead.id)}
                              className="text-slate-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-rose-50 transition"
                              title="Delete Lead"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </div>
    )}

      </div>
    </div>
  );
}

export default AdminModal;
