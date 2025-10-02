import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center gap-4 py-32 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">404</p>
      <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Halaman tidak ditemukan</h1>
      <p className="max-w-md text-slate-400">
        Materi yang kamu cari mungkin sudah dipindahkan atau tidak pernah ada.
      </p>
      <Link
        href="/"
        className="mt-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 font-semibold text-slate-950"
      >
        Kembali ke Home
      </Link>
    </Container>
  );
}
