import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getArticlesByCategory } from "@/lib/articles";
import { categoryInfo } from "@/lib/pages";

const info = categoryInfo.mekatronika;

export const metadata: Metadata = {
  title: info.title,
  description: info.description,
};

export default function MekatronikaPage() {
  return <CategoryPage title={info.title} description={info.description} articles={getArticlesByCategory("mekatronika")} />;
}
