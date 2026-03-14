"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import ExperienceSection from "@/components/ExperienceSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const homeRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);

  const sectionRefs: Record<string, React.RefObject<HTMLDivElement | null>> = {
    home: homeRef,
    philosophy: philosophyRef,
    experience: experienceRef,
    blog: blogRef,
  };

  const handleNavigate = useCallback((section: string) => {
    const ref = sectionRefs[section];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      <main>
        <section id="home" ref={homeRef}>
          <HeroSection onNavigate={handleNavigate} />
        </section>
        <section id="philosophy" ref={philosophyRef}>
          <PhilosophySection />
        </section>
        <section id="experience" ref={experienceRef}>
          <ExperienceSection />
        </section>
        <section id="blog" ref={blogRef}>
          <BlogSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
