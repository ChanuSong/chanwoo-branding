"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { SplitWords, RevealLine, FadeUp } from "@/components/SplitText";
import MagneticButton from "@/components/MagneticButton";
import TiltCard from "@/components/TiltCard";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/i18n";

const colors = ["#18181B", "#2563EB", "#7C3AED", "#059669"];

export default function Home() {
  const { locale } = useLocale();
  const tr = t(locale);

  // Horizontal scroll for GEKS
  const geksContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: geksContainerRef, offset: ["start end", "end start"] });
  const geksX = useTransform(scrollYProgress, [0, 1], ["5%", "-15%"]);

  return (
    <>
      <HeroSection />

      {/* About — asymmetric layout, NO duplicate photos */}
      <section className="relative py-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* Photos — stacked composition using DIFFERENT photos than hero */}
            <div className="relative h-[500px]">
              <FadeUp>
                <div className="absolute left-0 top-0 z-10 h-[340px] w-[280px] overflow-hidden rounded-2xl shadow-2xl">
                  <Image src="/KyungHee.PNG" alt="KMOOC lecture at Kyung Hee University" fill className="object-cover object-top" sizes="280px" />
                </div>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div className="absolute right-0 top-8 z-20 h-[380px] w-[320px] overflow-hidden rounded-2xl shadow-2xl">
                  <Image src="/IMG_3564.JPG" alt="Working at Mind AI" fill className="object-cover" sizes="320px" />
                </div>
              </FadeUp>
              <FadeUp delay={0.3}>
                <div className="absolute bottom-0 left-16 z-30 h-[180px] w-[240px] overflow-hidden rounded-xl shadow-xl ring-4 ring-white">
                  <Image src="/KyungHee2.JPG" alt="Graduation" fill className="object-cover object-top" sizes="240px" />
                </div>
              </FadeUp>
            </div>

            {/* Text */}
            <div>
              <RevealLine>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-blue-600">
                  {tr.about.title}
                </p>
              </RevealLine>

              <SplitWords
                className="mb-8 text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-zinc-900 sm:text-5xl"
                as="h2"
                delay={0.1}
              >
                {tr.about.subtitle}
              </SplitWords>

              <FadeUp delay={0.3}>
                <p className="mb-10 max-w-lg text-base leading-[1.9] text-zinc-500" style={{ fontFamily: "var(--font-body)" }}>
                  {tr.about.description}
                </p>
              </FadeUp>

              <FadeUp delay={0.4}>
                <div className="flex flex-wrap gap-4">
                  {[tr.about.currentRole, tr.about.location, "EN · KR · JP"].map((text, i) => (
                    <span key={i} className="rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors duration-300 hover:border-blue-200 hover:text-blue-600">
                      {text}
                    </span>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* GEKS — dark cinematic with horizontal scroll cards */}
      <section ref={geksContainerRef} className="relative overflow-hidden bg-zinc-950 py-40">
        {/* Animated gradient blobs */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]"
          />
          <motion.div
            animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px]"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Section header */}
          <div className="mb-20 grid items-end gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <RevealLine>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
                  {tr.philosophy.title}
                </p>
              </RevealLine>
              <SplitWords
                className="text-5xl font-bold tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl"
                as="h2"
                delay={0.1}
              >
                {tr.philosophy.subtitle}
              </SplitWords>
            </div>
            <FadeUp delay={0.3}>
              <p className="max-w-md text-base leading-[1.9] text-zinc-400">
                {tr.philosophy.intro}
              </p>
            </FadeUp>
          </div>

          {/* Horizontal scrolling GEKS cards with 3D tilt */}
          <motion.div style={{ x: geksX }} className="mb-16 flex gap-5 will-change-transform">
            {[tr.philosophy.growth, tr.philosophy.experience, tr.philosophy.knowledge, tr.philosophy.sharing].map(
              (item, i) => (
                <FadeUp key={item.letter} delay={i * 0.12}>
                  <TiltCard className="flex-shrink-0">
                    <Link href="/philosophy" className="group block cursor-pointer">
                      <div className="relative w-[300px] overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-700 hover:border-white/20 hover:bg-white/[0.06] sm:w-[340px]">
                        {/* Background letter */}
                        <span
                          className="pointer-events-none absolute -right-4 -top-6 select-none text-[160px] font-black leading-none opacity-[0.03] transition-all duration-700 group-hover:opacity-[0.07] group-hover:scale-105"
                          style={{ fontFamily: "var(--font-heading)", color: colors[i] }}
                        >
                          {item.letter}
                        </span>

                        {/* Icon */}
                        <div
                          className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl"
                          style={{ backgroundColor: colors[i], boxShadow: `0 8px 32px ${colors[i]}40` }}
                        >
                          {item.letter}
                        </div>

                        <h3 className="relative mb-3 text-xl font-semibold text-white">{item.title}</h3>
                        <p className="relative mb-6 text-sm leading-[1.7] text-zinc-400 line-clamp-3">
                          {item.description}
                        </p>

                        {/* Animated arrow */}
                        <div className="relative flex items-center gap-2 text-xs font-medium text-zinc-500 transition-colors duration-300 group-hover:text-blue-400">
                          <span className="h-px w-0 bg-blue-400 transition-all duration-500 group-hover:w-6" />
                          <span>Read more</span>
                        </div>
                      </div>
                    </Link>
                  </TiltCard>
                </FadeUp>
              )
            )}
          </motion.div>

          {/* Cycle dots */}
          <FadeUp className="flex items-center justify-center gap-3">
            {["G", "E", "K", "S"].map((letter, i) => (
              <div key={letter} className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: colors[i] }}
                >
                  {letter}
                </div>
                {i < 3 && <div className="h-px w-6 bg-zinc-700" />}
              </div>
            ))}
            <div className="ml-2 h-px w-6 bg-zinc-700" />
            <span className="text-[10px] uppercase tracking-widest text-zinc-600">cycle</span>
          </FadeUp>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20">
            <RevealLine>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-blue-600">
                {tr.experience.title}
              </p>
            </RevealLine>
            <SplitWords
              className="text-4xl font-bold tracking-[-0.02em] text-zinc-900 sm:text-5xl"
              as="h2"
              delay={0.1}
            >
              {tr.experience.subtitle}
            </SplitWords>
          </div>

          <div className="space-y-4">
            {tr.experience.timeline.map((item, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <Link href="/experience" className="group block cursor-pointer">
                  <div className="rounded-2xl border border-zinc-100 bg-white p-7 transition-all duration-500 hover:border-zinc-200 hover:shadow-2xl hover:shadow-zinc-900/[0.08] sm:p-9">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-5">
                        <div
                          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white transition-all duration-500 group-hover:scale-110"
                          style={{ backgroundColor: colors[i], boxShadow: `0 4px 20px ${colors[i]}30` }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-zinc-900" style={{ fontFamily: "var(--font-heading)" }}>
                            {item.company}
                          </h3>
                          <p className="text-sm text-zinc-500">{item.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-zinc-400">{item.period}</span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600">
                          <ArrowRight size={14} className="text-zinc-400 transition-colors duration-300 group-hover:text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3} className="mt-12">
            <MagneticButton href="/experience" className="group inline-flex items-center gap-3 rounded-full bg-zinc-900 px-8 py-4 text-sm font-medium text-white transition-all duration-500 hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-600/25">
              View full experience
              <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
            </MagneticButton>
          </FadeUp>
        </div>
      </section>

      {/* Photo Marquee — infinite scroll */}
      <section className="overflow-hidden border-y border-zinc-100 py-6">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex gap-4"
        >
          {["/NC.JPG", "/YBM2.JPG", "/IMG_9853_Original.JPG", "/YBM1.JPG", "/KyungHee.PNG", "/NC.JPG", "/YBM2.JPG", "/IMG_9853_Original.JPG", "/YBM1.JPG", "/KyungHee.PNG"].map((src, i) => (
            <div key={i} className="group relative h-44 w-64 flex-shrink-0 overflow-hidden rounded-xl">
              <Image src={src} alt="Career moment" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="256px" />
              <div className="absolute inset-0 bg-zinc-900/0 transition-colors duration-300 group-hover:bg-zinc-900/20" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* Blog — clean CTA */}
      <section className="py-40">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <RevealLine>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-blue-600">
              {tr.blog.title}
            </p>
          </RevealLine>
          <SplitWords
            className="mb-6 text-4xl font-bold tracking-[-0.02em] text-zinc-900 sm:text-5xl"
            as="h2"
            delay={0.1}
          >
            {tr.blog.subtitle}
          </SplitWords>
          <FadeUp delay={0.3}>
            <p className="mx-auto mb-10 max-w-md text-base leading-[1.8] text-zinc-500">
              {tr.blog.comingSoonDesc}
            </p>
          </FadeUp>
          <FadeUp delay={0.4}>
            <MagneticButton href="/blog" className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 px-6 py-3 text-sm font-medium text-zinc-900 transition-all duration-300 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white">
              Go to blog
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}
