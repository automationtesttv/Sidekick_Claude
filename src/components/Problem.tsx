"use client";

import { motion } from "motion/react";
import { SectionEyebrow } from "./SectionEyebrow";

export function Problem() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-[1280px] mx-auto">
        <SectionEyebrow number="01" label="why sidekicks" />

        <div className="mt-14 grid md:grid-cols-[1fr_1fr] gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <h2 className="font-display text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] text-text">
              Your team is drowning in{" "}
              <em>repetitive</em> work.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
            className="flex flex-col justify-start space-y-5 pt-2"
          >
            <p className="text-text-muted leading-[1.75] text-[0.95rem]">
              Every business runs on a core of skilled people doing work that
              matters. But surrounding that core is a layer of tasks that are
              mechanical, repetitive, and beneath them — qualifying every inbound
              lead, answering the same support questions, chasing approvals,
              searching buried documents.
            </p>
            <p className="text-text-muted leading-[1.75] text-[0.95rem]">
              Generic AI tools don&apos;t solve this. A chatbot isn&apos;t an
              agent. Plugging in ChatGPT isn&apos;t a workflow. What works is a
              sidekick — a system specific to your operation, connected to your
              actual data, and built around the way your business actually runs.
            </p>
            <p className="text-text-muted leading-[1.75] text-[0.95rem]">
              We build those systems. Not templates. Not white-labeled products.
              Purpose-built agents, owned entirely by you.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
