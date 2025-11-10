<template>
  <!-- Comentariu: Formular simplu pentru înregistrare fără validări reale -->
  <form
    class="w-full max-w-md space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
    @submit.prevent="handleSubmit"
  >
    <h2 class="text-lg font-semibold text-slate-900">Creează un cont</h2>
    <InputField
      v-model="fullName"
      label="Nume complet"
      placeholder="Nume Prenume"
    />
    <InputField
      v-model="email"
      type="email"
      label="Email"
      placeholder="introdu@exemplu.com"
    />
    <InputField
      v-model="password"
      type="password"
      label="Parolă"
      placeholder="Creează o parolă"
    />
    <Button label="Creează cont" />
  </form>
</template>

<script setup>
// Comentariu: Valorile sunt stocate local doar pentru demo
import { ref } from 'vue'
import Button from './Button.vue'
import InputField from './InputField.vue'

const fullName = ref('')
const email = ref('')
const password = ref('')

const handleSubmit = () => {
  // Comentariu: În mod normal am trimite datele către server
  console.info('Înregistrare simulată', {
    fullName: fullName.value,
    email: email.value,
    password: password.value,
  })
}
</script>

