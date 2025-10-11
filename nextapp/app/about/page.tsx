import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import AnimatedHeading from "@/components/AnimatedHeading";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { aboutData } from "@/lib/pages";

export const metadata: Metadata = {
  title: "About",
  description: "Biodata penulis MechaTech.",
};

export default function AboutPage() {
  return (
    <Container className="py-16">
      <AnimatedHeading text={aboutData.title} className="text-4xl font-extrabold text-white sm:text-5xl" />
      <ScrollFadeIn className="mt-10 flex max-w-md flex-col items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 text-center sm:flex-row sm:text-left">
        <Image
          src={aboutData.image}
          alt={aboutData.title}
          width={120}
          height={120}
          className="rounded-full border border-white/20 object-cover"
        />
        <dl className="space-y-2">
          {aboutData.fields.map((field) => (
            <div key={field.label} className="flex gap-2 text-slate-300">
              <dt className="font-semibold text-white">{field.label}:</dt>
              <dd>{field.value}</dd>
            </div>
          ))}
        </dl>
      </ScrollFadeIn>
    </Container>
  );
}
