import Container from "./Container";
import ArticleCard from "./ArticleCard";
import AnimatedHeading from "./AnimatedHeading";
import ScrollFadeIn from "./ScrollFadeIn";
import type { Article } from "@/lib/types";

export default function CategoryPage({
  title,
  description,
  articles,
}: {
  title: string;
  description: string;
  articles: Article[];
}) {
  return (
    <Container className="py-16">
      <AnimatedHeading text={title} className="text-4xl font-extrabold text-white sm:text-5xl" />
      <p className="mt-4 max-w-2xl text-slate-300">{description}</p>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, i) => (
          <ScrollFadeIn key={article.slug} delay={i * 0.08}>
            <ArticleCard article={article} />
          </ScrollFadeIn>
        ))}
      </div>
    </Container>
  );
}
