import type { Metadata } from "next";
import { Compass, Lock, Gauge, Handshake } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "About — Sidekick Solutions",
  description:
    "We're a Malaysian AI automation studio building custom agents, ERP platforms, and websites for small and mid-sized teams. Practical, owned, and built to last.",
};

const values = [
  {
    icon: Compass,
    title: "Specific beats generic",
    body: "Off-the-shelf AI tools solve everyone's problem and no one's. We build for your workflow, your data, and the way your team actually works.",
  },
  {
    icon: Lock,
    title: "You own it",
    body: "Code, data, platform — all yours at the end. Open-source where it counts, no per-seat licensing traps, no vendor lock-in.",
  },
  {
    icon: Gauge,
    title: "Shipped, not theorised",
    body: "We deploy working systems in weeks, not quarters. Fixed scopes, fixed prices, and something live you can actually use.",
  },
  {
    icon: Handshake,
    title: "Plainspoken partners",
    body: "No jargon, no overselling. We tell you what will work, what won't, and what it costs — before you commit a ringgit.",
  },
];

const stats = [
  { value: "4 wks", label: "typical time to deploy" },
  { value: "100%", label: "client-owned builds" },
  { value: "RM", label: "transparent local pricing" },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-28 px-6">
        <div className="max-w-[900px] mx-auto">
          {/* Header */}
          <div className="max-w-[720px] mb-16">
            <SectionEyebrow label="about" />
            <h1 className="mt-5 font-display font-medium text-[clamp(1.9rem,6.5vw,4.2rem)] leading-[1.05] tracking-[-0.025em] text-text">
              AI that does the work,{" "}
              <em className="font-serif font-normal italic">
                not just the talking.
              </em>
            </h1>
            <p className="mt-6 text-text-muted text-[1.15rem] leading-[1.7]">
              Sidekick Solutions is a Malaysian automation studio. We design and
              deploy custom AI agents, ERP platforms, and websites for small and
              mid-sized businesses — the kind of teams that are too busy doing the
              work to spend months automating it.
            </p>
          </div>

          {/* Story */}
          <div className="space-y-6 text-text-muted text-[1.05rem] leading-[1.75] max-w-[720px] mb-20">
            <p>
              Most businesses don&apos;t need another dashboard or another
              subscription. They need the repetitive parts of the day handled —
              the same enquiries answered, the same documents collected, the same
              reports compiled — so their people can spend time where it matters.
            </p>
            <p>
              That&apos;s the whole idea behind a sidekick. Not a chatbot bolted
              onto a website, but a system wired into how your business actually
              runs: connected to your tools, trained on your knowledge, and
              working in the background around the clock.
            </p>
            <p>
              We keep it practical. Fixed scopes so you know what you&apos;re
              getting. Ringgit pricing so there are no currency surprises. And full
              ownership at the end, because the things that run your business
              should belong to you.
            </p>
          </div>

          {/* Stats strip */}
          <div className="bg-text text-bg rounded-2xl px-8 md:px-12 py-10 grid grid-cols-3 gap-6 mb-20">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display font-medium text-[clamp(1.45rem,5vw,2.8rem)] leading-none text-bg">
                  {s.value}
                </div>
                <p className="mt-2 text-sm text-bg/65 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="font-display font-medium text-[clamp(1.45rem,5vw,2.6rem)] leading-[1.1] tracking-[-0.02em] text-text mb-10">
              What we{" "}
              <em className="font-serif font-normal italic">believe.</em>
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="bg-bg-elevated border border-border rounded-2xl p-7 card-shadow"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent mb-5">
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                    <h3 className="font-display font-medium text-xl text-text mb-2.5">
                      {v.title}
                    </h3>
                    <p className="text-text-muted text-[0.95rem] leading-[1.65]">
                      {v.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-surface border border-border rounded-3xl px-8 md:px-14 py-14 text-center">
            <h2 className="font-display font-medium text-[clamp(1.45rem,5vw,2.6rem)] leading-[1.1] tracking-[-0.02em] text-text">
              Let&apos;s build your{" "}
              <em className="font-serif font-normal italic">sidekick.</em>
            </h2>
            <p className="mt-5 text-text-muted text-[1.05rem] max-w-[460px] mx-auto leading-[1.6]">
              Tell us what&apos;s eating your team&apos;s time. We&apos;ll show you
              what to automate first.
            </p>
            <div className="mt-9 flex items-center justify-center gap-3 flex-wrap">
              <Button variant="primary" href="/contact" className="px-8 py-3.5">
                Book a free call →
              </Button>
              <Button variant="ghost" href="/packages" className="px-8 py-3.5">
                See packages
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
