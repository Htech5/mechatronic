import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getArticlesByCategory } from "@/lib/articles";
import { categoryInfo } from "@/lib/pages";

const info = categoryInfo.elektronika;

export const metadata: Metadata = {
  title: info.title,
  description: info.description,
};

export default function ElektronikaPage() {
  return <CategoryPage title={info.title} description={info.description} articles={getArticlesByCategory("elektronika")} />;
}
