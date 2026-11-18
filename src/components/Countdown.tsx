"use client";

import { useEffect, useState } from "react";

import { toNe } from "@/lib";

const UNITS = ["Days", "Hours", "Minutes", "Seconds"] as const;
const UNITS_NE = ["दिन", "घण्टा", "मिनेट", "सेकेन्ड"] as const;

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return [
    Math.floor(ms / 86_400_000),
    Math.floor(ms / 3_600_000) % 24,
    Math.floor(ms / 60_000) % 60,
    Math.floor(ms / 1000) % 60,
  ];
}

export default function Countdown({ date, nepali = false }: { date: string; nepali?: boolean }) {
  const target = new Date(date).getTime();
  // Render dashes on the server so the static HTML never mismatches on hydrate.
  const [parts, setParts] = useState<number[] | null>(null);

  useEffect(() => {
    setParts(diff(target));
    const id = setInterval(() => setParts(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div className="countdown" role="timer" aria-label="Time until the wedding">
      {UNITS.map((u, i) => (
        <div key={u} className="countdown__cell">
          <span className="countdown__num">{(nepali ? toNe : String)(parts ? String(parts[i]).padStart(2, "0") : "00")}</span>
          {nepali ? <span className="countdown__label countdown__label--ne">{UNITS_NE[i]}</span> : null}
          <span className="countdown__label">{u}</span>
        </div>
      ))}
    </div>
  );
}
