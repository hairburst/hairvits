---
layout: page
---

<script setup>
import { data } from '../articles.data'
const articles = data.filter(a => a.section === 'science')
</script>

<SectionLayout title="Science" subtitle="Peer-reviewed research translated into clear, accessible language. Understanding the biology behind healthy hair." :articles="articles" />
