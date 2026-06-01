"use client";

import { motion } from "motion/react";

/**
 * Small animated mockups for each service card.
 * Each one is intentionally tiny (~140px tall) and uses only
 * SVG + CSS + Framer Motion — no images, no GIFs.
 */

export function SalesMockup() {
  return (
    <div className="relative h-[140px] w-full bg-surface border-b border-border overflow-hidden">
      {/* Lead card */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute top-5 left-5 right-5 bg-bg-elevated border border-border rounded-lg px-3 py-2.5 flex items-center gap-3"
      >
        <div className="h-7 w-7 rounded-full bg-accent-soft flex items-center justify-center font-mono text-[10px] font-medium text-accent">
          JD
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[11px] font-medium text-text truncate">
            Jordan Diaz · Northwind
          </div>
          <div className="font-mono text-[9px] text-text-subtle">
            Inbound · 320 employees
          </div>
        </div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4, type: "spring", stiffness: 220 }}
          className="bg-accent text-white text-[9px] font-mono uppercase tracking-wider px-2 py-1 rounded"
        >
          Qualified
        </motion.div>
      </motion.div>

      {/* Score bar */}
      <div className="absolute bottom-5 left-5 right-5">
        <div className="flex items-baseline justify-between mb-2">
          <span className="font-mono text-[9px] text-text-subtle uppercase tracking-wider">
            Lead score
          </span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.3 }}
            className="font-display text-sm font-medium text-text tabular-nums"
          >
            87/100
          </motion.span>
        </div>
        <div className="h-1.5 bg-bg-elevated border border-border rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "87%" }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="h-full bg-accent rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export function SupportMockup() {
  return (
    <div className="relative h-[140px] w-full bg-surface border-b border-border overflow-hidden px-5 py-4">
      <div className="font-mono text-[9px] text-text-subtle uppercase tracking-wider mb-3">
        Inbound ticket
      </div>

      {/* Ticket pill */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-bg-elevated border border-border rounded-md px-2.5 py-1.5 mb-3 inline-flex items-center gap-2"
      >
        <span className="font-mono text-[9px] text-text-subtle">#4521</span>
        <span className="text-[11px] text-text">Where&apos;s my order?</span>
      </motion.div>

      {/* Routing dots */}
      <div className="flex items-center gap-2 mt-2">
        <RouteNode label="Triage" delay={0.5} />
        <Connector delay={0.6} />
        <RouteNode label="Resolve" delay={0.9} accent />
        <Connector delay={1.0} solid />
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.3, type: "spring", stiffness: 220 }}
          className="font-mono text-[9px] bg-success/10 text-success border border-success/30 px-2 py-0.5 rounded-full uppercase tracking-wider"
        >
          Done · 14s
        </motion.span>
      </div>
    </div>
  );
}

function RouteNode({
  label,
  delay,
  accent = false,
}: {
  label: string;
  delay: number;
  accent?: boolean;
}) {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.3 }}
      className={`flex items-center gap-1.5 px-2 py-1 rounded-full border ${
        accent
          ? "bg-accent text-white border-accent"
          : "bg-bg-elevated text-text border-border"
      } font-mono text-[9px] uppercase tracking-wider`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${accent ? "bg-white" : "bg-accent"}`} />
      {label}
    </motion.div>
  );
}

function Connector({ delay, solid = false }: { delay: number; solid?: boolean }) {
  return (
    <motion.span
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay, duration: 0.3, ease: "easeOut" }}
      style={{ transformOrigin: "left center" }}
      className={`h-px w-4 ${solid ? "bg-accent" : "bg-border-strong"}`}
    />
  );
}

export function OpsMockup() {
  return (
    <div className="relative h-[140px] w-full bg-surface border-b border-border overflow-hidden p-5">
      <div className="font-mono text-[9px] text-text-subtle uppercase tracking-wider mb-3">
        Weekly report run
      </div>

      <div className="space-y-1.5">
        {[
          { task: "Pull metrics from Stripe", delay: 0.1 },
          { task: "Aggregate by segment", delay: 0.7 },
          { task: "Format & post to Slack", delay: 1.3 },
        ].map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: row.delay, duration: 0.3 }}
            className="flex items-center gap-2.5 bg-bg-elevated border border-border rounded-md px-2.5 py-1.5"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: row.delay + 0.4, duration: 0.25 }}
              className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-success text-white text-[8px] font-bold"
            >
              ✓
            </motion.span>
            <span className="text-[11px] text-text flex-1">{row.task}</span>
            <span className="font-mono text-[9px] text-text-subtle">0.2s</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function KnowledgeMockup() {
  return (
    <div className="relative h-[140px] w-full bg-surface border-b border-border overflow-hidden p-5">
      <div className="font-mono text-[9px] text-text-subtle uppercase tracking-wider mb-2.5">
        Internal search
      </div>

      {/* Search input */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-bg-elevated border border-border rounded-md px-3 py-2 mb-3 flex items-center gap-2"
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" className="text-text-subtle shrink-0">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
          <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <TypingText text="refund policy for B2B?" delay={0.4} />
      </motion.div>

      {/* Results */}
      <div className="space-y-1">
        {[
          { title: "Refunds_v3.notion", snippet: "B2B refunds prorated by..." },
          { title: "Q4-policy-deck.pdf", snippet: "Enterprise customers may..." },
        ].map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 + i * 0.15, duration: 0.3 }}
            className="flex items-baseline gap-2 px-1"
          >
            <span className="font-mono text-[9px] text-accent shrink-0">↳</span>
            <span className="font-mono text-[10px] text-text truncate">{r.title}</span>
            <span className="text-[10px] text-text-subtle truncate hidden sm:block">
              {r.snippet}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function TypingText({ text, delay }: { text: string; delay: number }) {
  return (
    <motion.span
      initial={{ width: 0 }}
      animate={{ width: "auto" }}
      transition={{ delay, duration: 1.0, ease: "linear" }}
      className="text-[11px] text-text overflow-hidden whitespace-nowrap"
    >
      {text}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-3 bg-accent ml-0.5 align-middle"
      />
    </motion.span>
  );
}
