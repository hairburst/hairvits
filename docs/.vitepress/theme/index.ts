import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.css'
import HomeLayout from './components/HomeLayout.vue'
import ArticleCard from './components/ArticleCard.vue'
import SectionLayout from './components/SectionLayout.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeLayout', HomeLayout)
    app.component('ArticleCard', ArticleCard)
    app.component('SectionLayout', SectionLayout)
  }
} satisfies Theme
