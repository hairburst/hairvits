---
layout: page
---

<script setup>
import { data } from '../articles.data'
const articles = data.filter(a => a.section === 'reviews')
</script>

<SectionLayout title="Reviews" subtitle="Independent, evidence-based supplement and product reviews. Every product is tested, every claim is verified." :articles="articles" />
