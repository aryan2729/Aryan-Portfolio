"use client"

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import IntroLoader from "@/components/IntroLoader";

export default function Page() {

  const [ready, setReady] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  return (
    <main>
      {/* Intro Loader */}
      {!ready && <IntroLoader onFinish={() => setReady(true)} />}

      {/* Navbar ONLY after intro */}
      {ready && <Navbar />}

      <section id="home" className="pt-0">
        <Hero />
      </section>

      <section id="projects" className="pt-5">
        <Projects />
      </section>

      <section id="skills" className="pt-24">
        <Skills />
      </section>

      <section id="experience" className="pt-24">
        <Experience />
      </section>

      <section id="contact" className="pt-24">
        <Contact />
      </section>
    </main>
  );
}
