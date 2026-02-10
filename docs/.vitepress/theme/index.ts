import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h } from 'vue'
import './custom.css'
import HomeLayout from './components/HomeLayout.vue'
import ArticleCard from './components/ArticleCard.vue'
import SectionLayout from './components/SectionLayout.vue'
import ArticleHeader from './components/ArticleHeader.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(ArticleHeader)
    })
  },
  enhanceApp({ app }) {
    app.component('HomeLayout', HomeLayout)
    app.component('ArticleCard', ArticleCard)
    app.component('SectionLayout', SectionLayout)
  }
} satisfies Theme
