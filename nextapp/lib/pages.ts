import type { Category } from "./types";

export const siteInfo = {
  name: "MechaTech",
  tagline: "Tempat membahas materi mekatronika, umum dan elektronika",
  author: "Habib Mukhlis",
};

export const categoryInfo: Record<Category, { title: string; description: string; href: string }> = {
  elektronika: {
    title: "Elektronika",
    description:
      "Materi seputar bahan dan komponen elektronika dasar: semikonduktor, konduktor, dan isolator.",
    href: "/elektronika",
  },
  mekatronika: {
    title: "Mekatronika",
    description: "Materi seputar mikroprosesor dan sistem kendali yang menjadi dasar mekatronika.",
    href: "/mekatronika",
  },
  umum: {
    title: "Umum",
    description:
      "Materi umum: teks laporan hasil observasi, budaya, peran kimia, hingga sejarah zaman pembentukan bumi.",
    href: "/umum",
  },
};

export const aboutData = {
  title: "Biodata",
  image: "/images/profile.jpeg",
  fields: [
    { label: "Nama", value: "Habib" },
    { label: "Kelas", value: "X" },
    { label: "Jenjang", value: "SMK" },
  ],
};
