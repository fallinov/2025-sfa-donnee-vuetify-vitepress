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
      { text: 'Accueil', link: '/' },
      { text: 'Exemple de solution', link: 'https://kode.ch/pokedex/' },
    ],

    sidebar: [
      {
        text: 'Étapes',
        items: [
          { text: 'Création des pages', link: '/docs/1-creation-des-pages' },
          { text: 'Menu de navigation', link: '/docs/2-menu-de-navigation' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fallinov/2024-SFA-JS-Vue-Vuetify-Pokedex/tree/main' }
    ]
  }
})
