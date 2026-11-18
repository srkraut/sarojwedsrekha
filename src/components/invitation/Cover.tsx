"use client";

import { useEffect, useState } from "react";
import { Garland, Lights, Mountains } from "./Decor";

type Stage = "closed" | "opening" | "leaving" | "gone";

// Full-screen envelope shown before the invitation. Tapping it lifts the flap,
// slides the letter out, then fades away and swings open the card doors below.
export default function Cover({ groom, bride, date, defaultGuest }: { groom: string; bride: string; date: string; defaultGuest: string }) {
  const [stage, setStage] = useState<Stage>("closed");
  const [guest, setGuest] = useState(defaultGuest);

  // Personalised link: /invitation/?to=राम दाइ
  useEffect(() => {
    const to = new URLSearchParams(window.location.search).get("to")?.trim().slice(0, 60);
    if (to) setGuest(`आदरणीय ${to}`);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = stage === "gone" ? "" : "hidden";
    if (stage === "gone") root.dataset.invite = "open";
    else delete root.dataset.invite;
  }, [stage]);

  // "Replay" button at the end of the page re-shows the cover.
  useEffect(() => {
    const replay = () => {
      window.scrollTo({ top: 0 });
      setStage("closed");
    };
    window.addEventListener("invite:replay", replay);
    return () => window.removeEventListener("invite:replay", replay);
  }, []);

  function open() {
    if (stage !== "closed") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setStage("gone");
    setStage("opening");
    setTimeout(() => setStage("leaving"), 1900);
    setTimeout(() => setStage("gone"), 2600);
  }

  if (stage === "gone") return null;

  return (
    <div className={`cover cover--${stage}`} role="dialog" aria-modal="true" aria-label="Wedding invitation">
      <div className="cover__stage">
        <Garland className="cover__garland" />
        <Lights className="cover__lights" />
        <span className="bokeh bokeh--1" />
        <span className="bokeh bokeh--2" />
        <span className="bokeh bokeh--3" />

        <header className="cover__title">
          <p className="cover__names">
            {groom} <span className="heart">♥</span> {bride}
          </p>
          <p className="cover__date">शुभ-विवाह · {date}</p>
        </header>

        <button type="button" className="envelope" onClick={open} tabIndex={-1} aria-hidden="true">
          <span className="envelope__back" />
          <span className="envelope__letter">
            <span className="envelope__letter-title">शुभ विवाह</span>
            <span className="envelope__letter-names">
              {groom} ♥ {bride}
            </span>
          </span>
          <span className="envelope__pocket" />
          <span className="envelope__label">
            <span className="envelope__to">{guest}</span>
            <span className="envelope__family">सपरिवार</span>
          </span>
          <span className="envelope__flap" />
          <span className="envelope__seal">
            स<small>♥</small>र
          </span>
        </button>

        <button type="button" className="cover__cta" onClick={open}>
          निमन्त्रणा खोल्नुहोस्
          <small>Tap to open the invitation</small>
        </button>

        <Mountains className="cover__mountains" />
      </div>
    </div>
  );
}
