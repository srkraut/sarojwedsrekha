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
