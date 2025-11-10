<template>
  <!-- Comentariu: Pagina pentru resetarea parolei -->
  <div class="flex min-h-screen flex-col">
    <Header />
    <main class="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-16">
      <ForgotForm />
      <RouterLink class="text-sm text-brand-600 hover:underline" to="/login">
        Înapoi la autentificare
      </RouterLink>
    </main>
    <Footer />
  </div>
</template>

<script setup>
// Comentariu: Încarcăm componentele reutilizabile necesare
import { RouterLink } from 'vue-router'
import Footer from '@/components/Footer.vue'
import ForgotForm from '@/components/ForgotForm.vue'
import Header from '@/components/Header.vue'
</script>

