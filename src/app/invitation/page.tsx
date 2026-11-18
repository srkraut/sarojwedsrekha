import type { Metadata } from "next";
import { Mukta, Rozha_One } from "next/font/google";
import Countdown from "@/components/Countdown";
import Cover from "@/components/invitation/Cover";
import { Divider, Garland, Kalash, Petals } from "@/components/invitation/Decor";
import Replay from "@/components/invitation/Replay";
import { couple, events } from "@/data/wedding";
import { eventNames, invitation as inv } from "@/data/invitation";
import { googleCalendarUrl, nepaliTime, toNe } from "@/lib";
import "./invitation.css";

const display = Rozha_One({ subsets: ["devanagari", "latin"], weight: "400", variable: "--font-ne-display", display: "swap" });
const body = Mukta({ subsets: ["devanagari", "latin"], weight: ["400", "600"], variable: "--font-ne", display: "swap" });

export const metadata: Metadata = {
  title: { absolute: `${inv.groom} ♥ ${inv.bride} · शुभ विवाह निमन्त्रणा` },
  description: `${inv.groomFull} र ${inv.brideFull}को शुभ विवाह — ${inv.date}, इटहरी। Wedding invitation for Saroj & Rekha.`,
  alternates: { canonical: "/invitation/" },
  openGraph: {
    title: `${inv.groom} ♥ ${inv.bride} · शुभ विवाह निमन्त्रणा`,
    description: `${inv.date} · इटहरी, सुनसरी — सादर निमन्त्रणा`,
    url: "/invitation/",
  },
  // Personal invitation with family details: keep it out of search results.
  robots: { index: false, follow: true },
};

