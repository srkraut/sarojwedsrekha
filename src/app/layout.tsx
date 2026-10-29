import type { Metadata, Viewport } from "next";
import { Alex_Brush, Cardo, Poppins } from "next/font/google";
import { couple, events, site } from "@/data/wedding";
import "./globals.css";

const serif = Cardo({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const script = Alex_Brush({ subsets: ["latin"], weight: "400", variable: "--font-script", display: "swap" });
const sans = Poppins({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.title}` },
  description: site.description,
  applicationName: "Saroj Weds Rekha",
  keywords: [
    "Saroj and Rekha wedding",
    "Saroj weds Rekha",
    "Saroj Raut wedding",
    "Rekha Budhathoki wedding",
    "Saroj Raut Rekha Budhathoki",
    "Nepali wedding",
    "Itahari wedding",
    "Turf Banquet Itahari",
    "Durga Party Palace Itahari",
    "wedding invitation",
    site.hashtag,
  ],
  authors: [{ name: couple.groom.name, url: couple.groom.link }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Saroj Weds Rekha",
    title: site.title,
    description: site.description,
    locale: site.locale,
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#9cab8d",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: "Saroj Weds Rekha",
      description: site.description,
    },
    ...events.map((e) => ({
      "@type": "Event",
      name: `${e.name} — ${couple.groom.short} & ${couple.bride.short}`,
      startDate: e.start,
      endDate: e.end,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      description: e.note,
      image: [`${site.url}/opengraph-image.jpg`],
      location: {
        "@type": "Place",
        name: e.venue,
        address: { "@type": "PostalAddress", streetAddress: e.address, addressLocality: "Itahari", addressRegion: "Koshi", addressCountry: "NP" },
      },
      organizer: { "@type": "Person", name: couple.groom.name, url: site.url },
      performer: [
        { "@type": "Person", name: couple.groom.name, sameAs: [couple.groom.link] },
        { "@type": "Person", name: couple.bride.name },
      ],
      offers: { "@type": "Offer", price: 0, priceCurrency: "NPR", availability: "https://schema.org/InStock", url: `${site.url}/#events`, validFrom: "2026-10-01" },
    })),
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${script.variable} ${sans.variable}`}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
