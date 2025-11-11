<template>
  <!-- Comentariu: Pagina de login afișează formularul și link-urile relevante -->
  <div class="flex min-h-screen flex-col">
    <Header />
    <main class="flex flex-1 items-center justify-center px-6 py-16">
      <div class="w-full max-w-md mx-auto flex flex-col items-stretch gap-6 text-center bg-white rounded-2xl shadow-sm p-8">
        <LoginForm />
        <div class="flex flex-col items-center gap-2 text-sm text-slate-500">
          <RouterLink class="text-brand-600 hover:underline" to="/forgot">
            Ai uitat parola?
          </RouterLink>
          <RouterLink class="text-brand-600 hover:underline" to="/signup">
            Nu ai cont? Creează unul
          </RouterLink>
        </div>
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

