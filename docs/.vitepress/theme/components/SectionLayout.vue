<script setup lang="ts">
import { formatDate } from '../utils/formatDate'
import type { Article } from '../../../../articles.data'

defineProps<{
  title: string
  subtitle?: string
  articles?: Article[]
}>()
</script>

<template>
  <div class="section-index">
    <div class="section-header">
      <h1>{{ title }}</h1>
      <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
    </div>
    <div class="card-grid">
      <ArticleCard
        v-for="article in articles"
        :key="article.href"
        :title="article.title"
        :href="article.href"
        :category="article.category"
        :date="formatDate(article.date)"
        :excerpt="article.lead"
        :author="article.author"
        :image="article.image"
      />
      <slot v-if="!articles" />
    </div>
  </div>
</template>

<style scoped>
.section-index {
  width: 100%;
}
</style>
