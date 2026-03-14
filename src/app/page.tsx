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

function RevealText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ParallaxImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="relative h-[120%] w-full">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </motion.div>
    </div>
  );
}

function StaggerItem({ children, index, className = "" }: { children: React.ReactNode; index: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const { locale } = useLocale();
  const tr = t(locale);

  const aboutRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: aboutProgress } = useScroll({ target: aboutRef, offset: ["start end", "end start"] });
  const aboutScale = useTransform(aboutProgress, [0, 0.5], [0.9, 1]);
  const aboutOpacity = useTransform(aboutProgress, [0, 0.3], [0, 1]);

  return (
    <>
      <HeroSection />

      {/* About Section - Scroll reveal with parallax */}
      <motion.section
        ref={aboutRef}
        style={{ scale: aboutScale, opacity: aboutOpacity }}
        className="relative mx-auto max-w-6xl px-6 py-28"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <RevealText>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-600">
                {tr.about.title}
              </p>
              <h2
                className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {tr.about.subtitle}
              </h2>
            </RevealText>
            <RevealText>
              <p className="mb-8 text-lg leading-relaxed text-zinc-600" style={{ fontFamily: "var(--font-body)" }}>
                {tr.about.description}
              </p>
            </RevealText>
            <RevealText>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Briefcase, text: tr.about.currentRole },
                  { icon: Globe, text: tr.about.location },
                  { icon: GraduationCap, text: "MA, Kyung Hee University" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-600">
                    <item.icon size={14} className="text-blue-600" />
                    {item.text}
                  </div>
                ))}
              </div>
            </RevealText>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <ParallaxImage src="/IMG_9853_Original.JPG" alt="Speaking at Cursor Hackathon" className="aspect-[3/4] rounded-2xl" />
            <ParallaxImage src="/IMG_3564.JPG" alt="Working at office" className="aspect-[3/4] rounded-2xl mt-12" />
          </div>
        </div>
      </motion.section>

      {/* GEKS Philosophy Preview */}
      <section className="relative overflow-hidden bg-zinc-900 py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <RevealText>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
              {tr.philosophy.title}
            </p>
            <h2
              className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {tr.philosophy.subtitle}
            </h2>
            <p className="mb-12 max-w-2xl text-lg leading-relaxed text-zinc-400">
              {tr.philosophy.intro}
            </p>
          </RevealText>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[tr.philosophy.growth, tr.philosophy.experience, tr.philosophy.knowledge, tr.philosophy.sharing].map(
              (item, i) => (
                <StaggerItem key={item.letter} index={i}>
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/10">
                    <div
                      className="absolute -right-4 -top-4 text-[100px] font-black leading-none opacity-5 transition-opacity duration-500 group-hover:opacity-10"
                      style={{ fontFamily: "var(--font-heading)", color: colors[i] }}
                    >
                      {item.letter}
                    </div>
                    <div
                      className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-white transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: colors[i] }}
                    >
                      {item.letter}
                    </div>
                    <h3 className="relative mb-2 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="relative text-sm leading-relaxed text-zinc-400 line-clamp-3">{item.description}</p>
                  </div>
                </StaggerItem>
              )
            )}
          </div>

          <RevealText className="mt-10">
            <Link
              href="/philosophy"
              className="group inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-white transition-colors hover:text-blue-400"
            >
              {tr.hero.cta}
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </RevealText>
        </div>
      </section>

      {/* Experience Preview */}
      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <RevealText>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-600">
              {tr.experience.title}
            </p>
            <h2
              className="mb-12 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {tr.experience.subtitle}
            </h2>
          </RevealText>

          {/* Timeline cards with photo accents */}
          <div className="space-y-6">
            {tr.experience.timeline.map((item, i) => (
              <StaggerItem key={i} index={i}>
                <Link href="/experience" className="cursor-pointer block">
                  <div className="group rounded-2xl border border-zinc-200/60 bg-white p-6 transition-all duration-500 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-900/5 sm:p-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundColor: colors[i] }}
                        >
                          {i + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-zinc-900" style={{ fontFamily: "var(--font-heading)" }}>
                            {item.company}
                          </h3>
                          <p className="text-sm text-blue-600">{item.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-zinc-400">{item.period}</span>
                        <ArrowRight size={16} className="text-zinc-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-zinc-600" />
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2 border-t border-zinc-100 pt-4">
                      {item.highlights.map((h, j) => (
                        <span key={j} className="text-sm text-zinc-500">
                          {j > 0 && <span className="mx-2 text-zinc-300">·</span>}
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </div>

          <RevealText className="mt-10">
            <Link
              href="/experience"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition-all duration-300 hover:border-zinc-300 hover:shadow-lg"
            >
              View full experience
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </RevealText>
        </div>
      </section>

      {/* Photo strip with parallax */}
      <section className="overflow-hidden">
        <div className="grid grid-cols-4 gap-1">
          {["/KyungHee.PNG", "/NC.JPG", "/YBM2.JPG", "/KyungHee2.JPG"].map((src, i) => (
            <ParallaxImage key={src} src={src} alt="Career moment" className="aspect-square" />
          ))}
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <RevealText>
            <div className="text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-600">
                {tr.blog.title}
              </p>
              <h2
                className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {tr.blog.subtitle}
              </h2>
              <p className="mx-auto mb-8 max-w-lg text-lg leading-relaxed text-zinc-600">
                {tr.blog.comingSoonDesc}
              </p>
              <Link
                href="/blog"
                className="group inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-zinc-900 transition-colors hover:text-blue-600"
              >
                Go to blog
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </RevealText>
        </div>
      </section>

      <Footer />
    </>
  );
}
