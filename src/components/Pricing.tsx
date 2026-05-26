"use client";

import { motion } from "motion/react";
import { SectionEyebrow } from "./SectionEyebrow";
import { Button } from "./Button";

const tiers = [
  {
    name: "Pilot",
    price: "$8k",
    description:
      "A two-week proof of concept. Enough to show your team what's possible and prove the value before a bigger commitment.",
    features: [
      "Single-workflow automation",
      "One integration point",
      "Two weeks, fixed timeline",
      "Full handoff documentation",
      "One round of revisions",
    ],
    cta: "Start a Pilot",
    popular: false,
  },
  {
    name: "Build",
    price: "$24k",
    description:
      "A complete sidekick, fully deployed and integrated into your stack. Fixed scope, fixed timeline, fixed price.",
    features: [
      "Full agent design & build",
      "Up to four integrations",
      "Four weeks, fixed timeline",
      "Production deployment",
      "Two weeks post-launch support",
    ],
    cta: "Start Building",
    popular: true,
  },
  {
    name: "Partner",
    price: "Custom",
    description:
      "Ongoing engagement for teams that want to keep building. New sidekicks quarterly, continuous optimization, a team that knows your stack.",
    features: [
      "Quarterly new sidekick deploys",
      "Continuous optimization",
      "Priority support SLA",
      "Architecture review access",
      "Dedicated Slack channel",
    ],
    cta: "Talk to us",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-[1280px] mx-auto">
        <SectionEyebrow number="04" label="engagements" />

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="mt-6 font-display text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] text-text"
        >
          Pick your <em>starting point.</em>
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const, delay: i * 0.09 }}
              className={`relative bg-bg p-8 md:p-10 flex flex-col ${
                tier.popular ? "ring-1 ring-accent ring-inset" : ""
              }`}
            >
              {tier.popular && (
                <span className="absolute top-6 right-6 font-mono text-[9px] tracking-[0.18em] text-accent border border-accent px-2.5 py-1 uppercase">
                  most popular
                </span>
              )}

              <div className="mb-8">
                <p className="font-mono text-[10px] tracking-[0.2em] text-text-subtle uppercase mb-4">
                  {tier.name}
                </p>
                <div className="font-display text-[2.4rem] text-text leading-none mb-4">
                  {tier.price}
                </div>
                <p className="text-text-muted text-sm leading-[1.7]">
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="font-mono text-[11px] text-text-subtle flex items-start gap-2.5"
                  >
                    <span className="text-accent mt-px shrink-0">—</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.popular ? "primary" : "ghost"}
                href="/contact"
                className="w-full justify-center"
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
