import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/2025-sfa-donnee-vuetify-vitepress/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  title: "Pokédex Vuetify",
  description: "Donnée permettant de créer une première application Vuetify de type Pokédex",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Etape 1', link: '/docs/1-creation-des-pages' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
