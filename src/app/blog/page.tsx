import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { posts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Sidekick Solutions",
  description:
    "Practical notes on AI automation, ERP, and running a leaner business — written for Malaysian operators, not for hype.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <Nav />
      <main className="pt-32 pb-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          {/* Header */}
          <div className="max-w-[720px] mb-16">
            <SectionEyebrow label="blog" />
            <h1 className="mt-5 font-display font-medium text-[clamp(2.6rem,6vw,4.2rem)] leading-[1.05] tracking-[-0.025em] text-text">
              Notes on building{" "}
              <em className="font-serif font-normal italic">leaner.</em>
            </h1>
            <p className="mt-5 text-text-muted text-[1.1rem] leading-[1.65]">
              Practical thinking on AI automation, ERP, and running a tighter
              operation — written for operators, not for the hype cycle.
            </p>
          </div>

          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group block bg-bg-elevated border border-border rounded-2xl p-8 md:p-10 card-shadow hover:card-shadow-hover hover:border-accent/40 transition-all duration-300 mb-5"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase bg-accent-soft text-accent px-2.5 py-1 rounded-full">
                {featured.category}
              </span>
              <span className="font-mono text-[11px] text-text-subtle uppercase tracking-wider">
                {formatDate(featured.date)} · {featured.readTime}
              </span>
            </div>
            <h2 className="font-display font-medium text-[clamp(1.6rem,3.5vw,2.4rem)] leading-[1.12] tracking-[-0.02em] text-text mb-3 max-w-[700px]">
              {featured.title}
            </h2>
            <p className="text-text-muted text-[1.05rem] leading-[1.65] max-w-[640px] mb-6">
              {featured.excerpt}
            </p>
            <span className="inline-flex items-center gap-1.5 text-accent font-medium">
              Read article
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </span>
          </Link>

          {/* Rest of posts */}
          <div className="grid md:grid-cols-2 gap-5">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-bg-elevated border border-border rounded-2xl p-8 card-shadow hover:card-shadow-hover hover:border-accent/40 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase bg-accent-soft text-accent px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="font-mono text-[11px] text-text-subtle uppercase tracking-wider">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-display font-medium text-xl text-text mb-3 leading-snug tracking-tight">
                  {post.title}
                </h3>
                <p className="text-text-muted text-[0.95rem] leading-[1.6] mb-6 flex-1">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-accent font-medium text-sm">
                  Read article
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-0.5 transition-transform duration-200"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
