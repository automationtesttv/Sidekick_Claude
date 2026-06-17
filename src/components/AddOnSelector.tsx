"use client";

import { useMemo, useState } from "react";
import { Check } from "lucide-react";

interface AddOnItem {
  label: string;
  price: string;
  description?: string;
}

function priceToNumber(price: string): number | null {
  const digits = price.replace(/[^0-9]/g, "");
  return digits ? Number(digits) : null;
}

export function AddOnSelector({ items }: { items: AddOnItem[] }) {
  const [selected, setSelected] = useState<Set<number>>(new Set());

  function toggle(i: number) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  const { count, total, allPriced } = useMemo(() => {
    let total = 0;
    let allPriced = true;
    selected.forEach((i) => {
      const n = priceToNumber(items[i].price);
      if (n === null) allPriced = false;
      else total += n;
    });
    return { count: selected.size, total, allPriced };
  }, [selected, items]);

  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, i) => {
          const isSelected = selected.has(i);
          return (
            <button
              key={item.label}
              type="button"
              role="checkbox"
              aria-checked={isSelected}
              onClick={() => toggle(i)}
              className={`group text-left flex flex-col rounded-xl border bg-bg-elevated p-5 transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "border-accent ring-1 ring-accent shadow-[0_8px_24px_-10px_rgba(79,70,229,0.35)]"
                  : "border-border hover:border-accent/40 card-shadow"
              }`}
            >
              {/* Title + checkbox */}
              <div className="flex items-start justify-between gap-3 mb-2.5">
                <h3 className="font-display font-medium text-[1.05rem] text-text leading-snug">
                  {item.label}
                </h3>
                <span
                  aria-hidden="true"
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[6px] border transition-all duration-200 ${
                    isSelected
                      ? "bg-accent border-accent text-white"
                      : "border-border-strong text-transparent group-hover:border-accent"
                  }`}
                >
                  <Check size={13} strokeWidth={3} />
                </span>
              </div>

              {/* Description */}
              {item.description && (
                <p className="text-[0.85rem] text-text-muted leading-[1.55] flex-1 mb-4">
                  {item.description}
                </p>
              )}

              {/* Price */}
              <div className="pt-3 border-t border-border mt-auto">
                <span className="font-display text-lg font-medium text-text tabular-nums">
                  {item.price}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selection summary */}
      <div
        className={`mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl border px-5 py-4 transition-colors duration-200 ${
          count > 0 ? "border-accent bg-accent-soft" : "border-border bg-surface"
        }`}
      >
        <p className="text-[0.95rem] text-text">
          {count === 0 ? (
            <span className="text-text-muted">
              Tap any add-on to build your bundle.
            </span>
          ) : (
            <>
              <span className="font-medium">
                {count} add-on{count > 1 ? "s" : ""} selected
              </span>
              {allPriced && (
                <span className="text-text-muted">
                  {" "}
                  · one-time build fee
                </span>
              )}
            </>
          )}
        </p>
        {count > 0 && allPriced && (
          <p className="font-display text-xl font-medium text-text tabular-nums">
            + RM {total.toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
}
