"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { t, type Locale } from "@/lib/i18n";

const locales: { value: Locale; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "kr", label: "KR" },
  { value: "jp", label: "JP" },
];

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const { locale, setLocale } = useLocale();
  const tr = t(locale);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: "home", label: tr.nav.home },
    { id: "philosophy", label: tr.nav.philosophy },
    { id: "experience", label: tr.nav.experience },
    { id: "blog", label: tr.nav.blog },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-5xl"
      >
        <div className="rounded-2xl border border-zinc-200/60 bg-white/80 px-6 py-3 shadow-lg shadow-zinc-900/5 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <button
              onClick={() => handleNav("home")}
              className="cursor-pointer text-lg font-semibold tracking-tight text-zinc-900 transition-colors hover:text-blue-600"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              CS
            </button>

            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-zinc-900 text-white"
                      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center rounded-lg border border-zinc-200 bg-zinc-50 p-0.5">
                {locales.map((l) => (
                  <button
                    key={l.value}
                    onClick={() => setLocale(l.value)}
                    className={`cursor-pointer rounded-md px-2.5 py-1 text-xs font-medium transition-all duration-200 ${
                      locale === l.value
                        ? "bg-white text-zinc-900 shadow-sm"
                        : "text-zinc-500 hover:text-zinc-700"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="cursor-pointer rounded-lg p-2 text-zinc-600 transition-colors hover:bg-zinc-100 md:hidden"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-zinc-200/60 bg-white/95 p-4 shadow-xl backdrop-blur-xl md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`block w-full cursor-pointer rounded-lg px-4 py-3 text-left text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-600 hover:bg-zinc-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
