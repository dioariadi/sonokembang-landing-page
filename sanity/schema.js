// Sanity schema definitions for Sonokembang blog
// Use these when setting up your Sanity Studio project

export const postSchema = {
  name: 'post',
  title: 'Jurnal',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Tradisi', value: 'Tradisi' },
          { title: 'Pernikahan', value: 'Pernikahan' },
          { title: 'Dari Dapur', value: 'Dari Dapur' },
          { title: 'Etiket', value: 'Etiket' },
          { title: 'Adat', value: 'Adat' },
          { title: 'Standar', value: 'Standar' },
        ],
      },
    },
    {
      name: 'excerpt',
      title: 'Ringkasan',
      type: 'text',
      rows: 3,
      description: 'Ringkasan singkat untuk kartu preview (max 200 karakter)',
    },
    {
      name: 'mainImage',
      title: 'Gambar Utama',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'body',
      title: 'Konten',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'caption', type: 'string', title: 'Keterangan' },
            { name: 'alt', type: 'string', title: 'Alt text' },
          ],
        },
      ],
    },
    {
      name: 'author',
      title: 'Penulis',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'publishedAt',
      title: 'Tanggal Terbit',
      type: 'datetime',
    },
  ],
  orderings: [
    {
      title: 'Terbaru',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      category: 'category',
    },
    prepare({ title, media, category }) {
      return { title, subtitle: category, media }
    },
  },
}

export const authorSchema = {
  name: 'author',
  title: 'Penulis',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nama', type: 'string' },
    { name: 'image', title: 'Foto', type: 'image', options: { hotspot: true } },
  ],
}
