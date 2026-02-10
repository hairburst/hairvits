<script setup lang="ts">
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
    <div class="home-section">
      <div class="featured-card">
        <div class="featured-image">
          <span class="placeholder-label">Featured</span>
        </div>
        <div class="featured-content">
          <div class="overline">Editor's Pick</div>
          <h3><a href="/reviews/best-biotin-supplements">The 5 Best Biotin Supplements of 2026, Reviewed</a></h3>
          <p>We tested the most popular biotin supplements on the market for potency, purity, and value. Here's what we found after three months of rigorous analysis.</p>
          <div class="byline">By the HairVits Editorial Team &middot; January 2026</div>
        </div>
      </div>
    </div>

    <!-- Reviews Section -->
    <div class="home-section">
      <div class="section-title">
        <h2>Latest Reviews</h2>
        <a href="/reviews/">View All</a>
      </div>
      <div class="card-grid" style="padding: 0;">
        <ArticleCard
          title="Nutrafol Women's Balance: A Six-Month Verdict"
          href="/reviews/nutrafol-womens-balance"
          category="Review"
          excerpt="Does this dermatologist-favourite hair growth supplement live up to its clinical claims? Our comprehensive trial."
          author="Dr. Sarah Chen"
          date="Jan 2026"
        />
        <ArticleCard
          title="Viviscal vs. Nutrafol: Head-to-Head Comparison"
          href="/reviews/viviscal-vs-nutrafol"
          category="Comparison"
          excerpt="Two of the biggest names in hair supplements, compared across efficacy, ingredients, side effects, and price."
          author="Elena Marchetti"
          date="Dec 2025"
        />
        <ArticleCard
          title="The Best Biotin Supplements of 2026"
          href="/reviews/best-biotin-supplements"
          category="Roundup"
          excerpt="We tested twelve biotin supplements for potency, purity, and bioavailability. Five made the cut."
          author="HairVits Editors"
          date="Jan 2026"
        />
      </div>
    </div>

    <!-- Science Section -->
    <div class="home-section">
      <div class="section-title">
        <h2>Science &amp; Research</h2>
        <a href="/science/">View All</a>
      </div>
      <div class="card-grid" style="padding: 0;">
        <ArticleCard
          title="How Biotin Actually Works: A Molecular Primer"
          href="/science/how-biotin-works"
          category="Explainer"
          excerpt="Biotin is the most popular hair supplement ingredient, but what does the science actually say about its mechanism?"
          author="Dr. James Liu"
          date="Jan 2026"
        />
        <ArticleCard
          title="Iron Deficiency and Hair Loss: What the Research Shows"
          href="/science/iron-deficiency-hair-loss"
          category="Research"
          excerpt="Ferritin levels below 30 ng/mL are linked to telogen effluvium. Here's what that means for your hair."
          author="Dr. Sarah Chen"
          date="Dec 2025"
        />
        <ArticleCard
          title="The Gut-Hair Axis: Emerging Evidence"
          href="/science/gut-hair-axis"
          category="Deep Dive"
          excerpt="New research suggests the microbiome plays a significant role in hair follicle cycling and growth."
          author="Dr. Priya Patel"
          date="Nov 2025"
        />
      </div>
    </div>

    <!-- Beauty Section -->
    <div class="home-section">
      <div class="section-title">
        <h2>Beauty &amp; Wellness</h2>
        <a href="/beauty/">View All</a>
      </div>
      <div class="card-grid" style="padding: 0;">
        <ArticleCard
          title="The Minimalist Hair Care Routine That Works"
          href="/beauty/minimalist-hair-routine"
          category="Guide"
          excerpt="Dermatologists and stylists agree: less is more. The essential three-step routine for healthier hair."
          author="Mia Torres"
          date="Jan 2026"
        />
        <ArticleCard
          title="Scalp Care Is the New Skincare"
          href="/beauty/scalp-care-guide"
          category="Trend"
          excerpt="Why the beauty industry is finally paying attention to scalp health, and what you should actually buy."
          author="Elena Marchetti"
          date="Dec 2025"
        />
        <ArticleCard
          title="Collagen Supplements: Beauty Staple or Marketing Myth?"
          href="/beauty/collagen-supplements-truth"
          category="Investigation"
          excerpt="We examined the clinical evidence behind ingestible collagen for hair, skin, and nails."
          author="Dr. James Liu"
          date="Nov 2025"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-editorial {
  width: 100%;
}

.placeholder-label {
  font-family: var(--hv-sans);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--hv-light);
}
</style>
