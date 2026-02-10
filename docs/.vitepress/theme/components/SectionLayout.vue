<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="section-index">
    <div class="section-header">
      <h1>{{ title }}</h1>
      <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
    </div>
    <div class="card-grid">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.section-index {
  width: 100%;
}
</style>
