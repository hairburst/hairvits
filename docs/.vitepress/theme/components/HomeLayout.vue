<script setup lang="ts">
import { computed } from 'vue'
import { formatDate } from '../utils/formatDate'
import type { Article } from '../../../../articles.data'

const props = defineProps<{
  articles: Article[]
}>()

const featured = computed(() => props.articles[0])

function latestBySection(section: string, count: number) {
  return props.articles
    .filter(a => a.section === section && a !== featured.value)
    .slice(0, count)
}

const reviews = computed(() => latestBySection('reviews', 3))
const science = computed(() => latestBySection('science', 3))
const beauty = computed(() => latestBySection('beauty', 3))
</script>

<template>
  <div class="home-editorial">
    <!-- Hero -->
    <div class="hero-editorial">
      <div class="overline">Hair &middot; Wellness &middot; Beauty</div>
      <h1>The Science of Beautiful Hair</h1>
      <p class="tagline">
        Expert reviews, evidence-based science, and trusted beauty insights.
        Your guide to supplements, ingredients, and routines that actually work.
      </p>
      <div class="divider"></div>
    </div>

    <!-- Featured Article -->
    <div v-if="featured" class="home-section">
      <div class="featured-card">
        <div class="featured-image">
          <img v-if="featured.image" :src="featured.image" :alt="featured.title" />
        </div>
        <div class="featured-content">
          <div class="overline">Editor's Pick</div>
          <h3><a :href="featured.href">{{ featured.title }}</a></h3>
          <p>{{ featured.lead }}</p>
          <div class="byline">By {{ featured.author }} &middot; {{ formatDate(featured.date, 'short') }}</div>
        </div>
      </div>
    </div>

    <!-- Reviews Section -->
    <div v-if="reviews.length" class="home-section">
      <div class="section-title">
        <h2>Latest Reviews</h2>
        <a href="/reviews/">View All</a>
      </div>
      <div class="card-grid" style="padding: 0;">
        <ArticleCard
          v-for="article in reviews"
          :key="article.href"
          :title="article.title"
          :href="article.href"
          :category="article.category"
          :image="article.image"
          :excerpt="article.lead"
          :author="article.author"
          :date="formatDate(article.date)"
        />
      </div>
    </div>

    <!-- Science Section -->
    <div v-if="science.length" class="home-section">
      <div class="section-title">
        <h2>Science &amp; Research</h2>
        <a href="/science/">View All</a>
      </div>
      <div class="card-grid" style="padding: 0;">
        <ArticleCard
          v-for="article in science"
          :key="article.href"
          :title="article.title"
          :href="article.href"
          :category="article.category"
          :image="article.image"
          :excerpt="article.lead"
          :author="article.author"
          :date="formatDate(article.date)"
        />
      </div>
    </div>

    <!-- Beauty Section -->
    <div v-if="beauty.length" class="home-section">
      <div class="section-title">
        <h2>Beauty &amp; Wellness</h2>
        <a href="/beauty/">View All</a>
      </div>
      <div class="card-grid" style="padding: 0;">
        <ArticleCard
          v-for="article in beauty"
          :key="article.href"
          :title="article.title"
          :href="article.href"
          :category="article.category"
          :image="article.image"
          :excerpt="article.lead"
          :author="article.author"
          :date="formatDate(article.date)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-editorial {
  width: 100%;
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
  transition: transform 0.3s ease;
}

.featured-card:hover .featured-image img {
  transform: scale(1.02);
}
</style>
