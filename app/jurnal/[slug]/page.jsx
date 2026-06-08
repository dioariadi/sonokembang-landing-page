import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { getPost, getPostSlugs } from '@/lib/sanity'
import Icon from '../../components/Icon'

// Generate static paths at build time
export async function generateStaticParams() {
  try {
    const slugs = await getPostSlugs()
    return slugs.map((s) => ({ slug: s.slug }))
  } catch {
    return []
  }
}

// Dynamic metadata per post
export async function generateMetadata({ params }) {
  const { slug } = await params
  let post
  try {
    post = await getPost(slug)
  } catch {
    return { title: 'Artikel' }
  }
  if (!post) return { title: 'Artikel' }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      images: post.imageUrl ? [{ url: post.imageUrl }] : [],
    },
  }
}

export default async function PostPage({ params }) {
  const { slug } = await params
  let post
  try {
    post = await getPost(slug)
  } catch {
    post = null
  }

  if (!post) {
    notFound()
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.imageUrl,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: post.author || 'Tim Sonokembang',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sonokembang Catering',
      logo: { '@type': 'ImageObject', url: 'https://sonokembang.id/assets/logo-sonokembang-large.png' },
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <nav className="nav">
        <Link href="/" className="nav-mark" style={{ textDecoration: "none", color: "inherit" }}>
          <img src="/assets/logo-sonokembang-large.png" alt="Sonokembang" />
          <span>Sonokembang · Catering</span>
        </Link>
        <div className="nav-links">
          <Link href="/#cities">Cabang</Link>
          <Link href="/cerita-kami">Cerita Kami</Link>
          <Link href="/jurnal">Jurnal</Link>
          <Link href="/#contact">Kontak</Link>
        </div>
        <button className="nav-cta">Konsultasi Sekarang</button>
      </nav>

      <article className="story-section" style={{ paddingTop: 120, maxWidth: 720, margin: '0 auto' }}>
        <Link href="/jurnal" style={{ color: 'var(--sk-gold)', textDecoration: 'none', fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 24 }}>
          ← Kembali ke Jurnal
        </Link>

        <div className="jurnal-meta" style={{ marginBottom: 16 }}>
          <span>{post.category}</span>
          <span className="dot" />
          <span className="date">{new Date(post.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          {post.author && <><span className="dot" /><span>{post.author}</span></>}
        </div>

        <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.15, marginBottom: 24 }}>{post.title}</h1>

        {post.imageUrl && (
          <img src={post.imageUrl} alt="" style={{ width: '100%', borderRadius: 12, marginBottom: 32 }} />
        )}

        <div className="post-body">
          {post.body ? (
            <PortableText value={post.body} />
          ) : (
            <p>{post.excerpt}</p>
          )}
        </div>
      </article>

      <div className="ribbon" style={{ marginTop: 80 }}>
        <div className="ribbon-l">
          <span>Halal MUI</span><span className="dot" /><span>ISO 9001:2015</span>
        </div>
        <div className="ribbon-r">
          <Link className="text-link" href="/jurnal">Jurnal Lainnya <Icon name="arrow" size={14} /></Link>
        </div>
      </div>
    </>
  )
}
