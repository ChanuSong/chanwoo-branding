"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import MagneticButton from "./MagneticButton";

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  const { locale } = useLocale();
  const tr = t(locale);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % tr.hero.roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [tr.hero.roles.length]);

  const nameWords = tr.hero.name.split(" ");

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden px-6 pt-24 pb-16">
      {/* Noise texture overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          {/* Text */}
          <div>
            {/* Greeting line reveal */}
            <div className="mb-6 overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease }}
                className="text-base text-zinc-400"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {tr.hero.greeting}
              </motion.p>
            </div>

            {/* Name — word-by-word reveal */}
            <h1 className="mb-8" style={{ fontFamily: "var(--font-heading)" }}>
              {nameWords.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden">
                  <motion.span
                    className="inline-block text-6xl font-bold leading-[1.05] tracking-[-0.03em] text-zinc-900 sm:text-7xl lg:text-8xl"
                    initial={{ y: "110%", rotateX: -80 }}
                    animate={{ y: 0, rotateX: 0 }}
                    transition={{ duration: 1, delay: 0.4 + i * 0.08, ease }}
                  >
                    {word}
                  </motion.span>
                  {i < nameWords.length - 1 && "\u00A0"}
                </span>
              ))}
            </h1>

            {/* Role — animated ticker */}
            <div className="mb-8 h-10 overflow-hidden">
              <motion.div
                key={roleIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease }}
                className="flex items-center gap-3"
              >
                <span className="h-px w-8 bg-blue-600" />
                <span className="text-xl font-medium text-blue-600 sm:text-2xl" style={{ fontFamily: "var(--font-heading)" }}>
                  {tr.hero.roles[roleIndex]}
                </span>
              </motion.div>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease }}
              className="mb-12 max-w-[520px] text-balance text-lg leading-[1.7] text-zinc-500"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {tr.hero.tagline}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1, ease }}
            >
              <MagneticButton href="/philosophy" className="group inline-flex items-center gap-3 rounded-full bg-zinc-900 px-8 py-4 text-sm font-medium text-white transition-all duration-500 hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-600/25">
                {tr.hero.cta}
                <ArrowDown size={16} className="transition-transform duration-500 group-hover:translate-y-0.5" />
              </MagneticButton>
            </motion.div>
          </div>

          {/* Photo — clean portrait with floating badge */}
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.2, delay: 0.5, ease }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[560px] w-full overflow-hidden rounded-[2rem]">
              <Image
                src="/DSC01279.JPG"
                alt="Chanwoo Song"
                fill
                className="object-cover object-[25%_25%]"
                priority
                sizes="(max-width: 1024px) 0vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5, ease }}
              className="absolute -bottom-5 left-6 rounded-xl border border-zinc-200 bg-white px-5 py-3 shadow-xl"
            >
              <p className="text-sm font-semibold text-zinc-900">{tr.about.currentRole}</p>
              <p className="text-xs text-zinc-500">{tr.about.location}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
