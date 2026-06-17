import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { SectionEyebrow } from "./SectionEyebrow";
import { Button } from "./Button";
import { PackageTiers } from "./PackageTiers";
import { AddOnSelector } from "./AddOnSelector";
import type { PackageCategory } from "@/lib/packages";

export function PackageCategoryView({ category }: { category: PackageCategory }) {
  const Icon = category.icon;

  return (
    <main className="pt-32 pb-28 px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Back link */}
        <Link
          href="/packages"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors duration-200 mb-10"
        >
          <ArrowLeft size={15} />
          All packages
        </Link>

        {/* Header */}
        <div className="max-w-[760px] mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Icon size={20} strokeWidth={1.75} />
            </span>
            <SectionEyebrow label={category.eyebrow} />
          </div>
          <h1 className="font-display font-medium text-[clamp(1.85rem,6vw,4rem)] leading-[1.05] tracking-[-0.025em] text-text">
            {category.title}{" "}
            <em className="font-serif font-normal italic">
              {category.titleEmphasis}
            </em>
          </h1>
          <p className="mt-5 text-text-muted text-[1.1rem] leading-[1.65]">
            {category.intro}
          </p>
        </div>

        {/* Primary tiers */}
        {category.tiersHeading && (
          <h2 className="font-mono text-[11px] tracking-[0.2em] text-text-subtle uppercase mb-5">
            {category.tiersHeading}
          </h2>
        )}
        <PackageTiers tiers={category.tiers} />

        {/* Secondary tiers (e.g. monthly support) */}
        {category.secondary && (
          <div className="mt-16">
            <h2 className="font-mono text-[11px] tracking-[0.2em] text-text-subtle uppercase mb-2">
              {category.secondary.heading}
            </h2>
            {category.secondary.intro && (
              <p className="text-text-muted text-[0.95rem] leading-[1.6] max-w-[640px] mb-6">
                {category.secondary.intro}
              </p>
            )}
            <PackageTiers tiers={category.secondary.tiers} />
          </div>
        )}

        {/* Footnote */}
        {category.footnote && (
          <p className="mt-6 text-[0.85rem] text-text-subtle leading-[1.6] max-w-[680px]">
            {category.footnote}
          </p>
        )}

        {/* Extras / add-ons */}
        {category.extras && (
          <div className="mt-16 bg-surface border border-border rounded-2xl p-8 md:p-10">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-7">
              <h2 className="font-display font-medium text-2xl text-text">
                {category.extras.heading}
              </h2>
              {category.extras.note && (
                <p className="text-sm text-text-muted">{category.extras.note}</p>
              )}
            </div>
            <AddOnSelector items={category.extras.items} />
          </div>
        )}

        {/* What's included in every plan */}
        {category.included && (
          <div className="mt-16">
            <h2 className="font-mono text-[11px] tracking-[0.2em] text-text-subtle uppercase mb-6">
              {category.included.heading}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
              {category.included.items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-text text-[0.95rem] leading-[1.5]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* How it works */}
        {category.steps && (
          <div className="mt-16">
            <h2 className="font-display font-medium text-2xl text-text mb-1.5">
              {category.steps.heading}
            </h2>
            {category.steps.intro && (
              <p className="text-text-muted text-[0.95rem] mb-8">
                {category.steps.intro}
              </p>
            )}
            <div className="grid md:grid-cols-3 gap-5">
              {category.steps.items.map((step, i) => (
                <div
                  key={step.title}
                  className="bg-bg-elevated border border-border rounded-2xl p-7 card-shadow"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white font-display text-base font-medium mb-5">
                    {i + 1}
                  </div>
                  <h3 className="font-display font-medium text-lg text-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-[0.92rem] leading-[1.6]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ */}
        {category.faqs && category.faqs.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display font-medium text-2xl text-text mb-7">
              Questions
            </h2>
            <div className="max-w-[760px] space-y-3">
              {category.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-bg-elevated border border-border rounded-2xl card-shadow open:border-accent/40 transition-colors duration-200"
                >
                  <summary className="flex items-center justify-between gap-6 cursor-pointer list-none select-none px-6 py-5">
                    <span className="font-display text-[1.05rem] font-medium text-text">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent font-mono text-lg group-open:rotate-45 transition-transform duration-200 leading-none"
                    >
                      +
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-text-muted text-[0.95rem] leading-[1.7] max-w-[640px]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 bg-text text-bg rounded-3xl px-8 md:px-16 py-16 text-center">
          <h2 className="font-display font-medium text-[clamp(1.45rem,5vw,2.8rem)] leading-[1.1] tracking-[-0.02em]">
            Ready to{" "}
            <em className="font-serif font-normal italic text-accent">
              get started?
            </em>
          </h2>
          <p className="mt-5 text-bg/75 text-[1.05rem] max-w-[480px] mx-auto leading-[1.6]">
            Book a free call and we&apos;ll scope your build, confirm the price,
            and give you a timeline — no obligation.
          </p>
          <div className="mt-9 flex items-center justify-center gap-3 flex-wrap">
            <Button variant="primary" href="/contact" className="px-8 py-3.5">
              Book a free call →
            </Button>
            <Link
              href="/packages"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-body font-medium border border-white/20 text-white hover:bg-white/[0.08] hover:border-white/40 transition-all duration-200"
            >
              Compare packages
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
