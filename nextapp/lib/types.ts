export type Category = "elektronika" | "mekatronika" | "umum";

/** A block of article body content. Rendered as plain JSX — never raw HTML. */
export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export interface Article {
  slug: string;
  title: string;
  category: Category;
  author: string;
  image: string;
  excerpt: string;
  body: ContentBlock[];
}
