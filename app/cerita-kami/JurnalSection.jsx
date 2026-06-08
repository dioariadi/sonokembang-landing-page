'use client'

import { useState } from 'react'
import Icon from '../components/Icon'

const JURNAL = [
  { id: "tumpeng", category: "Tradisi", date: "12 Mar 2026", title: "Tumpeng Nasi Kuning: bukan sekadar nasi yang dibentuk kerucut.", excerpt: "Filosofi gunungan, makna ingkung, dan kenapa lauk-pauk pengiring tumpeng selalu berjumlah ganjil.", image: "/assets/menu-02.png", featured: true },
  { id: "hantaran", category: "Etiket", date: "28 Feb 2026", title: "Han.ta.ran Lebaran: panduan singkat untuk pemula.", excerpt: "Besek, tenong, atau zamrud box? Kapan kirim sebelum hari-H.", image: "/assets/menu-05.png" },
  { id: "pernikahan", category: "Pernikahan", date: "14 Feb 2026", title: "Brief catering pernikahan: 12 pertanyaan yang sering terlupa.", excerpt: "Dari minimum pax sampai jadwal serving — checklist untuk calon pengantin.", image: "/assets/hero-wedding-spread.jpg" },
  { id: "dapur", category: "Dari Dapur", date: "30 Jan 2026", title: "Pagi-pagi di dapur Sigura-gura: cerita servis 1.200 pax.", excerpt: "Bagaimana tim Malang mengeksekusi resepsi 1.200 tamu tanpa kompromi rasa.", image: "/assets/food-03.jpg" },
  { id: "syukuran", category: "Adat", date: "11 Jan 2026", title: "Nasi syukuran, nasi berkat: beda tipis, beda makna.", excerpt: "Kapan menyajikan yang mana — dan kenapa keluarga Anda mungkin punya pakem sendiri.", image: "/assets/menu-04.jpg" },
  { id: "halal", category: "Standar", date: "20 Des 2025", title: "Sertifikasi Halal, ISO 9001, SLHS: apa artinya untuk meja Anda?", excerpt: "Tiga sertifikat di footer website kami bukan dekorasi.", image: "/assets/menu-08.png" },
]

const FILTERS = ["Semua", "Tradisi", "Pernikahan", "Dari Dapur", "Etiket"]

export default function JurnalSection() {
  const [filter, setFilter] = useState("Semua")
  const list = filter === "Semua" ? JURNAL : JURNAL.filter((p) => p.category === filter)

  return (
    <section className="story-section" data-screen-label="05 Jurnal">
      <div className="jurnal-head">
        <div>
          <div className="eyebrow-rule">Jurnal Sonokembang</div>
          <h2 className="section-title"><em>Catatan</em> dari dapur dan meja.</h2>
          <p className="section-lede" style={{ marginTop: 8 }}>Esai pendek tentang tradisi, etiket, dan cerita di balik tiap hidangan.</p>
        </div>
        <div className="jurnal-filter" role="tablist">
          {FILTERS.map((f) => (
            <button key={f} className={filter === f ? "is-active" : ""} onClick={() => setFilter(f)} role="tab" aria-selected={filter === f}>{f}</button>
          ))}
        </div>
      </div>
      <div className="jurnal-grid">
        {list.map((post) => (
          <a key={post.id} href={`#${post.id}`} className={`jurnal-card ${post.featured && filter === "Semua" ? "featured" : ""}`}>
            <div className="jurnal-thumb"><img src={post.image} alt="" /></div>
            <div className="jurnal-meta"><span>{post.category}</span><span className="dot" /><span className="date">{post.date}</span></div>
            <h3 className="jurnal-title">{post.title}</h3>
            <p className="jurnal-excerpt">{post.excerpt}</p>
            <span className="jurnal-readmore">Baca selengkapnya <Icon name="arrow" size={12} /></span>
          </a>
        ))}
      </div>
      <div className="jurnal-more"><button>Lihat Semua Tulisan <Icon name="arrow" size={14} /></button></div>
    </section>
  )
}
