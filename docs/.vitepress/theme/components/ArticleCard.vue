<script setup lang="ts">
import { computed } from 'vue'
import { formatDate } from '../utils/formatDate'

const props = defineProps<{
  title: string
  href: string
  category?: string
  date?: string
  excerpt?: string
  author?: string
  image?: string
}>()

const displayDate = computed(() => formatDate(props.date, 'short'))
</script>

<template>
  <article class="article-card">
    <a :href="href" class="card-image-link">
      <div class="card-image">
        <img v-if="image" :src="image" :alt="title" class="card-img" />
        <span v-else class="placeholder-label">{{ category || 'Article' }}</span>
      </div>
    </a>
    <div class="card-body">
      <span v-if="category" class="card-category">{{ category }}</span>
      <h3 class="card-title">
        <a :href="href">{{ title }}</a>
      </h3>
      <p v-if="excerpt" class="card-excerpt">{{ excerpt }}</p>
      <div class="card-meta">
        <span v-if="author" class="card-author">{{ author }}</span>
        <span v-if="author && displayDate" class="card-sep">&middot;</span>
        <span v-if="displayDate" class="card-date">{{ displayDate }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.article-card {
  display: flex;
  flex-direction: column;
}

.card-image-link {
  text-decoration: none;
  display: block;
}

.card-image {
  aspect-ratio: 16/10;
  background: var(--hv-cream);
  border-radius: 2px;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card-image-link:hover .card-img {
  transform: scale(1.03);
}

.placeholder-label {
  font-family: var(--hv-sans);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--hv-light);
}

.card-category {
  font-family: var(--hv-sans);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--hv-accent);
  margin-bottom: 0.5rem;
  display: block;
}

.card-title {
  font-family: var(--hv-serif);
  font-size: 1.375rem;
  font-weight: 500;
  line-height: 1.3;
  margin: 0 0 0.75rem;
}

.card-title a {
  color: var(--hv-black);
  text-decoration: none;
  transition: color 0.15s ease;
}

.card-title a:hover {
  color: var(--hv-accent);
}

.card-excerpt {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--hv-mid);
  margin: 0 0 0.75rem;
}

.card-meta {
  font-size: 0.75rem;
  color: var(--hv-light);
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.card-sep {
  margin: 0 0.35rem;
}
</style>
