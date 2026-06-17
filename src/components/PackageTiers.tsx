"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Button } from "./Button";
import type { Tier } from "@/lib/packages";

export function PackageTiers({ tiers }: { tiers: Tier[] }) {
  const cols =
    tiers.length === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : tiers.length === 3
        ? "md:grid-cols-3"
        : "md:grid-cols-2";

  return (
    <div className={`grid ${cols} gap-5`}>
      {tiers.map((tier, i) => (
        <motion.div
          key={tier.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" as const, delay: i * 0.07 }}
          className={`relative rounded-2xl p-7 flex flex-col ${
            tier.popular
              ? "bg-text text-bg border-2 border-text card-shadow-hover"
              : "bg-bg-elevated border border-border card-shadow"
          }`}
        >
          {tier.popular && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.18em] uppercase bg-accent text-white px-3 py-1.5 rounded-full whitespace-nowrap">
              Most popular
            </span>
          )}

          <p
            className={`font-mono text-[10px] tracking-[0.2em] uppercase mb-4 ${
              tier.popular ? "text-accent" : "text-text-subtle"
            }`}
          >
            {tier.name}
          </p>

          <div className="mb-1">
            <span
              className={`font-display font-medium text-[2.2rem] leading-none ${
                tier.popular ? "text-bg" : "text-text"
              }`}
            >
              {tier.price}
            </span>
          </div>
          {tier.priceNote && (
            <p
              className={`font-mono text-[11px] uppercase tracking-wider mb-5 ${
                tier.popular ? "text-bg/60" : "text-text-subtle"
              }`}
            >
              {tier.priceNote}
            </p>
          )}

          <p
            className={`text-[0.92rem] leading-[1.6] mb-6 ${
              tier.popular ? "text-bg/75" : "text-text-muted"
            }`}
          >
            {tier.summary}
          </p>

          <ul className="space-y-3 mb-8 flex-1">
            {tier.features.map((feature) => (
              <li key={feature} className="text-[0.88rem] flex items-start gap-2.5">
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                    tier.popular ? "bg-accent text-white" : "bg-accent-soft text-accent"
                  }`}
                >
                  <Check size={11} strokeWidth={3} />
                </span>
                <span className={tier.popular ? "text-bg/90" : "text-text"}>
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
  );
}
