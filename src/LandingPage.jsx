import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CITIES } from './cities-data';
import Icon from './Icon';

function Nav() {
  return (
    <nav className="nav" data-screen-label="nav">
      <div className="nav-mark">
        <img src="/assets/logo-sonokembang-large.png" alt="Sonokembang" />
        <span>Sonokembang · Catering</span>
      </div>
      <div className="nav-links">
        <a href="#cities">Cabang</a>
        <a href="#menu">Menu</a>
        <Link to="/cerita-kami">Cerita Kami</Link>
        <a href="#contact">Kontak</a>
      </div>
      <button className="nav-cta">Konsultasi Sekarang</button>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero" data-screen-label="hero">
      <div className="hero-eyebrow">Sejak 1987</div>
      <h1 className="hero-title">
        Sonokembang <em>Catering</em>
      </h1>
      <p className="hero-sub">
        Warisan rasa Ibu Sri Harjoeni — dari kanteen kecil di Surabaya kini melayani enam kota.
        Pernikahan, syukuran, khitanan, dan momen-momen yang layak dirayakan.
      </p>
      <div className="hero-rule">Surabaya · Malang · Jakarta · Semarang · Banjarmasin</div>
      <div className="hero-zigzag" />
    </header>
  );
}

function CityFeed({ city, isOpen }) {
  const embedRef = useRef(null);
  const username = city.handle.replace("@", "");

  useEffect(() => {
    if (isOpen && embedRef.current && window.instgrm) {
      window.instgrm.Embeds.process(embedRef.current);
    }
  }, [isOpen, username]);

  const initials = city.name.slice(0, 2).toUpperCase();

  return (
    <div className="ig-card">
      <div className="ig-head">
        <div className="ig-avatar" style={{ backgroundImage: `url(${city.cover})` }}>
          <span>{initials}</span>
        </div>
        <div className="ig-meta">
          <div className="ig-handle">{username}</div>
          <div className="ig-stats">
            <a
              href={city.links.ig}
              target="_blank"
              rel="noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
              onClick={(e) => e.stopPropagation()}
            >
              Lihat di Instagram →
            </a>
          </div>
        </div>
        <a
          href={city.links.ig}
          target="_blank"
          rel="noreferrer"
          className="ig-follow"
          onClick={(e) => e.stopPropagation()}
        >
          Ikuti
        </a>
      </div>
      <div
        className="city-feed-embed"
        ref={embedRef}
        onClick={(e) => e.stopPropagation()}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={`https://www.instagram.com/${username}/`}
          data-instgrm-version="14"
          style={{
            background: "transparent",
            border: 0,
            borderRadius: "3px",
            margin: 0,
            padding: 0,
            width: "100%",
            minWidth: "280px",
            maxWidth: "540px",
          }}
        />
      </div>
    </div>
  );
}

