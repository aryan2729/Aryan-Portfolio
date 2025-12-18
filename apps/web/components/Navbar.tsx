"use client";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-black/60 backdrop-blur-md">
      {/* ✨ Soft cinematic bottom outline */}
      <div
        className="
          pointer-events-none
          absolute bottom-0 left-0
          h-px w-full
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
        "
      />

      <nav className="mx-auto flex h-auto md:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 flex-col md:flex-row gap-2 md:gap-0">

        {/* LOGO */}
        <a
          href="#home"
          className="group relative flex items-center overflow-hidden text-2xl font-semibold tracking-wide text-white"
        >
          <span className="z-10">A</span>
          <span className="inline-block overflow-hidden">
            <span className="inline-block translate-x-[-12px] opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100">
              ryan
            </span>
          </span>
        </a>

        {/* NAV */}
        <ul className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-6 md:gap-12 text-xs sm:text-sm md:text-lg">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="group inline-flex items-center justify-center text-lg font-medium text-white/90 hover:text-white"
              >
                <span className="flex items-center justify-center">

                  {/* Left bracket */}
                  <span className="text-white/80   transition-transform duration-300 group-hover:-translate-x-1">
                    [
                  </span>

                  {/* Text */}
                  <span
                    className="
                      relative
                      flex
                      h-[1.2em]
                      items-center
                      justify-center
                      overflow-hidden
                      px-2
                      transition-all
                      duration-300
                      group-hover:px-5
                      text-white/90
                    "
                  >
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                      {item.name}
                    </span>
                    <span className="absolute left-1/2 top-full -translate-x-1/2 transition-transform duration-300 group-hover:-translate-y-full">
                      {item.name}
                    </span>
                  </span>

                  {/* Right bracket */}
                  <span className="text-white/80  transition-transform duration-300 group-hover:translate-x-1">
                    ]
                  </span>

                </span>
              </a>
            </li>
          ))}
        </ul>

      </nav>
    </header>
  );
}
