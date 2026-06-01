"use client";

import { motion } from "motion/react";
import { Sparkles, MessageSquare, Workflow, BookOpen } from "lucide-react";
import { SectionEyebrow } from "./SectionEyebrow";
import {
  SalesMockup,
  SupportMockup,
  OpsMockup,
  KnowledgeMockup,
} from "./ServiceMockups";

const services = [
  {
    number: "01",
    icon: Sparkles,
    title: "Sales Sidekick",
    description:
      "Qualifies inbound leads automatically, drafts personalized outreach, and books meetings directly into your calendar — before a human has to look at anything.",
    capabilities: [
      "Lead scoring & qualification",
      "Outreach draft generation",
      "Calendar booking automation",
    ],
    mockup: SalesMockup,
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Support Sidekick",
    description:
      "Handles tier-1 tickets, escalates intelligently when a human is needed, and gets smarter from every interaction with your docs and past resolutions.",
    capabilities: [
      "Ticket resolution & triage",
      "Intelligent escalation routing",
      "Knowledge base learning",
    ],
    mockup: SupportMockup,
  },
  {
    number: "03",
    icon: Workflow,
    title: "Ops Sidekick",
    description:
      "Automates internal workflows, generates reports on schedule, and removes the back-and-forth from approval chains so things keep moving.",
    capabilities: [
      "Workflow automation",
      "Scheduled reporting",
      "Approval chain management",
    ],
    mockup: OpsMockup,
  },
  {
    number: "04",
    icon: BookOpen,
    title: "Knowledge Sidekick",
    description:
      "A private brain for your company — searches your docs, surfaces past decisions, and answers the questions your team keeps asking each other.",
    capabilities: [
      "Document Q&A",
      "Decision & policy retrieval",
      "Onboarding acceleration",
    ],
    mockup: KnowledgeMockup,
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-surface">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <SectionEyebrow number="02" label="what we build" />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="mt-5 font-display font-medium text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.08] tracking-[-0.02em] text-text"
          >
            Four kinds of{" "}
            <em className="font-serif font-normal italic">sidekicks.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
            className="mt-5 text-text-muted text-[1.05rem] leading-[1.65]"
          >
            Pick the agent that matches your highest-leverage workflow. Each
            one ships with a live, working interface — these are real previews.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            const Mockup = service.mockup;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: "easeOut" as const, delay: i * 0.06 }}
                className="group relative bg-bg-elevated border border-border rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Mini animated mockup */}
                <Mockup />

                <div className="p-8 md:p-9">
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                    <span className="font-mono text-xs tracking-[0.18em] text-text-subtle uppercase">
                      / {service.number}
                    </span>
                  </div>

                  <h3 className="font-display font-medium text-[1.5rem] text-text mb-3 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-text-muted text-base leading-[1.65] mb-7">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 pt-6 border-t border-border">
                    {service.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="font-mono text-xs text-text-subtle flex items-center gap-2.5 uppercase tracking-wider"
                      >
                        <span className="text-accent">+</span>
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