export default function InvitationPage() {
  const wedding = events[0];

  return (
    <div className={`inv ${display.variable} ${body.variable}`} lang="ne">
      <noscript>
        <style>{".cover,.doors{display:none}"}</style>
      </noscript>
      <Cover groom={inv.groom} bride={inv.bride} date={inv.date} defaultGuest={inv.defaultGuest} />
      <Petals />

      <main id="main" className="inv__main">
        {/* ── The card (opens like a gatefold) ── */}
        <section className="paper paper--hero" aria-label="शुभ विवाह">
          <span className="doors" aria-hidden="true">
            <span className="doors__l" />
            <span className="doors__r" />
          </span>
          <p className="paper__ganesh">॥ श्री गणेशाय नमः ॥</p>
          <p className="paper__shloka">
            वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।<br />
            निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
          </p>
          <div className="mandap">
            <Kalash className="mandap__kalash mandap__kalash--l" />
            <img src={couple.groom.figure} alt={inv.groomFull} className="mandap__fig mandap__fig--groom" width={300} height={600} />
            <img src={couple.bride.figure} alt={inv.brideFull} className="mandap__fig mandap__fig--bride" width={300} height={600} />
            <Kalash className="mandap__kalash mandap__kalash--r" />
          </div>
          <p className="paper__kicker">शुभ विवाह</p>
          <h1 className="paper__names">
            {inv.groom} <span className="heart">♥</span> {inv.bride}
          </h1>
          <p className="paper__date">{inv.date}</p>
          <Divider />
          <p className="paper__blessing">
            {inv.blessing[0]}
            <br />
            <strong>{inv.blessing[1]}</strong>
          </p>
        </section>

        {/* ── Photo ── */}
        <section className="inv-photo" aria-label="With love and blessings">
          <h2 className="inv-title">
            माया र आशीर्वादसहित <small>With love &amp; blessings</small>
          </h2>
          <figure className="arch">
            <Garland swags={3} className="arch__garland" />
            <img src="/images/gallery/02-full.webp" alt="Saroj and Rekha" width={900} height={1600} loading="lazy" decoding="async" />
          </figure>
          <p className="inv-photo__caption">
            {inv.groom} &amp; {inv.bride}
          </p>
        </section>

        {/* ── Invitation text ── */}
        <section className="paper" aria-labelledby="nimantrana">
          <Kalash className="paper__icon" />
          <h2 id="nimantrana" className="paper__heading">
            निमन्त्रणा
          </h2>
          <Divider />
          <p className="paper__text">
            हाम्रा कुलदेवताको असीम कृपा र आशीर्वादले {inv.groomParents}का सुपुत्र चि. <strong>{inv.groomFull}</strong> र {inv.brideParents}की सुपुत्री सौ.{" "}
            <strong>{inv.brideFull}</strong>को <span className="paper__em">शुभ-विवाह</span> मिति {inv.date}का दिन सम्पन्न हुने भएकाले सो शुभ अवसरमा
            पाल्नुभई नवदम्पतीलाई आशीर्वाद प्रदान गरिदिनुहुन सादर निमन्त्रणा गर्दछौं ।
          </p>
          <p className="paper__text paper__text--en" lang="en">
            With the blessings of our family deity, we request the pleasure of your company at the wedding of <strong>Saroj</strong>, son of{" "}
            {inv.groomParentsEn}, and <strong>Rekha</strong>, daughter of {inv.brideParentsEn}, on {inv.dateEn} in Itahari.
          </p>
        </section>

        {/* ── Countdown ── */}
        <section className="inv-count" aria-label="Countdown">
          <h2 className="inv-title">
            शुभ विवाहको दिन आउन बाँकी <small>Countdown to the wedding day</small>
          </h2>
          <Countdown date={wedding.start} nepali />
          <p className="inv-count__when">
            {inv.date} · {nepaliTime(wedding.start)}
          </p>
        </section>

        {/* ── Events ── */}
        <section className="inv-events" aria-label="Wedding celebrations">
          <h2 className="inv-title">
            हाम्रा शुभ कार्यक्रमहरू <small>Wedding celebrations</small>
          </h2>
          {events.map((e, i) => {
            const n = eventNames[i];
            return (
              <article key={e.name} className="paper paper--event">
                <h3 className="paper__heading paper__heading--sm">{n.ne}</h3>
                <p className="paper__en" lang="en">
                  {n.en}
                </p>
                <Divider />
                <p className="ev__date">{n.date}</p>
                <p className="ev__time">
                  {nepaliTime(e.start)}देखि {nepaliTime(e.end)}सम्म
                </p>
                <p className="ev__venue">{n.venue}</p>
                <p className="ev__addr">{n.address}</p>
                <div className="ev__links">
                  <a href={e.mapUrl} target="_blank" rel="noopener noreferrer">
                    📍 नक्सा <small>Map</small>
                  </a>
                  <a href={googleCalendarUrl(e)} target="_blank" rel="noopener noreferrer">
                    📅 क्यालेन्डरमा राख्नुहोस् <small>Save the date</small>
                  </a>
                </div>
              </article>
            );
          })}
        </section>

        {/* ── Families ── */}
        {inv.wellWishers.length || inv.hosts.length ? (
          <section className="paper paper--family" aria-label="Family">
            {inv.wellWishers.length ? (
              <>
                <h2 className="paper__heading paper__heading--sm">दर्शनाभिलाषी</h2>
                <Divider />
                <dl className="family">
                  {inv.wellWishers.map((w) => (
                    <div key={w.role}>
                      <dt>{w.role}</dt>
                      {w.names.map((n) => (
                        <dd key={n}>{n}</dd>
                      ))}
                    </div>
                  ))}
                </dl>
              </>
            ) : null}
            <h2 className="paper__heading paper__heading--sm">प्रार्थी</h2>
            <Divider />
            <dl className="family family--hosts">
              {inv.hosts.map((h) => (
                <div key={h.role}>
                  <dt>{h.role}</dt>
                  <dd>{h.name}</dd>
                </div>
              ))}
            </dl>
            {inv.hostAddress ? <p className="family__addr">{inv.hostAddress}</p> : null}
          </section>
        ) : null}

        {inv.contacts.length ? (
          <section className="inv-contact" aria-label="Contact">
            <h2 className="inv-title">
              कुनै समस्या भएमा सम्पर्क <small>Contact us</small>
            </h2>
            <div className="inv-contact__list">
              {inv.contacts.map((c) => (
                <a key={c} href={`tel:${c.replace(/[०-९]/g, (d) => String("०१२३४५६७८९".indexOf(d)))}`}>
                  📞 {toNe(c)}
                </a>
              ))}
            </div>
          </section>
        ) : null}

        <footer className="inv-footer">
          <p className="inv-footer__thanks">
            सादर निमन्त्रणा — {inv.hostFamily}
            <small lang="en">With warm regards, {inv.hostFamilyEn}</small>
          </p>
          <Replay />
          <a className="inv-footer__site" href="/">
            हाम्रो वेबसाइट हेर्नुहोस् · <span lang="en">Visit our wedding website</span> →
          </a>
          <p className="inv-footer__sign">
            {inv.groom} ♥ {inv.bride} · {toNe(2083)}
          </p>
        </footer>
      </main>
    </div>
  );
}
