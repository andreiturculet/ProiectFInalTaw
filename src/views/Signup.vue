<template>
  <!-- Comentariu: Pagina de înregistrare reutilizează formularul dedicat -->
  <div class="flex min-h-screen flex-col">
    <Header />
    <main class="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-16">
      <div class="w-full max-w-md text-center">
        <h1 class="mb-2 text-2xl font-bold tracking-tight text-slate-900">Creează un cont</h1>
        <p class="text-sm text-slate-500">hai sa facem un cont rapid</p>
      </div>
      <SignupForm />
      <RouterLink class="text-sm text-brand-600 hover:underline" to="/login">
        Ai deja cont? Autentifică-te
      </RouterLink>
    </main>
    <Footer />
  </div>
</template>

<script setup>
// Comentariu: Importăm componentele folosite în pagină
import { RouterLink } from 'vue-router'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import SignupForm from '@/components/SignupForm.vue'
</script>

