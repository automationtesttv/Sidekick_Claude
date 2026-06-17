"use client";

import { motion } from "motion/react";
import {
  Sparkles,
  MessageSquare,
  Workflow,
  BookOpen,
  MessageCircle,
} from "lucide-react";
import { SectionEyebrow } from "./SectionEyebrow";
import {
  SalesMockup,
  SupportMockup,
  OpsMockup,
  KnowledgeMockup,
} from "./ServiceMockups";
import { WhatsAppMockup } from "./WhatsAppMockup";

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

const whatsappUseCases = [
  {
    title: "Client support",
    description:
      "FAQs, appointment bookings, and after-hours enquiries. The same patterns daily — one agent handles them on repeat, customers still get fast, helpful replies around the clock.",
  },
  {
    title: "Onboarding",
    description:
      "Collecting documents, sending welcome packs, setting expectations. First impressions are everything, and this flow follows the same steps every time. Perfect for automation.",
  },
  {
    title: "Reporting",
    description:
      "Weekly summaries, KPI tracking, and flagging issues early. Instead of pulling numbers manually, an agent compiles everything so Fridays are spent on growth, not spreadsheets.",
  },
  {
    title: "Troubleshooting",
    description:
      "Common issues triaged and diagnosed instantly. The agent walks customers through fixes, escalates the genuinely hard problems, and learns from every resolved case.",
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
            className="mt-5 font-display font-medium text-[clamp(1.6rem,5.2vw,3.4rem)] leading-[1.08] tracking-[-0.02em] text-text"
          >
            Five kinds of{" "}
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

        {/* 2x2 grid of core services */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
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

        {/* Featured: WhatsApp Sidekick */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="relative bg-bg-elevated border border-border rounded-2xl overflow-hidden card-shadow"
        >
          {/* Decorative gradient strip */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(37, 211, 102, 0.6) 50%, transparent 100%)",
            }}
          />

          <div className="grid lg:grid-cols-[420px_1fr] gap-10 lg:gap-14 p-8 md:p-12">
            {/* Phone mockup */}
            <div className="flex items-center justify-center py-4">
              <WhatsAppMockup />
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366] text-white">
                    <MessageCircle size={20} strokeWidth={1.75} />
                  </div>
                  <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-[#25D366] uppercase bg-[#25D366]/10 border border-[#25D366]/25 px-2.5 py-1 rounded-full">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                    most requested
                  </span>
                </div>
                <span className="font-mono text-xs tracking-[0.18em] text-text-subtle uppercase">
                  / 05
                </span>
              </div>

              <h3 className="font-display font-medium text-[1.8rem] md:text-[2.2rem] text-text mb-3 tracking-tight leading-[1.1]">
                WhatsApp <em className="font-serif font-normal italic">Sidekick.</em>
              </h3>
              <p className="text-text-muted text-[1.05rem] leading-[1.65] mb-8 max-w-[560px]">
                Your customers already live in WhatsApp. Meet them there with
                an agent that handles the conversations that follow the same
                patterns every time — so your team handles the ones that
                don&apos;t.
              </p>

              {/* 4 use cases */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {whatsappUseCases.map((uc, i) => (
                  <div
                    key={uc.title}
                    className="bg-surface border border-border rounded-xl p-5"
                  >
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="font-mono text-[10px] text-text-subtle tracking-wider">
                        / 0{i + 1}
                      </span>
                      <h4 className="font-display font-medium text-base text-text">
                        {uc.title}
                      </h4>
                    </div>
                    <p className="text-[0.88rem] text-text-muted leading-[1.6]">
                      {uc.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Capability chips */}
              <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-border">
                <span className="font-mono text-[10px] text-text-subtle uppercase tracking-[0.18em] mr-2">
                  Built on
                </span>
                {[
                  "WhatsApp Business API",
                  "Twilio / Meta Cloud",
                  "Your CRM",
                  "Your booking system",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] text-text-muted bg-bg border border-border rounded-full px-3 py-1 uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
