const landings = [
  {
   // Советую использовать uuid, чтобы не было конфликтов с id, и точно не числа
    id: 'a1b2c3d4-e5f6-7g8h-9i0j-1k2l3m4n5o6p',
    title: 'Nuxt Starter',
    description: 'Nuxt Starter is a starter template for Nuxt.js projects.',
    image: 'https://nuxtjs.org/logos/nuxt-logo.svg',
    url: 'https://nuxtjs.org',
    createdAt: '2021-01-01T00:00:00.000Z',
    updatedAt: '2021-01-01T00:00:00.000Z'
 },
  {
    id: 'b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5-p6q7',
    title: 'Nuxt Content',
    description: 'Nuxt Content is a module for Nuxt.js that allows you to write in Markdown and JSON and get a Vue-powered SPA out of the box.',
    image: 'https://nuxtjs.org/logos/nuxt-content.svg',
    url: 'https://content.nuxtjs.org',
    createdAt: '2021-01-01T00:00:00.000Z',
    updatedAt: '2021-01-01T00:00:00.000Z'
  },
]

const landingsIds = landings.map(landing => landing.id)

export { landings, landingsIds }
