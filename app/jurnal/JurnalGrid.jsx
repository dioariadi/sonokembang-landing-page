'use client'

import { useState } from 'react'
import Link from 'next/link'
import Icon from '../components/Icon'

const FILTERS = ["Semua", "Tradisi", "Pernikahan", "Dari Dapur", "Etiket"]

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function JurnalGrid({ posts }) {
  const [filter, setFilter] = useState("Semua")
  const list = filter === "Semua" ? posts : posts.filter((p) => p.category === filter)

  return (
    <section className="story-section" style={{ paddingTop: 0 }}>
      <div className="jurnal-filter" role="tablist" style={{ marginBottom: 40 }}>
        {FILTERS.map((f) => (
          <button key={f} className={filter === f ? "is-active" : ""} onClick={() => setFilter(f)} role="tab" aria-selected={filter === f}>{f}</button>
        ))}
      </div>

      <div className="jurnal-grid">
        {list.map((post) => (
          <Link
            key={post._id}
            href={`/jurnal/${post.slug?.current || post.slug}`}
            className={`jurnal-card ${post.featured && filter === "Semua" ? "featured" : ""}`}
          >
            <div className="jurnal-thumb">
              <img src={post.imageUrl || '/assets/menu-02.png'} alt="" />
            </div>
            <div className="jurnal-meta">
              <span>{post.category}</span>
              <span className="dot" />
              <span className="date">{formatDate(post.publishedAt)}</span>
            </div>
            <h3 className="jurnal-title">{post.title}</h3>
            <p className="jurnal-excerpt">{post.excerpt}</p>
            <span className="jurnal-readmore">Baca selengkapnya <Icon name="arrow" size={12} /></span>
          </Link>
        ))}
      </div>
    </section>
  )
}
