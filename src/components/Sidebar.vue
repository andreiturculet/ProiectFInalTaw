<template>
  <aside class="hidden w-64 shrink-0 flex-col gap-4 border-r border-slate-100 bg-white/60 p-4 md:flex">
    <div class="mb-4 flex items-center gap-3 px-2">
      <div class="h-10 w-10 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-semibold">A</div>
      <div>
        <div class="text-sm font-medium text-slate-900">Andrei</div>
        <div class="text-xs text-slate-500">Administrator</div>
      </div>
    </div>

    <nav class="flex flex-1 flex-col gap-2 px-1">
      <RouterLink to="/dashboard" class="block">
        <span class="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
          <span class="text-lg">🏠</span>
          <span>Tablou de bord</span>
        </span>
      </RouterLink>

      <RouterLink to="/produse" class="block">
        <span class="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
          <span class="text-lg">📦</span>
          <span>Produse</span>
        </span>
      </RouterLink>

      <RouterLink to="/comenzi" class="block">
        <span class="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
          <span class="text-lg">🧾</span>
          <span>Comenzi</span>
        </span>
      </RouterLink>

      <RouterLink to="/clienti" class="block">
        <span class="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
          <span class="text-lg">👥</span>
          <span>Clienti</span>
        </span>
      </RouterLink>

      <div class="mt-4 pt-4 border-t border-slate-100 text-sm text-slate-500">Setări</div>
    </nav>
  </aside>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
