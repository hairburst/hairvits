<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.category || frontmatter.author" class="article-header-block">
    <div class="article-meta" v-if="frontmatter.category || frontmatter.author || frontmatter.date">
      <span v-if="frontmatter.category" class="category">{{ frontmatter.category }}</span>
      <span v-if="frontmatter.category && (frontmatter.date || frontmatter.author)" class="separator">|</span>
      <span v-if="frontmatter.date">{{ frontmatter.date }}</span>
      <span v-if="frontmatter.date && frontmatter.author" class="separator">|</span>
      <span v-if="frontmatter.author">By {{ frontmatter.author }}</span>
    </div>

    <p v-if="frontmatter.lead" class="lead">{{ frontmatter.lead }}</p>
  </div>
</template>
