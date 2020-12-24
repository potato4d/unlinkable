export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'unlinkable - potato4d.me',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The easiest way to unlink an @mention.' },
      { property: 'og:type', hid: 'og:type', content: 'website' },
      { property: 'og:title', hid: 'og:title', content: 'unlinkable - potato4d.me' },
      {
        property: 'og:description',
        hid: 'og:description',
        content: 'The easiest way to unlink an @mention.',
      },
      { property: 'og:site_name', hid: 'og:site_name', content: 'unlinkable - potato4d.me' },
      {
        name: 'twitter:card',
        hid: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        property: 'og:url',
        hid: 'og:url',
        content: 'https://unlinkable.potato4d.me',
      },
      { property: 'og:image', hid: 'og:image', content: 'https://i.gyazo.com/3ba3b7da6527f303734c656ca35dcdb5.png' },
      {
        property: 'og:image:secure_url',
        hid: 'og:image:secure_url',
        content: 'https://i.gyazo.com/3ba3b7da6527f303734c656ca35dcdb5.png',
      },
      {
        name: 'twitter:description',
        hid: 'twitter:description',
        content: 'The easiest way to unlink an @mention.',
      },
      { name: 'twitter:title', hid: 'twitter:title', content: 'unlinkable - potato4d.me' },
      { name: 'twitter:image', hid: 'twitter:image', content: 'https://i.gyazo.com/3ba3b7da6527f303734c656ca35dcdb5.png' },
    ],
    link: [
      { rel: 'canonical', href: 'https://unlinkable.potato4d.me' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
