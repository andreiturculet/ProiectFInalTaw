<template>
  <!-- Comentariu: Pagina de dashboard este statică și prezintă componente demo -->
  <div class="relative flex min-h-screen flex-col bg-slate-50">
    <Header />
    <main class="flex flex-1 px-4 py-12">
      <div class="mx-auto flex w-full max-w-7xl gap-6">
        <Sidebar />
        <div class="flex min-h-[60vh] flex-1 flex-col gap-8 rounded-lg bg-white p-6 shadow-sm">
          <DashboardHeader userName="Andrei" />
          <div class="px-2">
            <DashboardGrid />
          </div>
        </div>
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
import Sidebar from '@/components/Sidebar.vue'
</script>

