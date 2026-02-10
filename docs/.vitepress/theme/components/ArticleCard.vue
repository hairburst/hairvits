<script setup lang="ts">
defineProps<{
  title: string
  href: string
  category?: string
  date?: string
  excerpt?: string
  author?: string
}>()
</script>

<template>
  <article class="article-card">
    <div class="card-image">
      <span class="placeholder-label">{{ category || 'Article' }}</span>
    </div>
    <div class="card-body">
      <span v-if="category" class="card-category">{{ category }}</span>
      <h3 class="card-title">
        <a :href="href">{{ title }}</a>
      </h3>
      <p v-if="excerpt" class="card-excerpt">{{ excerpt }}</p>
      <div class="card-meta">
        <span v-if="author" class="card-author">{{ author }}</span>
        <span v-if="author && date" class="card-sep">&middot;</span>
        <span v-if="date" class="card-date">{{ date }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.article-card {
  display: flex;
  flex-direction: column;
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
