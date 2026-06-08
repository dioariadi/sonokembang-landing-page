import Link from 'next/link'
import Icon from './components/Icon'
import Cities from './components/Cities'

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
        <Link href="/cerita-kami">Cerita Kami</Link>
        <Link href="/jurnal">Jurnal</Link>
        <a href="#contact">Kontak</a>
      </div>
      <button className="nav-cta">Konsultasi Sekarang</button>
    </nav>
  )
}

function Hero() {
  return (
    <header className="hero" data-screen-label="hero">
      <div className="hero-eyebrow">Sejak 1987</div>
      <h1 className="hero-title">Sonokembang <em>Catering</em></h1>
      <p className="hero-sub">
        Warisan rasa Ibu Sri Harjoeni — dari kanteen kecil di Surabaya kini melayani enam kota.
        Pernikahan, syukuran, khitanan, dan momen-momen yang layak dirayakan.
      </p>
      <div className="hero-rule">Surabaya · Malang · Jakarta · Semarang · Banjarmasin</div>
      <div className="hero-zigzag" />
    </header>
  )
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
        <Link className="text-link" href="/cerita-kami">Cerita Sonokembang <Icon name="arrow" size={14} /></Link>
        <button className="ribbon-cta">Konsultasi via WhatsApp <Icon name="arrow" size={14} /></button>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Cities />
      <Ribbon />
    </>
  )
}
