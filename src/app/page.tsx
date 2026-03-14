"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/i18n";

function SectionPreview({
  title,
  subtitle,
  description,
  href,
  children,
  index,
}: {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  children?: React.ReactNode;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-600">{title}</p>
        <h2
          className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {subtitle}
        </h2>
        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-zinc-600">{description}</p>
        {children}
        <Link
          href={href}
          className="group mt-8 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-zinc-900 transition-colors hover:text-blue-600"
        >
          Learn more
          <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const { locale } = useLocale();
  const tr = t(locale);

  const colors = ["#18181B", "#2563EB", "#7C3AED", "#059669"];

  return (
    <>
      <HeroSection />

      {/* GEKS Preview */}
      <SectionPreview
        title={tr.philosophy.title}
        subtitle={tr.philosophy.subtitle}
        description={tr.philosophy.intro}
        href="/philosophy"
        index={0}
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[tr.philosophy.growth, tr.philosophy.experience, tr.philosophy.knowledge, tr.philosophy.sharing].map(
            (item, i) => (
              <div
                key={item.letter}
                className="rounded-2xl border border-zinc-200/60 bg-white p-5 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-900/5"
              >
                <div
                  className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white"
                  style={{ backgroundColor: colors[i] }}
                >
                  {item.letter}
                </div>
                <h3 className="text-sm font-semibold text-zinc-900">{item.title}</h3>
              </div>
            )
          )}
        </div>
      </SectionPreview>

      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-zinc-200" />
      </div>

      {/* Experience Preview */}
      <SectionPreview
        title={tr.experience.title}
        subtitle={tr.experience.subtitle}
        description={tr.about.description}
        href="/experience"
        index={1}
      >
        <div className="space-y-4">
          {tr.experience.timeline.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-xl border border-zinc-200/60 bg-white px-6 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-900/5"
            >
              <div>
                <h3 className="font-semibold text-zinc-900">{item.company}</h3>
                <p className="text-sm text-zinc-500">{item.role}</p>
              </div>
              <span className="text-sm text-zinc-400">{item.period}</span>
            </div>
          ))}
        </div>
      </SectionPreview>

      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-zinc-200" />
      </div>

      {/* Blog Preview */}
      <SectionPreview
        title={tr.blog.title}
        subtitle={tr.blog.subtitle}
        description={tr.blog.comingSoonDesc}
        href="/blog"
        index={2}
      />

      <Footer />
    </>
  );
}
