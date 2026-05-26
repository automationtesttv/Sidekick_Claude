"use client";

import { motion } from "motion/react";
import { SectionEyebrow } from "./SectionEyebrow";
import { Button } from "./Button";

const STAGGER = 0.06;
const DURATION = 0.6;

const trustedLogos = ["NORTHWIND", "ACME◇", "Lumen/Co", "Helio", "Parallax▴"];

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: DURATION, ease: "easeOut" as const, delay },
  };
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-24 px-6 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="relative max-w-[1280px] mx-auto w-full">
        <motion.div {...fadeUp(0)}>
          <SectionEyebrow label="AI automation, designed for operators" />
        </motion.div>

        <motion.h1
          {...fadeUp(STAGGER)}
          className="mt-8 font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.93] tracking-[-0.02em] text-text"
        >
          Build your{" "}
          <em className="not-italic font-display italic">sidekick</em>
          <span className="text-accent">.</span>
          <span
            aria-hidden="true"
            className="inline-block w-[0.08em] h-[0.8em] ml-2 align-[-0.05em] bg-accent animate-blink"
          />
        </motion.h1>

        <motion.p
          {...fadeUp(STAGGER * 2)}
          className="mt-8 max-w-[480px] text-[1.1rem] text-text-muted leading-[1.65] font-body"
        >
          We design and deploy custom AI agents that do the work your team
          shouldn&apos;t have to.
        </motion.p>

        <motion.div
          {...fadeUp(STAGGER * 3)}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Button variant="primary" href="/contact" className="px-6 py-3">
            Book a call →
          </Button>
          <Button variant="ghost" href="/#process" className="px-6 py-3">
            See how it works
          </Button>
        </motion.div>

        <motion.div
          {...fadeUp(STAGGER * 4)}
          className="mt-24 pt-8 border-t border-border"
        >
          <p className="font-mono text-[10px] tracking-[0.22em] text-text-subtle uppercase mb-5">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {trustedLogos.map((logo) => (
              <span
                key={logo}
                className="font-mono text-xs text-text-subtle tracking-wider"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
