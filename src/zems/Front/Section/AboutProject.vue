<script setup>
import BaseParagraph from '@/components/element/BaseParagraph.vue';
import ProjectGallery from '../Widget/ProjectGallery.vue';

</script>

<template>
  <section id="about" class="about-project">
    <div class="container">
      <div class="medium-2 gap-1">
        <ProjectGallery />
        <div class="project-details">
          <BaseTitle>Recently Finished Project</BaseTitle>
          <BaseParagraph> <i class="fa-solid fa-location-dot text-secondary"></i> Cox's Bazar, Bangladesh
          </BaseParagraph>

          <BaseParagraph>
             Azure Bay Residences offers seaside serenity with modern elegance.
            Enjoy panoramic ocean views, open balconies, and thoughtfully designed interiors that redefine coastal
            living.
          </BaseParagraph>

          <BaseParagraph>
            From the rooftop infinity pool to lush garden lounges, every detail reflects comfort and
            sophistication. </BaseParagraph>

          <ul class="all-2 gap-1">
            <ListItem> <i class="fas fa-home"></i> Spacious Living Rooms </ListItem>
            <ListItem> <i class="fas fa-bed"></i> Comfortable Bedrooms </ListItem>
            <ListItem> <i class="fas fa-bath"></i> Modern Bathrooms </ListItem>
            <ListItem> <i class="fa-solid fa-car"></i> Parking Space </ListItem>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-project {
  padding: 3.75rem 0;
}


.project-details ul {
  margin-top: .75rem;
}

.project-details p {
  margin: .75rem 0;
}

.project-details ul li {
  background: var(--white-color);
  box-shadow: var(--box-shadow);
  padding: .75rem;
  border-radius: .5rem;
}

.project-details ul li i {
  color: var(--secondary-color);
  font-size: 1.25rem;
}

@media (min-width: 768px) {
  .project-details {
    padding: 1rem;
  }
}
</style>
