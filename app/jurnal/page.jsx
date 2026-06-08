import Link from 'next/link'
import Icon from '../components/Icon'
import { getPosts } from '@/lib/sanity'
import JurnalGrid from './JurnalGrid'

export const metadata = {
  title: 'Jurnal Sonokembang',
  description: 'Esai pendek tentang tradisi kuliner, etiket, dan cerita di balik tiap hidangan Sonokembang Catering.',
  openGraph: {
    title: 'Jurnal Sonokembang',
    description: 'Catatan dari dapur dan meja — tradisi, etiket, dan cerita catering.',
  },
}

// Placeholder posts (used when Sanity isn't connected yet)
const PLACEHOLDER_POSTS = [
  { _id: "1", title: "Tumpeng Nasi Kuning: bukan sekadar nasi yang dibentuk kerucut.", slug: { current: "tumpeng-nasi-kuning" }, category: "Tradisi", publishedAt: "2026-03-12", excerpt: "Filosofi gunungan, makna ingkung, dan kenapa lauk-pauk pengiring tumpeng selalu berjumlah ganjil.", imageUrl: "/assets/menu-02.png", featured: true },
  { _id: "2", title: "Han.ta.ran Lebaran: panduan singkat untuk pemula.", slug: { current: "hantaran-lebaran" }, category: "Etiket", publishedAt: "2026-02-28", excerpt: "Besek, tenong, atau zamrud box? Kapan kirim sebelum hari-H.", imageUrl: "/assets/menu-05.png" },
  { _id: "3", title: "Brief catering pernikahan: 12 pertanyaan yang sering terlupa.", slug: { current: "brief-catering-pernikahan" }, category: "Pernikahan", publishedAt: "2026-02-14", excerpt: "Dari minimum pax sampai jadwal serving — checklist untuk calon pengantin.", imageUrl: "/assets/hero-wedding-spread.jpg" },
  { _id: "4", title: "Pagi-pagi di dapur Sigura-gura: cerita servis 1.200 pax.", slug: { current: "dapur-sigura-gura" }, category: "Dari Dapur", publishedAt: "2026-01-30", excerpt: "Bagaimana tim Malang mengeksekusi resepsi 1.200 tamu tanpa kompromi rasa.", imageUrl: "/assets/food-03.jpg" },
  { _id: "5", title: "Nasi syukuran, nasi berkat: beda tipis, beda makna.", slug: { current: "nasi-syukuran-berkat" }, category: "Adat", publishedAt: "2026-01-11", excerpt: "Kapan menyajikan yang mana — dan kenapa keluarga Anda mungkin punya pakem sendiri.", imageUrl: "/assets/menu-04.jpg" },
  { _id: "6", title: "Sertifikasi Halal, ISO 9001, SLHS: apa artinya untuk meja Anda?", slug: { current: "sertifikasi-halal-iso" }, category: "Standar", publishedAt: "2025-12-20", excerpt: "Tiga sertifikat di footer website kami bukan dekorasi.", imageUrl: "/assets/menu-08.png" },
]

export default async function JurnalPage() {
  let posts = []
  try {
    posts = await getPosts()
  } catch {
    // Sanity not connected yet — use placeholders
  }

  if (!posts || posts.length === 0) {
    posts = PLACEHOLDER_POSTS
  }

  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav-mark" style={{ textDecoration: "none", color: "inherit" }}>
          <img src="/assets/logo-sonokembang-large.png" alt="Sonokembang" />
          <span>Sonokembang · Catering</span>
        </Link>
        <div className="nav-links">
          <Link href="/#cities">Cabang</Link>
          <Link href="/#menu">Menu</Link>
          <Link href="/cerita-kami">Cerita Kami</Link>
          <Link href="/jurnal" aria-current="page" style={{ color: "var(--sk-gold-soft)", opacity: 1 }}>Jurnal</Link>
          <Link href="/#contact">Kontak</Link>
        </div>
        <button className="nav-cta">Konsultasi Sekarang</button>
      </nav>

      <section className="story-section" style={{ paddingTop: 120 }}>
        <div className="eyebrow-rule">Jurnal Sonokembang</div>
        <h1 className="section-title"><em>Catatan</em> dari dapur dan meja.</h1>
        <p className="section-lede" style={{ marginTop: 8, maxWidth: 600 }}>
          Esai pendek tentang tradisi, etiket, dan cerita di balik tiap hidangan. Ditulis oleh tim Sonokembang.
        </p>
      </section>

      <JurnalGrid posts={posts} />

      <div className="ribbon">
        <div className="ribbon-l">
          <span>Halal MUI</span><span className="dot" /><span>ISO 9001:2015</span><span className="dot" /><span>SLHS Tersertifikasi</span>
        </div>
        <div className="ribbon-r">
          <Link className="text-link" href="/">Kembali ke Beranda <Icon name="arrow" size={14} /></Link>
        </div>
      </div>
    </>
  )
}
