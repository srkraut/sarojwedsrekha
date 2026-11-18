const TZ = "Asia/Kathmandu";

export const fmtDate = (iso: string) =>
  new Intl.DateTimeFormat("en-GB", { timeZone: TZ, weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(new Date(iso));

export const fmtShort = (iso: string) =>
  new Intl.DateTimeFormat("en-GB", { timeZone: TZ, day: "2-digit", month: "short" }).format(new Date(iso));

export const fmtTime = (iso: string) =>
  new Intl.DateTimeFormat("en-US", { timeZone: TZ, hour: "numeric", minute: "2-digit" }).format(new Date(iso));

const gcalStamp = (iso: string) => new Date(iso).toISOString().replace(/[-:]|\.\d{3}/g, "");

export function googleCalendarUrl(e: { name: string; start: string; end: string; venue: string; address: string; note: string }) {
  const p = new URLSearchParams({
    action: "TEMPLATE",
    text: `${e.name} — Saroj & Rekha`,
    dates: `${gcalStamp(e.start)}/${gcalStamp(e.end)}`,
    location: `${e.venue}, ${e.address}`,
    details: e.note,
  });
  return `https://calendar.google.com/calendar/render?${p}`;
}

const NE_DIGITS = "०१२३४५६७८९";
export const toNe = (v: string | number) => String(v).replace(/\d/g, (d) => NE_DIGITS[+d]);

// "बिहान १०:०० बजे" — part of day + 12-hour time in Devanagari digits.
export function nepaliTime(iso: string) {
  const [h, m] = new Intl.DateTimeFormat("en-GB", { timeZone: TZ, hour: "2-digit", minute: "2-digit", hour12: false })
    .format(new Date(iso))
    .split(":")
    .map(Number);
  const part = h < 12 ? "बिहान" : h < 17 ? "दिउँसो" : h < 19 ? "बेलुका" : "राति";
  const h12 = h % 12 || 12;
  return `${part} ${toNe(h12)}:${toNe(String(m).padStart(2, "0"))} बजे`;
}
