import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getArticlesByCategory } from "@/lib/articles";
import { categoryInfo } from "@/lib/pages";

const info = categoryInfo.umum;

export const metadata: Metadata = {
  title: info.title,
  description: info.description,
};

export default function UmumPage() {
  return <CategoryPage title={info.title} description={info.description} articles={getArticlesByCategory("umum")} />;
}
