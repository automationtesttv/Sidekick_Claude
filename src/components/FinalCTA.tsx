"use client";

import { motion } from "motion/react";
import { Button } from "./Button";

export function FinalCTA() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative max-w-[1280px] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] tracking-[-0.02em] text-text"
        >
          Ready to meet your{" "}
          <em>sidekick?</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
          className="mt-7 text-text-muted text-lg max-w-[400px] mx-auto leading-[1.65]"
        >
          Tell us about the work your team shouldn&apos;t be doing. We&apos;ll
          show you what a sidekick can change.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.2 }}
          className="mt-10"
        >
          <Button
            variant="primary"
            href="/contact"
            className="text-[0.95rem] px-8 py-3.5"
          >
            Book a call →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
