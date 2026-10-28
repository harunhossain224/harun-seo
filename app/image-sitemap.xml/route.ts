import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.harunseo.com";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${baseUrl}/harun-shah.png</image:loc>
      <image:title>Harun Shah - Senior SEO Specialist</image:title>
      <image:caption>Harun Shah (Harun Sha / Md. Harun or Roshid / Harun SEO) - Senior SEO Executive at ScaleUP Ads Agency</image:caption>
      <image:geo_location>Dhaka, Bangladesh</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/harun-seo.png</image:loc>
      <image:title>Harun SEO - Md Harun or Roshid SEO Specialist</image:title>
      <image:caption>Official Portfolio Photo of Md. Harun or Roshid (Harun SEO), Senior SEO Specialist at ScaleUP Ads Agency</image:caption>
      <image:geo_location>Dhaka, Bangladesh</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/harun.png</image:loc>
      <image:title>Harun - Md. Harun or Roshid Official Photo</image:title>
      <image:caption>Harun (Md. Harun or Roshid) Official Portrait and SEO Specialist Profile</image:caption>
      <image:geo_location>Dhaka, Bangladesh</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/harun-sha.png</image:loc>
      <image:title>Harun Sha - Senior SEO Executive</image:title>
      <image:caption>Harun Sha (Md. Harun or Roshid) - Senior SEO Executive at ScaleUP Ads Agency</image:caption>
      <image:geo_location>Dhaka, Bangladesh</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/md-harun-or-roshid.png</image:loc>
      <image:title>Md. Harun or Roshid - Senior SEO Specialist</image:title>
      <image:caption>Md. Harun or Roshid Official SEO Executive Portfolio Photo</image:caption>
      <image:geo_location>Dhaka, Bangladesh</image:geo_location>
    </image:image>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>${baseUrl}/harun-shah.png</image:loc>
      <image:title>Harun Shah - SEO Specialist Biography Photo</image:title>
      <image:caption>Harun Shah (Harun Sha) Senior SEO Executive Profile</image:caption>
      <image:geo_location>Dhaka, Bangladesh</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/harun-seo.png</image:loc>
      <image:title>About Harun SEO - Md Harun or Roshid</image:title>
      <image:caption>Md. Harun or Roshid Senior SEO Executive Profile Photo</image:caption>
      <image:geo_location>Dhaka, Bangladesh</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/harun.png</image:loc>
      <image:title>Harun Profile Photo</image:title>
      <image:caption>Harun (Md. Harun or Roshid) Biography Photo</image:caption>
      <image:geo_location>Dhaka, Bangladesh</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/harun-sha.png</image:loc>
      <image:title>Harun Sha About Photo</image:title>
      <image:caption>Harun Sha Senior SEO Executive Profile</image:caption>
      <image:geo_location>Dhaka, Bangladesh</image:geo_location>
    </image:image>
  </url>
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
