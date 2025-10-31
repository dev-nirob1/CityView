<script setup>
import { computed, ref } from 'vue';
import SectionTitle from '@/components/Widget/SectionTitle.vue';

const selectedId = ref(1)

const floor_plans = ref([
  {
    id: 1,
    title: "Ground Floor",
    image: "https://images.unsplash.com/photo-1721244653580-79577d2822a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=896",
    alt: "Ground floor layout design",
    subtitle: "Welcoming entrance & community spaces",
    description:
      "The ground floor has been carefully designed to offer a grand first impression. From the elegant lobby to the landscaped gardens, every detail reflects a blend of functionality and sophistication.",
    features: [
      "Spacious entrance lobby with reception",
      "Visitor parking area & security check post",
      "Community hall and waiting lounge",
      "Green courtyard & water features",
      "Service zone with staff room and maintenance area"
    ]
  },
  {
    id: 2,
    title: "Typical Floor",
    image: "https://images.unsplash.com/photo-1721244653652-268631ec049a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=762",
    alt: "Typical floor layout",
    subtitle: "Modern apartments designed for comfort",
    description:
      "Each typical floor features a smart layout with premium apartments designed for natural light, ventilation, and efficient use of space — offering comfort and convenience for families.",
    features: [
      "2 & 3 bedroom apartments with balconies",
      "Open kitchen and dining area",
      "Corner windows for cross ventilation",
      "Modern elevators with energy-saving systems",
      "Wide corridors with emergency lighting"
    ]
  },
  {
    id: 3,
    title: "Penthouse Floor",
    image: "https://images.unsplash.com/photo-1721244653769-6001b9b4778f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=472",
    alt: "Penthouse floor plan design",
    subtitle: "Luxury at the top level",
    description:
      "The penthouse level offers unmatched privacy, panoramic views, and a luxurious lifestyle — combining open terraces, modern interiors, and exclusive amenities for elite living.",
    features: [
      "Private terrace with ocean/city view",
      "Jacuzzi & rooftop lounge",
      "Spacious master suite with walk-in closet",
      "Smart home automation",
      "Exclusive elevator access"
    ]
  }
]);

const currentTab = (id) => {
  selectedId.value = id;
}
const currentFloor = computed(() => {
  return floor_plans.value.find(data => data.id === selectedId.value)
})

</script>

<template>
  <section class="floor-plans bg-light">
    <div class="container">
     <SectionTitle class='text-center'
  title="Explore Our Floor Plans"
  subTitle="A closer look at the design and structure of every level"
/>

      <div class="tab-panel">
        <ul>
          <ListItem v-for="(tab, i) in floor_plans" :key="i">
            <BaseButton :class="{ 'active': selectedId === tab.id }" @click="currentTab(tab.id)">{{ tab.title }}
            </BaseButton>
          </ListItem>
        </ul>
      </div>

      <div class="medium-2 gap-2">
        <div class="app-image">
          <BaseImage :image="currentFloor.image" :alt="currentFloor.alt" />
        </div>
        <div>
          <SubTitle>
            {{ currentFloor.subtitle }}
          </SubTitle>

          <BaseParagraph>
            {{ currentFloor.description }}
          </BaseParagraph>

          <ul class="feature-list">
            <ListItem v-for="(data, i) in currentFloor.features" :key="i">{{ data }}</ListItem>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.floor-plans {
  padding: 3.75rem 0;
}

.tab-panel ul {
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
}

.tab-panel ul li .btn {
  padding: .5rem 1rem;
  margin: 0;
  background: var(--secondary-color);
}

.tab-panel ul li .btn.active {
  background: var(--primary-color);
}

.floor-plans .app-image {
  height: 100%;
  width: 100%;
}

.floor-plans .app-image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.feature-list li {
  position: relative;
  padding-left: 1rem;
  margin-bottom: .25rem;

}

.feature-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--secondary-color);
}

@media (min-width: 768px) {
  .tab-panel ul li .btn {
    padding: 1rem 1.5rem;
  }
}
</style>
