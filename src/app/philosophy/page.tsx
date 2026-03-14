"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/i18n";
import Footer from "@/components/Footer";

const ease = [0.22, 1, 0.36, 1] as const;
const colors = ["#18181B", "#2563EB", "#7C3AED", "#059669"];

function GeksDetailCard({
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
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease }}
      className="py-20"
    >
      <div className={`mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 ${isEven ? "" : "direction-rtl"}`}>
        {/* Large letter visual */}
        <div className={`flex items-center justify-center ${isEven ? "" : "lg:order-2"}`}>
          <div className="relative">
            <span
              className="select-none text-[200px] font-black leading-none opacity-10 sm:text-[280px]"
              style={{ fontFamily: "var(--font-heading)", color }}
            >
              {letter}
            </span>
            <div
              className="absolute inset-0 flex items-center justify-center"
            >
              <div
                className="h-32 w-32 rounded-3xl shadow-2xl flex items-center justify-center text-5xl font-black text-white"
                style={{ backgroundColor: color }}
              >
                {letter}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={isEven ? "" : "lg:order-1"}>
          <h3
            className="mb-6 text-3xl font-bold text-zinc-900 sm:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </h3>
          <p className="mb-8 text-lg leading-relaxed text-zinc-600" style={{ fontFamily: "var(--font-body)" }}>
            {description}
          </p>
          <ul className="space-y-4">
            {points.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease }}
                className="flex items-start gap-4 text-zinc-600"
              >
                <span
                  className="mt-2 h-2 w-2 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span className="leading-relaxed">{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function PhilosophyPage() {
  const { locale } = useLocale();
  const tr = t(locale);
  const cycleRef = useRef<HTMLDivElement>(null);
  const cycleInView = useInView(cycleRef, { once: true, margin: "-80px" });
  const beliefRef = useRef<HTMLDivElement>(null);
  const beliefInView = useInView(beliefRef, { once: true, margin: "-80px" });

  const geksData = [
    { ...tr.philosophy.growth, color: colors[0] },
    { ...tr.philosophy.experience, color: colors[1] },
    { ...tr.philosophy.knowledge, color: colors[2] },
    { ...tr.philosophy.sharing, color: colors[3] },
  ];

  return (
    <>
      <div className="pt-28">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-4xl px-6 pb-16 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-600">
            {tr.philosophy.title}
          </p>
          <h1
            className="mb-6 text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {tr.philosophy.subtitle}
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-zinc-600" style={{ fontFamily: "var(--font-body)" }}>
            {tr.philosophy.intro}
          </p>

          {/* GEKS letters overview */}
          <div className="mt-12 flex items-center justify-center gap-3 sm:gap-6">
            {geksData.map((item, i) => (
              <div key={item.letter} className="flex items-center gap-3 sm:gap-6">
                <div className="text-center">
                  <div
                    className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold text-white sm:h-16 sm:w-16 sm:text-2xl"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.letter}
                  </div>
                  <span className="text-xs font-medium text-zinc-500 sm:text-sm">{item.title}</span>
                </div>
                {i < 3 && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-zinc-300">
                    <path d="M5 12h14m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Detailed GEKS cards */}
        {geksData.map((item, i) => (
          <GeksDetailCard
            key={item.letter}
            letter={item.letter}
            title={item.title}
            description={item.description}
            points={item.points}
            index={i}
            color={item.color}
          />
        ))}

        {/* GEKS Cycle */}
        <motion.div
          ref={cycleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={cycleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-4xl px-6 py-20"
        >
          <div className="rounded-3xl border border-zinc-200/60 bg-gradient-to-br from-zinc-50 to-white p-10 text-center sm:p-14">
            <h3
              className="mb-6 text-2xl font-bold text-zinc-900"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The GEKS Cycle
            </h3>
            <div className="mb-8 flex items-center justify-center gap-4">
              {geksData.map((item, i) => (
                <div key={item.letter} className="flex items-center gap-4">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.letter}
                  </span>
                  {i < 3 && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-zinc-300">
                      <path d="M5 12h14m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-600" style={{ fontFamily: "var(--font-body)" }}>
              {tr.philosophy.cycle}
            </p>
          </div>
        </motion.div>

        {/* My Belief */}
        <motion.div
          ref={beliefRef}
          initial={{ opacity: 0, y: 40 }}
          animate={beliefInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-4xl px-6 pb-24"
        >
          <div className="rounded-3xl bg-zinc-900 p-10 text-center sm:p-14">
            <h3
              className="mb-6 text-2xl font-bold text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              My Belief
            </h3>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-300" style={{ fontFamily: "var(--font-body)" }}>
              {tr.about.description}
            </p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
}
