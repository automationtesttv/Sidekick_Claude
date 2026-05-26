"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Work", href: "/#stats" },
  { label: "Pricing", href: "/#pricing" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-bg/80 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="max-w-[1280px] mx-auto px-6 h-[60px] flex items-center justify-between"
        >
          <Link
            href="/"
            className="font-body text-sm font-medium text-text tracking-tight shrink-0"
          >
            Sidekick<span className="text-accent">◆</span>Solutions
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-text-muted hover:text-text transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-1 px-4 py-2 rounded-full bg-accent text-bg text-sm font-medium hover:bg-accent/90 transition-colors duration-200"
            >
              Book a call →
            </Link>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              className="md:hidden text-text-muted hover:text-text transition-colors p-1"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 bg-bg flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-[60px] border-b border-border">
              <Link
                href="/"
                className="font-body text-sm font-medium text-text"
                onClick={() => setOpen(false)}
              >
                Sidekick<span className="text-accent">◆</span>Solutions
              </Link>
              <button
                aria-label="Close menu"
                className="text-text-muted hover:text-text transition-colors p-1"
                onClick={() => setOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-8">
              <ul className="space-y-8">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className="font-display text-[2.5rem] italic text-text hover:text-accent transition-colors duration-200"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.3 }}
                className="mt-14"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-accent text-bg text-sm font-medium"
                  onClick={() => setOpen(false)}
                >
                  Book a call →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
