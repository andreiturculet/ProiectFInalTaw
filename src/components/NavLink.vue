<template>
  <!-- Comentariu: Legătură reutilizabilă bazată pe RouterLink -->
  <RouterLink :to="to" v-slot="{ isActive }">
    <span
      :class="[
        'inline-flex items-center rounded-md px-3 py-2 text-slate-600 transition',
        'hover:bg-brand-50 hover:text-brand-600',
        'mr-4',
        isActive ? 'bg-brand-50 text-brand-700 ring-1 ring-brand-100' : ''
      ]"
    >
      {{ label }}
    </span>
  </RouterLink>
</template>

<script setup>
// Comentariu: Salvăm destinația și textul pentru link
import { RouterLink } from 'vue-router'

defineProps({
  to: {
    type: [String, Object],
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})
</script>

