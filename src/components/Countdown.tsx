"use client";

import { useEffect, useState } from "react";

const UNITS = ["Days", "Hours", "Minutes", "Seconds"] as const;

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return [
    Math.floor(ms / 86_400_000),
    Math.floor(ms / 3_600_000) % 24,
    Math.floor(ms / 60_000) % 60,
    Math.floor(ms / 1000) % 60,
  ];
}

export default function Countdown({ date }: { date: string }) {
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
          <span className="countdown__num">{parts ? String(parts[i]).padStart(2, "0") : "00"}</span>
          <span className="countdown__label">{u}</span>
        </div>
      ))}
    </div>
  );
}
