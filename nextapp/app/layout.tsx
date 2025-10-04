import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteInfo } from "@/lib/pages";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mechatech.example.com"),
  title: {
    default: `${siteInfo.name} — ${siteInfo.tagline}`,
    template: `%s | ${siteInfo.name}`,
  },
  description: siteInfo.tagline,
  icons: { icon: "/images/logoweb.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-slate-950 text-slate-100">
        <Header />
        <main className="relative flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
