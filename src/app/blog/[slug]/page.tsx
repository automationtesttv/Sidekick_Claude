import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { posts, getPost, formatDate } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article — Sidekick Solutions" };
  return {
    title: `${post.title} — Sidekick Solutions`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main className="pt-32 pb-28 px-6">
        <article className="max-w-[680px] mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors duration-200 mb-10"
          >
            <ArrowLeft size={15} />
            All articles
          </Link>

          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase bg-accent-soft text-accent px-2.5 py-1 rounded-full">
              {post.category}
            </span>
            <span className="font-mono text-[11px] text-text-subtle uppercase tracking-wider">
              {formatDate(post.date)} · {post.readTime}
            </span>
          </div>

          <h1 className="font-display font-medium text-[clamp(2rem,5vw,3.2rem)] leading-[1.08] tracking-[-0.025em] text-text mb-10">
            {post.title}
          </h1>

          {/* Body */}
          <div className="space-y-5">
            {post.body.map((block, i) =>
              block.startsWith("## ") ? (
                <h2
                  key={i}
                  className="font-display font-medium text-[1.5rem] text-text tracking-tight pt-4 leading-snug"
                >
                  {block.replace("## ", "")}
                </h2>
              ) : (
                <p
                  key={i}
                  className="text-text-muted text-[1.08rem] leading-[1.8]"
                >
                  {block}
                </p>
              )
            )}
          </div>

          {/* CTA */}
          <div className="mt-16 pt-10 border-t border-border bg-surface -mx-6 px-6 sm:mx-0 sm:px-10 sm:rounded-2xl sm:border sm:py-10 text-center">
            <h2 className="font-display font-medium text-2xl text-text leading-snug">
              Want this working in your{" "}
              <em className="font-serif font-normal italic">business?</em>
            </h2>
            <p className="mt-4 text-text-muted text-[1rem] max-w-[420px] mx-auto leading-[1.6]">
              Book a free call and we&apos;ll show you exactly where a sidekick
              fits.
            </p>
            <div className="mt-7">
              <Button variant="primary" href="/contact" className="px-7 py-3.5">
                Book a free call →
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
