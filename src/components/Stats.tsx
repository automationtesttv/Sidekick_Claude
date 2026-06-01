"use client";

import { useEffect, useRef } from "react";
import { useInView } from "motion/react";
import { animate } from "motion";

const stats = [
  { value: 73, suffix: "%", label: "avg. reduction in manual hours" },
  { value: 4, suffix: " wks", label: "from kickoff to production" },
  { value: 12, suffix: "+", label: "sidekicks deployed" },
  { value: 100, suffix: "%", label: "owned by the client" },
];

function StatCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current || !ref.current) return;
    started.current = true;
    const el = ref.current;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        el.textContent = Math.round(v) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix]);

  return (
    <span
      ref={ref}
      className="font-display font-medium text-[clamp(2.6rem,5vw,4rem)] leading-none tabular-nums text-bg"
    >
      {"0" + suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section id="stats" className="py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-text text-bg rounded-3xl px-8 md:px-16 py-14 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-3">
                <StatCounter value={stat.value} suffix={stat.suffix} />
                <span className="text-sm text-bg/70 leading-snug max-w-[160px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
