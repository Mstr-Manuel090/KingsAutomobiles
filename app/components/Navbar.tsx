"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/showroom", label: "Showroom" },
  { href: "/#about", label: "About Us" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full border-b transition-all duration-500 ${
        scrolled
          ? "border-blue-500/20 bg-black/90 backdrop-blur-xl shadow-[0_0_30px_rgba(59,130,246,0.08)]"
          : "border-transparent bg-black/50"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group flex items-center gap-2"
        >
          <span className="text-2xl font-bold tracking-tight text-white transition-all duration-300 group-hover:tracking-wider">
            KINGS
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-300 group-hover:to-blue-500">
              AUTOMOBILES
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative px-4 py-2 text-sm font-medium uppercase tracking-widest transition-colors duration-300 after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-3/4 ${
                pathname === l.href
                  ? "text-blue-400 after:w-3/4"
                  : "text-zinc-400 hover:text-blue-400"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1 md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "translate-y-1.5 rotate-45 bg-blue-400" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "-translate-y-1.5 -rotate-45 bg-blue-400" : ""}`} />
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-black/95 transition-all duration-300 md:hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 px-6 py-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-widest transition-all duration-300 hover:bg-blue-500/10 ${
                pathname === l.href
                  ? "text-blue-400 bg-blue-500/10"
                  : "text-zinc-400 hover:text-blue-400"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
