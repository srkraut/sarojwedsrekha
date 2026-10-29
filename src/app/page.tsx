import Countdown from "@/components/Countdown";
import Gallery from "@/components/Gallery";
import Nav from "@/components/Nav";
import Leaf from "@/components/Ornament";
import { couple, events, gallery, site, wedding } from "@/data/wedding";
import { fmtDate, fmtTime, googleCalendarUrl } from "@/lib";

const bg = (src: string) => (src ? { backgroundImage: `url(${src})` } : undefined);

function SectionHead({ title, sub }: { title: string; sub: string }) {
  return (
    <header className="head">
      <h2>{title}</h2>
      <p>{sub}</p>
      <Leaf className="head__leaf" />
    </header>
  );
}

function Glasses() {
  return (
    <svg className="band__icon" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M14 10h14l-1 14a6 6 0 0 1-12 0Z" />
        <path d="M21 30v20M15 52h12" />
        <path d="M36 14l13-4 3 13a6 6 0 0 1-11 4Z" />
        <path d="M44 31l5 18M43 52l11-3" />
        <path d="M30 6l2-3M34 7l3-2" />
      </g>
    </svg>
  );
}

export default function Home() {
  const { groom, bride } = couple;
  const people = [
    { ...groom, role: "The Groom" },
    { ...bride, role: "The Bride" },
  ];
  const shortDate = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kathmandu", day: "2-digit", month: "2-digit", year: "numeric" })
    .format(new Date(wedding.date))
    .replaceAll("/", " / ");

  return (
    <>
      <Nav />
      <main id="main">
        {/* ── Hero ── */}
        <section id="top" className={`hero${wedding.heroImage ? " hero--photo" : ""}`}>
          {wedding.heroImage ? (
            <img
              className="hero__img"
              src={wedding.heroImage}
              srcSet={wedding.heroSrcSet}
              sizes="100vw"
              alt={wedding.heroAlt}
              width={1920}
              height={1440}
              fetchPriority="high"
              decoding="async"
            />
          ) : null}
          <div className="hero__inner">
            <h1 className="hero__names">
              {groom.short} &amp; {bride.short}
            </h1>
            <p className="hero__date">
              <time dateTime={wedding.date}>{shortDate}</time>
            </p>
            <p className="hero__bs" lang="ne">{wedding.dateBs}</p>
          </div>
        </section>

        {/* ── Countdown band ── */}
        <section className="band" aria-label="Countdown">
          <div className="band__inner">
            <div className="band__title">
              <Glasses />
              <p>
                <span>Missing days to</span>
                <strong>Our Wedding</strong>
              </p>
            </div>
            <Countdown date={wedding.date} />
          </div>
          <Leaf className="band__leaf" />
        </section>

        {/* ── Couple ── */}
        <section id="couple" className="couple" style={bg(wedding.coupleImage)}>
          <h2 className="sr-only">The happy couple</h2>
          <div className="couple__cards">
            {people.map((p, i) => (
              <div key={p.name} className={`pc ${i ? "pc--bride" : "pc--groom"}`}>
                <img className="pc__fig" src={p.figure} alt="" width={600} height={1100} loading="lazy" decoding="async" />
                <article className="card wash speckle">
                  <Leaf className={`card__leaf ${i ? "card__leaf--left" : "card__leaf--right"}`} />
                  <h3 className="script">{p.name}</h3>
                  <p className="caps">{p.role}</p>
                  <p>{p.bio}</p>
                  <p className="card__parents">{p.parents}</p>
                  {p.link ? (
                    <a className="card__link" href={p.link} target="_blank" rel="noopener">
                      View {p.short}&apos;s profile
                    </a>
                  ) : null}
                </article>
              </div>
            ))}
          </div>
        </section>

        {/* ── Events (split rows) ── */}
        <section id="events" aria-label="Wedding events">
          {events.map((e, i) => (
            <article key={e.name} className={`split${i % 2 ? " split--rev" : ""}`}>
              <div
                className={`split__media${e.image ? "" : " split__media--empty"}`}
                style={bg(e.image)}
                role="img"
                aria-label={`${e.venue}, ${e.address}`}
              />
              <div className="split__body">
                <Leaf className="split__leaf" />
                <h2 className="script">{e.name}</h2>
                <p className="split__meta">
                  <time dateTime={e.start}>{fmtDate(e.start)}</time> · {fmtTime(e.start)} – {fmtTime(e.end)}
                </p>
                <p className="split__meta" lang="ne">
                  {e.nepali} · {e.dateBs}
                </p>
                <p className="split__venue">
                  <strong>{e.venue}</strong>, {e.address}
                </p>
                <p>{e.note}</p>
                <p className="split__links">
                  <a href={e.mapUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
                  <a href={googleCalendarUrl(e)} target="_blank" rel="noopener noreferrer">Add to calendar</a>
                </p>
              </div>
            </article>
          ))}
        </section>


        {/* ── Gallery ── */}
        <section id="gallery" className="section section--gallery">
          <SectionHead title="Our Moments" sub="Little memories along the way" />
          <Gallery photos={gallery} />
        </section>

      </main>

      <footer className="footer">
        <Leaf className="footer__leaf" />
        <p className="footer__names">
          {groom.short} &amp; {bride.short}
        </p>
        <p className="caps">
          <time dateTime={wedding.date}>{fmtDate(wedding.date)}</time> · {wedding.city}, {wedding.country}
        </p>
        <p className="footer__tag">{site.hashtag}</p>
      </footer>
    </>
  );
}
