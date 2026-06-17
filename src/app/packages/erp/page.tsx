import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PackageCategoryView } from "@/components/PackageCategoryView";
import { getPackage } from "@/lib/packages";

export const metadata: Metadata = {
  title: "ERP + CRM — Packages | Sidekick Solutions",
  description:
    "ERPNext platforms with CRM and MyInvois e-invoicing, configured and migrated for your business. One-off builds in Malaysian ringgit, fully owned by you.",
};

export default function ErpPackagePage() {
  const category = getPackage("erp");
  if (!category) notFound();
  return (
    <>
      <Nav />
      <PackageCategoryView category={category} />
      <Footer />
    </>
  );
}
