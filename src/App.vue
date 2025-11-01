<script setup>
import FooterSection from './components/Section/FooterSection.vue';
import NavbarSection from './components/Section/NavbarSection.vue';
import AboutProject from './zems/Front/Section/AboutProject.vue';
import AminitiesSection from './zems/Front/Section/AminitiesSection.vue';
import CtaSection from './zems/Front/Section/CtaSection.vue';
import FaqSection from './zems/Front/Section/FaqSection.vue';
import FloorPlans from './zems/Front/Section/FloorPlans.vue';
import GallerySection from './zems/Front/Section/GallerySection.vue';
import HeroSection from './zems/Front/Section/HeroSection.vue';
import OurPartner from './zems/Front/Section/OurPartner.vue';
import TestimonialSection from './zems/Front/Section/TestimonialSection.vue';
import WhyChooseUs from './zems/Front/Section/WhyChooseUs.vue';
import ScrollToTop from './zems/Front/Widget/ScrollToTop.vue';
</script>

<template>
  <NavbarSection />
  <HeroSection />
  <AboutProject />
  <FloorPlans />
  <AminitiesSection />
  <WhyChooseUs />
  <GallerySection />
  <TestimonialSection />
  <FaqSection />
  <OurPartner />
  <CtaSection/>
  <FooterSection />
  <ScrollToTop/>
</template>

<style scoped></style>
