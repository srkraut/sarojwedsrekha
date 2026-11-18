"use client";

// Re-shows the envelope cover (Cover listens for this event).
export default function Replay() {
  return (
    <button type="button" className="inv-replay" onClick={() => window.dispatchEvent(new Event("invite:replay"))}>
      ↺ फेरि खोल्नुहोस् · Replay
    </button>
  );
}
