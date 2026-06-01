"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { SectionEyebrow } from "./SectionEyebrow";
import { Button } from "./Button";

const tiers = [
  {
    name: "Pilot",
    price: "$8k",
    period: "fixed",
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
    period: "fixed",
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
    period: "monthly",
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
    <section id="pricing" className="py-28 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <SectionEyebrow number="04" label="engagements" />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="mt-5 font-display font-medium text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.08] tracking-[-0.02em] text-text"
          >
            Pick your{" "}
            <em className="font-serif font-normal italic">starting point.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
            className="mt-5 text-text-muted text-[1.05rem] leading-[1.65]"
          >
            Fixed timelines, fixed prices, and no monthly retainers unless you
            want them.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const, delay: i * 0.08 }}
              className={`relative rounded-2xl p-8 md:p-10 flex flex-col ${
                tier.popular
                  ? "bg-text text-bg border-2 border-text card-shadow-hover"
                  : "bg-bg-elevated border border-border card-shadow"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.18em] uppercase bg-accent text-white px-3 py-1.5 rounded-full">
                  Most popular
                </span>
              )}

              <div className="mb-8">
                <p
                  className={`font-mono text-[10px] tracking-[0.2em] uppercase mb-5 ${
                    tier.popular ? "text-accent" : "text-text-subtle"
                  }`}
                >
                  {tier.name}
                </p>
                <div className="flex items-baseline gap-2 mb-5">
                  <span
                    className={`font-display font-medium text-[2.8rem] leading-none ${
                      tier.popular ? "text-bg" : "text-text"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`font-mono text-xs uppercase tracking-wider ${
                      tier.popular ? "text-bg/60" : "text-text-subtle"
                    }`}
                  >
                    {tier.period}
                  </span>
                </div>
                <p
                  className={`text-[0.95rem] leading-[1.65] ${
                    tier.popular ? "text-bg/75" : "text-text-muted"
                  }`}
                >
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-[0.9rem] flex items-start gap-3"
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        tier.popular
                          ? "bg-accent text-white"
                          : "bg-accent-soft text-accent"
                      }`}
                    >
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span
                      className={tier.popular ? "text-bg/90" : "text-text"}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.popular ? "primary" : "ghost"}
                href="/contact"
                className="w-full"
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
