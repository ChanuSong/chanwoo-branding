"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Briefcase, GraduationCap, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/i18n";

const ease = [0.22, 1, 0.36, 1] as const;
const colors = ["#18181B", "#2563EB", "#7C3AED", "#059669"];

function RevealText({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 1, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SlideIn({ children, className = "", direction = "left", delay = 0 }: { children: React.ReactNode; className?: string; direction?: "left" | "right"; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const x = direction === "left" ? -100 : 100;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const { locale } = useLocale();
  const tr = t(locale);

  const geksRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: geksProgress } = useScroll({ target: geksRef, offset: ["start end", "end start"] });
  const geksX = useTransform(geksProgress, [0, 1], ["0%", "-20%"]);

  return (
    <>
      <HeroSection />

      {/* About — full-width cinematic */}
      <section className="relative overflow-hidden py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <RevealText>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
                  {tr.about.title}
                </p>
              </RevealText>
              <RevealText delay={0.1}>
                <h2
                  className="mb-8 text-4xl font-bold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {tr.about.subtitle}
                </h2>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="mb-10 max-w-xl text-lg leading-[1.8] text-zinc-500" style={{ fontFamily: "var(--font-body)" }}>
                  {tr.about.description}
                </p>
              </RevealText>
              <RevealText delay={0.3}>
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: Briefcase, text: tr.about.currentRole },
                    { icon: Globe, text: tr.about.location },
                    { icon: GraduationCap, text: "MA, Kyung Hee Univ." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-600 transition-all duration-300 hover:border-blue-200 hover:shadow-md">
                      <item.icon size={14} className="text-blue-600" />
                      {item.text}
                    </div>
                  ))}
                </div>
              </RevealText>
            </div>

            {/* Stacked photos */}
            <div className="relative">
              <SlideIn direction="right" className="relative z-10">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                  <Image src="/DSC01279.JPG" alt="At whiteboard" fill className="object-cover object-[25%_30%]" sizes="500px" />
                </div>
              </SlideIn>
              <SlideIn direction="right" delay={0.2} className="absolute -bottom-12 -left-8 z-20 w-48">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-xl ring-4 ring-white">
                  <Image src="/KyungHee2.JPG" alt="Graduation at Kyung Hee" fill className="object-cover" sizes="192px" />
                </div>
              </SlideIn>
              <SlideIn direction="right" delay={0.3} className="absolute -right-4 -top-8 z-0 w-40">
                <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg opacity-60">
                  <Image src="/IMG_3564.JPG" alt="Working at desk" fill className="object-cover" sizes="160px" />
                </div>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>

      {/* GEKS — dark cinematic section */}
      <section ref={geksRef} className="relative overflow-hidden bg-zinc-950 py-32">
        {/* Animated gradient orbs */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[100px]"
          />
          <motion.div
            animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-purple-600/15 blur-[100px]"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-16 grid items-end gap-8 lg:grid-cols-2">
            <div>
              <RevealText>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                  {tr.philosophy.title}
                </p>
              </RevealText>
              <RevealText delay={0.1}>
                <h2
                  className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {tr.philosophy.subtitle}
                </h2>
              </RevealText>
            </div>
            <RevealText delay={0.2}>
              <p className="text-lg leading-[1.8] text-zinc-400">
                {tr.philosophy.intro}
              </p>
            </RevealText>
          </div>

          {/* Horizontal scrolling letters */}
          <motion.div style={{ x: geksX }} className="mb-16 flex gap-6 will-change-transform">
            {[tr.philosophy.growth, tr.philosophy.experience, tr.philosophy.knowledge, tr.philosophy.sharing].map(
              (item, i) => (
                <RevealText key={item.letter} delay={i * 0.15} className="flex-shrink-0">
                  <Link href="/philosophy" className="group block cursor-pointer">
                    <div className="relative w-[320px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/25 hover:bg-white/[0.06]">
                      <span
                        className="absolute -right-4 -top-6 text-[140px] font-black leading-none opacity-[0.04] transition-all duration-700 group-hover:opacity-[0.08] group-hover:scale-110"
                        style={{ fontFamily: "var(--font-heading)", color: colors[i] }}
                      >
                        {item.letter}
                      </span>
                      <div
                        className="relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl"
                        style={{ backgroundColor: colors[i] }}
                      >
                        {item.letter}
                      </div>
                      <h3 className="relative mb-3 text-xl font-semibold text-white">{item.title}</h3>
                      <p className="relative text-sm leading-relaxed text-zinc-400 line-clamp-3">{item.description}</p>
                      <div className="relative mt-5 flex items-center gap-1 text-xs font-medium text-zinc-500 transition-colors duration-300 group-hover:text-blue-400">
                        <span>Read more</span>
                        <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </RevealText>
              )
            )}
          </motion.div>

          {/* Cycle visualization */}
          <RevealText className="flex justify-center">
            <div className="flex items-center gap-3">
              {["G", "E", "K", "S"].map((letter, i) => (
                <div key={letter} className="flex items-center gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white shadow-lg"
                    style={{ backgroundColor: colors[i] }}
                  >
                    {letter}
                  </div>
                  {i < 3 && (
                    <svg width="32" height="2" className="text-zinc-700">
                      <line x1="0" y1="1" x2="32" y2="1" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                    </svg>
                  )}
                </div>
              ))}
              <svg width="32" height="2" className="text-zinc-700">
                <line x1="0" y1="1" x2="32" y2="1" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
              <span className="text-xs font-medium text-zinc-500">repeat</span>
            </div>
          </RevealText>
        </div>
      </section>

      {/* Experience — Clean timeline */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <RevealText>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
                {tr.experience.title}
              </p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2
                className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {tr.experience.subtitle}
              </h2>
            </RevealText>
          </div>

          <div className="space-y-6">
            {tr.experience.timeline.map((item, i) => (
              <RevealText key={i} delay={i * 0.1}>
                <Link href="/experience" className="group block cursor-pointer">
                  <div className="rounded-2xl border border-zinc-200/60 bg-white p-6 transition-all duration-500 hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-900/10 sm:p-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-5">
                        <div
                          className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl text-base font-bold text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl"
                          style={{ backgroundColor: colors[i] }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-zinc-900" style={{ fontFamily: "var(--font-heading)" }}>
                            {item.company}
                          </h3>
                          <p className="text-sm font-medium text-blue-600">{item.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-zinc-400">{item.period}</span>
                        <ArrowRight size={18} className="text-zinc-300 transition-all duration-300 group-hover:translate-x-2 group-hover:text-blue-600" />
                      </div>
                    </div>
                    <div className="mt-5 grid gap-2 border-t border-zinc-100 pt-5 sm:grid-cols-3">
                      {item.highlights.map((h, j) => (
                        <p key={j} className="text-sm leading-relaxed text-zinc-500">{h}</p>
                      ))}
                    </div>
                  </div>
                </Link>
              </RevealText>
            ))}
          </div>

          <RevealText className="mt-10">
            <Link
              href="/experience"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-zinc-800 hover:shadow-xl hover:shadow-zinc-900/20"
            >
              View full experience
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </RevealText>
        </div>
      </section>

      {/* Photo Marquee */}
      <section className="overflow-hidden py-4">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-4"
        >
          {["/KyungHee.PNG", "/NC.JPG", "/YBM2.JPG", "/KyungHee2.JPG", "/IMG_9853_Original.JPG", "/IMG_3564.JPG", "/KyungHee.PNG", "/NC.JPG", "/YBM2.JPG", "/KyungHee2.JPG"].map((src, i) => (
            <div key={i} className="relative h-48 w-72 flex-shrink-0 overflow-hidden rounded-xl">
              <Image src={src} alt="Career moment" fill className="object-cover" sizes="288px" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* Blog Preview — minimal */}
      <section className="py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <RevealText>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
              {tr.blog.title}
            </p>
            <h2
              className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {tr.blog.subtitle}
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed text-zinc-500">
              {tr.blog.comingSoonDesc}
            </p>
            <Link
              href="/blog"
              className="group inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-zinc-900 transition-colors hover:text-blue-600"
            >
              Go to blog
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </RevealText>
        </div>
      </section>

      <Footer />
    </>
  );
}
