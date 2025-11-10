<template>
  <!-- Comentariu: Componentă pentru antetul principal al aplicației -->
  <header class="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
    <div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
      <h1 class="text-lg font-semibold tracking-tight text-brand-600">ProiectFinal TAW</h1>
      <nav class="flex items-center gap-6 text-sm font-medium text-slate-600">
        <NavLink to="/" label="Acasă" />
        <NavLink to="/login" label="Autentificare" />
        <NavLink to="/signup" label="Înregistrare" />
        <NavLink to="/dashboard" label="Dashboard" />
      </nav>
    </div>
  </header>
</template>

<script setup>
// Comentariu: Importăm NavLink pentru a crea navigație reutilizabilă
import NavLink from './NavLink.vue'
</script>

