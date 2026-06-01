"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import { Button } from "./Button";

const STAGGER = 0.06;
const DURATION = 0.6;

const trustedLogos = ["NORTHWIND", "ACME◇", "Lumen/Co", "Helio", "Parallax▴"];

const heroMetrics = [
  { value: "95%", label: "of repetitive work automated" },
  { value: "4 wks", label: "from kickoff to production" },
  { value: "100%", label: "owned by the client" },
];

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: DURATION, ease: "easeOut" as const, delay },
  };
}

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* Soft accent bloom */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative max-w-[1100px] mx-auto w-full text-center">
        {/* Star rating */}
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 mb-7"
        >
          <div className="flex gap-0.5" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className="fill-accent text-accent"
              />
            ))}
          </div>
          <span className="font-mono text-xs tracking-wider text-text-muted">
            Trusted by operators at 12+ companies
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(STAGGER)}
          className="font-display font-medium text-[clamp(3rem,7.5vw,5.8rem)] leading-[1.02] tracking-[-0.025em] text-text"
        >
          AI sidekicks that do the work
          <br />
          your team{" "}
          <em className="font-serif font-normal italic text-accent">
            shouldn&apos;t
          </em>{" "}
          have to.
        </motion.h1>

        {/* Sub */}
        <motion.p
          {...fadeUp(STAGGER * 2)}
          className="mt-7 max-w-[640px] mx-auto text-[1.15rem] text-text-muted leading-[1.6]"
        >
          We design and deploy custom AI agents for small and mid-sized teams —
          lead qualification, support, ops automation. Built around the way you
          actually work, owned entirely by you.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(STAGGER * 3)}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button variant="primary" href="/contact" className="px-7 py-3.5 text-base">
            Book a free call →
          </Button>
          <Button variant="ghost" href="/#process" className="px-7 py-3.5 text-base">
            See how it works
          </Button>
        </motion.div>

        {/* Metrics row */}
        <motion.div
          {...fadeUp(STAGGER * 4)}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-[860px] mx-auto"
        >
          {heroMetrics.map((m) => (
            <div
              key={m.label}
              className="bg-bg-elevated border border-border rounded-xl px-5 py-4 text-left card-shadow"
            >
              <div className="font-display text-2xl font-medium text-text leading-none tabular-nums">
                {m.value}
              </div>
              <p className="mt-2 text-sm text-text-muted leading-snug">
                {m.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Trusted by */}
        <motion.div
          {...fadeUp(STAGGER * 5)}
          className="mt-20 pt-10 border-t border-border"
        >
          <p className="font-mono text-[11px] tracking-[0.22em] text-text-subtle uppercase mb-6">
            Working with teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustedLogos.map((logo) => (
              <span
                key={logo}
                className="font-mono text-sm text-text-subtle tracking-wider"
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
