"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ShinyText from "@/components/ShinyText";

export default function Contact() {
  const [textDone] = useState(true);

  return (
    <section className="bg-black text-white px-4 sm:px-6 py-16 sm:py-24">
      <div className="text-center max-w-5xl mx-auto">

        {/* MAIN HIRE-ORIENTED HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[clamp(3rem,6vw,5rem)] font-semibold tracking-tight leading-[1.05]"
        >
          Let’s build something people actually use.
        </motion.h2>

        {/* SECONDARY CTA */}
        <motion.div
          whileHover={{ x: 6 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="mt-8 flex items-center justify-center gap-4 cursor-pointer opacity-80 hover:opacity-100"
        >
          <span className="text-4xl">→</span>
          <span className="text-2xl font-medium">
            Start a conversation
          </span>
        </motion.div>

        {/* CONTEXT LINE (1% tone) */}
        <p className="mt-4 text-sm tracking-wide opacity-50">
          Building products with teams that care about quality.
        </p>

        {/* EMAIL + SOCIALS + RESUME */}
        {textDone && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-16 flex flex-col items-center gap-10"
          >
            {/* Email */}
            <a
              href="mailto:aryancyber282h@gmail.com"
              className="text-2xl md:text-3xl font-medium tracking-tight opacity-80 hover:opacity-100 transition"
            >
              aryancyber282h@gmail.com
            </a>

            {/* Socials */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-10 text-xs sm:text-sm uppercase tracking-widest">
              <a href="https://linkedin.com/in/aryan-code-28b3aa2a7">
                <ShinyText text="LinkedIn" speed={6} />
              </a>
              <a href="https://www.instagram.com/aryan__code27">
                <ShinyText text="Instagram" speed={6} />
              </a>
              <a href="https://x.com/aryancode27?s=21">
                <ShinyText text="Twitter" speed={6} />
              </a>
              <a href="https://github.com/aryan2729">
                <ShinyText text="GitHub" speed={6} />
              </a>
            </div>

            {/* RESUME (quiet, optional, 1% style) */}
            <a
              href="/Aryan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest opacity-40 hover:opacity-70 transition"
            >
              Resume ↗
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
