<template>
  <!-- Comentariu: Pagina de dashboard este statică și prezintă componente demo -->
  <div class="relative flex min-h-screen flex-col">
    <Header />
    <main class="flex flex-1 flex-col items-center justify-center gap-10 px-6 py-16">
      <div class="mx-auto w-full max-w-5xl">
        <DashboardHeader userName="Andrei" />
        <DashboardGrid />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
// Comentariu: Importăm toate componentele necesare pentru layout-ul dashboard-ului
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import DashboardHeader from '@/components/DashboardHeader.vue'
import DashboardGrid from '@/components/DashboardGrid.vue'
</script>

