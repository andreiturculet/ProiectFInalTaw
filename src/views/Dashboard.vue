<template>
  <!-- Comentariu: Dashboard simplu, ca înainte: header + mesaj + grid + footer -->
  <div class="flex min-h-screen flex-col">
    <Header />
    <main class="flex flex-1 flex-col gap-6 px-6 py-12">
      <DashboardHeader userName="Andrei" />
      <DashboardGrid />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import DashboardHeader from '@/components/DashboardHeader.vue'
import DashboardGrid from '@/components/DashboardGrid.vue'
</script>