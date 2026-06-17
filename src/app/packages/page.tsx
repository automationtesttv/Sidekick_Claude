import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { Button } from "@/components/Button";
import { packages } from "@/lib/packages";

export const metadata: Metadata = {
  title: "Packages — Sidekick Solutions",
  description:
    "Transparent packages in Malaysian ringgit: AI agents, ERP + CRM platforms, and websites. Fixed scopes, no per-seat games, built and owned by you.",
};

export default function PackagesPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          {/* Header */}
          <div className="text-center max-w-[720px] mx-auto mb-16">
            <SectionEyebrow label="packages" />
            <h1 className="mt-5 font-display font-medium text-[clamp(2.6rem,6vw,4.2rem)] leading-[1.05] tracking-[-0.025em] text-text">
              Pricing built for{" "}
              <em className="font-serif font-normal italic">Malaysian</em>{" "}
              businesses.
            </h1>
            <p className="mt-5 text-text-muted text-[1.1rem] leading-[1.65]">
              Three ways we help you do more with less. Clear ringgit pricing,
              fixed scopes, and full ownership at the end — no per-seat licensing,
              no surprises.
            </p>
          </div>

          {/* Category cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-20">
            {packages.map((cat) => {
              const Icon = cat.icon;
              const from = cat.tiers[0].price;
              return (
                <Link
                  key={cat.slug}
                  href={`/packages/${cat.slug}`}
                  className="group relative bg-bg-elevated border border-border rounded-2xl p-8 card-shadow hover:card-shadow-hover hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300 mb-6">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h2 className="font-display font-medium text-2xl text-text tracking-tight mb-3">
                    {cat.title}{" "}
                    <em className="font-serif font-normal italic">
                      {cat.titleEmphasis}
                    </em>
                  </h2>
                  <p className="text-text-muted text-[0.95rem] leading-[1.6] mb-6 flex-1">
                    {cat.tagline}
                  </p>
                  <div className="flex items-center justify-between pt-5 border-t border-border">
                    <span className="font-mono text-[11px] text-text-subtle uppercase tracking-wider">
                      From {from}
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
              );
            })}
          </div>

          {/* Closing CTA */}
          <div className="bg-text text-bg rounded-3xl px-8 md:px-16 py-16 text-center">
            <h2 className="font-display font-medium text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] tracking-[-0.02em]">
              Not sure which fits?{" "}
              <em className="font-serif font-normal italic text-accent">
                Let&apos;s talk.
              </em>
            </h2>
            <p className="mt-5 text-bg/75 text-[1.05rem] max-w-[480px] mx-auto leading-[1.6]">
              Tell us what you&apos;re trying to fix and we&apos;ll recommend the
              right package — or build you a custom one.
            </p>
            <div className="mt-9">
              <Button variant="primary" href="/contact" className="px-8 py-3.5">
                Book a free call →
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
