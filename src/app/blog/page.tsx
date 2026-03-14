"use client";

import { motion } from "framer-motion";
import { PenLine } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/i18n";
import Footer from "@/components/Footer";

const ease = [0.22, 1, 0.36, 1] as const;

export default function BlogPage() {
  const { locale } = useLocale();
  const tr = t(locale);

  return (
    <>
      <div className="pt-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-4xl px-6 pb-16"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-600">
            {tr.blog.title}
          </p>
          <h1
            className="mb-6 text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {tr.blog.subtitle}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mx-auto max-w-4xl px-6 pb-24"
        >
          <div className="flex flex-col items-center rounded-3xl border border-dashed border-zinc-300 bg-zinc-50/50 p-16 text-center">
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50">
              <PenLine size={36} className="text-blue-600" />
            </div>
            <h2
              className="mb-4 text-2xl font-bold text-zinc-900"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {tr.blog.comingSoon}
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-zinc-500" style={{ fontFamily: "var(--font-body)" }}>
              {tr.blog.comingSoonDesc}
            </p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
}
