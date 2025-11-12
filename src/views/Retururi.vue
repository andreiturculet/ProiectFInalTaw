<!-- 

  Retururi.vue

  se deschide la ruta /retururi din Dashboard

  pagina goala cu buton inapoi la dashboard

-->
<template>
  <DashboardLayout>
    <div class="blank-page">
      <RouterLink to="/dashboard">
        <Button label="Înapoi la Dashboard" />
      </RouterLink>
    </div>
  </DashboardLayout>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import Button from '@/components/Button.vue'
</script>

<style scoped>
.blank-page {
  min-height: calc(100vh - 8rem);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

