<!-- 
  folosit in toate paginile principale
  layout cu Header Footer si slot pentru continut
-->
<template>
  <div class="min-h-screen bg-white flex flex-col">
    <Header />
    <main class="flex-1">
      <div class="mx-auto w-full max-w-5xl px-6 py-10">
        <slot name="page-header" />
        <slot />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.page-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
}
</style>


