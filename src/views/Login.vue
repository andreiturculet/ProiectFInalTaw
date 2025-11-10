<template>
  <!-- Comentariu: Pagina de login afișează formularul și link-urile relevante -->
  <div class="flex min-h-screen flex-col">
    <Header />
    <main class="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-16">
      <div class="w-full max-w-md text-center">
        <h1 class="mb-2 text-2xl font-bold tracking-tight text-slate-900">Intră în cont</h1>
      </div>
      <LoginForm />
      <div class="flex flex-col items-center gap-2 text-sm text-slate-500">
        <RouterLink class="text-brand-600 hover:underline" to="/forgot">
          Ai uitat parola?
        </RouterLink>
        <RouterLink class="text-brand-600 hover:underline" to="/signup">
          Nu ai cont? Creează unul
        </RouterLink>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
// Comentariu: Aducem componentele necesare pentru pagina de autentificare
import { RouterLink } from 'vue-router'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import LoginForm from '@/components/LoginForm.vue'
</script>

