export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  /** Body as an array of paragraphs (and simple subheads prefixed with "## ") */
  body: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "chatbot-vs-sidekick",
    title: "A chatbot answers. A sidekick acts.",
    excerpt:
      "Why bolting ChatGPT onto your website isn't automation — and what actually moves the needle for a small team.",
    date: "2026-05-20",
    readTime: "4 min read",
    category: "Strategy",
    body: [
      "Most businesses meet AI the same way: someone adds a chat widget, points it at the website copy, and hopes it deflects a few questions. A week later it's answering half the time, making things up the other half, and quietly getting switched off.",
      "The problem isn't the model. It's the wiring.",
      "## The difference is integration",
      "A chatbot lives in a box on your homepage and waits. A sidekick is connected to the systems where work actually happens — your calendar, your CRM, your order database, your WhatsApp. When a customer asks where their order is, a sidekick checks the real status and answers. When they want to book, it writes to the real calendar.",
      "That single difference — acting on live data instead of guessing from static text — is what turns a novelty into something your team relies on.",
      "## Start narrow, then widen",
      "The fastest path to value is one workflow, done properly. Pick the question your team answers fifty times a week, or the booking flow that eats an afternoon, and automate that completely. Prove it works. Then add the next one.",
      "We build sidekicks this way on purpose. A pilot that handles one channel well beats a sprawling system that handles ten things badly — and it pays for itself far sooner.",
    ],
  },
  {
    slug: "myinvois-ready",
    title: "Getting MyInvois-ready without the panic",
    excerpt:
      "Malaysia's e-invoicing rollout is here. A plain-English look at what it means for SMEs and how to get compliant calmly.",
    date: "2026-05-12",
    readTime: "5 min read",
    category: "Operations",
    body: [
      "If you run a business in Malaysia, e-invoicing has gone from 'something to look into' to 'something with a deadline.' The good news: getting compliant is mostly a systems problem, and systems problems are solvable.",
      "## What actually changes",
      "Under MyInvois, invoices are validated through LHDN before they're considered valid. In practice that means your invoicing needs to talk to the government system automatically — not as a manual export-and-upload chore every time you bill someone.",
      "If you're still invoicing from spreadsheets or a tool that doesn't integrate, that's where the pain shows up.",
      "## The calm path",
      "Move your invoicing onto a platform that handles MyInvois natively. We set businesses up on ERPNext with e-invoicing built in — so validation happens in the background and your team keeps billing the way they already do.",
      "Migration sounds scary; in practice it's a few weeks of mapping your data, configuring the platform, and training your team. Then it just works, and the deadline stops being a source of stress.",
    ],
  },
  {
    slug: "automate-first",
    title: "The five tasks worth automating first",
    excerpt:
      "Not everything should be automated. Here's how to spot the work that gives you the fastest return.",
    date: "2026-04-28",
    readTime: "3 min read",
    category: "Strategy",
    body: [
      "Automation has a reputation for being expensive and complicated. It can be — if you start in the wrong place. The trick is choosing tasks that are repetitive, rule-based, and high-volume. Those three together are the sweet spot.",
      "## Look for the patterns",
      "The best candidates are the things your team does the same way every single time: answering the same handful of questions, collecting the same onboarding documents, compiling the same weekly numbers, chasing the same approvals, triaging the same support issues.",
      "If a task follows a pattern, a sidekick can learn it. If it needs genuine judgement, keep a human in the loop — and let the sidekick handle everything around it.",
      "## Measure in hours, then ringgit",
      "Before you automate anything, count the hours. A task that eats ten hours a week across your team is worth far more attention than one that takes ten minutes. Multiply those hours by what they cost you, and the business case usually writes itself.",
      "Start with the biggest, dullest, most repetitive thing on that list. That's where the first sidekick earns its keep.",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
