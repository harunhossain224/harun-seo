import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/", "/*.png$", "/*.jpg$", "/*.jpeg$", "/*.webp$", "/*.ico$"],
      },
    ],
    sitemap: [
      "https://www.harunseo.com/sitemap.xml",
      "https://www.harunseo.com/image-sitemap.xml",
    ],
  };
}
