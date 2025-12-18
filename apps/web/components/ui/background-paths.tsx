"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

/* ---------------- Floating Paths ---------------- */

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}
        C-${380 - i * 5 * position} -${189 + i * 6}
        -${312 - i * 5 * position} ${216 - i * 6}
        ${152 - i * 5 * position} ${343 - i * 6}
        C${616 - i * 5 * position} ${470 - i * 6}
        ${684 - i * 5 * position} ${875 - i * 6}
        ${684 - i * 5 * position} ${875 - i * 6}`,
    /* 🔥 BRIGHTNESS FIX */
    width: 0.7 + i * 0.035,
    opacity: 0.32 + i * 0.024,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        /* 🔥 KEY FIX: additive brightness */
        className="w-full h-full text-white mix-blend-screen"
        viewBox="0 0 696 316"
        style={{opacity:0.96}}
        fill="none"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.6, 1, 0.6],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

/* ---------------- Main Component ---------------- */

export function BackgroundPaths({
  title = "Background Paths",
}: {
  title?: string;
}) {
  const words = title.split(" ");

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Heading */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tight text-[rgb(245,245,245)] ">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          {/* Button */}
            <div className="relative inline-block isolate group bg-white/10 p-px rounded-2xl">
            {/* Glow layer (NEW) */}
            <div
                className="
                pointer-events-none
                absolute inset-0
                rounded-2xl
                opacity-0
                blur-xl
                transition-opacity duration-300
                group-hover:opacity-100
                bg-white/30
                "
            />

            <Button
                onClick={()=>{
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                variant="ghost"
                className="
                relative z-10
                rounded-[1.15rem]
                px-8 py-6
                text-lg font-semibold
                bg-black/85
                text-white
                border border-white/50

                transition-all duration-300

                hover:border-white/80
                hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]

                active:scale-[0.98]
                "
            >
                <span className="opacity-90">
                View My Work
                </span>
                <span className="ml-3 opacity-80 transition-transform duration-300 group-hover:translate-x-1.5">
                →
                </span>
            </Button>
            </div>
        </motion.div>
      </div>
    </div>
  );
}
