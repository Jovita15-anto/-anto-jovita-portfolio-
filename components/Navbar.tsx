"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 border-b border-[#D8D2C6] bg-[#F7F4EE]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">

        {/* Logo */}
        <Link href="/" onClick={() => setIsOpen(false)}>
          <div className="font-[var(--font-playfair)] text-2xl text-[#1F2933]">
            Anto Jovita
          </div>

          <div className="mt-1 text-[9px] font-medium tracking-[0.35em] text-[#294C42]">
            TECHNOLOGY × CREATIVITY
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <Link href="/" className="nav-link">
            Home
          </Link>

          <Link href="#technology" className="nav-link">
            Technology
          </Link>

          <Link href="#creativity" className="nav-link">
            Creativity
          </Link>

          <Link href="#about" className="nav-link">
            About
          </Link>

        </div>

        {/* Desktop Connect */}
        <Link
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-[#294C42] px-5 py-3 text-sm text-white transition hover:bg-[#1F2933] md:flex"
        >
          Let's Connect
          <ArrowRight size={16} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center text-[#1F2933] md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-[#D8D2C6] bg-[#F7F4EE] px-6 py-6 md:hidden">

          <div className="flex flex-col gap-5">

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-base text-[#1F2933]"
            >
              Home
            </Link>

            <Link
              href="#technology"
              onClick={() => setIsOpen(false)}
              className="text-base text-[#1F2933]"
            >
              Technology
            </Link>

            <Link
              href="#creativity"
              onClick={() => setIsOpen(false)}
              className="text-base text-[#1F2933]"
            >
              Creativity
            </Link>

            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-base text-[#1F2933]"
            >
              About
            </Link>

            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex w-fit items-center gap-2 rounded-full bg-[#294C42] px-5 py-3 text-sm text-white"
            >
              Let's Connect
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>
      )}
    </nav>
  );
}