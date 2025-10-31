<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';

const reasons = [
  {
    icon: "fa-solid fa-building-circle-check",
    title: "Premium Construction Quality",
    description: "We use top-grade materials and advanced engineering practices to ensure lasting structural integrity and luxury finishes."
  },
  {
    icon: "fa-solid fa-user-shield",
    title: "Trusted & Transparent Service",
    description: "Every project follows a clear, client-first approach — ensuring full transparency, trust, and satisfaction."
  },
  {
    icon: "fa-solid fa-location-dot",
    title: "Prime Locations",
    description: "Our projects are strategically placed in high-demand areas, combining accessibility with long-term value growth."
  },
  {
    icon: "fa-solid fa-laptop-house",
    title: "Smart Home Integration",
    description: "Modern smart technology built into every home for seamless living, energy efficiency, and remote control convenience."
  },
  {
    icon: "fa-solid fa-seedling",
    title: "Eco-Friendly Designs",
    description: "Sustainable materials, natural ventilation, and green zones — designed to promote a healthier and cleaner lifestyle."
  },
  {
    icon: "fa-solid fa-people-roof",
    title: "Customer-Centric Approach",
    description: "From consultation to handover, we provide personalized assistance and ongoing support at every step."
  }
];

</script>
<template>
  <section class="why-choose-us bg-light">
    <div class="container">

      <SectionTitle class="mb-2 text-center" title="Why Choose Us"
        sub-title="Discover the values and expertise that make our projects stand out" />

      <div class="medium-2 large-3 gap-2">
        <div v-for="(item, i) in reasons" :key="i" class="why-choose-card bg-white">
          <i :class="item.icon" class="fa-3x text-secondary mb-1"></i>
          <SubTitle>{{ item.title }}</SubTitle>
          <BaseParagraph>{{ item.description }}</BaseParagraph>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.why-choose-us {
  padding: 3.75rem 0;
}

.why-choose-card {
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: var(--box-shadow);
}

.why-choose-card p {
  margin: .5rem 0;
}
</style>
