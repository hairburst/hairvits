<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { formatDate } from '../utils/formatDate'

const { frontmatter } = useData()
const displayDate = computed(() => formatDate(frontmatter.value.date))
</script>

<template>
  <div v-if="frontmatter.category || frontmatter.author" class="article-header-block">
    <div class="article-meta" v-if="frontmatter.category || frontmatter.author || frontmatter.date">
      <span v-if="frontmatter.category" class="category">{{ frontmatter.category }}</span>
      <span v-if="frontmatter.category && (frontmatter.date || frontmatter.author)" class="separator">|</span>
      <span v-if="displayDate">{{ displayDate }}</span>
      <span v-if="frontmatter.date && frontmatter.author" class="separator">|</span>
      <span v-if="frontmatter.author">By {{ frontmatter.author }}</span>
    </div>

    <p v-if="frontmatter.lead" class="lead">{{ frontmatter.lead }}</p>

    <div v-if="frontmatter.image" class="featured-image">
      <img :src="frontmatter.image" :alt="frontmatter.title" />
    </div>
  </div>
</template>

<style scoped>
.featured-image {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  border-radius: 2px;
  overflow: hidden;
}

.featured-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 2px;
}
</style>
