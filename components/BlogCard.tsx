import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag, User } from "lucide-react";
import { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article
      className={`group glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 dark:bg-[#12544F]/35 bg-white border dark:border-[#8BBB92]/20 border-emerald-600/20 hover:border-[#2A835F]/60 dark:hover:border-[#8BBB92]/50 hover:shadow-xl hover:shadow-[#2A835F]/10 ${
        featured ? "lg:col-span-2 border-emerald-500/40 dark:border-[#2A835F]/60" : ""
      }`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 dark:bg-[#2A835F]/30 text-[#12544F] dark:text-[#8BBB92] border border-emerald-600/20 dark:border-[#8BBB92]/30">
            {post.category}
          </span>
          <div className="flex items-center gap-3 text-xs dark:text-gray-400 text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#2A835F]" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#2A835F]" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-[#092328] group-hover:text-[#2A835F] dark:group-hover:text-[#8BBB92] transition-colors leading-snug mb-3">
          <Link href={`/blog/${post.slug}`} className="focus:outline-none">
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-sm dark:text-gray-300 text-gray-600 leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-md dark:bg-[#092328]/70 bg-[#f0f7f5] dark:text-gray-300 text-gray-600 border dark:border-[#8BBB92]/10 border-emerald-600/10"
            >
              <Tag className="w-2.5 h-2.5 text-[#2A835F]" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer info: Author & CTA Link */}
      <div className="pt-4 border-t dark:border-[#2A835F]/20 border-emerald-600/15 flex items-center justify-between gap-4 mt-auto">
        <div className="flex items-center gap-2 text-xs">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#2A835F] to-[#12544F] flex items-center justify-center text-white font-bold text-[11px] shadow-sm">
            <User className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="font-semibold dark:text-gray-200 text-gray-800 leading-none">
              {post.author.name}
            </p>
            <p className="text-[10px] dark:text-[#8BBB92] text-[#12544F]">
              {post.author.agency}
            </p>
          </div>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2A835F] dark:text-[#8BBB92] group-hover:translate-x-1 transition-transform"
        >
          <span>Read Post</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
