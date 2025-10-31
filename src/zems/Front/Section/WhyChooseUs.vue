<template>
  <section class="our-services">
    <div class="background"></div>

    <div class="container">
      <h2 class="section-title">Our <span>Services</span></h2>
      <p class="section-subtitle">
        From blueprint to handover — we provide a full range of real estate solutions tailored to your dreams.
      </p>

      <div class="service-grid">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="service-card"
          :style="{ '--delay': index * 0.2 + 's' }"
        >
          <div class="icon">
            <i :class="service.icon"></i>
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OurServices",
  data() {
    return {
      services: [
        {
          icon: "fas fa-drafting-compass",
          title: "Architectural Design",
          description:
            "We design elegant, functional spaces that reflect your personality and lifestyle.",
        },
        {
          icon: "fas fa-hard-hat",
          title: "Construction Management",
          description:
            "Our experienced engineers ensure on-time delivery with precision and quality.",
        },
        {
          icon: "fas fa-city",
          title: "Urban Development",
          description:
            "We plan sustainable communities with the perfect blend of nature and modern living.",
        },
        {
          icon: "fas fa-home",
          title: "Residential Projects",
          description:
            "From apartments to villas — we craft homes that offer luxury and comfort.",
        },
        {
          icon: "fas fa-building",
          title: "Commercial Spaces",
          description:
            "Designing modern office and retail spaces that empower business growth.",
        },
        {
          icon: "fas fa-tools",
          title: "Renovation & Remodeling",
          description:
            "Transform your existing property with our expert renovation services.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.our-services {
  position: relative;
  overflow: hidden;
  padding: 6rem 1rem;
  background: linear-gradient(135deg, #f9fafb 0%, #f1f5f9 100%);
  text-align: center;
}

.background {
  position: absolute;
  top: -50px;
  left: 0;
  width: 100%;
  height: 200px;
  background: linear-gradient(120deg, #0066ff1a, #00c6ff1a);
  clip-path: polygon(0 0, 100% 30%, 100% 100%, 0 80%);
  z-index: 0;
}

.container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
}

.section-title span {
  color: #0066ff;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 3rem;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.service-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.08);
  padding: 2.5rem 1.5rem;
  position: relative;
  overflow: hidden;
  transform: translateY(20px);
  opacity: 0;
  animation: floatUp 0.8s ease forwards;
  animation-delay: var(--delay);
  transition: all 0.4s ease;
}

.service-card::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at top left, rgba(0, 102, 255, 0.07), transparent 70%);
  transform: rotate(45deg);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(0, 102, 255, 0.15);
}

.icon {
  font-size: 2.4rem;
  color: #0066ff;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.service-card:hover .icon {
  transform: scale(1.2);
}

.service-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
  color: #222;
}

.service-card p {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
}

/* Animation */
@keyframes floatUp {
  from {
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  .section-subtitle {
    font-size: 1rem;
  }
}
</style>
