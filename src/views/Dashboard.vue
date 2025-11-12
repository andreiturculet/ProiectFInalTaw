<!-- 

  Dashboard.vue

  se deschide la ruta /dashboard

  pagina principala cu grid butoane pentru toate sectiunile

-->
<template>
  <DashboardLayout>
    <template #page-header>
      <DashboardHeader userName="Andrei" />
    </template>

    <DashboardGrid />
  </DashboardLayout>
</template>

<script setup>
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import DashboardHeader from '@/components/DashboardHeader.vue'
import DashboardGrid from '@/components/DashboardGrid.vue'
</script>