"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SectionEyebrow } from "./SectionEyebrow";
import { Button } from "./Button";
import { packages } from "@/lib/packages";

export function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <SectionEyebrow number="04" label="packages" />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="mt-5 font-display font-medium text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.08] tracking-[-0.02em] text-text"
          >
            Clear pricing, in{" "}
            <em className="font-serif font-normal italic">ringgit.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
            className="mt-5 text-text-muted text-[1.05rem] leading-[1.65]"
          >
            Three ways we help you do more with less — fixed scopes, no per-seat
            games, and full ownership at the end.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {packages.map((cat, i) => {
            const Icon = cat.icon;
            const from = cat.fromLabel ?? `From ${cat.tiers[0].price}`;
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: "easeOut" as const, delay: i * 0.08 }}
              >
                <Link
                  href={`/packages/${cat.slug}`}
                  className="group relative bg-bg-elevated border border-border rounded-2xl p-8 card-shadow hover:card-shadow-hover hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300 mb-6">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display font-medium text-2xl text-text tracking-tight mb-3">
                    {cat.title}{" "}
                    <em className="font-serif font-normal italic">
                      {cat.titleEmphasis}
                    </em>
                  </h3>
                  <p className="text-text-muted text-[0.95rem] leading-[1.6] mb-6 flex-1">
                    {cat.tagline}
                  </p>
                  <div className="flex items-center justify-between pt-5 border-t border-border">
                    <span className="font-mono text-[11px] text-text-subtle uppercase tracking-wider">
                      {from}
                    </span>
                    <span className="flex items-center gap-1.5 text-accent font-medium text-sm">
                      View plans
                      <ArrowRight
                        size={15}
                        className="group-hover:translate-x-0.5 transition-transform duration-200"
                      />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="ghost" href="/packages" className="px-7 py-3.5">
            See all packages &amp; add-ons
          </Button>
        </div>
      </div>
    </section>
  );
}