function CityPanel({ city, index, isPinned, isOpen, onPin, onClick }) {
  return (
    <article
      className={`city ${isOpen ? "is-open" : ""} ${isPinned ? "is-pinned" : ""}`}
      data-city={city.id}
      data-screen-label={`${String(index + 1).padStart(2, "0")} ${city.name}`}
      style={{ "--city-bg": `url(${city.cover})` }}
      onClick={onClick}
    >
      <span className="city-num">No. {String(index + 1).padStart(2, "0")}</span>

      <button
        className="city-pin"
        aria-label={isPinned ? "Tutup" : "Perbesar"}
        onClick={(e) => { e.stopPropagation(); onPin(); }}
      >
        <Icon name="plus" size={16} />
      </button>

      <div className="city-vlabel" aria-hidden="true">
        <span className="num">{String(index + 1).padStart(2, "0")}</span>
        {city.name}
      </div>

      <div className="city-inner">
        <div className="city-top">
          <span>{city.badge}</span>
          <span className="num">{String(index + 1).padStart(2, "0")} / 05</span>
        </div>

        <div className="city-body">
          <div className="city-left">
            <h3 className="city-name">
              <em>Sonokembang</em>
              {city.name}
            </h3>
            <div className="city-tag">{city.tagline}</div>
            <p className="city-note">{city.note}</p>
          </div>
          <div className="city-right">
            <CityFeed city={city} isOpen={isOpen} />
          </div>
        </div>

        <div className="city-foot">
          <a
            className="city-addr"
            href={city.links.gmaps}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <Icon name="pin" size={15} />
            <span>{city.address}</span>
          </a>
          <div className="city-socials" onClick={(e) => e.stopPropagation()}>
            <a href={city.links.gmaps} target="_blank" rel="noreferrer" aria-label="Google Maps">
              <Icon name="pin" />
            </a>
            <a href={city.links.ig} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Icon name="ig" />
            </a>
            <a href={city.links.wa} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <Icon name="wa" />
            </a>
            <a href={city.links.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok">
              <Icon name="tiktok" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function Cities() {
  const [pinned, setPinned] = useState(0);
  const [hovered, setHovered] = useState(null);
  const scrollRef = useRef(null);

  const isTouch = typeof window !== "undefined" &&
                  window.matchMedia("(hover: none)").matches;

  const handlePin = (i) => {
    setPinned((p) => (p === i ? null : i));
  };

  const handleClick = (i) => {
    setPinned(i);
    const el = scrollRef.current?.querySelectorAll(".city")?.[i];
    if (el) {
      el.parentElement.scrollTo({
        left: el.offsetLeft - 48,
        behavior: "smooth",
      });
    }
  };

  const scrollBy = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.6, behavior: "smooth" });
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") {
        setPinned((p) => Math.min((p ?? -1) + 1, CITIES.length - 1));
      } else if (e.key === "ArrowLeft") {
        setPinned((p) => Math.max((p ?? CITIES.length) - 1, 0));
      } else if (e.key === "Escape") {
        setPinned(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="cities-wrap" id="cities">
      <div className="section-head">
        <div>
          <div className="eyebrow">Pilih Kota</div>
          <h2><em>Enam</em> kota. Satu warisan rasa.</h2>
        </div>
        <div className="head-meta">
          <span className="eyebrow">Cara Menggunakan</span>
          <span className="scroll-hint">
            Arahkan kursor untuk mengintip · Klik kartu untuk mengunci · Geser
            <span className="keycap">→</span>
          </span>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <button className="cities-nav left" onClick={() => scrollBy(-1)} aria-label="Sebelumnya">
          <Icon name="left" size={18} />
        </button>
        <button className="cities-nav right" onClick={() => scrollBy(1)} aria-label="Selanjutnya">
          <Icon name="right" size={18} />
        </button>

        <div
          className="cities"
          ref={scrollRef}
          data-mode={isTouch ? "tap" : "hover"}
        >
          {CITIES.map((city, i) => {
            const isPin = pinned === i;
            const isHov = hovered === i;
            const isOpen = isPin || (pinned === null && isHov);
            return (
              <div
                key={city.id}
                onMouseEnter={() => !isTouch && setHovered(i)}
                onMouseLeave={() => !isTouch && setHovered(null)}
                style={{ display: "contents" }}
              >
                <CityPanel
                  city={city}
                  index={i}
                  isPinned={isPin}
                  isOpen={isOpen}
                  onPin={() => handlePin(i)}
                  onClick={() => handleClick(i)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Ribbon() {
  return (
    <div className="ribbon" id="contact">
      <div className="ribbon-l">
        <span>Halal MUI</span>
        <span className="dot" />
        <span>ISO 9001:2015</span>
        <span className="dot" />
        <span>SLHS Tersertifikasi</span>
        <span className="dot" />
        <span>Minimum 20 pax · prasmanan 50 pax</span>
      </div>
      <div className="ribbon-r">
        <Link className="text-link" to="/cerita-kami">Cerita Sonokembang <Icon name="arrow" size={14} /></Link>
        <button className="ribbon-cta">
          Konsultasi via WhatsApp <Icon name="arrow" size={14} />
        </button>
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <>
      <Nav />
      <Hero />
      <Cities />
      <Ribbon />
    </>
  );
}
