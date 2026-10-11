import fs from "fs";
import path from "path";
import { BlogPost, BLOG_POSTS } from "./blog";

export interface Lead {
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

const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");
const CUSTOM_POSTS_FILE = path.join(DATA_DIR, "custom_posts.json");

function ensureDirectoryExistence() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  } catch (e) {
    console.error("Could not create data dir:", e);
  }
}

// Memory fallback in case filesystem is completely locked
let memoryLeads: Lead[] = [
  {
    id: "lead-1",
    name: "Sarah Jenkins",
    email: "sarah.j@growthbrand.co",
    website: "https://growthbrand.co",
    service: "Technical SEO & Audit",
    keywords: "ecommerce growth, organic marketing",
    message: "We have indexing issues with 400+ product pages. Need a full technical audit.",
    status: "New",
    createdAt: "2026-10-10 16:45",
  },
  {
    id: "lead-2",
    name: "Ahmed Kabir",
    email: "contact@zenithtech.bd",
    website: "https://zenithtech.com.bd",
    service: "Link Building & Authority",
    keywords: "saas software bangladesh, erp solutions",
    message: "Looking for high-DA backlinks to improve domain authority for our B2B SaaS platform.",
    status: "Contacted",
    createdAt: "2026-10-09 11:20",
  },
];

let memoryCustomPosts: BlogPost[] = [];

// ======================== LEADS ========================

export function getLeads(): Lead[] {
  try {
    ensureDirectoryExistence();
    if (fs.existsSync(LEADS_FILE)) {
      const data = fs.readFileSync(LEADS_FILE, "utf-8");
      return JSON.parse(data) as Lead[];
    }
  } catch (err) {
    console.error("Error reading leads file:", err);
  }
  return memoryLeads;
}

export function saveLead(leadData: Omit<Lead, "id" | "createdAt" | "status"> & { status?: Lead["status"] }): Lead {
  const newLead: Lead = {
    id: `lead-${Date.now()}`,
    ...leadData,
    status: leadData.status || "New",
    createdAt: new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" }),
  };

  try {
    ensureDirectoryExistence();
    const current = getLeads();
    const updated = [newLead, ...current];
    fs.writeFileSync(LEADS_FILE, JSON.stringify(updated, null, 2), "utf-8");
    memoryLeads = updated;
  } catch (err) {
    console.error("Error writing leads file:", err);
    memoryLeads = [newLead, ...memoryLeads];
  }

  return newLead;
}

export function updateLeadStatus(id: string, status: Lead["status"]): boolean {
  try {
    ensureDirectoryExistence();
    const leads = getLeads();
    const index = leads.findIndex((l) => l.id === id);
    if (index !== -1) {
      leads[index].status = status;
      fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
      memoryLeads = leads;
      return true;
    }
  } catch (err) {
    console.error("Error updating lead status:", err);
  }
  return false;
}

export function deleteLead(id: string): boolean {
  try {
    ensureDirectoryExistence();
    const leads = getLeads();
    const filtered = leads.filter((l) => l.id !== id);
    fs.writeFileSync(LEADS_FILE, JSON.stringify(filtered, null, 2), "utf-8");
    memoryLeads = filtered;
    return true;
  } catch (err) {
    console.error("Error deleting lead:", err);
  }
  return false;
}

// ======================== BLOG POSTS ========================

export function getCustomPosts(): BlogPost[] {
  try {
    ensureDirectoryExistence();
    if (fs.existsSync(CUSTOM_POSTS_FILE)) {
      const data = fs.readFileSync(CUSTOM_POSTS_FILE, "utf-8");
      return JSON.parse(data) as BlogPost[];
    }
  } catch (err) {
    console.error("Error reading custom posts:", err);
  }
  return memoryCustomPosts;
}

export function getAllMergedPosts(): BlogPost[] {
  const custom = getCustomPosts();
  // Merge custom posts on top of default static posts
  return [...custom, ...BLOG_POSTS];
}

export function saveCustomPost(post: BlogPost): boolean {
  try {
    ensureDirectoryExistence();
    const current = getCustomPosts();
    // check if slug exists, replace or prepend
    const existingIndex = current.findIndex((p) => p.slug === post.slug);
    let updated: BlogPost[];
    if (existingIndex !== -1) {
      updated = [...current];
      updated[existingIndex] = post;
    } else {
      updated = [post, ...current];
    }
    fs.writeFileSync(CUSTOM_POSTS_FILE, JSON.stringify(updated, null, 2), "utf-8");
    memoryCustomPosts = updated;
    return true;
  } catch (err) {
    console.error("Error saving custom post:", err);
    memoryCustomPosts = [post, ...memoryCustomPosts];
    return true;
  }
}

export function deleteCustomPost(slug: string): boolean {
  try {
    ensureDirectoryExistence();
    const current = getCustomPosts();
    const filtered = current.filter((p) => p.slug !== slug);
    fs.writeFileSync(CUSTOM_POSTS_FILE, JSON.stringify(filtered, null, 2), "utf-8");
    memoryCustomPosts = filtered;
    return true;
  } catch (err) {
    console.error("Error deleting custom post:", err);
  }
  return false;
}

// ======================== AUTH ========================

export function verifyAdminPassword(input: string): boolean {
  const expected = process.env.ADMIN_PASSWORD || "harun7835";
  return input.trim() === expected.trim();
}
