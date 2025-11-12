<!-- 

  Home.vue

  se deschide la ruta /

  pagina principala cu butoane autentificare si inregistrare

-->
<template>
  <DashboardLayout>
    <template #page-header>
      <HomeHero>
        <RouterLink to="/login">
          <Button label="Autentifică-te" />
        </RouterLink>
        <RouterLink to="/signup">
          <Button label="Creează un cont" />
        </RouterLink>
      </HomeHero>
    </template>
  </DashboardLayout>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import HomeHero from '@/components/home/HomeHero.vue'
import Button from '@/components/Button.vue'
</script>

<style scoped>
</style>

