import type { ContentBlock } from "@/lib/types";

/** Renders migrated article content as plain JSX — never dangerouslySetInnerHTML. */
export default function ArticleBody({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={i} className="mt-8 text-2xl font-bold text-white">
                {block.text}
              </h2>
            );
          case "subheading":
            return (
              <h3 key={i} className="mt-6 text-lg font-semibold text-fuchsia-300">
                {block.text}
              </h3>
            );
          case "paragraph":
            return (
              <p key={i} className="leading-relaxed text-slate-300">
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul key={i} className="list-disc space-y-1 pl-6 text-slate-300">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
