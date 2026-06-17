import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SectionEyebrow } from "./SectionEyebrow";
import { Button } from "./Button";
import { PackageTiers } from "./PackageTiers";
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
          <h1 className="font-display font-medium text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.05] tracking-[-0.025em] text-text">
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
              {category.extras.items.map((item) => (
                <div
                  key={item.label}
                  className="bg-bg-elevated p-5 flex flex-col gap-2"
                >
                  <span className="font-display text-lg font-medium text-text tabular-nums">
                    {item.price}
                  </span>
                  <span className="text-[0.85rem] text-text-muted leading-snug">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 bg-text text-bg rounded-3xl px-8 md:px-16 py-16 text-center">
          <h2 className="font-display font-medium text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] tracking-[-0.02em]">
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
