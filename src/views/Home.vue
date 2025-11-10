<template>
  <!-- Comentariu: Pagina principală oferă acces la autentificare și înregistrare -->
  <div class="flex min-h-screen flex-col">
    <Header />
    <main class="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-10 px-6 py-16 text-center">
      <section class="space-y-4">
        <h2 class="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Bine ai venit la ProiectFinal TAW</h2>
      </section>
      <div class="flex flex-wrap items-center justify-center gap-4">
        <RouterLink to="/login">
          <Button label="Autentifică-te" />
        </RouterLink>
        <RouterLink to="/signup">
          <Button label="Creează un cont" />
        </RouterLink>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
// Comentariu: Importăm componentele comune pentru layout
import { RouterLink } from 'vue-router'
import Button from '@/components/Button.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
</script>

