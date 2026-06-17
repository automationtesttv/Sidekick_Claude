import type { LucideIcon } from "lucide-react";
import { Bot, Database, Globe } from "lucide-react";

export interface Tier {
  name: string;
  /** Headline price, e.g. "RM 1,500" or "Custom" */
  price: string;
  /** Sub-label under price, e.g. "setup + RM 350/mo" */
  priceNote?: string;
  /** One-line summary of who it's for */
  summary: string;
  /** Concrete, original-voice deliverables */
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface PackageCategory {
  slug: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  /** italic emphasis word rendered in serif */
  titleEmphasis: string;
  tagline: string;
  intro: string;
  /** overrides the "From {price}" label on overview cards */
  fromLabel?: string;
  /** optional heading above the primary tier grid */
  tiersHeading?: string;
  tiers: Tier[];
  /** optional second tier grid (e.g. monthly support plans) */
  secondary?: {
    heading: string;
    intro?: string;
    tiers: Tier[];
  };
  /** optional add-on / extras block */
  extras?: {
    heading: string;
    note?: string;
    items: { label: string; price: string }[];
  };
  /** small print under the tiers */
  footnote?: string;
}

export const packages: PackageCategory[] = [
  {
    slug: "agentic",
    icon: Bot,
    eyebrow: "ai agents",
    title: "AI",
    titleEmphasis: "Agents",
    tagline: "Conversational sidekicks that handle the repetitive talking for you.",
    intro:
      "A custom AI agent trained on your business — answering questions, booking appointments, and capturing leads across the channels your customers already use. Priced for Malaysian SMEs, owned by you.",
    tiers: [
      {
        name: "Pilot",
        price: "RM 1,500",
        priceNote: "setup + RM 350/mo",
        summary: "Prove the value on a single channel before you scale.",
        features: [
          "Up to 1,000 conversations / month",
          "Web chat widget for your site",
          "Trained on your FAQs & knowledge base",
          "Testing console + conversation logs",
          "Email support",
        ],
        cta: "Start a Pilot",
      },
      {
        name: "Starter",
        price: "RM 4,500",
        priceNote: "setup + RM 800/mo",
        summary: "A working knowledge-base agent for a growing team.",
        features: [
          "Up to 3,000 conversations / month",
          "Web chat + knowledge-base management",
          "Self-serve content updates",
          "Add-ons available (WhatsApp, CRM, lead capture)",
          "Priority email support",
        ],
        cta: "Choose Starter",
      },
      {
        name: "Business",
        price: "RM 9,500",
        priceNote: "setup + RM 2,000/mo",
        summary: "Multi-channel agent that books, captures, and resolves.",
        features: [
          "Up to 8,000 conversations / month",
          "Appointment booking built in",
          "One social channel (e.g. WhatsApp)",
          "One add-on included free",
          "Conversation logs + quality evals",
        ],
        cta: "Choose Business",
        popular: true,
      },
      {
        name: "Premium",
        price: "Custom",
        priceNote: "from RM 4,500/mo",
        summary: "A tailored deployment for high-volume operations.",
        features: [
          "20,000+ conversations / month",
          "Everything in Business",
          "Two add-ons included",
          "Custom integrations & workflows",
          "Dedicated support contact",
        ],
        cta: "Request a proposal",
      },
    ],
    extras: {
      heading: "Add-ons",
      note: "One-time build fees — mix and match onto any plan.",
      items: [
        { label: "Social / WhatsApp channel", price: "RM 2,500" },
        { label: "Lead capture", price: "RM 2,500" },
        { label: "CRM sync", price: "RM 3,000" },
        { label: "Email notifications", price: "RM 1,000" },
        { label: "Sentiment analysis", price: "RM 2,000" },
        { label: "Order tracking", price: "RM 1,500" },
        { label: "Product recommendations", price: "RM 2,500" },
        { label: "Multi-language support", price: "RM 1,200" },
      ],
    },
    footnote:
      "Monthly fees cover hosting and support; usage-based API costs are billed at cost. Conversations beyond your plan are RM 0.20 each.",
  },
  {
    slug: "erp",
    icon: Database,
    eyebrow: "erp + crm",
    title: "ERP +",
    titleEmphasis: "CRM",
    tagline: "Run the whole business on one platform — and make it e-invoice ready.",
    intro:
      "A fully set-up ERPNext platform with CRM and MyInvois e-invoicing, migrated and configured for your business. Scope varies by team, so setup and support are quoted to fit — no per-seat licensing games.",
    fromLabel: "Custom quote",
    tiersHeading: "Setup — one-time",
    tiers: [
      {
        name: "Starter",
        price: "Custom quote",
        priceNote: "tailored to your scope",
        summary: "The core platform, configured and ready to run.",
        features: [
          "ERPNext platform setup",
          "CRM module configured",
          "MyInvois e-invoicing compliance",
          "Data migration from your current tools",
          "Team training session",
        ],
        cta: "Get a quote",
      },
      {
        name: "Standard",
        price: "Custom quote",
        priceNote: "6-week delivery",
        summary: "The platform plus automation that actually saves hours.",
        features: [
          "Everything in Starter",
          "WhatsApp messaging built in",
          "One custom AI workflow",
          "Hosting & deployment included",
          "Extended onboarding + training",
        ],
        cta: "Get a quote",
        popular: true,
      },
      {
        name: "Founding Partner",
        price: "Custom quote",
        priceNote: "limited · first 3 clients",
        summary:
          "Standard scope at a discount, with your monthly rate locked for 24 months.",
        features: [
          "Full Standard scope",
          "Discounted setup",
          "Rate locked for 24 months",
          "In exchange for a case study",
          "Plus two referrals",
        ],
        cta: "Apply now",
      },
    ],
    secondary: {
      heading: "Hosting & support — monthly",
      intro:
        "Ongoing plans sized to your team. Every plan keeps your platform hosted, patched, and MyInvois-current.",
      tiers: [
        {
          name: "Essential",
          price: "Custom quote",
          priceNote: "under 10 staff",
          summary: "Keep the lights on for a lean team.",
          features: [
            "Managed hosting",
            "MyInvois compliance updates",
            "1 hour of support / month",
            "Email support",
          ],
          cta: "Get a quote",
        },
        {
          name: "Growth",
          price: "Custom quote",
          priceNote: "10–25 staff",
          summary: "More hands-on support as you scale.",
          features: [
            "Everything in Essential",
            "4 hours of support / month",
            "WhatsApp messaging",
            "One AI workflow",
            "Monthly check-in",
          ],
          cta: "Get a quote",
          popular: true,
        },
        {
          name: "Pro",
          price: "Custom quote",
          priceNote: "25–50 staff",
          summary: "Priority care for a busy operation.",
          features: [
            "Everything in Growth",
            "10 hours of support / month",
            "Three AI workflows",
            "Priority response",
            "Quarterly review",
          ],
          cta: "Get a quote",
        },
      ],
    },
    extras: {
      heading: "Phase 2 add-ons",
      note: "Bolt on when you're ready — quoted per scope.",
      items: [
        { label: "HRMS + Payroll", price: "On request" },
        { label: "Helpdesk + customer portal", price: "On request" },
        { label: "Payment gateway integration", price: "On request" },
        { label: "Additional AI workflow", price: "On request" },
        { label: "Custom report / dashboard", price: "On request" },
      ],
    },
    footnote:
      "ERPNext is open-source — you keep full ownership of your platform and data, with no per-user license fees.",
  },
  {
    slug: "website",
    icon: Globe,
    eyebrow: "websites",
    title: "Websites",
    titleEmphasis: "that ship",
    tagline: "Fast, modern sites that load clean and convert — built and maintained.",
    intro:
      "Mobile-first websites with SEO, analytics, and hosting handled. From a simple presence to a full CMS-driven site with animation — all maintained so you never touch a security patch.",
    tiers: [
      {
        name: "Starter",
        price: "RM 3,500",
        priceNote: "setup + RM 400/mo",
        summary: "A clean, responsive presence that's live fast.",
        features: [
          "Up to 5 pages",
          "Polished template, customised to your brand",
          "Mobile-first, fully responsive",
          "SEO basics + analytics",
          "Hosting + security patches",
        ],
        cta: "Choose Starter",
      },
      {
        name: "Business",
        price: "RM 7,500",
        priceNote: "setup + RM 800/mo",
        summary: "A custom-designed site with room to grow.",
        features: [
          "Up to 10 pages",
          "Custom design, not a template",
          "Staging environment for reviews",
          "SEO + analytics",
          "Hosting + security patches",
        ],
        cta: "Choose Business",
        popular: true,
      },
      {
        name: "Premium",
        price: "RM 18,000",
        priceNote: "setup + RM 1,500/mo",
        summary: "A flagship site with CMS, motion, and priority care.",
        features: [
          "Up to 20 pages",
          "CMS so your team can edit content",
          "Custom animations & interactions",
          "Advanced SEO + analytics",
          "Priority support + hosting",
        ],
        cta: "Choose Premium",
      },
    ],
    footnote:
      "Monthly fees cover hosting, security updates, and ongoing maintenance. You own the design and content outright.",
  },
];

export function getPackage(slug: string): PackageCategory | undefined {
  return packages.find((p) => p.slug === slug);
}
