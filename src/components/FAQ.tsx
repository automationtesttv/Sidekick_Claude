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
    <section id="faq" className="py-32 px-6 bg-bg-elevated">
      <div className="max-w-[1280px] mx-auto">
        <SectionEyebrow number="05" label="questions" />

        <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] text-text mb-16">
          Things people <em>ask.</em>
        </h2>

        <div className="max-w-[780px] divide-y divide-border border-t border-border">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-6">
              <summary className="flex items-center justify-between gap-6 cursor-pointer list-none select-none">
                <span className="font-body text-text group-open:text-accent text-[0.95rem] transition-colors duration-200">
                  {faq.question}
                </span>
                <span
                  aria-hidden="true"
                  className="font-mono text-text-subtle text-xl shrink-0 group-open:rotate-45 transition-transform duration-200 leading-none"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-text-muted text-sm leading-[1.75] max-w-[660px]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
