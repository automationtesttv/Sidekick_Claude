"use client";

import { motion } from "motion/react";
import { SectionEyebrow } from "./SectionEyebrow";

const services = [
  {
    number: "/01",
    title: "Sales Sidekick",
    description:
      "Qualifies inbound leads automatically, drafts personalized outreach, and books meetings directly into your calendar — before a human has to look at anything.",
    capabilities: [
      "Lead scoring & qualification",
      "Outreach draft generation",
      "Calendar booking automation",
    ],
  },
  {
    number: "/02",
    title: "Support Sidekick",
    description:
      "Handles tier-1 tickets, escalates intelligently when a human is needed, and gets smarter from every interaction with your docs and past resolutions.",
    capabilities: [
      "Ticket resolution & triage",
      "Intelligent escalation routing",
      "Knowledge base learning",
    ],
  },
  {
    number: "/03",
    title: "Ops Sidekick",
    description:
      "Automates internal workflows, generates reports on schedule, and removes the back-and-forth from approval chains so things keep moving.",
    capabilities: [
      "Workflow automation",
      "Scheduled reporting",
      "Approval chain management",
    ],
  },
  {
    number: "/04",
    title: "Knowledge Sidekick",
    description:
      "A private brain for your company — searches your docs, surfaces past decisions, and answers the questions your team keeps asking each other.",
    capabilities: [
      "Document Q&A",
      "Decision & policy retrieval",
      "Onboarding acceleration",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-bg-elevated">
      <div className="max-w-[1280px] mx-auto">
        <SectionEyebrow number="02" label="what we build" />

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="mt-6 font-display text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] text-text"
        >
          Four kinds of <em>sidekicks.</em>
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-border rounded-sm overflow-hidden">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const, delay: i * 0.07 }}
              className="group relative bg-bg-elevated p-8 md:p-10 hover:bg-surface transition-colors duration-300 cursor-default"
            >
              <div className="mb-6">
                <span className="font-mono text-[1.6rem] text-text-subtle group-hover:text-accent transition-colors duration-300">
                  {service.number}
                </span>
              </div>

              <h3 className="font-display text-[1.4rem] text-text mb-3">
                {service.title}
              </h3>

              <p className="text-text-muted text-sm leading-[1.7] mb-7">
                {service.description}
              </p>

              <ul className="space-y-2.5">
                {service.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="font-mono text-[11px] text-text-subtle flex items-center gap-2.5"
                  >
                    <span className="text-accent text-[10px]">—</span>
                    {cap}
                  </li>
                ))}
              </ul>

              <div
                aria-hidden="true"
                className="absolute inset-0 border border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-sm"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
