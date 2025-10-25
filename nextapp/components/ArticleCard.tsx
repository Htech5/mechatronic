import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/types";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-fuchsia-400/40 hover:shadow-fuchsia-500/10">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-xs uppercase tracking-wide text-fuchsia-300">
          Di Posting Oleh <span className="font-semibold">{article.author}</span>
        </p>
        <h3 className="text-lg font-semibold text-white">{article.title}</h3>
        <p className="line-clamp-3 flex-1 text-sm text-slate-300">{article.excerpt}</p>
        <Link
          href={`/artikel/${article.slug}`}
          className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-cyan-300 transition group-hover:gap-2 group-hover:text-cyan-200"
        >
          Selengkapnya <span aria-hidden>&rarr;</span>
        </Link>
      </div>
    </article>
  );
}
