<template>
  <!-- Comentariu: Două coloane de acțiuni rapide similare cu butoanele din Home -->
  <section class="mx-auto w-full max-w-5xl px-4 sm:px-6">
    <div class="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
      <RouterLink
        v-for="action in primaryActions"
        :key="`p-` + action.to"
        :to="action.to"
        class="block w-full"
      >
        <Button :label="action.label" class="w-full" />
      </RouterLink>

      <RouterLink
        v-for="action in secondaryActions"
        :key="`s-` + action.to"
        :to="action.to"
        class="block w-full"
      >
        <Button :label="action.label" class="w-full" />
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
// Comentariu: Folosim componenta Button pentru a păstra stilul din pagina Home
import Button from './Button.vue'
import { RouterLink } from 'vue-router'

const primaryActions = [
  { label: 'Produse', to: '/produse' },
  { label: 'Comenzi', to: '/comenzi' },
  { label: 'Clienti', to: '/clienti' },
  { label: 'Facturi', to: '/facturi' },
  { label: 'Retururi', to: '/retururi' },
]

const secondaryActions = [
  { label: 'Marketing', to: '/marketing' },
  { label: 'Analytics', to: '/analytics' },
  { label: 'Raporturi', to: '/raporturi' },
  { label: 'Setari', to: '/setari' },
  { label: 'Ajutor', to: '/ajutor' },
]
</script>

