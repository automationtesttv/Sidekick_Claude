"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { SectionEyebrow } from "./SectionEyebrow";
import { Button } from "./Button";

const presets = [
  "Customer support ticket deflection",
  "Inbound lead qualification & scoring",
  "Internal document & policy Q&A",
  "Automated reporting & approval chains",
];

const budgetOptions = [
  "Under $10k (Pilot)",
  "$10k – $25k (Build)",
  "$25k – $50k",
  "$50k+ (Enterprise / Partner)",
];

export function CustomSidekick() {
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function applyPreset(preset: string) {
    setDescription((prev) =>
      prev ? `${prev.trimEnd()}\n${preset}` : preset
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-32 px-6 bg-bg-elevated">
      <div className="max-w-[1280px] mx-auto">
        <SectionEyebrow label="custom build" />

        <div className="mt-14 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — description */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <h2 className="font-display text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] text-text">
              Request a custom <em>AI sidekick.</em>
            </h2>
            <p className="mt-6 text-text-muted text-[0.95rem] leading-[1.75]">
              Tell us about the workflow you want automated. We&apos;ll scope
              it, design it, and send back a written proposal with a fixed price
              — no commitment required.
            </p>

            <ul className="mt-10 space-y-5">
              {[
                "Your inputs go directly into our scoping process",
                "We map trigger points, integrations, and outputs",
                "You receive a written proposal with timeline and fixed price",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="font-mono text-[11px] text-accent mt-0.5 shrink-0 w-5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-text-muted text-sm leading-[1.75]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
          >
            {submitted ? (
              <div className="flex items-start gap-4 p-7 border border-border bg-bg">
                <span
                  aria-label="Success"
                  className="text-accent text-xl leading-none mt-0.5 shrink-0"
                >
                  ✓
                </span>
                <div>
                  <p className="font-body text-text font-medium mb-1">
                    Proposal request received.
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    We&apos;ll scope your sidekick and be back within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] tracking-[0.18em] text-text-subtle uppercase">
                      Your name
                    </label>
                    <input
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="e.g. Jane Smith"
                      className="bg-bg border border-border px-4 py-3 text-sm text-text placeholder:text-text-subtle focus:outline-none focus:border-accent transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] tracking-[0.18em] text-text-subtle uppercase">
                      Work email
                    </label>
                    <input
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      className="bg-bg border border-border px-4 py-3 text-sm text-text placeholder:text-text-subtle focus:outline-none focus:border-accent transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] tracking-[0.18em] text-text-subtle uppercase">
                      Company
                    </label>
                    <input
                      type="text"
                      autoComplete="organization"
                      placeholder="e.g. Acme Industries"
                      className="bg-bg border border-border px-4 py-3 text-sm text-text placeholder:text-text-subtle focus:outline-none focus:border-accent transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] tracking-[0.18em] text-text-subtle uppercase">
                      Approx. budget
                    </label>
                    <div className="relative">
                      <select
                        className="w-full bg-bg border border-border px-4 py-3 text-sm text-text focus:outline-none focus:border-accent transition-colors duration-200 appearance-none cursor-pointer pr-8"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select range
                        </option>
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[10px] text-text-subtle"
                      >
                        ▾
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] tracking-[0.18em] text-text-subtle uppercase">
                    Describe the process to automate
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="e.g. Resolving support tickets and routing escalations from Slack into HubSpot..."
                    className="bg-bg border border-border px-4 py-3 text-sm text-text placeholder:text-text-subtle focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
                  />
                </div>

                <div>
                  <p className="font-mono text-[10px] tracking-[0.15em] text-text-subtle uppercase mb-3">
                    Quick presets
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {presets.map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => applyPreset(preset)}
                        className="font-mono text-[10px] text-text-subtle border border-border px-3 py-1.5 hover:border-accent hover:text-accent transition-colors duration-200 cursor-pointer"
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full justify-center py-3.5 text-[0.95rem]"
                  >
                    Request Custom Sidekick →
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
