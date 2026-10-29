// ────────────────────────────────────────────────────────────
//  Edit everything about the wedding in this one file.
//  Dates use ISO format with the Nepal offset (+05:45).
// ────────────────────────────────────────────────────────────

export const site = {
  url: "https://sarojwedsrekha.com",
  title: "Saroj & Rekha — Wedding",
  description:
    "Saroj Raut and Rekha Budhathoki are getting married! Join us in Itahari, Nepal on 3 December 2026 (17 Mangsir 2083) to celebrate our wedding. Find the event schedule, venues, our story and photos.",
  hashtag: "#SarojWedsRekha",
  locale: "en_US",
};

export const couple = {
  groom: {
    name: "Saroj Raut",
    short: "Saroj",
    parents: "Son of Kumar Raut & Gita Raut",
    bio: "Entrepreneur, explorer, tinkerer and problem solver — who still can't believe she said yes.",
    link: "https://sarojraut.com.np/",
    figure: "/images/saroj-figure.webp", // leans on the left edge of his card
  },
  bride: {
    name: "Rekha Budhathoki",
    short: "Rekha",
    parents: "Daughter of Man Bahadur & Ganga Maya",
    bio: "Aspiring entrepreneur, lecturer and lifelong learner — with a heart as big as her dreams.",
    link: "",
    figure: "/images/rekha-figure.webp", // leans on the right edge of her card
  },
};

export const wedding = {
  date: "2026-12-03T10:00:00+05:45",
  dateBs: "मंसिर १७, २०८३",
  city: "Itahari",
  country: "Nepal",
  // Cover: selfie at Janaki Mandir — couple in colour, temple in rose duotone.
  heroImage: "/images/hero-1920.webp",
  heroSrcSet: "/images/hero-800.webp 800w, /images/hero-1280.webp 1280w, /images/hero-1920.webp 1920w",
  heroAlt: "Saroj and Rekha in front of Janaki Mandir, Janakpur",
  coupleImage: "", // background behind the bride & groom cards
};

export type WeddingEvent = {
  name: string;
  nepali: string;
  dateBs: string;
  start: string;
  end: string;
  venue: string;
  address: string;
  mapUrl: string;
  note: string;
  image: string; // e.g. "/images/ceremony.jpg" — shown beside the event
};

export const events: WeddingEvent[] = [
  {
    name: "Wedding Ceremony",
    nepali: "बिबाह",
    dateBs: "मंसिर १७, २०८३",
    start: "2026-12-03T10:00:00+05:45",
    end: "2026-12-03T16:00:00+05:45",
    venue: "Turf Banquet (Party Palace)",
    address: "Itahari, Sunsari, Nepal",
    mapUrl: "https://share.google/C5v7mnLNCdekqxnvz",
    note: "The Janti arrives, followed by the sacred rituals and blessings. We would be honoured to have you with us as we take our saat phera and begin our life together.",
    image: "",
  },
  {
    name: "Reception",
    nepali: "स्वागत समारोह",
    dateBs: "मंसिर १८, २०८३",
    start: "2026-12-04T18:00:00+05:45",
    end: "2026-12-04T22:00:00+05:45",
    venue: "Durga Party Palace & Banquet",
    address: "Itahari, Sunsari, Nepal",
    mapUrl: "https://share.google/KvaGpARFCFPp3Ljmh",
    note: "An evening of dinner, music and dancing with family and friends. Formal or traditional attire.",
    image: "",
  },
];

// Not shown on the site for now (Our Story section removed) — kept for later.
export const story = [
  { year: "2019", title: "First Hello", text: "We met through mutual friends on an ordinary afternoon that turned out to be anything but." },
  { year: "2021", title: "First Trip", text: "A rainy weekend in Pokhara, one shared umbrella, and a lot of laughter by Phewa Lake." },
  { year: "2025", title: "The Proposal", text: "Under a sky full of stars, with the Himalayas as witness, he asked — and she said yes." },
  { year: "2026", title: "Forever Begins", text: "Surrounded by family and friends, we start the greatest adventure of our lives together." },
];

// Oldest to newest. Thumbnails (≤640px) load lazily; "full" (≤1600px) loads only when opened.
// Regenerate from /Documents/photos-weeding-website if photos change.
export type Photo = { src: string; full: string; w: number; h: number; alt: string };
export const gallery: Photo[] = [
  { src: "/images/gallery/01.webp", full: "/images/gallery/01-full.webp", w: 640, h: 640, alt: "Saroj and Rekha under festive lights" },
  { src: "/images/gallery/02.webp", full: "/images/gallery/02-full.webp", w: 360, h: 640, alt: "Saroj in a suit and Rekha in red, smiling at each other" },
  { src: "/images/gallery/03.webp", full: "/images/gallery/03-full.webp", w: 535, h: 640, alt: "Saroj and Rekha sharing a close moment" },
  { src: "/images/gallery/04.webp", full: "/images/gallery/04-full.webp", w: 360, h: 640, alt: "Rekha in red with Saroj kneeling beside her" },
  { src: "/images/gallery/05.webp", full: "/images/gallery/05-full.webp", w: 480, h: 640, alt: "Saroj and Rekha at a garden café" },
  { src: "/images/gallery/06.webp", full: "/images/gallery/06-full.webp", w: 480, h: 640, alt: "Saroj and Rekha with tika after a temple visit" },
  { src: "/images/gallery/07.webp", full: "/images/gallery/07-full.webp", w: 402, h: 640, alt: "A mirror selfie while shopping together" },
  { src: "/images/gallery/08.webp", full: "/images/gallery/08-full.webp", w: 480, h: 640, alt: "Saroj and Rekha in sunglasses under a thatched roof" },
  { src: "/images/gallery/09.webp", full: "/images/gallery/09-full.webp", w: 480, h: 640, alt: "Saroj and Rekha seated at Janaki Mandir, Janakpur" },
  { src: "/images/gallery/10.webp", full: "/images/gallery/10-full.webp", w: 640, h: 480, alt: "Sunset selfie by the river" },
  { src: "/images/gallery/11.webp", full: "/images/gallery/11-full.webp", w: 480, h: 640, alt: "Saroj and Rekha by the riverside railing" },
  { src: "/images/gallery/12.webp", full: "/images/gallery/12-full.webp", w: 480, h: 640, alt: "Selfie at a Durbar Square" },
  { src: "/images/gallery/13.webp", full: "/images/gallery/13-full.webp", w: 480, h: 640, alt: "A cosy selfie by a wooden window" },
  { src: "/images/gallery/14.webp", full: "/images/gallery/14-full.webp", w: 480, h: 640, alt: "Saroj and Rekha on a hillside terrace" },
  { src: "/images/gallery/15.webp", full: "/images/gallery/15-full.webp", w: 480, h: 640, alt: "A coffee date" },
  { src: "/images/gallery/16.webp", full: "/images/gallery/16-full.webp", w: 480, h: 640, alt: "Poolside fun" },
  { src: "/images/gallery/17.webp", full: "/images/gallery/17-full.webp", w: 332, h: 640, alt: "Saroj and Rekha dressed up for an evening out" },
];
