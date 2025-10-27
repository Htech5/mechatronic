import Container from "./Container";
import { siteInfo } from "@/lib/pages";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-slate-950/60 py-10 text-slate-400">
      <Container className="flex flex-col items-center gap-2 text-center text-sm">
        <p className="font-semibold text-white">{siteInfo.name}</p>
        <p>{siteInfo.tagline}</p>
        <p>
          &copy; {new Date().getFullYear()} {siteInfo.author}. Semua materi ditulis untuk tujuan edukasi.
        </p>
      </Container>
    </footer>
  );
}
