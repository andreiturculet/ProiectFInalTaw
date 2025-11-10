<template>
  <!-- Comentariu: Formular pentru resetarea parolei cu un singur câmp -->
  <form
    class="w-full max-w-md space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
    @submit.prevent="handleSubmit"
  >
    <h2 class="text-lg font-semibold text-slate-900">Resetare parolă</h2>
    <p class="text-sm text-slate-500">
      Din pacate daca ti ai uitat parola aici poti sa o resetezi.
    </p>
    <InputField
      v-model="email"
      type="email"
      label="Email"
      placeholder="introdu@exemplu.com"
    />
    <Button label="Trimite email" />
  </form>
</template>

<script setup>
// Comentariu: Stocăm emailul local pentru a simula trimiterea cererii
import { ref } from 'vue'
import Button from './Button.vue'
import InputField from './InputField.vue'

const email = ref('')

const handleSubmit = () => {
  // Comentariu: Doar afișăm în consolă pentru demonstrație
  console.info('Resetare parolă simulată', { email: email.value })
}
</script>

