"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "./Button";

export function FinalCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        <div className="relative bg-text text-bg rounded-3xl px-8 md:px-16 py-20 md:py-24 text-center overflow-hidden">
          {/* Accent glow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(79, 70, 229, 0.35) 0%, transparent 65%)",
              }}
            />
          </div>

          <div className="relative">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
              className="font-mono text-xs tracking-[0.22em] text-accent uppercase mb-6"
            >
              [ ready when you are ]
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.05 }}
              className="font-display font-medium text-[clamp(1.9rem,6.5vw,4.5rem)] leading-[1.05] tracking-[-0.02em] text-bg"
            >
              Ready to meet your{" "}
              <em className="font-serif font-normal italic text-accent">
                sidekick?
              </em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
              className="mt-7 text-bg/75 text-lg max-w-[500px] mx-auto leading-[1.65]"
            >
              Tell us about the work your team shouldn&apos;t be doing.
              We&apos;ll show you what a sidekick can change in 30 minutes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.2 }}
              className="mt-10 flex items-center justify-center gap-3 flex-wrap"
            >
              <Button variant="primary" href="/contact" className="px-8 py-4 text-base">
                Book a free call →
              </Button>
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-body font-medium border border-white/20 text-white hover:bg-white/[0.08] hover:border-white/40 transition-all duration-200"
              >
                See pricing
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
