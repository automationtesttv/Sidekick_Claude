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
      <main className="min-h-screen pt-32 pb-32 px-6">
        <div className="max-w-[600px] mx-auto">
          <SectionEyebrow label="get in touch" />

          <h1 className="mt-6 font-display text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.02em] text-text">
            Let&apos;s <em>talk.</em>
          </h1>

          <p className="mt-5 text-text-muted text-[0.95rem] leading-[1.7]">
            Tell us what you&apos;re working with. The more specific you are,
            the faster we can figure out if we&apos;re a good fit.
          </p>

          {submitted ? (
            <div className="mt-14 flex items-start gap-4 p-7 border border-border rounded-sm bg-bg-elevated">
              <span
                aria-label="Success"
                className="text-accent text-xl leading-none mt-0.5 shrink-0"
              >
                ✓
              </span>
              <div>
                <p className="font-body text-text font-medium mb-1">
                  Got it. We&apos;ll be in touch within 24 hours.
                </p>
                <p className="text-text-muted text-sm">
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
              className="mt-14 space-y-6"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    className="bg-bg-elevated border border-border rounded-sm px-4 py-3 text-sm text-text placeholder:text-text-subtle focus:outline-none focus:border-accent transition-colors duration-200 disabled:opacity-60"
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
                    className="bg-bg-elevated border border-border rounded-sm px-4 py-3 text-sm text-text placeholder:text-text-subtle focus:outline-none focus:border-accent transition-colors duration-200 disabled:opacity-60"
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
                  className="bg-bg-elevated border border-border rounded-sm px-4 py-3 text-sm text-text placeholder:text-text-subtle focus:outline-none focus:border-accent transition-colors duration-200 disabled:opacity-60"
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
                  className="bg-bg-elevated border border-border rounded-sm px-4 py-3 text-sm text-text placeholder:text-text-subtle focus:outline-none focus:border-accent transition-colors duration-200 resize-none disabled:opacity-60"
                  placeholder="Describe the manual, repetitive tasks taking up your team's time..."
                />
              </div>

              {errorMsg && (
                <p
                  role="alert"
                  className="text-sm text-red-400 font-mono"
                >
                  {errorMsg}
                </p>
              )}

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={submitting}
                  className="px-8 py-3.5 text-[0.95rem] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending…" : "Send →"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
