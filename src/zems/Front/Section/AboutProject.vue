<script setup>
import ProjectGallery from '../Widget/ProjectGallery.vue';

</script>

<template>
  <section class="about-project">
    <div class="container">
      <div class="medium-2 gap-1">
        <ProjectGallery />
        <div class="project-details medium-p-1">
          <BaseTitle>Recently Finished Project</BaseTitle>
          <BaseParagraph>
            <i class="fa-solid fa-location-dot"></i> Cox's Bazar, Bangladesh
          </BaseParagraph>
          <BaseParagraph>
            Nestled beside the world’s longest sea beach, <strong>Azure Bay Residences</strong> stands as a symbol
            of luxury coastal living. Designed with a blend of modern architecture and nature-inspired aesthetics,
            this completed project offers residents breathtaking ocean views and peaceful surroundings.
          </BaseParagraph>

          <BaseParagraph>
            Each apartment features open balconies, natural lighting, and smart interior layouts —
            giving you a lifestyle that feels both elegant and effortless. From rooftop infinity pools
            to lush garden lounges, Azure Bay Residences redefine what it means to come home.
          </BaseParagraph>

        <ul class="all-2 gap-1 mt-2 mb-1">
            <ListItem>
              <i class="fas fa-home"></i>
              Spacious Living Rooms
            </ListItem>
            <ListItem>
              <i class="fas fa-bed"></i>
              Comfortable Bedrooms
            </ListItem>
            <ListItem>
              <i class="fas fa-bath"></i>
              Modern Bathrooms
            </ListItem>
            <ListItem>
              <i class="fa-solid fa-car"></i>
              Parking Space
            </ListItem>
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
.project-details p {
  margin: .5rem 0;
}
.project-details ul {
  margin-top: .75rem;
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


</style>
