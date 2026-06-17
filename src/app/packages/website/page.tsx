import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PackageCategoryView } from "@/components/PackageCategoryView";
import { getPackage } from "@/lib/packages";

export const metadata: Metadata = {
  title: "Websites — Packages | Sidekick Solutions",
  description:
    "Fast, modern, mobile-first websites with SEO, analytics, and hosting handled. From a RM 3,500 starter to a full CMS flagship — built and maintained for you.",
};

export default function WebsitePackagePage() {
  const category = getPackage("website");
  if (!category) notFound();
  return (
    <>
      <Nav />
      <PackageCategoryView category={category} />
      <Footer />
    </>
  );
}
