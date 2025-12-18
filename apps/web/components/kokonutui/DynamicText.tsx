"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Greeting {
  text: string;
  language: string;
}

const greetings: Greeting[] = [
  { text: "नमस्ते", language: "Hindi" }, 
  { text: "Hello", language: "English" },
  { text: "こんにちは", language: "Japanese" },
  { text: "Bonjour", language: "French" },
  { text: "Hola", language: "Spanish" },
  { text: "안녕하세요", language: "Korean" },
  { text: "Ciao", language: "Italian" },
  { text: "Hallo", language: "German" },
  { text: "こんにちは", language: "Japanese" },
];

const DynamicText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;

        if (next >= greetings.length) {
          clearInterval(interval);
          setIsAnimating(false);
          return prev;
        }

        return next;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const currentGreeting = greetings[currentIndex];

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
  };

  return (
    <section className="flex min-h-[200px] items-center justify-center p-4">
      <div className="relative h-16 ">
        {isAnimating ? (
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              className="absolute left-1/2 -translate-x-1/2
                         flex items-center gap-2
                         text-4xl font-medium
                         whitespace-nowrap"
              initial={textVariants.hidden}
              animate={textVariants.visible}
              exit={textVariants.exit}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="h-2 w-2 rounded-full bg-black dark:bg-white" />
              {currentGreeting?.text}
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="absolute left-1/2 -translate-x-1/2
                          flex items-center gap-2
                          text-2xl font-medium
                          whitespace-nowrap">
            <div className="h-2 w-2 rounded-full bg-black dark:bg-white" />
            {currentGreeting?.text}
          </div>
        )}
      </div>
    </section>
  );
};

export default DynamicText;