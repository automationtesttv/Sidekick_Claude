import { SectionEyebrow } from "./SectionEyebrow";

const faqs = [
  {
    question: "How do you handle our data?",
    answer:
      "Your data stays in your infrastructure. We build agents that run on your servers or your cloud account — we never store your proprietary data on our systems. Every engagement includes a data handling agreement before work begins.",
  },
  {
    question: "What stack do you build on?",
    answer:
      "It depends on the sidekick. We work with the leading models — Anthropic, OpenAI, and open-source where appropriate — and integrate using your existing stack, whether that's REST APIs, webhooks, internal databases, or third-party tools. We don't impose a preferred vendor.",
  },
  {
    question: "Who owns the code at the end?",
    answer:
      "You do, completely. We transfer full ownership of the codebase, documentation, and deployment configuration at project close. Any developer you hire can maintain or extend it. We build to be handed off.",
  },
  {
    question: "What's the difference between a sidekick and a chatbot?",
    answer:
      "A chatbot responds. A sidekick acts. Chatbots sit in a UI and wait for questions. Sidekicks are integrated into your workflows — they receive triggers, run processes, call APIs, and produce outputs that go somewhere real. They're background workers, not front-of-house staff.",
  },
  {
    question: "What happens after deployment?",
    answer:
      "Every Build engagement includes two weeks of post-launch support. After that, you're free to run it independently — or move to a Partner engagement for ongoing optimization and new sidekick development. We document everything so your team can own it without us.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-28 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <SectionEyebrow number="06" label="questions" />
          <h2 className="mt-5 font-display font-medium text-[clamp(1.6rem,5.2vw,3.4rem)] leading-[1.08] tracking-[-0.02em] text-text">
            Things people{" "}
            <em className="font-serif font-normal italic">ask.</em>
          </h2>
          <p className="mt-5 text-text-muted text-[1.05rem] leading-[1.65]">
            If your question isn&apos;t here, just book a call — we&apos;d
            rather answer it directly.
          </p>
        </div>

        <div className="max-w-[820px] mx-auto space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group bg-bg-elevated border border-border rounded-2xl card-shadow open:border-accent/40 transition-colors duration-200"
            >
              <summary className="flex items-center justify-between gap-6 cursor-pointer list-none select-none px-7 py-6">
                <span className="font-display text-[1.1rem] font-medium text-text">
                  {faq.question}
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent font-mono text-lg group-open:rotate-45 transition-transform duration-200 leading-none"
                >
                  +
                </span>
              </summary>
              <p className="px-7 pb-7 text-text-muted text-[0.95rem] leading-[1.75] max-w-[680px]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
