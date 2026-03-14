"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/i18n";

function GeksCard({
  letter,
  title,
  description,
  points,
  index,
  color,
}: {
  letter: string;
  title: string;
  description: string;
  points: readonly string[];
  index: number;
  color: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl border border-zinc-200/60 bg-white p-8 transition-all duration-500 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-900/5 sm:p-10"
    >
      <div
        className="absolute -right-8 -top-8 text-[180px] font-black leading-none opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.06]"
        style={{ fontFamily: "var(--font-heading)", color }}
      >
        {letter}
      </div>

      <div className="relative">
        <div
          className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-xl font-bold text-white"
          style={{ backgroundColor: color }}
        >
          {letter}
        </div>
        <h3
          className="mb-4 text-2xl font-bold text-zinc-900"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h3>
        <p className="mb-6 leading-relaxed text-zinc-600" style={{ fontFamily: "var(--font-body)" }}>
          {description}
        </p>
        <ul className="space-y-3">
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-zinc-500">
              <span
                className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                style={{ backgroundColor: color }}
              />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function PhilosophySection() {
  const { locale } = useLocale();
  const tr = t(locale);
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const cycleRef = useRef<HTMLDivElement>(null);
  const cycleInView = useInView(cycleRef, { once: true, margin: "-100px" });

  const colors = ["#18181B", "#2563EB", "#7C3AED", "#059669"];
  const geksData = [
    { ...tr.philosophy.growth, color: colors[0] },
    { ...tr.philosophy.experience, color: colors[1] },
    { ...tr.philosophy.knowledge, color: colors[2] },
    { ...tr.philosophy.sharing, color: colors[3] },
  ];

  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-600">
            {tr.philosophy.title}
          </p>
          <h2
            className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {tr.philosophy.subtitle}
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-600" style={{ fontFamily: "var(--font-body)" }}>
            {tr.philosophy.intro}
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {geksData.map((item, i) => (
            <GeksCard
              key={item.letter}
              letter={item.letter}
              title={item.title}
              description={item.description}
              points={item.points}
              index={i}
              color={item.color}
            />
          ))}
        </div>

        {/* GEKS Cycle */}
        <motion.div
          ref={cycleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={cycleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 rounded-3xl border border-zinc-200/60 bg-gradient-to-br from-zinc-50 to-white p-10 text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            {["G", "E", "K", "S"].map((letter, i) => (
              <div key={letter} className="flex items-center gap-4">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white"
                  style={{ backgroundColor: colors[i] }}
                >
                  {letter}
                </span>
                {i < 3 && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-zinc-300">
                    <path d="M5 12h14m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <p className="mx-auto max-w-2xl leading-relaxed text-zinc-600" style={{ fontFamily: "var(--font-body)" }}>
            {tr.philosophy.cycle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
