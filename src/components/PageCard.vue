<!-- 

  PageCard.vue

  disponibil pentru pagini cu continut

  container card stilizat pentru continut

-->
<template>
  <section class="page-card">
    <slot />
  </section>
</template>

<script setup>
</script>

<style scoped>
.page-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
  border: 1px solid #eef2f7;
  padding: 1.25rem;
}
</style>


