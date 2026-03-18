import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://arctictechnologies.org.lk";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/coming-soon"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
