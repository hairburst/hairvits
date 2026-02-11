---
layout: page
---

<script setup>
import { data } from '../articles.data'
const articles = data.filter(a => a.section === 'beauty')
</script>

<SectionLayout title="Beauty" subtitle="Where science meets style. Expert-backed beauty routines, ingredient deep-dives, and trend analysis." :articles="articles" />
