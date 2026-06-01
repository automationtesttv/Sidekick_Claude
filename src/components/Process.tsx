"use client";

import { motion } from "motion/react";
import { SectionEyebrow } from "./SectionEyebrow";

const steps = [
  {
    number: "01",
    week: "Week 01",
    title: "Discovery",
    description:
      "We map your workflows, identify the highest-leverage automation, and define precisely what your sidekick will and won't do.",
  },
  {
    number: "02",
    week: "Week 02",
    title: "Design",
    description:
      "We architect the agent — selecting the right model, tools, and integrations. You review and sign off before we write production code.",
  },
  {
    number: "03",
    week: "Weeks 03–04",
    title: "Build",
    description:
      "We build, test, and iterate with you in the loop. Daily async updates. If something doesn't feel right, we hear about it before it's baked in.",
  },
  {
    number: "04",
    week: "Week 04",
    title: "Deploy",
    description:
      "We deploy to your infrastructure, hand over the keys, and document everything. You own it completely from day one.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-28 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <SectionEyebrow number="03" label="how it works" />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="mt-5 font-display font-medium text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.08] tracking-[-0.02em] text-text"
          >
            From idea to deployed in{" "}
            <em className="font-serif font-normal italic">four weeks.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
            className="mt-5 text-text-muted text-[1.05rem] leading-[1.65]"
          >
            A fixed timeline, a fixed price, and full transparency at every
            stage.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const, delay: i * 0.08 }}
              className="relative bg-bg-elevated border border-border rounded-2xl p-7 card-shadow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white font-display text-lg font-medium mb-6">
                {step.number}
              </div>
              <span className="font-mono text-[10px] tracking-[0.18em] text-accent uppercase">
                {step.week}
              </span>
              <h3 className="mt-2 font-display font-medium text-xl text-text leading-snug">
                {step.title}
              </h3>
              <p className="mt-3 text-text-muted text-[0.95rem] leading-[1.65]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
