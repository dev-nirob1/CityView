<script setup>
const scrollToTop = () => {
  window.scroll(0, 0)
}
</script>

<template>
  <div class="container">
    <BaseButton @click="scrollToTop" class="scroll">
      <i class="fa-solid fa-arrow-up fa-2x"></i>
    </BaseButton>
  </div>
</template>

<style scoped>
.scroll {
  position: fixed;
  right: .25rem;
  bottom: .25rem;
  padding: .5rem;
  border-radius: .5rem;
  background: var(--primary-color);
}

@media (min-width: 768px) {
  .scroll {
    right: 1rem;
    bottom: 1rem;
    padding: 1rem;
  }
}

@media (min-width: 1200px) {
  .scroll {
    right: 3rem;
    bottom: 3rem;
    padding: 1rem;
  }
}
</style>
