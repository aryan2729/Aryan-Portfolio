"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  src: string;
  maxWidth?: string;
}

export default function ExpandableVideo({
  src,
  maxWidth = "620px",
}: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => setMounted(true), []);

  /* ---------------- PLAY / PAUSE ON VISIBILITY ---------------- */
  useEffect(() => {
    if (!videoRef.current) return;
    const video = videoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting && !open) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [open]);

  /* ---------------- PAUSE WHEN ANOTHER VIDEO OPENS ---------------- */
  useEffect(() => {
    const pauseSelf = () => {
      videoRef.current?.pause();
    };

    window.addEventListener("video:pause-all", pauseSelf);
    return () => window.removeEventListener("video:pause-all", pauseSelf);
  }, []);

  /* ---------------- ESC TO CLOSE MODAL ---------------- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);


  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  

  /* ---------------- OPEN MODAL ---------------- */
  const openModal = () => {
    // Pause all other videos
    window.dispatchEvent(new Event("video:pause-all"));
    setOpen(true);
  };

  return (
    <>
      {/* INLINE VIDEO */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        onClick={openModal}
        className="relative border rounded-2xl p-[1.5px] cursor-pointer group"
        style={{ maxWidth }}
      >
        <div className="relative rounded-2xl overflow-hidden">
          <video
            ref={videoRef}
            src={src}
            loop
            muted
            playsInline
            preload="none"
            className="w-full h-full object-cover"
          />

          {/* HOVER HINT */}
          <div
            className="
              pointer-events-none
              absolute inset-0
              flex items-center justify-center
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              bg-black/30
            "
          >
            <span
              className="
                px-4 py-2
                text-sm font-medium
                text-white
                rounded-full
                bg-black/70
                backdrop-blur
              "
            >
              Click to expand
            </span>
          </div>
        </div>
      </motion.div>

      {/* EXPANDED VIEW */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <>
             
               {/* BACKDROP */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className="fixed inset-0 bg-black/60 z-40"
  onClick={() => setOpen(false)}
/>

{/* MODAL */}
<motion.div
  initial={{ scale: 0.85, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0.85, opacity: 0 }}
  transition={{ type: "spring", stiffness: 180, damping: 22 }}
  className="
    fixed inset-0 z-50
    flex items-center justify-center p-6
    pointer-events-none
    isolation-isolate
  "
>
  <div
    onClick={(e) => e.stopPropagation()}
    className="
      pointer-events-auto
      max-w-5xl w-full
      rounded-3xl
      bg-black
      shadow-2xl
    "
  >
    <video
      src={src}
      autoPlay
      loop
      muted
      controls
      className="
        w-full h-full object-cover
        [filter:none]
        [mix-blend-mode:normal]
      "
    />
  </div>
</motion.div>

              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
