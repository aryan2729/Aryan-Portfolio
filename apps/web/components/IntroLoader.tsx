"use client";

import DynamicText from "@/components/kokonutui/DynamicText";
import { useEffect } from "react";

export default function IntroLoader({
  onFinish,
}: {
  onFinish: () => void;
}) {
  useEffect(() => {
    const t = setTimeout(onFinish, 1800);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <div className="flex h-screen items-center justify-center bg-black">

      <div className="relative text-4xl md:text-6xl font-medium tracking-tight">

        <DynamicText />
      </div>
    </div>
  );
}
