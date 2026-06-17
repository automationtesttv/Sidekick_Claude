import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PackageCategoryView } from "@/components/PackageCategoryView";
import { getPackage } from "@/lib/packages";

export const metadata: Metadata = {
  title: "AI Agents — Packages | Sidekick Solutions",
  description:
    "Custom AI agents for Malaysian SMEs. From a RM 1,500 pilot to high-volume multi-channel deployments — booking, lead capture, and support across web and WhatsApp.",
};

export default function AgenticPackagePage() {
  const category = getPackage("agentic");
  if (!category) notFound();
  return (
    <>
      <Nav />
      <PackageCategoryView category={category} />
      <Footer />
    </>
  );
}
