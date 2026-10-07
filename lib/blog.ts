export interface ContentBlock {
  type: "h2" | "h3" | "paragraph" | "list" | "callout" | "quote" | "checklist";
  id?: string;
  title?: string;
  content?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: "Technical SEO" | "Link Building" | "Keyword Strategy" | "Local SEO" | "On-Page SEO";
  tags: string[];
  featured?: boolean;
  author: {
    name: string;
    role: string;
    agency: string;
  };
  tableOfContents: {
    id: string;
    text: string;
  }[];
  content: ContentBlock[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "technical-seo-audit-checklist-fix-crawl-errors",
    title: "Complete Technical SEO Audit Checklist: Fix Crawl Errors & Indexing Issues in 2026",
    excerpt: "Learn how to uncover hidden technical roadblocks that prevent search bots from discovering, crawling, and indexing your high-converting landing pages.",
    date: "March 15, 2026",
    readTime: "7 min read",
    category: "Technical SEO",
    tags: ["Technical SEO", "Crawl Budget", "Google Search Console", "Sitemaps", "Indexing"],
    featured: true,
    author: {
      name: "Md. Harun or Roshid",
      role: "Senior SEO Executive",
      agency: "ScaleUP Ads Agency",
    },
    tableOfContents: [
      { id: "why-technical-seo-matters", text: "1. Why Technical SEO Dictates Ranking Potential" },
      { id: "crawlability-indexing", text: "2. Crawlability & Indexing Verification" },
      { id: "site-architecture-canonicals", text: "3. Site Architecture & Canonical Tag Integrity" },
      { id: "core-web-vitals-speed", text: "4. Core Web Vitals & Rendering Performance" },
      { id: "structured-data-validation", text: "5. Schema Markup & Structured Data Validation" },
      { id: "audit-action-plan", text: "6. Prioritizing Your Audit Fixes" },
    ],
    content: [
      {
        type: "paragraph",
        content: "No matter how informative your content is or how many backlinks you accumulate, your website will never reach top search rankings if search engines struggle to crawl and interpret your pages. A thorough technical SEO audit is the essential foundation for every successful organic search campaign.",
      },
      {
        type: "callout",
        title: "Key Takeaway",
        content: "Technical SEO is not a one-time setup; it is an ongoing maintenance process. Minor CMS updates, theme edits, or redirect chains can quietly de-index crucial revenue-generating pages.",
      },
      {
        type: "h2",
        id: "why-technical-seo-matters",
        content: "1. Why Technical SEO Dictates Ranking Potential",
      },
      {
        type: "paragraph",
        content: "Search engine crawlers allocate a finite amount of crawl budget to your domain based on site popularity and server health. When your site is weighed down by 404 errors, endless redirect loops, duplicate pagination, or uncompressed assets, bot resources are wasted before discovering your high-intent commercial content.",
      },
      {
        type: "h2",
        id: "crawlability-indexing",
        content: "2. Crawlability & Indexing Verification",
      },
      {
        type: "paragraph",
        content: "Start your audit by inspecting Google Search Console under 'Indexing > Pages'. Identify whether non-indexed URLs are classified as 'Discovered - currently not indexed' or 'Crawled - currently not indexed'.",
      },
      {
        type: "checklist",
        title: "Crawl & Indexing Action Steps",
        items: [
          "Validate robots.txt: Ensure critical CSS, JS, and high-priority directories are not blocked via Disallow rules.",
          "Check XML Sitemap health: Only clean 200 OK canonical URLs must be included in your sitemap.xml.",
          "Inspect meta robots tags: Verify that commercial pages do not accidentally have 'noindex, nofollow' tags.",
          "Review Discovered vs. Crawled status in GSC to isolate content quality vs. crawl budget hurdles.",
        ],
      },
      {
        type: "h2",
        id: "site-architecture-canonicals",
        content: "3. Site Architecture & Canonical Tag Integrity",
      },
      {
        type: "paragraph",
        content: "Duplicate content dilutes link equity across multiple variations of the same URL. Ensure every single page specifies a self-referential rel='canonical' tag or explicitly points to the authoritative URL.",
      },
      {
        type: "quote",
        content: "A website with clean canonicalization and shallow click depth (3 clicks or less from homepage) consistently ranks 30% faster on newly published articles.",
      },
      {
        type: "h2",
        id: "core-web-vitals-speed",
        content: "4. Core Web Vitals & Rendering Performance",
      },
      {
        type: "paragraph",
        content: "Google actively rewards sites with seamless user experiences. Focus on optimizing the three core pillars: Largest Contentful Paint (LCP under 2.5s), Interaction to Next Paint (INP under 200ms), and Cumulative Layout Shift (CLS under 0.1).",
      },
      {
        type: "list",
        items: [
          "Serve images in next-gen formats (WebP or AVIF) with explicit width and height dimensions.",
          "Eliminate render-blocking JavaScript and defer non-critical CSS.",
          "Implement server-side rendering (SSR) or static site generation (SSG) to ensure crawlers receive pre-rendered HTML.",
        ],
      },
      {
        type: "h2",
        id: "structured-data-validation",
        content: "5. Schema Markup & Structured Data Validation",
      },
      {
        type: "paragraph",
        content: "Rich snippets significantly boost Organic Click-Through Rates (CTR). Implement structured data using JSON-LD format for Organization, LocalBusiness, FAQPage, Article, and Product entities. Test your implementations directly using the Google Rich Results Test tool.",
      },
      {
        type: "h2",
        id: "audit-action-plan",
        content: "6. Prioritizing Your Audit Fixes",
      },
      {
        type: "paragraph",
        content: "Categorize findings into Critical (instant indexing blockers), Moderate (internal links & broken redirects), and Low priority (minor image optimizations). By resolving critical technical hurdles first, you pave the way for sustainable organic traffic growth.",
      },
    ],
  },
  {
    slug: "white-hat-link-building-strategies-high-da-backlinks",
    title: "Ethical White-Hat Link Building: How to Acquire High-DA Authority Backlinks",
    excerpt: "Discover proven, penalty-safe off-page SEO methodologies to acquire authoritative, contextual backlinks without relying on dangerous PBNs or link farms.",
    date: "February 28, 2026",
    readTime: "6 min read",
    category: "Link Building",
    tags: ["Link Building", "Off-Page SEO", "Authority Backlinks", "Digital PR", "White Hat"],
    featured: false,
    author: {
      name: "Md. Harun or Roshid",
      role: "Senior SEO Executive",
      agency: "ScaleUP Ads Agency",
    },
    tableOfContents: [
      { id: "link-building-landscape", text: "1. The Modern Link Building Landscape" },
      { id: "quality-vs-quantity", text: "2. Quality vs. Quantity: Identifying Toxic Links" },
      { id: "proven-strategies", text: "3. 4 Proven White-Hat Link Acquisition Tactics" },
      { id: "anchor-text-ratio", text: "4. Mastering Natural Anchor Text Distribution" },
      { id: "monitoring-backlinks", text: "5. Tracking Backlink Velocity & Indexation" },
    ],
    content: [
      {
        type: "paragraph",
        content: "Backlinks remain one of Google's top three core ranking signals. However, the days of blasting automated Web 2.0 links and purchasing cheap bulk packages on freelance marketplaces are long gone. Search engine algorithms detect manipulative link patterns faster than ever.",
      },
      {
        type: "callout",
        title: "Ethical Standard",
        content: "Zero Private Blog Networks (PBNs), zero spam directories. Sustainable link building is strictly built upon high-relevance niche alignment, genuine referral traffic, and brand authority.",
      },
      {
        type: "h2",
        id: "link-building-landscape",
        content: "1. The Modern Link Building Landscape",
      },
      {
        type: "paragraph",
        content: "A backlink is essentially a vote of confidence. When an established, industry-relevant website links to your domain, it passes valuable PageRank and topical authority. One link from an authoritative domain with steady real organic traffic will outperform 200 links from dead forum profiles.",
      },
      {
        type: "h2",
        id: "quality-vs-quantity",
        content: "2. Quality vs. Quantity: Identifying Toxic Links",
      },
      {
        type: "paragraph",
        content: "Before reaching out to prospective domains, evaluate them across four non-negotiable metrics:",
      },
      {
        type: "checklist",
        title: "Link Qualification Criteria",
        items: [
          "Organic Traffic Trend: The referring domain must have growing or stable organic traffic (verified via Ahrefs or Semrush).",
          "Niche Topical Relevance: Links from unrelated niches trigger algorithmic spam filters.",
          "Spam Score: The domain should have a low Spam Score (< 2%) and a healthy backlink-to-outbound ratio.",
          "Real Editorial Review: Look for active moderation, authentic author bios, and high editorial standards.",
        ],
      },
      {
        type: "h2",
        id: "proven-strategies",
        content: "3. 4 Proven White-Hat Link Acquisition Tactics",
      },
      {
        type: "list",
        items: [
          "Strategic Guest Contribution: Pitching insightful, data-backed editorial pieces to respected industry publications.",
          "Resource Page Link Building: Identifying curated resource lists in your niche and proposing your high-value tool or comprehensive guide.",
          "Broken Link Reclamation: Finding dead 404 links on top industry resources and offering your updated article as a direct replacement.",
          "Niche-Specific Citations & Directories: Securing verified profiles on trusted B2B portals and regional trade directories.",
        ],
      },
      {
        type: "h2",
        id: "anchor-text-ratio",
        content: "4. Mastering Natural Anchor Text Distribution",
      },
      {
        type: "paragraph",
        content: "Over-optimizing exact-match keywords in your anchor text is the fastest way to trigger a Google Penguin algorithmic penalty. Maintain a natural distribution: 50% Brand/URL anchors, 25% Partial match/topical anchors, 15% Generic (e.g., 'learn more', 'source'), and no more than 10% Exact match keywords.",
      },
      {
        type: "h2",
        id: "monitoring-backlinks",
        content: "5. Tracking Backlink Velocity & Indexation",
      },
      {
        type: "paragraph",
        content: "Monitor newly acquired links monthly. Ensure acquired links get naturally indexed by search engines, track referral clicks, and disavow rogue negative-SEO scrapers before they impact your overall site authority.",
      },
    ],
  },
  {
    slug: "keyword-intent-optimization-organic-leads",
    title: "Keyword Search Intent Mastery: Converting Traffic into High-Paying Leads",
    excerpt: "Learn how to categorize and target commercial and transactional search queries that attract qualified prospects ready to convert, rather than vanity pageviews.",
    date: "February 12, 2026",
    readTime: "5 min read",
    category: "Keyword Strategy",
    tags: ["Keyword Research", "Search Intent", "Conversion Rate", "SERP Analysis", "Content Strategy"],
    featured: false,
    author: {
      name: "Md. Harun or Roshid",
      role: "Senior SEO Executive",
      agency: "ScaleUP Ads Agency",
    },
    tableOfContents: [
      { id: "the-vanity-traffic-trap", text: "1. Escaping the Vanity Traffic Trap" },
      { id: "four-types-of-search-intent", text: "2. The Four Pillars of Search Intent" },
      { id: "serp-deconstruction", text: "3. Deconstructing Google SERP Features" },
      { id: "mapping-keywords-to-funnel", text: "4. Mapping Keywords to the Buying Funnel" },
      { id: "intent-driven-copywriting", text: "5. Actionable On-Page Intent Optimization" },
    ],
    content: [
      {
        type: "paragraph",
        content: "Driving 100,000 monthly organic visitors means very little if zero visitors request a consultation or purchase your services. Modern SEO is not about accumulating maximum volume; it is about capturing high-intent search queries that align directly with your commercial offerings.",
      },
      {
        type: "h2",
        id: "the-vanity-traffic-trap",
        content: "1. Escaping the Vanity Traffic Trap",
      },
      {
        type: "paragraph",
        content: "Many agencies brag about exponential organic traffic spikes by ranking for broad, low-intent terms. But when those visitors bounce within five seconds without engaging, your server costs rise while revenue stays flat.",
      },
      {
        type: "h2",
        id: "four-types-of-search-intent",
        content: "2. The Four Pillars of Search Intent",
      },
      {
        type: "list",
        items: [
          "Informational (Know): Users seeking knowledge, definitions, or tutorials (e.g., 'what is canonical tag').",
          "Navigational (Go): Users looking for a specific brand or login page (e.g., 'ScaleUP Ads Agency login').",
          "Commercial Investigation (Consider): Users comparing vendors, pricing, or solutions (e.g., 'best link building agency for SaaS').",
          "Transactional (Do / Buy): Users prepared to take action or hire a specialist (e.g., 'hire technical SEO specialist Dhaka').",
        ],
      },
      {
        type: "callout",
        title: "Strategic Formula",
        content: "Focus 60% of your primary landing page efforts on Commercial Investigation & Transactional keywords. Allocate Informational keywords to support your blog and internal link authority.",
      },
      {
        type: "h2",
        id: "serp-deconstruction",
        content: "3. Deconstructing Google SERP Features",
      },
      {
        type: "paragraph",
        content: "Always analyze the live Google search results for your target query before writing a single line of copy. If the top 10 positions are dominated by free calculators, Google expects an interactive tool. If the top 10 are in-depth case studies, you must publish actionable data.",
      },
      {
        type: "h2",
        id: "mapping-keywords-to-funnel",
        content: "4. Mapping Keywords to the Buying Funnel",
      },
      {
        type: "paragraph",
        content: "Structure your website so that informational blog posts logically funnel readers toward commercial service pages. Include clear, context-relevant calls to action (such as free audit requests or consultation bookings) throughout the journey.",
      },
      {
        type: "h2",
        id: "intent-driven-copywriting",
        content: "5. Actionable On-Page Intent Optimization",
      },
      {
        type: "paragraph",
        content: "Ensure your primary H1, meta title, opening 100 words, and subheadings explicitly answer the searcher's core query without unnecessary fluff. Search engines detect fast dwell times and high engagement as proof of satisfying user intent.",
      },
    ],
  },
  {
    slug: "local-seo-mastery-dominate-google-maps-local-pack",
    title: "Local SEO Mastery: How to Dominate Google 3-Pack & Local Maps in 2026",
    excerpt: "A tactical roadmap to optimizing Google Business Profile, securing hyper-local NAP citations, and generating high-converting local inbound calls.",
    date: "January 20, 2026",
    readTime: "6 min read",
    category: "Local SEO",
    tags: ["Local SEO", "Google Business Profile", "NAP Consistency", "Local Citations", "Google Maps"],
    featured: false,
    author: {
      name: "Md. Harun or Roshid",
      role: "Senior SEO Executive",
      agency: "ScaleUP Ads Agency",
    },
    tableOfContents: [
      { id: "local-search-importance", text: "1. The Dominance of 'Near Me' Searches" },
      { id: "gbp-optimization", text: "2. Google Business Profile Optimization" },
      { id: "nap-consistency", text: "3. Enforcing 100% NAP Consistency" },
      { id: "local-citation-building", text: "4. Building High-Quality Regional Citations" },
      { id: "reviews-reputation", text: "5. Review Generation & Reputation Signals" },
    ],
    content: [
      {
        type: "paragraph",
        content: "For service-based companies and physical storefronts, appearing in the coveted Google Local 3-Pack accounts for over 44% of total local clicks. Ranking locally requires an optimized Google Business Profile, consistent citations, and localized on-page signals.",
      },
      {
        type: "h2",
        id: "local-search-importance",
        content: "1. The Dominance of 'Near Me' Searches",
      },
      {
        type: "paragraph",
        content: "Mobile users performing local searches exhibit extraordinary commercial intent: nearly 76% of people who search for something nearby on their smartphone visit a related business within a day, and 28% of those searches result in a purchase.",
      },
      {
        type: "h2",
        id: "gbp-optimization",
        content: "2. Google Business Profile Optimization",
      },
      {
        type: "checklist",
        title: "GBP Setup Checklist",
        items: [
          "Choose the single most accurate Primary Category (this accounts for nearly 60% of ranking weight).",
          "Complete every service, product attribute, and business description field using natural local keywords.",
          "Upload geo-tagged, high-resolution original photos on a weekly basis.",
          "Post regular weekly GBP updates featuring special promotions and case studies.",
        ],
      },
      {
        type: "h2",
        id: "nap-consistency",
        content: "3. Enforcing 100% NAP Consistency",
      },
      {
        type: "paragraph",
        content: "NAP stands for Name, Address, and Phone Number. Even small discrepancies (e.g., 'St.' vs 'Street' or an outdated suite number) create conflicting signals that lower search engine confidence in your location.",
      },
      {
        type: "h2",
        id: "local-citation-building",
        content: "4. Building High-Quality Regional Citations",
      },
      {
        type: "paragraph",
        content: "Build citations across trusted general directories (Yelp, YellowPages, Bing Places, Apple Maps) as well as localized chambers of commerce and industry-specific portals. Focus on indexing and verification rather than spamming hundreds of useless auto-generated directories.",
      },
      {
        type: "h2",
        id: "reviews-reputation",
        content: "5. Review Generation & Reputation Signals",
      },
      {
        type: "paragraph",
        content: "Google uses review quantity, velocity, and keyword sentiment in reviews as ranking factors. Encourage satisfied customers to mention specific services in their reviews, and always reply promptly and professionally to every review received.",
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, category?: string, limit = 2): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== currentSlug && (!category || p.category === category)).slice(0, limit);
}

export function getFeaturedPost(): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
}

export function getAllCategories(): string[] {
  return ["All", "Technical SEO", "Link Building", "Keyword Strategy", "Local SEO"];
}
