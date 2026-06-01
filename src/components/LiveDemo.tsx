"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, CheckCircle2, Sparkles } from "lucide-react";
import { SectionEyebrow } from "./SectionEyebrow";

type Message =
  | {
      id: number;
      kind: "incoming";
      author: string;
      avatar: string;
      time: string;
      text: string;
    }
  | {
      id: number;
      kind: "thinking";
    }
  | {
      id: number;
      kind: "sidekick";
      text: string;
      time: string;
    }
  | {
      id: number;
      kind: "tool";
      label: string;
      detail: string;
    }
  | {
      id: number;
      kind: "resolved";
      meta: string;
    };

const sequence: Message[] = [
  {
    id: 1,
    kind: "incoming",
    author: "Carmen R.",
    avatar: "CR",
    time: "2:14 PM",
    text: "Hey — where's my order #4521? Said it'd arrive today.",
  },
  { id: 2, kind: "thinking" },
  {
    id: 3,
    kind: "sidekick",
    time: "2:14 PM",
    text: "Hi Carmen — order #4521 shipped Tuesday via UPS. Tracking says delivery by 6 PM today. Here's your link: ups.co/t/4521",
  },
  {
    id: 4,
    kind: "tool",
    label: "Tools used",
    detail: "shopify.orders · ups.tracking · zendesk.notes",
  },
  {
    id: 5,
    kind: "resolved",
    meta: "Resolved · 14 seconds · no human needed",
  },
];

const STEP_DELAYS_MS = [600, 1400, 1100, 1100, 1100];
const RESET_PAUSE_MS = 4500;

export function LiveDemo() {
  const [step, setStep] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (step >= sequence.length) {
      const reset = setTimeout(() => {
        setStep(0);
        setCycle((c) => c + 1);
      }, RESET_PAUSE_MS);
      return () => clearTimeout(reset);
    }
    const next = setTimeout(() => {
      setStep((s) => s + 1);
    }, STEP_DELAYS_MS[step] ?? 1200);
    return () => clearTimeout(next);
  }, [step]);

  const visible = sequence.slice(0, step);

  return (
    <section className="py-24 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-14">
          <SectionEyebrow label="live demo" />
          <h2 className="mt-5 font-display font-medium text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.08] tracking-[-0.02em] text-text">
            Here&apos;s what a Support Sidekick{" "}
            <em className="font-serif font-normal italic">actually does.</em>
          </h2>
          <p className="mt-5 text-text-muted text-[1.05rem] leading-[1.65]">
            Real customer message, real tools called, real ticket resolved — in
            the time it takes to read this sentence.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="max-w-[820px] mx-auto"
        >
          <div className="relative bg-bg-elevated border border-border rounded-2xl overflow-hidden card-shadow">
            {/* Window chrome */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-surface">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#FF5F57]/80" />
                <span className="h-3 w-3 rounded-full bg-[#FEBC2E]/80" />
                <span className="h-3 w-3 rounded-full bg-[#28C840]/80" />
              </div>
              <div className="flex-1 text-center">
                <span className="font-mono text-[11px] text-text-subtle tracking-wider">
                  &gt; support-sidekick.live
                </span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-accent uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                live
              </div>
            </div>

            {/* Conversation body */}
            <div className="bg-bg-elevated px-6 sm:px-10 py-8 min-h-[420px] flex flex-col gap-4">
              <AnimatePresence mode="popLayout" key={`cycle-${cycle}`}>
                {visible.map((msg) => (
                  <MessageRow key={`${cycle}-${msg.id}`} msg={msg} />
                ))}
              </AnimatePresence>
            </div>

            {/* Footer status bar */}
            <div className="border-t border-border bg-surface px-4 py-2.5 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-text-subtle">
              <span>Model: claude-sonnet-4 · routed via Zendesk</span>
              <span className="flex items-center gap-1.5 text-success">
                <CheckCircle2 size={12} />
                latency 1.2s
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MessageRow({ msg }: { msg: Message }) {
  if (msg.kind === "incoming") {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex items-start gap-3"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface border border-border text-xs font-medium text-text-muted">
          {msg.avatar}
        </div>
        <div className="flex-1 max-w-[80%]">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-sm font-medium text-text">{msg.author}</span>
            <span className="font-mono text-[10px] text-text-subtle">
              {msg.time}
            </span>
          </div>
          <div className="bg-surface border border-border rounded-2xl rounded-tl-md px-4 py-3 text-[0.95rem] text-text leading-snug">
            {msg.text}
          </div>
        </div>
      </motion.div>
    );
  }

  if (msg.kind === "thinking") {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="flex items-start gap-3"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-white">
          <Bot size={16} strokeWidth={1.75} />
        </div>
        <div className="bg-accent-soft border border-accent/20 rounded-2xl rounded-tl-md px-4 py-3 flex items-center gap-1">
          <span className="font-mono text-[11px] text-accent mr-2 tracking-wider">
            Sidekick is thinking
          </span>
          <Dot delay={0} />
          <Dot delay={0.15} />
          <Dot delay={0.3} />
        </div>
      </motion.div>
    );
  }

  if (msg.kind === "sidekick") {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex items-start gap-3"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-white">
          <Bot size={16} strokeWidth={1.75} />
        </div>
        <div className="flex-1 max-w-[80%]">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-sm font-medium text-accent">
              Support Sidekick
            </span>
            <span className="font-mono text-[10px] text-text-subtle">
              {msg.time}
            </span>
          </div>
          <div className="bg-accent text-white rounded-2xl rounded-tl-md px-4 py-3 text-[0.95rem] leading-snug">
            {msg.text}
          </div>
        </div>
      </motion.div>
    );
  }

  if (msg.kind === "tool") {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-3 pl-12"
      >
        <Sparkles size={12} className="text-text-subtle shrink-0" />
        <span className="font-mono text-[11px] text-text-subtle">
          <span className="text-text">{msg.label}:</span> {msg.detail}
        </span>
      </motion.div>
    );
  }

  if (msg.kind === "resolved") {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="pl-12 mt-2"
      >
        <span className="inline-flex items-center gap-2 bg-success/10 text-success border border-success/30 rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider">
          <CheckCircle2 size={12} strokeWidth={2.5} />
          {msg.meta}
        </span>
      </motion.div>
    );
  }

  return null;
}

function Dot({ delay }: { delay: number }) {
  return (
    <motion.span
      className="block h-1.5 w-1.5 rounded-full bg-accent"
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{
        duration: 1.1,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}
