"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/i18n";
import Image from "next/image";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const { locale } = useLocale();
  const tr = t(locale);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % tr.hero.roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [tr.hero.roles.length]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-zinc-100/60 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-lg text-zinc-500" style={{ fontFamily: "var(--font-body)" }}>
            {tr.hero.greeting}
          </p>
          <h1
            className="mb-6 text-5xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {tr.hero.name}
          </h1>

          <div className="mb-6 h-10 overflow-hidden">
            <motion.div
              key={roleIndex}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl font-semibold text-blue-600 sm:text-3xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {tr.hero.roles[roleIndex]}
            </motion.div>
          </div>

          <p className="mb-10 max-w-lg text-lg leading-relaxed text-zinc-600" style={{ fontFamily: "var(--font-body)" }}>
            {tr.hero.tagline}
          </p>

          <button
            onClick={() => onNavigate("philosophy")}
            className="group cursor-pointer inline-flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-zinc-800 hover:shadow-xl hover:shadow-zinc-900/20"
          >
            {tr.hero.cta}
            <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
          </button>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/DSC01279.JPG"
              alt="Chanwoo Song"
              fill
              className="object-cover object-[center_20%]"
              priority
              sizes="(max-width: 1024px) 0vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl border border-zinc-200 bg-white/90 px-5 py-3 shadow-lg backdrop-blur-sm">
            <p className="text-sm font-medium text-zinc-900">{tr.about.currentRole}</p>
            <p className="text-xs text-zinc-500">{tr.about.location}</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-xs text-zinc-400">{tr.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-zinc-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
