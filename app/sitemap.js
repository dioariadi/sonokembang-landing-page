export default function sitemap() {
  const baseUrl = 'https://sonokembang.id'

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/cerita-kami`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/jurnal`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
  ]
}
