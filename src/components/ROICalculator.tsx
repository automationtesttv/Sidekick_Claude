"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Zap, Clock, Wallet } from "lucide-react";
import { SectionEyebrow } from "./SectionEyebrow";

interface SliderFieldProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  minLabel: string;
  maxLabel: string;
  onChange: (v: number) => void;
}

function SliderField({
  label,
  value,
  min,
  max,
  step,
  display,
  minLabel,
  maxLabel,
  onChange,
}: SliderFieldProps) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-[11px] tracking-[0.16em] text-text-subtle uppercase">
          {label}
        </span>
        <span className="font-display text-base font-medium text-text shrink-0">
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 appearance-none cursor-pointer rounded-full
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:w-5
          [&::-webkit-slider-thumb]:h-5
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-accent
          [&::-webkit-slider-thumb]:cursor-pointer
          [&::-webkit-slider-thumb]:border-2
          [&::-webkit-slider-thumb]:border-white
          [&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(79,70,229,0.35)]
          [&::-moz-range-thumb]:w-5
          [&::-moz-range-thumb]:h-5
          [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:bg-accent
          [&::-moz-range-thumb]:border-2
          [&::-moz-range-thumb]:border-white
          [&::-moz-range-thumb]:cursor-pointer"
        style={{
          background: `linear-gradient(to right, var(--accent) 0%, var(--accent) ${pct}%, var(--border) ${pct}%, var(--border) 100%)`,
        }}
      />
      <div className="flex justify-between">
        <span className="font-mono text-[10px] text-text-subtle">{minLabel}</span>
        <span className="font-mono text-[10px] text-text-subtle">{maxLabel}</span>
      </div>
    </div>
  );
}

export function ROICalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [teamSize, setTeamSize] = useState(3);
  const [laborRate, setLaborRate] = useState(28);
  const [deflection, setDeflection] = useState(80);

  const results = useMemo(() => {
    const monthlyHours = hoursPerWeek * 4.33 * teamSize * (deflection / 100);
    const monthlyCapital = monthlyHours * laborRate;
    const annualized = monthlyCapital * 12;
    return {
      monthlyHours: Math.round(monthlyHours),
      monthlyCapital: Math.round(monthlyCapital),
      annualized: Math.round(annualized),
    };
  }, [hoursPerWeek, teamSize, laborRate, deflection]);

  return (
    <section className="py-28 px-6 bg-surface">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <SectionEyebrow label="value engine" />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="mt-5 font-display font-medium text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.08] tracking-[-0.02em] text-text"
          >
            Calculate your{" "}
            <em className="font-serif font-normal italic">sidekick ROI.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
            className="mt-5 text-text-muted text-[1.05rem] leading-[1.65]"
          >
            Drag the sliders to match your team. The numbers on the right update
            in real time.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1fr_460px] gap-5 items-start">
          {/* Sliders panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.08 }}
            className="bg-bg-elevated border border-border rounded-2xl p-8 md:p-10 card-shadow space-y-10"
          >
            <SliderField
              label="Manual hours per agent / week"
              value={hoursPerWeek}
              min={5}
              max={60}
              step={1}
              display={`${hoursPerWeek} hrs`}
              minLabel="5 hrs (Minimal)"
              maxLabel="60 hrs (High Volume)"
              onChange={setHoursPerWeek}
            />
            <SliderField
              label="Team size (operations / rep count)"
              value={teamSize}
              min={1}
              max={50}
              step={1}
              display={`${teamSize} ${teamSize === 1 ? "Specialist" : "Specialists"}`}
              minLabel="1 Agent"
              maxLabel="50 Agents"
              onChange={setTeamSize}
            />
            <SliderField
              label="Loaded specialist labor rate"
              value={laborRate}
              min={15}
              max={100}
              step={1}
              display={`$${laborRate} / hr`}
              minLabel="$15/hr"
              maxLabel="$100/hr (Senior)"
              onChange={setLaborRate}
            />
            <SliderField
              label="Expected sidekick deflection capacity"
              value={deflection}
              min={30}
              max={95}
              step={5}
              display={`${deflection}%`}
              minLabel="30% (Auxiliary)"
              maxLabel="95% (Fully Autonomous)"
              onChange={setDeflection}
            />
          </motion.div>

          {/* Results panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.16 }}
            className="bg-text text-bg rounded-2xl p-8 md:p-10 space-y-7"
          >
            <p className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-bg/60 uppercase">
              <Zap size={12} className="text-accent" />
              Estimated recoverable capital
            </p>

            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3 text-bg/60">
                  <Clock size={14} strokeWidth={1.75} />
                  <span className="font-mono text-[10px] tracking-[0.13em] uppercase">
                    Time / mo
                  </span>
                </div>
                <p className="font-display font-medium text-[2rem] leading-none tabular-nums text-bg">
                  {results.monthlyHours}
                  <span className="text-[1.1rem] ml-1 text-bg/70">hrs</span>
                </p>
              </div>
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3 text-bg/60">
                  <Wallet size={14} strokeWidth={1.75} />
                  <span className="font-mono text-[10px] tracking-[0.13em] uppercase">
                    Capital / mo
                  </span>
                </div>
                <p className="font-display font-medium text-[2rem] leading-none tabular-nums text-accent">
                  ${results.monthlyCapital.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="pt-5 border-t border-white/[0.08]">
              <p className="font-mono text-[10px] tracking-[0.16em] text-bg/60 uppercase mb-4">
                Annualized capital recovered
              </p>
              <p className="font-display font-medium text-[3.2rem] leading-none tabular-nums text-bg">
                ${results.annualized.toLocaleString()}
              </p>
              <p className="text-bg/70 text-[0.9rem] leading-[1.6] mt-4">
                What your team could reclaim by deploying a sidekick against
                this workload.
              </p>
            </div>

            <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.13em] text-bg/60 uppercase">
                Typical time to deploy
              </span>
              <span className="font-mono text-xs text-bg">Under 4 weeks</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
