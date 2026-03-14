"use client";

import { Mail, Linkedin, Github } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/i18n";

export default function Footer() {
  const { locale } = useLocale();
  const tr = t(locale);

  return (
    <footer className="border-t border-zinc-200 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 text-center">
          <h3 className="text-2xl font-bold text-zinc-900" style={{ fontFamily: "var(--font-heading)" }}>
            {tr.footer.contact}
          </h3>
          <a
            href={`mailto:${tr.footer.email}`}
            className="cursor-pointer text-lg text-blue-600 transition-colors hover:text-blue-700"
          >
            {tr.footer.email}
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/chanwoo-song-2410601ba"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/ChanuSong"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900"
            >
              <Github size={18} />
            </a>
            <a
              href={`mailto:${tr.footer.email}`}
              className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900"
            >
              <Mail size={18} />
            </a>
          </div>
          <p className="text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} Chanwoo Song. {tr.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
