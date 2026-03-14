"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Award, GraduationCap, Globe, BookOpen } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/i18n";
import Image from "next/image";
import Footer from "@/components/Footer";

const ease = [0.22, 1, 0.36, 1] as const;

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ExperiencePage() {
  const { locale } = useLocale();
  const tr = t(locale);

  return (
    <>
      <div className="pt-28">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-6xl px-6 pb-16"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-600">
            {tr.experience.title}
          </p>
          <h1
            className="mb-6 text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {tr.experience.subtitle}
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed text-zinc-600" style={{ fontFamily: "var(--font-body)" }}>
            {tr.about.description}
          </p>
        </motion.div>

        {/* Photo gallery */}
        <AnimatedSection className="mx-auto max-w-6xl px-6 pb-20">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:col-span-2">
              <Image src="/IMG_3564.JPG" alt="Working at Mind AI office" fill className="object-cover" sizes="(max-width: 768px) 100vw, 66vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm font-medium text-white">Mind AI Office</p>
                <p className="text-xs text-white/70">Seoul, South Korea</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-auto">
              <Image src="/IMG_9853_Original.JPG" alt="Speaking at Cursor Hackathon Seoul" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm font-medium text-white">Cursor Hackathon Seoul</p>
                <p className="text-xs text-white/70">Speaker & Builder</p>
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-4">
            {[
              { src: "/KyungHee.PNG", label: "KMOOC Lecture" },
              { src: "/NC.JPG", label: "NCSOFT" },
              { src: "/YBM1.JPG", label: "YBM Award" },
              { src: "/KyungHee2.JPG", label: "Graduation" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-square overflow-hidden rounded-xl">
                <Image src={img.src} alt={img.label} fill className="object-cover transition-transform duration-500 hover:scale-105" sizes="25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <div className="absolute bottom-2 left-2 opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <p className="text-xs font-medium text-white">{img.label}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Career Timeline */}
        <div className="mx-auto max-w-6xl px-6 pb-20">
          <AnimatedSection className="mb-12">
            <h2
              className="flex items-center gap-3 text-2xl font-bold text-zinc-900"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <Briefcase size={24} className="text-blue-600" />
              Career
            </h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-zinc-200 md:block" />

            <div className="space-y-8">
              {tr.experience.timeline.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="relative md:pl-14">
                    <div className="absolute left-2 top-3 hidden h-5 w-5 rounded-full border-4 border-blue-600 bg-white md:block" />

                    <div className="rounded-2xl border border-zinc-200/60 bg-white p-6 transition-all duration-300 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-900/5 sm:p-8">
                      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="text-xl font-bold text-zinc-900" style={{ fontFamily: "var(--font-heading)" }}>
                            {item.company}
                          </h3>
                          <div className="mt-1 flex items-center gap-2 text-sm font-medium text-blue-600">
                            <Briefcase size={14} />
                            {item.role}
                          </div>
                        </div>
                        <div className="text-right text-sm text-zinc-500">
                          <div>{item.period}</div>
                          <div className="mt-1 flex items-center justify-end gap-1">
                            <MapPin size={12} />
                            {item.location}
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {item.highlights.map((h, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-600">
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* Skills & Certifications */}
        <div className="mx-auto max-w-6xl px-6 pb-20">
          <AnimatedSection className="mb-12">
            <h2
              className="flex items-center gap-3 text-2xl font-bold text-zinc-900"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <Award size={24} className="text-blue-600" />
              {tr.experience.skills.title}
            </h2>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2">
            {tr.experience.skills.categories.map((cat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-zinc-200/60 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-900/5">
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
                    {cat.name}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, j) => (
                      <span
                        key={j}
                        className="rounded-lg bg-zinc-50 px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Education & Publications */}
        <div className="mx-auto max-w-6xl px-6 pb-20">
          <div className="grid gap-6 sm:grid-cols-2">
            <AnimatedSection>
              <div className="h-full rounded-2xl border border-zinc-200/60 bg-white p-6 sm:p-8">
                <h3
                  className="mb-6 flex items-center gap-3 text-xl font-bold text-zinc-900"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <GraduationCap size={22} className="text-blue-600" />
                  Education
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-zinc-900">Kyung Hee University</h4>
                    <p className="text-sm text-blue-600">MA, Korean Language and Literature</p>
                    <p className="text-sm text-zinc-500">Sep 2020 — Aug 2022</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900">Dan Robert College of Health Care</h4>
                    <p className="text-sm text-blue-600">Graduate Certificate, PSW</p>
                    <p className="text-sm text-zinc-500">Aug 2017 — Sep 2018 · Toronto, Canada</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="h-full rounded-2xl border border-zinc-200/60 bg-white p-6 sm:p-8">
                <h3
                  className="mb-6 flex items-center gap-3 text-xl font-bold text-zinc-900"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <Globe size={22} className="text-blue-600" />
                  Languages
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-zinc-900">Korean</span>
                    <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">Native</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-zinc-900">English</span>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">Advanced · 2.5yr in Canada</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-zinc-900">Japanese</span>
                    <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">JLPT N1 · 1yr in Japan</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Publications */}
        <div className="mx-auto max-w-6xl px-6 pb-24">
          <AnimatedSection>
            <div className="rounded-2xl border border-zinc-200/60 bg-white p-6 sm:p-8">
              <h3
                className="mb-6 flex items-center gap-3 text-xl font-bold text-zinc-900"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <BookOpen size={22} className="text-blue-600" />
                Publications & Conferences
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Validating Measures of Implicit L2 Knowledge",
                    venue: "Pennsylvania State University",
                    year: "2022",
                    award: "Graduate Paper Award",
                  },
                  {
                    title: "Research on Interaction Patterns Through Pair Activities in Remote Classes",
                    venue: "AATK (American Association of Teachers of Korean)",
                    year: "2022",
                  },
                  {
                    title: "Research Trends and Suggestions for Korean Language Education in the Non-face-to-face Era",
                    venue: "Japanese Association of Korean Language Education",
                    year: "2021",
                  },
                  {
                    title: "Wong Kar-Wai: Auteur of Time — Korean Translation",
                    venue: "Published Book",
                    year: "2022",
                  },
                ].map((pub, i) => (
                  <div key={i} className="flex items-start justify-between gap-4 rounded-xl bg-zinc-50 p-4">
                    <div>
                      <h4 className="font-medium text-zinc-900">{pub.title}</h4>
                      <p className="mt-1 text-sm text-zinc-500">{pub.venue}</p>
                      {pub.award && (
                        <span className="mt-2 inline-block rounded-full bg-yellow-100 px-3 py-0.5 text-xs font-medium text-yellow-800">
                          {pub.award}
                        </span>
                      )}
                    </div>
                    <span className="flex-shrink-0 text-sm font-medium text-zinc-400">{pub.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <Footer />
    </>
  );
}
