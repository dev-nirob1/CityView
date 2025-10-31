<script setup>
import FooterSection from './components/Section/FooterSection.vue';
import NavbarSection from './components/Section/NavbarSection.vue';
import AboutProject from './zems/Front/Section/AboutProject.vue';
import FaqSection from './zems/Front/Section/FaqSection.vue';
import GallerySection from './zems/Front/Section/GallerySection.vue';
import HeroSection from './zems/Front/Section/HeroSection.vue';
import OurPartner from './zems/Front/Section/OurPartner.vue';
// import OurServices from './zems/Front/Section/OurServices.vue';
import TestimonialSection from './zems/Front/Section/TestimonialSection.vue';
// import WhyChooseUs from './zems/Front/Section/WhyChooseUs.vue';
</script>

<template>
  <NavbarSection />
  <HeroSection />
  <AboutProject/>
  <!-- <OurServices/>
  <WhyChooseUs/> -->
  <GallerySection/>
  <FaqSection/>
  <TestimonialSection/>
  <OurPartner/>
  <FooterSection />
</template>

<style scoped></style>
