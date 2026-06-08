import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

function StoryNav() {
  return (
    <nav className="nav" data-screen-label="nav">
      <Link to="/" className="nav-mark" style={{ textDecoration: "none", color: "inherit" }}>
        <img src="/assets/logo-sonokembang-large.png" alt="Sonokembang" />
        <span>Sonokembang · Catering</span>
      </Link>
      <div className="nav-links">
        <Link to="/#cities">Cabang</Link>
        <Link to="/#menu">Menu</Link>
        <Link to="/cerita-kami" aria-current="page" style={{ color: "var(--sk-gold-soft)", opacity: 1 }}>Cerita Kami</Link>
        <Link to="/#contact">Kontak</Link>
      </div>
      <button className="nav-cta">Konsultasi Sekarang</button>
    </nav>
  );
}

function StoryHero() {
  return (
    <header className="story-hero" data-screen-label="01 Hero">
      <div className="story-hero-eyebrow">Cerita Kami · Sejak 1987</div>
      <div className="story-hero-script">Our Story</div>
      <h1>Warisan dari satu <em>dapur</em>.</h1>
      <div className="story-hero-meta">
        <dl>
          <dt>Pendiri</dt>
          <dd>Ibu Sri Harjoeni (Almh)</dd>
        </dl>
        <dl>
          <dt>Berdiri</dt>
          <dd>Surabaya, 1987</dd>
        </dl>
        <dl>
          <dt>Cabang</dt>
          <dd>Enam kota di Indonesia</dd>
        </dl>
      </div>
    </header>
  );
}

function FounderSection() {
  return (
    <section className="story-section" data-screen-label="02 Founder">
      <div className="founder">
        <div className="founder-portrait">
          <span className="signature">Sri Harjoeni</span>
          <div className="frame" style={{ backgroundImage: "url('/assets/portrait-team.jpg')" }} />
          <div className="stamp">
            <span className="big">1987</span>
            <span className="small">Founded</span>
          </div>
        </div>

        <div className="founder-body">
          <div className="eyebrow-rule">Meet Our Founder, Mother &amp; Grandmother</div>
          <h2 className="name">
            <em>Pendiri Sonokembang Catering</em>
            Ibu Sri Harjoeni
          </h2>
          <div className="role">1937 – Almarhumah · Surabaya</div>

          <p>
            <span className="drop">P</span>endiri Sonokembang Catering yang sejak muda
            memang gemar memasak. Pribadi pekerja keras, suka menolong, dan haus akan
            hal-hal baru — tiga kata yang paling sering disebut anak-anaknya untuk
            menggambarkan beliau.
          </p>
          <p>
            Berawal dari sebuah kanteen kecil di Surabaya tahun 1987, beliau merintis
            usaha kuliner dengan resep keluarga, sentuhan tangan, dan keyakinan bahwa
            setiap hidangan adalah bentuk pelayanan. Tiga puluh delapan tahun kemudian,
            Sonokembang Catering hadir di enam kota besar Indonesia — Surabaya, Malang,
            Yogyakarta, Jakarta, Semarang, dan Banjarmasin.
          </p>

          <blockquote className="pull-quote">
            <q>Teruskan dan kembangkan bisnis ini, karena Sonokembang Catering merupakan sawah ladang untuk banyak orang.</q>
            <cite>Pesan Ibu Sri Harjoeni kepada keluarga</cite>
          </blockquote>

          <p>
            Pesan itu kini menjadi kompas kami. Sonokembang bukan sekadar penyedia
            makanan untuk acara — ia adalah ruang di mana keluarga merayakan momen
            paling berarti dalam hidup mereka, dan kami berdiri di sisi mereka, dari
            persiapan hingga sajian terakhir diangkat.
          </p>
        </div>
      </div>
    </section>
  );
}

const TIMELINE = [
  {
    year: "1987",
    title: "Kanteen pertama",
    body: "Ibu Sri Harjoeni membuka kanteen kecil di Surabaya. Menu rumahan untuk karyawan dan keluarga di sekitar.",
  },
  {
    year: "1990-an",
    title: "Dari kanteen ke catering",
    body: "Permintaan acara keluarga, syukuran, dan pernikahan tumbuh. Sonokembang resmi melayani catering skala kecil.",
  },
  {
    year: "2000-an",
    title: "Cabang Jawa Timur & Tengah",
    body: "Malang, Semarang, dan Yogyakarta dibuka berurutan. Lahir lini Prestige untuk hantaran dan nasi box premium.",
  },
  {
    year: "Hari ini",
    title: "Enam kota, satu warisan",
    body: "Surabaya · Malang · Yogyakarta · Jakarta · Semarang · Banjarmasin. Ribuan acara tiap tahun, satu standar rasa.",
  },
];

