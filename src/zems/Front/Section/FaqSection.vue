<script setup>
import { ref } from 'vue'
import AccordionWidget from '../Widget/AccordionWidget.vue';
import SectionTitle from '@/components/Widget/SectionTitle.vue';
const faqs = ref([
  {
    id: 2,
    question: "Do you build software for startups and enterprises?",
    answer: "Yes! We cater to startups, SMEs, and large enterprises. Whether you need a simple MVP to test your idea or a complex enterprise system, we provide scalable solutions that meet your unique requirements."
  },
  {
    id: 3,
    question: "Can I integrate your software with existing systems?",
    answer: "Absolutely. Our team specializes in integrating new solutions with your current systems, whether it’s CRM, ERP, payment gateways, or cloud services, ensuring seamless data flow and consistent user experience."
  },
  {
    id: 4,
    question: "What makes your development process different?",
    answer: "We follow an agile, transparent, and client-focused approach. From requirement analysis to deployment, we maintain open communication, iterative delivery, and continuous feedback, ensuring the final product exceeds expectations."
  },
  {
    id: 5,
    question: "Do you offer ongoing support and updates?",
    answer: "Yes, we provide post-launch support, software updates, and maintenance plans. Our goal is to keep your applications secure, up-to-date, and optimized for performance as your business evolves."
  }
]);

const currentOpenItem = ref();

const toggleAccordion = (id) => {
  if (currentOpenItem.value == id) {
    currentOpenItem.value = null;
  } else {
    currentOpenItem.value = id;
  }
};
</script>

<template>
  <section class="faq-section bg-light">
    <div class="container">
      <SectionTitle class="text-center mb-2" title="Frequently Asked Questions"
        subTitle="Get answers to common queries about our projects and services" />
      <div class="medium-2 align-center gap-1">
        <div class="image">
          <BaseImage
            src="https://images.pexels.com/photos/5921561/pexels-photo-5921561.jpeg?_gl=1*1b5amjl*_ga*OTAzOTgwMTguMTczNzAwNTI1OA..*_ga_8JE65Q40S6*czE3NjE4MjkyMzkkbzI5JGcxJHQxNzYxODI5NTA0JGo1OSRsMCRoMA.."
            alt="image" />
        </div>
        <div>
          <AccordionWidget v-for="item in faqs" :key="item.id" :currentOpenItem="currentOpenItem" :accordionData="item"
            :toggleAccordion="toggleAccordion" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.faq-section {
  padding: 3.75rem 0;
}

.faq-section img {
  border-radius: 1rem;
}
</style>
