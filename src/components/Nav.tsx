"use client";

import { useState } from "react";

const LINKS = [
  ["Home", "#top"],
  ["Couple", "#couple"],
  ["Events", "#events"],
  ["Story", "#story"],
  ["Gallery", "#gallery"],
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <a href="#top" className="nav__brand" aria-label="S &amp; R — Saroj and Rekha, home">
        S<span>&amp;</span>R
      </a>
      <button
        className="nav__toggle"
        aria-expanded={open}
        aria-controls="nav-menu"
        aria-label="Menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
      </button>
      <nav id="nav-menu" className={`nav__links${open ? " is-open" : ""}`} aria-label="Main">
        {LINKS.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
