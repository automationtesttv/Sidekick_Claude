"use client";

import { useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { Button } from "@/components/Button";
import { submitContact } from "@/lib/supabase/submissions";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [work, setWork] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);
    setSubmitting(true);

    const result = await submitContact({
      name,
      email,
      company,
      work_description: work,
    });

    setSubmitting(false);
    if (result.ok) {
      setSubmitted(true);
    } else {
      setErrorMsg(result.error);
    }
  }

  return (
    <>
      <Nav />
      <main className="min-h-[100dvh] pt-32 pb-32 px-6">
        <div className="max-w-[640px] mx-auto">
          <div className="text-center mb-12">
            <SectionEyebrow label="get in touch" />
            <h1 className="mt-5 font-display font-medium text-[clamp(1.9rem,6.5vw,4rem)] leading-[1.05] tracking-[-0.025em] text-text">
              Let&apos;s{" "}
              <em className="font-serif font-normal italic">talk.</em>
            </h1>
            <p className="mt-5 text-text-muted text-[1.05rem] leading-[1.65]">
              Tell us what you&apos;re working with. The more specific you are,
              the faster we can figure out if we&apos;re a good fit.
            </p>
          </div>

          {submitted ? (
            <div className="bg-bg-elevated border border-border rounded-2xl p-8 card-shadow flex items-start gap-4">
              <span
                aria-label="Success"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white text-lg leading-none"
              >
                ✓
              </span>
              <div>
                <p className="font-display text-xl font-medium text-text mb-2">
                  Got it. We&apos;ll be in touch within 24 hours.
                </p>
                <p className="text-text-muted text-base leading-[1.65]">
                  In the meantime, feel free to read more about{" "}
                  <a href="/#process" className="text-accent hover:underline">
                    how we work
                  </a>
                  .
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-bg-elevated border border-border rounded-2xl p-8 md:p-10 card-shadow space-y-6"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="font-mono text-[10px] tracking-[0.18em] text-text-subtle uppercase"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={submitting}
                    className="bg-bg border border-border rounded-lg px-4 py-3 text-base text-text placeholder:text-text-subtle focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all duration-200 disabled:opacity-60"
                    placeholder="Your name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-mono text-[10px] tracking-[0.18em] text-text-subtle uppercase"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={submitting}
                    className="bg-bg border border-border rounded-lg px-4 py-3 text-base text-text placeholder:text-text-subtle focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all duration-200 disabled:opacity-60"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="company"
                  className="font-mono text-[10px] tracking-[0.18em] text-text-subtle uppercase"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  disabled={submitting}
                  className="bg-bg border border-border rounded-lg px-4 py-3 text-base text-text placeholder:text-text-subtle focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all duration-200 disabled:opacity-60"
                  placeholder="Where you work"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="work"
                  className="font-mono text-[10px] tracking-[0.18em] text-text-subtle uppercase"
                >
                  What&apos;s the work your team shouldn&apos;t be doing?
                </label>
                <textarea
                  id="work"
                  name="work"
                  required
                  rows={5}
                  value={work}
                  onChange={(e) => setWork(e.target.value)}
                  disabled={submitting}
                  className="bg-bg border border-border rounded-lg px-4 py-3 text-base text-text placeholder:text-text-subtle focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all duration-200 resize-none disabled:opacity-60"
                  placeholder="Describe the manual, repetitive tasks taking up your team's time..."
                />
              </div>

              {errorMsg && (
                <p
                  role="alert"
                  className="text-sm text-danger font-mono bg-danger-soft border border-danger/20 rounded-lg p-3"
                >
                  {errorMsg}
                </p>
              )}

              <Button
                type="submit"
                variant="primary"
                disabled={submitting}
                className="w-full"
              >
                {submitting ? "Sending…" : "Send →"}
              </Button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
