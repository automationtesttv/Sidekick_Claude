"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
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
        <span className="font-mono text-[10px] tracking-[0.15em] text-text-subtle uppercase">
          {label}
        </span>
        <span className="font-mono text-sm text-text shrink-0">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-px appearance-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:w-3.5
          [&::-webkit-slider-thumb]:h-3.5
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-accent
          [&::-webkit-slider-thumb]:cursor-pointer
          [&::-webkit-slider-thumb]:border-0
          [&::-moz-range-thumb]:w-3.5
          [&::-moz-range-thumb]:h-3.5
          [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:bg-accent
          [&::-moz-range-thumb]:border-0
          [&::-moz-range-thumb]:cursor-pointer"
        style={{
          background: `linear-gradient(to right, var(--accent) 0%, var(--accent) ${pct}%, var(--border) ${pct}%, var(--border) 100%)`,
        }}
      />
      <div className="flex justify-between">
        <span className="font-mono text-[9px] text-text-subtle">{minLabel}</span>
        <span className="font-mono text-[9px] text-text-subtle">{maxLabel}</span>
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
    <section className="py-32 px-6">
      <div className="max-w-[1280px] mx-auto">
        <SectionEyebrow label="value engine" />

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="mt-6 font-display text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] text-text"
        >
          Calculate your <em>sidekick ROI.</em>
        </motion.h2>

        <div className="mt-16 grid lg:grid-cols-[1fr_420px] gap-6 items-start">
          {/* Sliders panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.08 }}
            className="bg-bg-elevated border border-border p-8 md:p-10 space-y-10"
          >
            <p className="text-text-muted text-sm leading-[1.75]">
              Adjust the inputs to match your team&apos;s current workload. The
              numbers on the right update in real time.
            </p>

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
            className="bg-bg-elevated border border-border p-8 md:p-10 space-y-8"
          >
            <p className="font-mono text-[10px] tracking-[0.2em] text-text-subtle uppercase">
              Estimated recoverable capital
            </p>

            <div className="grid grid-cols-2 gap-6 pb-8 border-b border-border">
              <div>
                <p className="font-mono text-[9px] tracking-[0.13em] text-text-subtle uppercase mb-3">
                  Time reclaimed (monthly)
                </p>
                <p className="font-display text-[2.6rem] text-text leading-none tabular-nums">
                  {results.monthlyHours}
                  <span className="text-[1.4rem] ml-1">hrs</span>
                </p>
                <p className="font-mono text-[10px] text-text-subtle mt-2">
                  Recouped operations time
                </p>
              </div>
              <div>
                <p className="font-mono text-[9px] tracking-[0.13em] text-text-subtle uppercase mb-3">
                  Capital reclaimed (monthly)
                </p>
                <p className="font-display text-[2.6rem] text-accent leading-none tabular-nums">
                  ${results.monthlyCapital.toLocaleString()}
                </p>
                <p className="font-mono text-[10px] text-text-subtle mt-2">
                  Direct labor overhead saved
                </p>
              </div>
            </div>

            <div>
              <p className="font-mono text-[9px] tracking-[0.13em] text-text-subtle uppercase mb-4">
                Annualized team capital recovered
              </p>
              <p className="font-display text-[3.8rem] text-text leading-none tabular-nums">
                ${results.annualized.toLocaleString()}
              </p>
              <p className="text-text-muted text-sm leading-[1.7] mt-4 max-w-[300px]">
                What your team could reclaim by deploying a sidekick against
                this workload.
              </p>
            </div>

            <div className="pt-4 border-t border-border flex items-center justify-between">
              <span className="font-mono text-[10px] text-text-subtle uppercase tracking-[0.12em]">
                Typical time to deploy
              </span>
              <span className="font-mono text-[11px] text-text">
                Under 4 weeks
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