function TimelineSection() {
  return (
    <section className="story-section emerald tight" data-screen-label="03 Timeline">
      <div className="eyebrow-rule">Perjalanan</div>
      <h2 className="section-title"><em>Dari</em> satu dapur ke enam kota.</h2>
      <div className="timeline">
        {TIMELINE.map((t) => (
          <div key={t.year} className="timeline-step">
            <div className="year">{t.year}</div>
            <h4>{t.title}</h4>
            <p>{t.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const VALUES = [
  {
    letter: "E",
    id: "Expressive",
    title: "Berkesan",
    body: "Kami memberikan pelayanan yang mengesankan sehingga dapat menjadi kenangan yang membahagiakan — dari sambutan pertama hingga sendok terakhir terangkat.",
  },
  {
    letter: "E",
    id: "Elegant",
    title: "Berkelas",
    body: "Menampilkan kehadiran dan produk yang indah. Dari plating, table runner batik, hingga seragam server — setiap detail dipertimbangkan.",
  },
  {
    letter: "U",
    id: "Unique",
    title: "Berbeda",
    body: "Senantiasa menjadi pelopor ide-ide terbaru. Menu, presentasi, dan pengalaman yang membuat tiap acara terasa milik tamu undangannya sendiri.",
  },
];

const CULTURE = [
  { word: "Clean", body: "Kebersihan area kerja, area acara, jasmani, dan rohani." },
  { word: "Care", body: "Peduli terhadap kebutuhan dan keinginan pelanggan." },
  { word: "Courtesy", body: "Ramah, menyenangkan, membangun kenyamanan." },
  { word: "Customer Focus", body: "Mengutamakan kepuasan pelanggan di tiap keputusan." },
  { word: "Commitment", body: "Tanggung jawab terhadap kualitas produk dan jasa, top quality." },
];

function ValuesSection() {
  return (
    <section className="story-section cream-deep" data-screen-label="04 Values">
      <div className="values-head">
        <div>
          <div className="eyebrow-rule">Our Values · E2U</div>
          <h2 className="section-title"><em>Tiga</em> kata, satu komitmen.</h2>
        </div>
        <p className="right">
          E2U merupakan semangat kami dalam menjalankan komitmen kepada pelanggan —
          tertulis di setiap brief acara, terlihat di setiap meja yang disajikan.
        </p>
      </div>

      <div className="values-grid">
        {VALUES.map((v, i) => (
          <article key={v.id} className="value-card">
            <span className="letter">{v.letter}</span>
            <div className="ord">No. 0{i + 1}</div>
            <h3>{v.title}</h3>
            <div className="id">{v.id}</div>
            <p>{v.body}</p>
          </article>
        ))}
      </div>

      <div style={{ marginTop: 72 }}>
        <div className="eyebrow-rule">Kultur Kerja · 5C</div>
        <h2 className="section-title" style={{ fontSize: "clamp(28px,3.4vw,42px)" }}>
          Landasan kami bersinergi.
        </h2>
      </div>
      <div className="culture-grid">
        {CULTURE.map((c, i) => (
          <article key={c.word} className="culture-card">
            <div className="ord">C/{i + 1}</div>
            <h4 className="word">{c.word}</h4>
            <p>{c.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const JURNAL = [
  {
    id: "tumpeng",
    category: "Tradisi",
    date: "12 Mar 2026",
    title: "Tumpeng Nasi Kuning: bukan sekadar nasi yang dibentuk kerucut.",
    excerpt: "Filosofi gunungan, makna ingkung, dan kenapa lauk-pauk pengiring tumpeng selalu berjumlah ganjil.",
    image: "/assets/menu-02.png",
    featured: true,
  },
  {
    id: "hantaran",
    category: "Etiket",
    date: "28 Feb 2026",
    title: "Han.ta.ran Lebaran: panduan singkat untuk pemula.",
    excerpt: "Besek, tenong, atau zamrud box? Kapan kirim sebelum hari-H, dan apa yang sebaiknya tidak ikut masuk dalam paket.",
    image: "/assets/menu-05.png",
  },
  {
    id: "pernikahan",
    category: "Pernikahan",
    date: "14 Feb 2026",
    title: "Brief catering pernikahan: 12 pertanyaan yang sering terlupa.",
    excerpt: "Dari minimum pax sampai jadwal serving — checklist yang kami bagikan ke setiap calon pengantin.",
    image: "/assets/hero-wedding-spread.jpg",
  },
  {
    id: "dapur",
    category: "Dari Dapur",
    date: "30 Jan 2026",
    title: "Pagi-pagi di dapur Sigura-gura: cerita servis 1.200 pax.",
    excerpt: "Bagaimana tim Malang mengeksekusi resepsi 1.200 tamu tanpa kompromi rasa.",
    image: "/assets/food-03.jpg",
  },
  {
    id: "syukuran",
    category: "Adat",
    date: "11 Jan 2026",
    title: "Nasi syukuran, nasi berkat: beda tipis, beda makna.",
    excerpt: "Kapan menyajikan yang mana — dan kenapa keluarga Anda mungkin punya pakem sendiri yang juga benar.",
    image: "/assets/menu-04.jpg",
  },
  {
    id: "halal",
    category: "Standar",
    date: "20 Des 2025",
    title: "Sertifikasi Halal, ISO 9001, SLHS: apa artinya untuk meja Anda?",
    excerpt: "Tiga sertifikat di footer website kami bukan dekorasi.",
    image: "/assets/menu-08.png",
  },
];

const FILTERS = ["Semua", "Tradisi", "Pernikahan", "Dari Dapur", "Etiket"];

function JurnalSection() {
  const [filter, setFilter] = useState("Semua");
  const list = filter === "Semua" ? JURNAL : JURNAL.filter((p) => p.category === filter);

  return (
    <section className="story-section" data-screen-label="05 Jurnal">
      <div className="jurnal-head">
        <div>
          <div className="eyebrow-rule">Jurnal Sonokembang</div>
          <h2 className="section-title"><em>Catatan</em> dari dapur dan meja.</h2>
          <p className="section-lede" style={{ marginTop: 8 }}>
            Esai pendek tentang tradisi, etiket, dan cerita di balik tiap hidangan.
          </p>
        </div>
        <div className="jurnal-filter" role="tablist">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={filter === f ? "is-active" : ""}
              onClick={() => setFilter(f)}
              role="tab"
              aria-selected={filter === f}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="jurnal-grid">
        {list.map((post) => (
          <a key={post.id} href={`#${post.id}`} className={`jurnal-card ${post.featured && filter === "Semua" ? "featured" : ""}`}>
            <div className="jurnal-thumb">
              <img src={post.image} alt="" />
            </div>
            <div className="jurnal-meta">
              <span>{post.category}</span>
              <span className="dot" />
              <span className="date">{post.date}</span>
            </div>
            <h3 className="jurnal-title">{post.title}</h3>
            <p className="jurnal-excerpt">{post.excerpt}</p>
            <span className="jurnal-readmore">Baca selengkapnya <Icon name="arrow" size={12} /></span>
          </a>
        ))}
      </div>

      <div className="jurnal-more">
        <button>
          Lihat Semua Tulisan <Icon name="arrow" size={14} />
        </button>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="closing" data-screen-label="06 Closing">
      <div className="script">Bersama Sonokembang,</div>
      <h2>mari rayakan <em>momen</em> Anda berikutnya.</h2>
      <p>
        Konsultasi gratis dengan advisor kami — kami akan bantu menentukan acara,
        menu, jumlah pax, dan estimasi biaya.
      </p>
      <div className="closing-ctas">
        <a className="btn-primary" href="https://wa.me/628113000000" target="_blank" rel="noreferrer">
          Konsultasi via WhatsApp <Icon name="arrow" size={14} />
        </a>
        <Link className="btn-ghost" to="/#cities">
          Lihat Cabang Terdekat <Icon name="arrow" size={14} />
        </Link>
      </div>
    </section>
  );
}

function StoryRibbon() {
  return (
    <div className="ribbon">
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
        <Link className="text-link" to="/">Kembali ke Beranda <Icon name="arrow" size={14} /></Link>
      </div>
    </div>
  );
}

export default function StoryPage() {
  return (
    <>
      <StoryNav />
      <StoryHero />
      <FounderSection />
      <TimelineSection />
      <ValuesSection />
      <JurnalSection />
      <Closing />
      <StoryRibbon />
    </>
  );
}
