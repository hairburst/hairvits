import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'HairVits',
  description: 'Expert reviews and science-backed insights on hair supplements, beauty, and wellness.',
  cleanUrls: true,
  appearance: false,
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap', rel: 'stylesheet' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Reviews', link: '/reviews/' },
      { text: 'Science', link: '/science/' },
      { text: 'Beauty', link: '/beauty/' },
    ],
    sidebar: false,
    aside: false,
    footer: {
      message: 'Evidence-based hair and beauty insights.',
      copyright: '© 2026 HairVits. All rights reserved.'
    },
    search: {
      provider: 'local'
    }
  },
  vite: {
    css: {
      preprocessorOptions: {}
    }
  }
})
