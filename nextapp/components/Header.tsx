import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { siteInfo } from "@/lib/pages";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/elektronika", label: "Elektronika" },
  { href: "/mekatronika", label: "Mekatronika" },
  { href: "/umum", label: "Umum" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-white">
          <Image src="/images/logoweb.png" alt={siteInfo.name} width={32} height={32} className="rounded-md" />
          <span className="text-lg tracking-tight">{siteInfo.name}</span>
        </Link>
        <nav>
          <ul className="flex items-center gap-1 text-sm font-medium text-slate-300 sm:gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
