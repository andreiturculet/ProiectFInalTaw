<!-- 
  Componentă root: App.vue - componenta principală a aplicației
  Conține RouterView care afișează pagina corespunzătoare rutei curente
  Aplică un gradient de fundal pentru întreaga aplicație
-->
<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
    <RouterView />
  </div>
</template>

<script setup>
// Comentariu: Importăm RouterView pentru a reda rutele definite
import { RouterView } from 'vue-router'
</script>
