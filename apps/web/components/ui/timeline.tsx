"use client";

import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import gsap from "gsap";



interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [height, setHeight] = useState(0);

  /* ---------------- Measure timeline height ---------------- */
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);


  useEffect(() => {
    if (!headingRef.current) return;
  
    const el = headingRef.current;
  
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry || !entry.isIntersecting) return;
  
        gsap.to(".heading-line", {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.12,
        });
  
        observer.disconnect(); // run once
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );
  
    observer.observe(el);
  
    return () => observer.disconnect();
  }, []);
  

  /* ---------------- Framer Motion timeline line ---------------- */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-dark dark:bg-neutral-950 font-sans md:px-10 "
      ref={containerRef}
    >
      {/* ---------------- Heading ---------------- */}
      <div className="max-w-7xl mx-auto py-32 pt-24 pb-12 px-4 md:px-8 lg:px-10">
      <h2
        ref={headingRef}
        className="
          text-[clamp(4rem,9vw,9rem)]
          font-black
          tracking-tight
          leading-[0.9]
        "
      >
        <span className="block heading-line opacity-0 translate-y-24">
          Things
        </span>
        <span className="block heading-line opacity-0 translate-y-24">
          I’ve Built
        </span>

      </h2>

        
      </div>

      {/* ---------------- Timeline ---------------- */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-30 md:pt-57 md:gap-5"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* ---------------- Vertical animated line ---------------- */}
        <div
          style={{ height: height + "px" }}
          className="
            absolute md:left-8 left-8 top-0 overflow-hidden w-[2px]
            bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
            from-transparent via-neutral-200 dark:via-neutral-700 to-transparent
            [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]
          "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="
              absolute inset-x-0 top-0 w-[2px]
              bg-gradient-to-t from-purple-500 via-blue-500 to-transparent
              rounded-full
            "
          />
        </div>
      </div>
    </div>
  );
};
