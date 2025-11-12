<!-- 

  LoginForm.vue

  folosit in pagina Login

  formular autentificare cu email si parola

-->
<template>
  <form
    class="w-full max-w-md space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
    @submit.prevent="handleSubmit"
  >
    <h2 class="text-lg font-semibold text-slate-900">Autentificare</h2>
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
      placeholder="Introduceți parola"
    />
    <Button label="Intră în cont" />
  </form>
</template>

<script setup>
// Comentariu: Gestionăm starea locală pentru câmpurile formularului
import { ref } from 'vue'
import Button from './Button.vue'
import InputField from './InputField.vue'

const email = ref('')
const password = ref('')

const handleSubmit = () => {
  // Comentariu: Într-un proiect real am trimite datele la server
  console.info('Autentificare simulată', { email: email.value, password: password.value })
}
</script>

