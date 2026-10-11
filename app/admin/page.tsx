"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Lock,
  Unlock,
  ShieldCheck,
  Mail,
  Phone,
  Globe,
  Trash2,
  Plus,
  FileText,
  CheckCircle2,
  Clock,
  ArrowRight,
  Eye,
  EyeOff,
  Download,
  RefreshCw,
  Sparkles,
  Filter,
  Search,
  ExternalLink,
  LogOut,
  BarChart3,
  Building2,
  Calendar,
  AlertCircle,
  X,
  Send,
} from "lucide-react";
import { BlogPost } from "@/lib/blog";

interface Lead {
  id: string;
  name: string;
  email: string;
  website: string;
  service: string;
  keywords?: string;
  message?: string;
  status: "New" | "Contacted" | "In Progress" | "Completed";
  createdAt: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authChecking, setAuthChecking] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string>("");
  const [authLoading, setAuthLoading] = useState<boolean>(false);

  // Dashboard Tabs
  const [activeTab, setActiveTab] = useState<"leads" | "blogs" | "overview" | "settings">("leads");

  // Leads State
  const [leads, setLeads] = useState<Lead[]>([]);
  const [leadsLoading, setLeadsLoading] = useState<boolean>(false);
  const [leadSearch, setLeadSearch] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("All");

  // Blog Posts State
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [postsLoading, setPostsLoading] = useState<boolean>(false);
  const [showPostModal, setShowPostModal] = useState<boolean>(false);
  const [newPost, setNewPost] = useState({
    title: "",
    slug: "",
    category: "Technical SEO",
    readTime: "5 min read",
    excerpt: "",
    content: "",
    tags: "Technical SEO, Search Rankings",
  });
  const [savingPost, setSavingPost] = useState<boolean>(false);

  // Toast alert
  const [toast, setToast] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 4000);
  };

  // Check initial authentication
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const localAuth = localStorage.getItem("harun_admin_logged_in");
        if (localAuth === "true") {
          setIsAuthenticated(true);
        } else {
          const res = await fetch("/api/admin/auth");
          const data = await res.json();
          if (data.authenticated) {
            setIsAuthenticated(true);
            localStorage.setItem("harun_admin_logged_in", "true");
          }
        }
      } catch (err) {
        console.error("Auth check failed:", err);
      } finally {
        setAuthChecking(false);
      }
    };
    checkAuth();
  }, []);

  // Fetch leads and posts on login
  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads();
      fetchPosts();
    }
  }, [isAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setIsAuthenticated(true);
        localStorage.setItem("harun_admin_logged_in", "true");
        showNotification("Welcome back, Md. Harun or Roshid!");
      } else {
        setAuthError(data.error || "Incorrect password. Default is harun7835");
      }
    } catch {
      setAuthError("Failed to connect to authentication service.");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth", { method: "DELETE" });
      localStorage.removeItem("harun_admin_logged_in");
      setIsAuthenticated(false);
      setPassword("");
      showNotification("You have been logged out.");
    } catch (e) {
      console.error("Logout failed:", e);
      setIsAuthenticated(false);
    }
  };

  const fetchLeads = async () => {
    setLeadsLoading(true);
    try {
      const res = await fetch("/api/admin/leads");
      const data = await res.json();
      if (data.leads) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error("Error fetching leads:", err);
    } finally {
      setLeadsLoading(false);
    }
  };

  const fetchPosts = async () => {
    setPostsLoading(true);
    try {
      const res = await fetch("/api/admin/posts");
      const data = await res.json();
      if (data.posts) {
        setPosts(data.posts);
      }
    } catch (err) {
      console.error("Error fetching posts:", err);
    } finally {
      setPostsLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: Lead["status"]) => {
    try {
      const res = await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
        );
        showNotification(`Lead status updated to ${newStatus}`);
      }
    } catch {
      showNotification("Failed to update status");
    }
  };

  const deleteLeadItem = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lead inquiry?")) return;
    try {
      const res = await fetch(`/api/admin/leads?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setLeads((prev) => prev.filter((l) => l.id !== id));
        showNotification("Lead inquiry removed");
      }
    } catch {
      showNotification("Failed to delete lead");
    }
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title.trim() || !newPost.content.trim()) {
      alert("Please provide at least a title and content.");
      return;
    }
    setSavingPost(true);

    try {
      const res = await fetch("/api/admin/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setShowPostModal(false);
        setNewPost({
          title: "",
          slug: "",
          category: "Technical SEO",
          readTime: "5 min read",
          excerpt: "",
          content: "",
          tags: "Technical SEO, Search Rankings",
        });
        showNotification("🎉 New blog post published successfully!");
        fetchPosts();
      } else {
        alert(data.error || "Failed to save post");
      }
    } catch {
      alert("Error publishing post");
    } finally {
      setSavingPost(false);
    }
  };

  const handleDeletePost = async (slug: string) => {
    if (!confirm(`Are you sure you want to delete "${slug}"?`)) return;
    try {
      const res = await fetch(`/api/admin/posts?slug=${slug}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok && data.success) {
        showNotification("Blog post deleted");
        fetchPosts();
      } else {
        alert(data.error || "Could not delete this post");
      }
    } catch {
      alert("Error deleting post");
    }
  };

  const exportLeadsCSV = () => {
    if (leads.length === 0) {
      alert("No leads to export.");
      return;
    }
    const headers = ["ID", "Name", "Email", "Website", "Service", "Keywords", "Message", "Status", "Date"];
    const rows = leads.map((l) => [
      l.id,
      `"${l.name.replace(/"/g, '""')}"`,
      `"${l.email}"`,
      `"${l.website}"`,
      `"${l.service}"`,
      `"${(l.keywords || "").replace(/"/g, '""')}"`,
      `"${(l.message || "").replace(/"/g, '""')}"`,
      l.status,
      `"${l.createdAt}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `HarunSEO_Leads_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showNotification("Leads exported to CSV successfully!");
  };

  // Filtered Leads
  const filteredLeads = leads.filter((lead) => {
    const matchesStatus = statusFilter === "All" || lead.status === statusFilter;
    const query = leadSearch.toLowerCase();
    const matchesSearch =
      !query ||
      lead.name.toLowerCase().includes(query) ||
      lead.email.toLowerCase().includes(query) ||
      lead.website.toLowerCase().includes(query) ||
      (lead.keywords && lead.keywords.toLowerCase().includes(query));
    return matchesStatus && matchesSearch;
  });

  const newLeadsCount = leads.filter((l) => l.status === "New").length;

  if (authChecking) {
    return (
      <div className="min-h-screen bg-[#092328] flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-3">
          <RefreshCw className="w-8 h-8 text-[#2A835F] animate-spin" />
          <p className="text-sm text-gray-300">Checking credentials...</p>
        </div>
      </div>
    );
  }

  // ======================== LOGIN VIEW ========================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#092328] relative flex items-center justify-center p-4 overflow-hidden">
        {/* Ambient Lights */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2A835F]/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-md w-full relative z-10">
          <div className="glass-card rounded-3xl p-8 sm:p-10 bg-[#092328]/90 border border-[#8BBB92]/30 shadow-2xl backdrop-blur-xl">
            {/* Harun Profile Image Avatar */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#8BBB92]/50 shadow-xl bg-[#12544F]">
                  <Image
                    src="/harun-seo.png"
                    alt="Md. Harun or Roshid"
                    width={80}
                    height={80}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-[#2A835F] p-1.5 rounded-full border-2 border-[#092328]">
                  <Lock className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-[#12544F]/80 text-[#8BBB92] text-xs font-bold uppercase tracking-wider mb-2 border border-[#8BBB92]/30">
                SEO Executive Portal
              </span>
              <h1 className="text-2xl font-extrabold text-white tracking-tight">
                Harun SEO <span className="text-[#8BBB92]">Admin Access</span>
              </h1>
              <p className="text-xs text-gray-300 mt-2">
                Enter your administrative passcode to manage inquiries, blog posts, and site data.
              </p>
            </div>

            {authError && (
              <div className="mb-6 p-3.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{authError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-gray-200 mb-2">
                  Admin Passcode
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin passcode"
                    required
                    className="w-full px-4 py-3.5 pr-11 rounded-xl bg-[#12544F]/40 border border-[#8BBB92]/30 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#2A835F] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-[11px] text-gray-400 mt-2 flex items-center justify-between">
                  <span>Default Passcode: <strong className="text-[#8BBB92]">harun7835</strong></span>
                  <button
                    type="button"
                    onClick={() => setPassword("harun7835")}
                    className="text-[#2A835F] hover:underline"
                  >
                    Auto-fill
                  </button>
                </p>
              </div>

              <button
                type="submit"
                disabled={authLoading}
                className="btn-primary w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-xl"
              >
                {authLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    <Unlock className="w-4 h-4 text-white" />
                    <span>Login to Dashboard</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-[#12544F] flex items-center justify-between text-xs text-gray-400">
              <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
                &larr; Back to Portfolio
              </Link>
              <span>Md. Harun or Roshid</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ======================== DASHBOARD VIEW ========================
  return (
    <div className="min-h-screen bg-[#092328] text-gray-100 flex flex-col">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#12544F] border-2 border-[#8BBB92] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce">
          <Sparkles className="w-5 h-5 text-[#8BBB92]" />
          <span className="text-sm font-semibold">{toast}</span>
        </div>
      )}

      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-[#092328]/95 backdrop-blur-md border-b border-[#12544F] px-4 sm:px-8 py-3.5">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#8BBB92]/50 shadow-md">
                <Image
                  src="/harun-seo.png"
                  alt="Md. Harun or Roshid"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-base text-white tracking-wide">
                    HARUN <span className="text-[#2A835F]">SEO</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#2A835F]/30 text-[#8BBB92] border border-[#8BBB92]/30">
                    ADMIN
                  </span>
                </div>
                <p className="text-[11px] text-gray-400">Md. Harun or Roshid &bull; ScaleUP Ads</p>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#12544F]/50 border border-[#8BBB92]/20 hover:border-[#2A835F] text-xs font-medium text-gray-200 transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#2A835F]" />
              <span>Live Website</span>
            </Link>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-red-500/20 border border-red-500/30 hover:bg-red-500/30 text-xs font-semibold text-red-200 transition-all"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-8 py-8 space-y-8">
        {/* Navigation Tabs Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#12544F] pb-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setActiveTab("leads")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === "leads"
                  ? "bg-[#2A835F] text-white shadow-lg shadow-[#2A835F]/20"
                  : "bg-[#12544F]/40 text-gray-300 hover:bg-[#12544F]"
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Audit Leads</span>
              {newLeadsCount > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-red-500 text-white text-[10px] font-extrabold animate-pulse">
                  {newLeadsCount} New
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab("blogs")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === "blogs"
                  ? "bg-[#2A835F] text-white shadow-lg shadow-[#2A835F]/20"
                  : "bg-[#12544F]/40 text-gray-300 hover:bg-[#12544F]"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Blog Manager</span>
              <span className="px-2 py-0.5 rounded-full bg-[#12544F] text-[#8BBB92] text-[10px] font-bold">
                {posts.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === "overview"
                  ? "bg-[#2A835F] text-white shadow-lg shadow-[#2A835F]/20"
                  : "bg-[#12544F]/40 text-gray-300 hover:bg-[#12544F]"
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>SEO & System</span>
            </button>

            <button
              onClick={() => setActiveTab("settings")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === "settings"
                  ? "bg-[#2A835F] text-white shadow-lg shadow-[#2A835F]/20"
                  : "bg-[#12544F]/40 text-gray-300 hover:bg-[#12544F]"
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Settings</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            {activeTab === "leads" && (
              <button
                onClick={exportLeadsCSV}
                className="px-3.5 py-2 rounded-xl bg-[#12544F] border border-[#8BBB92]/30 hover:border-[#2A835F] text-xs font-semibold text-gray-200 flex items-center gap-2 transition-all"
              >
                <Download className="w-4 h-4 text-[#8BBB92]" />
                <span>Export CSV</span>
              </button>
            )}

            {activeTab === "blogs" && (
              <button
                onClick={() => setShowPostModal(true)}
                className="btn-primary px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg"
              >
                <Plus className="w-4 h-4" />
                <span>Write New Blog Post</span>
              </button>
            )}
          </div>
        </div>

        {/* ======================== TAB: LEADS ======================== */}
        {activeTab === "leads" && (
          <div className="space-y-6">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="glass-card rounded-2xl p-4 bg-[#12544F]/40 border border-[#8BBB92]/20">
                <span className="text-xs text-gray-400 block font-medium">Total Inquiries</span>
                <span className="text-2xl font-black text-white mt-1 block">{leads.length}</span>
              </div>
              <div className="glass-card rounded-2xl p-4 bg-[#12544F]/40 border border-[#8BBB92]/20">
                <span className="text-xs text-amber-300 block font-medium">New / Uncontacted</span>
                <span className="text-2xl font-black text-amber-400 mt-1 block">{newLeadsCount}</span>
              </div>
              <div className="glass-card rounded-2xl p-4 bg-[#12544F]/40 border border-[#8BBB92]/20">
                <span className="text-xs text-sky-300 block font-medium">Contacted</span>
                <span className="text-2xl font-black text-sky-400 mt-1 block">
                  {leads.filter((l) => l.status === "Contacted").length}
                </span>
              </div>
              <div className="glass-card rounded-2xl p-4 bg-[#12544F]/40 border border-[#8BBB92]/20">
                <span className="text-xs text-emerald-300 block font-medium">Completed Audits</span>
                <span className="text-2xl font-black text-emerald-400 mt-1 block">
                  {leads.filter((l) => l.status === "Completed").length}
                </span>
              </div>
            </div>

            {/* Search & Filter Toolbar */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search leads by name, email, website, keywords..."
                  value={leadSearch}
                  onChange={(e) => setLeadSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#12544F]/30 border border-[#8BBB92]/20 text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#2A835F]"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Filter className="w-4 h-4 text-gray-400" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2.5 rounded-xl bg-[#12544F]/40 border border-[#8BBB92]/20 text-xs text-white focus:outline-none"
                >
                  <option value="All">All Statuses</option>
                  <option value="New">New Only</option>
                  <option value="Contacted">Contacted</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>

                <button
                  onClick={fetchLeads}
                  title="Refresh Leads"
                  className="p-2.5 rounded-xl bg-[#12544F]/40 border border-[#8BBB92]/20 text-gray-300 hover:text-white"
                >
                  <RefreshCw className={`w-4 h-4 ${leadsLoading ? "animate-spin" : ""}`} />
                </button>
              </div>
            </div>

            {/* Leads List */}
            {filteredLeads.length === 0 ? (
              <div className="glass-card rounded-2xl p-12 text-center bg-[#12544F]/20 border border-[#8BBB92]/20">
                <Mail className="w-10 h-10 text-gray-500 mx-auto mb-3" />
                <h3 className="text-base font-bold text-gray-300">No leads match your criteria</h3>
                <p className="text-xs text-gray-500 mt-1">
                  When visitors submit the audit form on your website, their requests will appear here instantly.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {filteredLeads.map((lead) => {
                  const statusColors: Record<Lead["status"], string> = {
                    New: "bg-amber-500/20 text-amber-300 border-amber-500/40",
                    Contacted: "bg-sky-500/20 text-sky-300 border-sky-500/40",
                    "In Progress": "bg-indigo-500/20 text-indigo-300 border-indigo-500/40",
                    Completed: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
                  };

                  const cleanSite = lead.website.startsWith("http") ? lead.website : `https://${lead.website}`;

                  return (
                    <div
                      key={lead.id}
                      className="glass-card rounded-2xl p-5 sm:p-6 bg-[#12544F]/30 border border-[#8BBB92]/20 hover:border-[#2A835F]/40 transition-all space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#12544F]/60 pb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2A835F] to-[#12544F] flex items-center justify-center font-bold text-white text-base">
                            {lead.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <h3 className="font-extrabold text-base text-white">{lead.name}</h3>
                            <a
                              href={cleanSite}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-semibold text-[#8BBB92] hover:underline flex items-center gap-1 mt-0.5"
                            >
                              <Globe className="w-3.5 h-3.5" />
                              <span>{lead.website}</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center gap-2.5">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold border ${
                              statusColors[lead.status] || "bg-gray-500/20 text-gray-300"
                            }`}
                          >
                            {lead.status}
                          </span>

                          <select
                            value={lead.status}
                            onChange={(e) => updateStatus(lead.id, e.target.value as Lead["status"])}
                            className="text-xs bg-[#092328] border border-[#8BBB92]/30 rounded-lg px-2 py-1 text-gray-200 focus:outline-none"
                          >
                            <option value="New">Set New</option>
                            <option value="Contacted">Set Contacted</option>
                            <option value="In Progress">Set In Progress</option>
                            <option value="Completed">Set Completed</option>
                          </select>

                          <button
                            onClick={() => deleteLeadItem(lead.id)}
                            className="p-1.5 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                            title="Delete Lead"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Lead Details Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-3 rounded-xl bg-[#092328]/60 border border-[#12544F]">
                          <span className="text-gray-400 block text-[11px]">Primary Service</span>
                          <span className="font-semibold text-white mt-0.5 block">{lead.service}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-[#092328]/60 border border-[#12544F]">
                          <span className="text-gray-400 block text-[11px]">Target Keywords</span>
                          <span className="font-semibold text-white mt-0.5 block truncate">
                            {lead.keywords || "None specified"}
                          </span>
                        </div>
                        <div className="p-3 rounded-xl bg-[#092328]/60 border border-[#12544F]">
                          <span className="text-gray-400 block text-[11px]">Submitted At</span>
                          <span className="font-semibold text-gray-300 mt-0.5 block">{lead.createdAt}</span>
                        </div>
                      </div>

                      {/* Message body if provided */}
                      {lead.message && (
                        <div className="p-3.5 rounded-xl bg-[#092328]/80 border border-[#2A835F]/20 text-xs text-gray-300">
                          <strong className="text-gray-400 block mb-1">Client Project Notes:</strong>
                          <p className="leading-relaxed">{lead.message}</p>
                        </div>
                      )}

                      {/* Action Bar */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <a
                          href={`mailto:${lead.email}?subject=Your SEO Audit Request for ${encodeURIComponent(
                            lead.website
                          )} — Md. Harun or Roshid&body=Hi ${encodeURIComponent(lead.name)},%0D%0A%0D%0AThank you for requesting an SEO audit for ${encodeURIComponent(
                            lead.website
                          )}.`}
                          className="px-4 py-2 rounded-xl bg-[#2A835F] text-white font-bold text-xs flex items-center gap-2 hover:bg-[#2A835F]/90 transition-all shadow-md"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Reply via Email ({lead.email})</span>
                        </a>

                        <a
                          href={`https://wa.me/?text=Hi ${encodeURIComponent(
                            lead.name
                          )}, this is Md. Harun or Roshid (SEO Executive). I received your SEO audit inquiry for ${encodeURIComponent(
                            lead.website
                          )}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-semibold text-xs flex items-center gap-2 hover:bg-emerald-600/40 transition-all"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Reach via WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ======================== TAB: BLOG MANAGER ======================== */}
        {activeTab === "blogs" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">All Published Blog Articles</h2>
                <p className="text-xs text-gray-400 mt-0.5">
                  Articles are automatically indexed by Google and appear at /blog
                </p>
              </div>

              <button
                onClick={() => setShowPostModal(true)}
                className="btn-primary px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg"
              >
                <Plus className="w-4 h-4" />
                <span>Write New Article</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {posts.map((post) => (
                <div
                  key={post.slug}
                  className="glass-card rounded-2xl p-5 bg-[#12544F]/30 border border-[#8BBB92]/20 flex flex-col justify-between space-y-4 hover:border-[#2A835F]/50 transition-all"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#2A835F]/30 text-[#8BBB92] border border-[#8BBB92]/20">
                        {post.category}
                      </span>
                      <span className="text-[11px] text-gray-400">{post.readTime}</span>
                    </div>

                    <h3 className="text-base font-bold text-white leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-gray-300 line-clamp-2">{post.excerpt}</p>
                  </div>

                  <div className="flex items-center justify-between border-t border-[#12544F] pt-3 text-xs">
                    <span className="text-gray-400 text-[11px]">{post.date}</span>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="px-3 py-1.5 rounded-lg bg-[#12544F] hover:bg-[#2A835F] text-white text-xs font-semibold flex items-center gap-1 transition-colors"
                      >
                        <span>View Post</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>

                      <button
                        onClick={() => handleDeletePost(post.slug)}
                        title="Delete Post"
                        className="p-1.5 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================== TAB: OVERVIEW & SEO ======================== */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 bg-[#12544F]/30 border border-[#8BBB92]/20 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#12544F]">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2A835F] to-[#12544F] flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">System & SEO Status</h2>
                  <p className="text-xs text-gray-300">
                    Live production metrics for HarunSEO.com
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-[#092328]/80 border border-[#8BBB92]/20">
                  <span className="text-xs text-gray-400">Canonical Website</span>
                  <p className="text-sm font-bold text-[#8BBB92] mt-1">https://www.harunseo.com</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#092328]/80 border border-[#8BBB92]/20">
                  <span className="text-xs text-gray-400">Target Entity Name</span>
                  <p className="text-sm font-bold text-white mt-1">Md. Harun or Roshid</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#092328]/80 border border-[#8BBB92]/20">
                  <span className="text-xs text-gray-400">Current Role</span>
                  <p className="text-sm font-bold text-white mt-1">SEO Executive @ ScaleUP Ads</p>
                </div>
              </div>

              {/* Direct Webmaster Tools Links */}
              <div>
                <h3 className="text-sm font-bold text-white mb-3">Quick Search Engine Shortcuts</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <a
                    href="https://search.google.com/search-console"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-[#12544F]/50 border border-[#8BBB92]/30 hover:border-[#2A835F] flex items-center justify-between text-xs font-semibold text-gray-200 transition-all"
                  >
                    <span>Google Search Console</span>
                    <ExternalLink className="w-4 h-4 text-[#8BBB92]" />
                  </a>

                  <a
                    href="https://analytics.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-[#12544F]/50 border border-[#8BBB92]/30 hover:border-[#2A835F] flex items-center justify-between text-xs font-semibold text-gray-200 transition-all"
                  >
                    <span>Google Analytics 4</span>
                    <ExternalLink className="w-4 h-4 text-[#8BBB92]" />
                  </a>

                  <Link
                    href="/sitemap.xml"
                    target="_blank"
                    className="p-3.5 rounded-xl bg-[#12544F]/50 border border-[#8BBB92]/30 hover:border-[#2A835F] flex items-center justify-between text-xs font-semibold text-gray-200 transition-all"
                  >
                    <span>View XML Sitemap</span>
                    <ExternalLink className="w-4 h-4 text-[#8BBB92]" />
                  </Link>

                  <Link
                    href="/robots.txt"
                    target="_blank"
                    className="p-3.5 rounded-xl bg-[#12544F]/50 border border-[#8BBB92]/30 hover:border-[#2A835F] flex items-center justify-between text-xs font-semibold text-gray-200 transition-all"
                  >
                    <span>View Robots.txt</span>
                    <ExternalLink className="w-4 h-4 text-[#8BBB92]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================== TAB: SETTINGS ======================== */}
        {activeTab === "settings" && (
          <div className="space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 bg-[#12544F]/30 border border-[#8BBB92]/20 space-y-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#2A835F]" />
                <span>Admin & Security Configurations</span>
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-gray-300">
                <div className="p-4 rounded-2xl bg-[#092328]/80 border border-[#12544F] space-y-2">
                  <strong className="text-white block text-sm">How to change Admin Passcode:</strong>
                  <p>
                    Default passcode is <code className="px-2 py-0.5 rounded bg-[#12544F] text-[#8BBB92] font-mono">harun7835</code>.
                  </p>
                  <p>
                    To set a custom passcode, add this environment variable in your <code className="text-[#8BBB92]">.env.local</code> or Vercel Settings:
                  </p>
                  <pre className="p-3 rounded-xl bg-black/50 text-[#8BBB92] font-mono text-xs overflow-x-auto">
                    ADMIN_PASSWORD=your_new_secret_passcode
                  </pre>
                </div>

                <div className="p-4 rounded-2xl bg-[#092328]/80 border border-[#12544F] space-y-2">
                  <strong className="text-white block text-sm">Audit Inquiries Recipient Email:</strong>
                  <p>
                    Currently leads are delivered to: <strong className="text-white">harunsha197@gmail.com</strong>
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#092328]/80 border border-[#12544F] space-y-2">
                  <strong className="text-white block text-sm">WhatsApp Direct Contact:</strong>
                  <p>
                    Number: <strong className="text-white">+880 1972-835738</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ======================== CREATE POST MODAL ======================== */}
      {showPostModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#092328] border-2 border-[#8BBB92]/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8">
            <button
              onClick={() => setShowPostModal(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <h2 className="text-xl font-black text-white">Publish New SEO Article</h2>
              <p className="text-xs text-gray-400 mt-1">
                This article will immediately be live on your website and added to your sitemap.
              </p>
            </div>

            <form onSubmit={handleCreatePost} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Article Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 7 Advanced Link Building Tactics for 2026"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#12544F]/40 border border-[#8BBB92]/30 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#2A835F]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Category
                  </label>
                  <select
                    value={newPost.category}
                    onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#12544F]/40 border border-[#8BBB92]/30 text-xs sm:text-sm text-white focus:outline-none"
                  >
                    <option value="Technical SEO">Technical SEO</option>
                    <option value="Link Building">Link Building</option>
                    <option value="Keyword Strategy">Keyword Strategy</option>
                    <option value="Local SEO">Local SEO</option>
                    <option value="On-Page SEO">On-Page SEO</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Estimated Read Time
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 5 min read"
                    value={newPost.readTime}
                    onChange={(e) => setNewPost({ ...newPost, readTime: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#12544F]/40 border border-[#8BBB92]/30 text-xs sm:text-sm text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Brief Excerpt (Meta Description) *
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="1-2 sentences summarizing the article for Google search snippets."
                  value={newPost.excerpt}
                  onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#12544F]/40 border border-[#8BBB92]/30 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#2A835F]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Article Body Content *
                </label>
                <textarea
                  rows={6}
                  required
                  placeholder="Write the full content of your article here..."
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#12544F]/40 border border-[#8BBB92]/30 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#2A835F]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowPostModal(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-300 hover:text-white"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={savingPost}
                  className="btn-primary px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg"
                >
                  {savingPost ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Publishing...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 text-white" />
                      <span>Publish Post Now</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
