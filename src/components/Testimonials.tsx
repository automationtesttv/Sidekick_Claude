"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import { SectionEyebrow } from "./SectionEyebrow";

const testimonials = [
  {
    quote:
      "Our support sidekick handled 68% of tier-1 tickets in the first month. The team finally has time to work on the hard problems again.",
    name: "Lena Park",
    role: "Head of Operations",
    company: "Northwind Logistics",
    initials: "LP",
  },
  {
    quote:
      "We went from spending two days on weekly board reports to thirty minutes of review. The sidekick pulls everything together and writes the first draft.",
    name: "Marcus Reilly",
    role: "VP, Revenue Ops",
    company: "Lumen/Co",
    initials: "MR",
  },
  {
    quote:
      "What I appreciated most was the handoff. The code is clean, the docs are real, and our team has been extending it without their help for months.",
    name: "Priya Anand",
    role: "CTO",
    company: "Helio Systems",
    initials: "PA",
  },
];

export function Testimonials() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <SectionEyebrow number="05" label="proof" />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="mt-5 font-display font-medium text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.08] tracking-[-0.02em] text-text"
          >
            What operators{" "}
            <em className="font-serif font-normal italic">actually say.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
            className="mt-5 text-text-muted text-[1.05rem] leading-[1.65]"
          >
            No vanity metrics, no fluff — just the people running the work.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const, delay: i * 0.08 }}
              className="bg-bg-elevated border border-border rounded-2xl p-8 card-shadow flex flex-col"
            >
              <div
                className="flex gap-0.5 mb-6"
                aria-label="5 out of 5 stars"
              >
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    size={14}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              <blockquote className="flex-1 mb-7">
                <p className="font-display text-[1.05rem] text-text leading-[1.55]">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              <figcaption className="flex items-center gap-3 pt-6 border-t border-border">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent font-mono text-xs font-medium">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-text leading-tight">
                    {t.name}
                  </p>
                  <p className="text-xs text-text-subtle mt-0.5 font-mono uppercase tracking-wider">
                    {t.role} · {t.company}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
