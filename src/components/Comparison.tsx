"use client";

import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { SectionEyebrow } from "./SectionEyebrow";

const oldWay = [
  "Reps spend hours qualifying leads that go nowhere",
  "Support team drowns in repeat tier-1 questions",
  "Approval chains stall in someone's DMs for days",
  "Generic AI tools that bolt on but don't integrate",
  "Tribal knowledge buried in Slack threads from 2022",
];

const newWay = [
  "Sidekick qualifies and routes leads before lunch",
  "Tier-1 tickets resolved automatically, humans handle the rest",
  "Approval workflows run on schedule, escalate when needed",
  "Purpose-built agents wired into your actual stack",
  "A private brain that searches every doc and decision",
];

export function Comparison() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <SectionEyebrow number="01" label="why sidekicks" />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="mt-5 font-display font-medium text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.08] tracking-[-0.02em] text-text"
          >
            Most teams are still doing this the{" "}
            <em className="font-serif font-normal italic">hard way.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
            className="mt-5 text-text-muted text-[1.05rem] leading-[1.65]"
          >
            Generic AI tools don&apos;t solve real workflow problems. A purpose-built
            sidekick does.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Old way */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.05 }}
            className="bg-bg-elevated border border-border rounded-2xl p-8 md:p-10 card-shadow"
          >
            <div className="flex items-center justify-between mb-7">
              <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-text-subtle uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-danger" />
                The old way
              </span>
              <span className="font-mono text-[10px] tracking-wider text-text-subtle uppercase">
                Without a sidekick
              </span>
            </div>
            <h3 className="font-display font-medium text-2xl text-text mb-7 leading-snug">
              Your team drowning in{" "}
              <em className="font-serif font-normal italic text-text-muted">
                repetitive
              </em>{" "}
              work.
            </h3>
            <ul className="space-y-4">
              {oldWay.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-danger-soft text-danger">
                    <X size={12} strokeWidth={3} />
                  </span>
                  <span className="text-text-muted text-[0.95rem] leading-[1.6]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* New way */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.15 }}
            className="relative bg-bg-elevated border-2 border-accent rounded-2xl p-8 md:p-10 card-shadow"
          >
            <div className="flex items-center justify-between mb-7">
              <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                The sidekick way
              </span>
              <span className="font-mono text-[10px] tracking-wider text-accent uppercase">
                With Sidekick Solutions
              </span>
            </div>
            <h3 className="font-display font-medium text-2xl text-text mb-7 leading-snug">
              Custom agents doing the{" "}
              <em className="font-serif font-normal italic text-accent">
                real
              </em>{" "}
              work.
            </h3>
            <ul className="space-y-4">
              {newWay.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-text text-[0.95rem] leading-[1.6]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
