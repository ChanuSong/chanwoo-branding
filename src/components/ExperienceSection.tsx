"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Award } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/i18n";
import Image from "next/image";

export default function ExperienceSection() {
  const { locale } = useLocale();
  const tr = t(locale);
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

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
            {tr.experience.title}
          </p>
          <h2
            className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {tr.experience.subtitle}
          </h2>
        </motion.div>

        {/* Photos row */}
        <div className="mb-16 grid grid-cols-2 gap-4">
          <TimelinePhoto src="/IMG_3564.JPG" alt="Working at office" />
          <TimelinePhoto src="/IMG_9853_Original.JPG" alt="Speaking at Cursor Hackathon Seoul" />
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-zinc-200 md:block" />
          <div className="space-y-12">
            {tr.experience.timeline.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-24">
          <SkillsRef />
        </div>
      </div>
    </section>
  );
}

function TimelinePhoto({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative aspect-[16/9] overflow-hidden rounded-2xl"
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
    </motion.div>
  );
}

function TimelineItem({
  item,
  index,
}: {
  item: { company: string; role: string; period: string; location: string; highlights: readonly string[] };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative md:pl-20"
    >
      <div className="absolute left-6 top-2 hidden h-4 w-4 rounded-full border-4 border-blue-600 bg-white md:block" />

      <div className="rounded-2xl border border-zinc-200/60 bg-white p-6 transition-all duration-300 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-900/5 sm:p-8">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-xl font-bold text-zinc-900" style={{ fontFamily: "var(--font-heading)" }}>
              {item.company}
            </h3>
            <div className="mt-1 flex items-center gap-2 text-sm text-blue-600">
              <Briefcase size={14} />
              {item.role}
            </div>
          </div>
          <div className="text-right text-sm text-zinc-500">
            <div>{item.period}</div>
            <div className="mt-1 flex items-center gap-1">
              <MapPin size={12} />
              {item.location}
            </div>
          </div>
        </div>
        <ul className="space-y-2">
          {item.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-600">
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-zinc-300" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function SkillsRef() {
  const { locale } = useLocale();
  const tr = t(locale);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <h3
        className="mb-8 flex items-center gap-3 text-2xl font-bold text-zinc-900"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        <Award size={24} className="text-blue-600" />
        {tr.experience.skills.title}
      </h3>

      <div className="grid gap-6 sm:grid-cols-2">
        {tr.experience.skills.categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-zinc-200/60 bg-white p-6"
          >
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
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
