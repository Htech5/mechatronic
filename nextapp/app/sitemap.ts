import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";

const BASE_URL = "https://mechatech.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/elektronika", "/mekatronika", "/umum", "/about"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${BASE_URL}/artikel/${article.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...articleRoutes];
}
