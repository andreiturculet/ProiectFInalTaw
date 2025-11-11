<template>
  <!-- Comentariu: Pagina de înregistrare reutilizează formularul dedicat -->
  <div class="flex min-h-screen flex-col">
    <Header />
    <main class="flex flex-1 items-center justify-center px-6 py-16">
      <div class="w-full max-w-md mx-auto flex flex-col items-stretch gap-6 text-center bg-white rounded-2xl shadow-sm p-8">
        <SignupForm />
        <RouterLink class="text-sm text-brand-600 hover:underline" to="/login">
          Ai deja cont? Autentifică-te
        </RouterLink>
      </div>
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

