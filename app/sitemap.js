import { getPostSlugs } from '@/lib/sanity'

export default async function sitemap() {
  const baseUrl = 'https://sonokembang.id'

  // Static pages
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/cerita-kami`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/jurnal`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
  ]

  // Dynamic blog posts
  let postPages = []
  try {
    const slugs = await getPostSlugs()
    postPages = slugs.map((s) => ({
      url: `${baseUrl}/jurnal/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }))
  } catch {
    // Sanity not connected
  }

  return [...staticPages, ...postPages]
}
