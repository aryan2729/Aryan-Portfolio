"use client";

import { motion, type Variants } from "framer-motion";

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: easeOutExpo,
    },
  },
};

export default function Experience() {
  return (
    <section className="min-h-screen bg-black flex items-center px-4 sm:px-6">
      <motion.div
        className="w-full text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
      >
        <motion.div variants={item} className="text-4xl sm:text-6xl md:text-8xl font-bold leading-tight">
          36 HOURS
        </motion.div>

        <motion.div variants={item} className="text-4xl sm:text-6xl md:text-8xl font-bold leading-tight">
          NATIONAL JURY
        </motion.div>

        <motion.div variants={item} className="text-4xl sm:text-6xl md:text-8xl font-bold leading-tight">
          NO MENTORS
        </motion.div>

        <motion.div variants={item} className="mt-8 text-2xl sm:text-3xl md:text-4xl font-semibold">
          SHIPPED ANYWAY.
        </motion.div>

        <motion.div
          variants={item}
          className="mt-12 text-sm uppercase tracking-widest text-neutral-500"
        >
          Smart India Hackathon ’25 — Grand Finalist
        </motion.div>
      </motion.div>
    </section>
  );
}
