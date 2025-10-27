<script setup>
defineProps({
  title: {
    type: String
  },
  subTitle: {
    tupe: String
  }
})
</script>
<template>
  <div class="section-title">
    <BaseTitle>{{ title }}</BaseTitle>
    <Baseparagraph>{{ subTitle }}</Baseparagraph>
  </div>
</template>
<style>

</style>
