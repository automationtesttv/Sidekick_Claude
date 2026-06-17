"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { animate } from "motion";
import { Clock, TrendingUp, Wallet } from "lucide-react";
import { SectionEyebrow } from "./SectionEyebrow";

interface Task {
  label: string;
  hours: number;
  category: string;
}

const tasks: Task[] = [
  { label: "Manual data entry & cleanup", hours: 12, category: "Ops" },
  { label: "Inbound lead qualification", hours: 9, category: "Sales" },
  { label: "Tier-1 ticket triage", hours: 8, category: "Support" },
  { label: "Weekly reporting & dashboards", hours: 6, category: "Ops" },
  { label: "Doc search & internal Q&A", hours: 4, category: "Knowledge" },
];

const TOTAL_HOURS = tasks.reduce((sum, t) => sum + t.hours, 0);
const MAX_HOURS = Math.max(...tasks.map((t) => t.hours));
const ANNUAL_VALUE = TOTAL_HOURS * 52 * 28; // assuming $28/hr loaded rate

function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  format = (n: number) => n.toLocaleString(),
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  format?: (n: number) => string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current || !ref.current) return;
    started.current = true;
    const el = ref.current;
    const controls = animate(0, value, {
      duration: 1.7,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        el.textContent = prefix + format(Math.round(v)) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix, prefix, format]);

  return <span ref={ref} className="tabular-nums">{prefix}0{suffix}</span>;
}

function TaskBar({ task, index }: { task: Task; index: number }) {
  const widthPct = (task.hours / MAX_HOURS) * 100;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-2 items-center">
      <div className="min-w-0">
        <div className="flex items-baseline justify-between gap-3 mb-2">
          <span className="text-[0.95rem] text-text font-medium truncate">
            {task.label}
          </span>
          <span className="font-mono text-[10px] text-text-subtle tracking-wider uppercase shrink-0">
            {task.category}
          </span>
        </div>
        <div className="h-2.5 bg-surface border border-border rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${widthPct}%` } : { width: 0 }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.15 + index * 0.08,
            }}
            className="h-full bg-accent rounded-full"
          />
        </div>
      </div>
      <div className="font-display text-2xl font-medium text-text leading-none tabular-nums shrink-0 self-end">
        {task.hours}
        <span className="font-mono text-xs text-text-subtle ml-1 uppercase tracking-wider">
          hrs/wk
        </span>
      </div>
    </div>
  );
}

export function TimeSavings() {
  return (
    <section className="py-28 px-6 bg-surface">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <SectionEyebrow label="hidden cost of manual work" />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="mt-5 font-display font-medium text-[clamp(1.6rem,5.2vw,3.4rem)] leading-[1.08] tracking-[-0.02em] text-text"
          >
            Where the hours{" "}
            <em className="font-serif font-normal italic">actually go.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
            className="mt-5 text-text-muted text-[1.05rem] leading-[1.65]"
          >
            The work eating your team alive — broken down by hours per week,
            per role. Sidekicks reclaim most of this.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-5 items-start">
          {/* Task breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.08 }}
            className="bg-bg-elevated border border-border rounded-2xl p-8 md:p-10 card-shadow"
          >
            <div className="flex items-center justify-between mb-7 pb-6 border-b border-border">
              <p className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-text-subtle uppercase">
                <Clock size={12} className="text-accent" />
                automatable per week
              </p>
              <p className="font-mono text-[11px] tracking-[0.16em] text-text-subtle uppercase">
                per team of 3
              </p>
            </div>
            <div className="space-y-7">
              {tasks.map((task, i) => (
                <TaskBar key={task.label} task={task} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Big totals panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.18 }}
            className="bg-text text-bg rounded-2xl p-8 md:p-10 space-y-7"
          >
            <div>
              <p className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-bg/60 uppercase mb-4">
                <TrendingUp size={12} className="text-accent" />
                Total identified
              </p>
              <p className="font-display font-medium text-[4.5rem] leading-[0.95] text-bg tabular-nums">
                <AnimatedNumber value={TOTAL_HOURS} />
              </p>
              <p className="font-mono text-xs text-bg/60 uppercase tracking-wider mt-1">
                hours / week / team
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.08]">
              <p className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-bg/60 uppercase mb-4">
                <Wallet size={12} className="text-accent" />
                Annualized value
              </p>
              <p className="font-display font-medium text-[3rem] leading-none text-accent tabular-nums">
                <AnimatedNumber
                  value={ANNUAL_VALUE}
                  prefix="$"
                  format={(n) => n.toLocaleString()}
                />
              </p>
              <p className="text-bg/70 text-sm leading-[1.6] mt-3">
                What a 3-person team could reclaim per year at a $28/hr loaded
                rate.
              </p>
            </div>

            <div className="pt-5 border-t border-white/[0.08] grid grid-cols-2 gap-4">
              <div>
                <p className="font-display font-medium text-2xl text-bg leading-none">
                  <AnimatedNumber value={73} suffix="%" />
                </p>
                <p className="font-mono text-[10px] text-bg/60 uppercase tracking-wider mt-1.5">
                  avg deflection
                </p>
              </div>
              <div>
                <p className="font-display font-medium text-2xl text-bg leading-none">
                  <AnimatedNumber value={4} suffix=" wks" />
                </p>
                <p className="font-mono text-[10px] text-bg/60 uppercase tracking-wider mt-1.5">
                  to deploy
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
