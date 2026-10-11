import { NextResponse } from "next/server";
import { getAllMergedPosts, saveCustomPost, deleteCustomPost } from "@/lib/adminStore";
import { BlogPost } from "@/lib/blog";

export async function GET() {
  try {
    const posts = getAllMergedPosts();
    return NextResponse.json({ success: true, posts });
  } catch (error) {
    console.error("Failed fetching posts:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, slug, excerpt, category, readTime, tags, paragraphs } = body;

    if (!title?.trim()) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    const finalSlug = (slug?.trim() || title.trim())
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const newPost: BlogPost = {
      slug: finalSlug,
      title: title.trim(),
      excerpt: excerpt?.trim() || title.trim(),
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      readTime: readTime?.trim() || "5 min read",
      category: category || "Technical SEO",
      tags: Array.isArray(tags) ? tags : typeof tags === "string" ? tags.split(",").map((t: string) => t.trim()).filter(Boolean) : ["SEO"],
      author: {
        name: "Md. Harun or Roshid",
        role: "Senior SEO Executive",
        agency: "ScaleUP Ads Agency",
      },
      tableOfContents: [
        { id: "overview", text: "1. Overview" },
        { id: "actionable-strategy", text: "2. Strategic Approach" },
        { id: "conclusion", text: "3. Conclusion & Next Steps" },
      ],
      content: [
        {
          type: "paragraph",
          content: excerpt?.trim() || "Search Engine Optimization insights and practical execution strategy.",
        },
        ...(Array.isArray(paragraphs)
          ? paragraphs.map((p: string, idx: number) => ({
              type: "paragraph" as const,
              content: p,
            }))
          : [
              {
                type: "paragraph" as const,
                content: body.content || "Expert insights on maximizing search rankings and organic visibility.",
              },
            ]),
      ],
    };

    saveCustomPost(newPost);

    return NextResponse.json({
      success: true,
      message: "Blog post published successfully!",
      post: newPost,
    });
  } catch (error) {
    console.error("Failed creating blog post:", error);
    return NextResponse.json({ error: "Failed to create blog post" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    const deleted = deleteCustomPost(slug);
    if (deleted) {
      return NextResponse.json({ success: true, message: "Custom post deleted" });
    }
    return NextResponse.json({ error: "Post cannot be deleted or is a system post" }, { status: 400 });
  } catch (error) {
    console.error("Failed deleting post:", error);
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
  }
}
