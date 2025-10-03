import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import ArticleBody from "@/components/ArticleBody";
import AnimatedHeading from "@/components/AnimatedHeading";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { articles, getArticleBySlug } from "@/lib/articles";
import { categoryInfo } from "@/lib/pages";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Artikel tidak ditemukan" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const info = categoryInfo[article.category];

  return (
    <Container className="max-w-3xl py-16">
      <Link href={info.href} className="text-sm font-semibold text-cyan-300 hover:text-cyan-200">
        &larr; Kembali ke {info.title}
      </Link>
      <div className="relative mt-6 h-64 w-full overflow-hidden rounded-2xl sm:h-80">
        <Image src={article.image} alt={article.title} fill className="object-cover" priority />
      </div>
      <p className="mt-6 text-xs uppercase tracking-wide text-fuchsia-300">
        Di Posting Oleh <span className="font-semibold">{article.author}</span>
      </p>
      <AnimatedHeading text={article.title} as="h1" className="mt-2 text-3xl font-extrabold text-white sm:text-4xl" />
      <hr className="my-8 border-white/10" />
      <ScrollFadeIn>
        <ArticleBody blocks={article.body} />
      </ScrollFadeIn>
    </Container>
  );
}
