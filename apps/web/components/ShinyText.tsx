import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
}) => {
  return (
    <span
      className={`text-[#b5b5b5a4] bg-clip-text inline-block hover:opacity-100 opacity-70 transition-opacity ${
        disabled ? "" : "animate-[shine_var(--shine-speed)_linear_infinite]"
      } ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 60%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        "--shine-speed": `${speed}s`,
      } as React.CSSProperties}
    >
      {text}
    </span>
  );
};

export default ShinyText;
