<template>
  <!-- Comentariu: Aplicația folosește RouterView pentru a reda paginile -->
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
    <RouterView />
  </div>
</template>

<script setup>
// Comentariu: Importăm RouterView pentru a reda rutele definite
import { RouterView } from 'vue-router'
</script>
