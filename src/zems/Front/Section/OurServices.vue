<template>
  <section class="why-choose-us">
    <div class="overlay"></div>

    <div class="content">
      <h2 class="title">Why Choose <span>Our Builders</span></h2>
      <p class="subtitle">
        Building trust brick by brick — discover why homeowners and investors choose us.
      </p>

      <div class="cards">
        <div v-for="(item, index) in features" :key="index" class="card" :style="{ '--delay': index * 0.2 + 's' }">
          <i :class="item.icon"></i>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhyChooseUs",
  data() {
    return {
      features: [
        {
          icon: "fas fa-building",
          title: "Modern Architecture",
          text: "Our projects blend innovation with timeless design, crafted to impress and endure.",
        },
        {
          icon: "fas fa-handshake",
          title: "Trust & Transparency",
          text: "We prioritize your satisfaction with clear communication and reliable processes.",
        },
        {
          icon: "fas fa-leaf",
          title: "Eco-Friendly Materials",
          text: "Sustainability is key — we use materials that respect both nature and your comfort.",
        },
        {
          icon: "fas fa-user-tie",
          title: "Expert Team",
          text: "Our skilled professionals bring decades of construction and design expertise.",
        },
        {
          icon: "fas fa-clock",
          title: "On-Time Delivery",
          text: "We value your time — our streamlined project management ensures punctual delivery.",
        },
        {
          icon: "fas fa-home",
          title: "Luxury Living",
          text: "Each property is built with premium finishes and amenities for modern lifestyles.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.why-choose-us {
  position: relative;
  background: linear-gradient(135deg, #ececec 0%, #fafafa 100%);
  overflow: hidden;
  padding: 6rem 1rem;
  text-align: center;
  color: #333;
}

.overlay {
  position: absolute;
  top: -40%;
  left: -10%;
  width: 120%;
  height: 200%;
  background: linear-gradient(120deg, #0066ff1a 0%, #00c6ff1a 100%);
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 80%);
  transform: rotate(-2deg);
  z-index: 0;
}

.content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.title span {
  color: #0066ff;
  position: relative;
}

.subtitle {
  font-size: 1.1rem;
  margin-bottom: 3rem;
  color: #555;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  justify-items: center;
}

.card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  padding: 2rem 1.5rem;
  max-width: 300px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: var(--delay);
  opacity: 0;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(0, 102, 255, 0.15);
}

.card i {
  font-size: 2.2rem;
  color: #0066ff;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
}

.card:hover i {
  color: #0044cc;
}

.card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.6rem;
  font-weight: 600;
}

.card p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #666;
}

/* Animation */
@keyframes fadeInUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }
  .subtitle {
    font-size: 1rem;
    padding: 0 1rem;
  }
}
</style>
