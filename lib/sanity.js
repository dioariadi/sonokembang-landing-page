const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

let _client = null

async function getClient() {
  if (_client) return _client
  if (!projectId) return null

  const { createClient } = await import('next-sanity')
  _client = createClient({ projectId, dataset, apiVersion: '2024-01-01', useCdn: true })
  return _client
}

export function urlFor(source) {
  // Lazy — only works after getClient() has been called
  if (!projectId) return null
  const imageUrlBuilder = require('@sanity/image-url').default
  return imageUrlBuilder({ projectId, dataset }).image(source)
}

export async function getPosts() {
  const client = await getClient()
  if (!client) return []
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id, title, slug, excerpt, category, publishedAt,
      "imageUrl": mainImage.asset->url, featured
    }
  `)
}

export async function getPost(slug) {
  const client = await getClient()
  if (!client) return null
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id, title, slug, excerpt, category, publishedAt,
      "imageUrl": mainImage.asset->url, body, featured,
      "author": author->name
    }
  `, { slug })
}

export async function getPostSlugs() {
  const client = await getClient()
  if (!client) return []
  return client.fetch(`*[_type == "post"] { "slug": slug.current }`)
}
