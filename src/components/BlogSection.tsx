"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PenLine } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/i18n";

export default function BlogSection() {
  const { locale } = useLocale();
  const tr = t(locale);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-600">
            {tr.blog.title}
          </p>
          <h2
            className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {tr.blog.subtitle}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-16 max-w-lg"
        >
          <div className="flex flex-col items-center rounded-3xl border border-dashed border-zinc-300 bg-zinc-50/50 p-12 text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
              <PenLine size={28} className="text-blue-600" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-zinc-900" style={{ fontFamily: "var(--font-heading)" }}>
              {tr.blog.comingSoon}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-500" style={{ fontFamily: "var(--font-body)" }}>
              {tr.blog.comingSoonDesc}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
