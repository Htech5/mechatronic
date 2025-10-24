import type { Metadata } from "next";
import Container from "@/components/Container";
import ArticleCard from "@/components/ArticleCard";
import AnimatedHeading from "@/components/AnimatedHeading";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import GradientBlobBackground from "@/components/GradientBlobBackground";
import MagneticButton from "@/components/MagneticButton";
import { articles } from "@/lib/articles";
import { siteInfo } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Home",
  description: siteInfo.tagline,
};

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden py-24 sm:py-32">
        <GradientBlobBackground />
        <Container className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            {siteInfo.name}
          </p>
          <AnimatedHeading
            text="Mekatronika, Elektronika & Umum dalam satu tempat"
            className="mx-auto max-w-3xl text-4xl font-extrabold text-white sm:text-6xl"
          />
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-300">{siteInfo.tagline}</p>
          <div className="mt-10 flex justify-center gap-4">
            <MagneticButton
              href="/elektronika"
              className="rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-8 py-3 font-semibold text-slate-950 shadow-lg shadow-fuchsia-500/30"
            >
              Jelajahi Materi
            </MagneticButton>
          </div>
        </Container>
      </section>

      <Container className="pb-24">
        <ScrollFadeIn>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Artikel Terbaru</h2>
          <p className="mt-2 text-slate-400">
            Semua materi ditulis oleh {siteInfo.author}, meliputi elektronika, mekatronika, dan umum.
          </p>
        </ScrollFadeIn>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <ScrollFadeIn key={article.slug} delay={(i % 3) * 0.08}>
              <ArticleCard article={article} />
            </ScrollFadeIn>
          ))}
        </div>
      </Container>
    </>
  );
}
