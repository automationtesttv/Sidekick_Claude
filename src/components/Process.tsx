"use client";

import { motion } from "motion/react";
import { SectionEyebrow } from "./SectionEyebrow";

const steps = [
  {
    week: "Week 01",
    title: "Discovery",
    description:
      "We map your workflows, identify the highest-leverage automation, and define precisely what your sidekick will and won't do. You get a written spec before we write code.",
    tag: "Discovery",
  },
  {
    week: "Week 02",
    title: "Design",
    description:
      "We architect the agent — selecting the right model, tools, and integrations. You review and sign off. No black boxes, no surprises.",
    tag: "Design",
  },
  {
    week: "Weeks 03–04",
    title: "Build",
    description:
      "We build, test, and iterate with you in the loop. Daily async updates. If something doesn't feel right, we hear about it before it's baked in.",
    tag: "Build",
  },
  {
    week: "Week 04",
    title: "Deploy",
    description:
      "We deploy to your infrastructure, hand over the keys, and document everything. You own it completely from day one.",
    tag: "Deploy",
  },
];

export function Process() {
  return (
    <section id="process" className="py-32 px-6">
      <div className="max-w-[1280px] mx-auto">
        <SectionEyebrow number="03" label="how it works" />

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="mt-6 font-display text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] text-text"
        >
          From idea to deployed in <em>four weeks.</em>
        </motion.h2>

        <div className="mt-20 relative">
          <div
            aria-hidden="true"
            className="absolute left-0 md:left-[200px] top-2 bottom-2 w-px"
            style={{ background: "var(--border)" }}
          />
          <div
            aria-hidden="true"
            className="absolute left-0 md:left-[200px] top-2 bottom-2 w-px animate-pulse-line"
            style={{ background: "var(--accent)", opacity: 0.5 }}
          />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.week}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" as const, delay: i * 0.1 }}
                className="relative flex flex-col md:flex-row gap-0 pb-14 last:pb-0"
              >
                <div className="md:w-[200px] shrink-0 flex md:justify-end md:pr-10 pb-2 md:pb-0 pl-6 md:pl-0 pt-0.5">
                  <span className="font-mono text-[11px] tracking-[0.15em] text-accent uppercase">
                    {step.week}
                  </span>
                </div>

                <div
                  aria-hidden="true"
                  className="hidden md:block absolute left-[200px] top-2 w-2 h-2 rounded-full bg-accent -translate-x-[3.5px]"
                />

                <div className="pl-6 md:pl-10 flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                  <div className="max-w-[500px]">
                    <h3 className="font-display text-[1.2rem] text-text mb-2.5">
                      {step.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-[1.75]">
                      {step.description}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.15em] text-text-subtle border border-border px-3 py-1.5 rounded self-start whitespace-nowrap uppercase">
                    {step.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
