<!-- 

  Signup.vue

  se deschide la ruta /signup

  pagina inregistrare cont nou

-->
<template>
  <AuthLayout
    brandName="Numele Brandului"
    tagline="Creează-ți contul și începe să folosești aplicația."
    logoSrc=""
  >
    <template #left-cta>
      <RouterLink class="prompt-btn" to="/login">Am deja cont</RouterLink>
    </template>

    <AuthCard>
      <SignupForm />
      <div class="auth-links">
        <RouterLink to="/login">Ai deja cont? Autentifică-te</RouterLink>
      </div>
    </AuthCard>
  </AuthLayout>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import AuthLayout from '@/components/layout/AuthLayout.vue'
import AuthCard from '@/components/AuthCard.vue'
import SignupForm from '@/components/SignupForm.vue'
</script>

<style scoped>
.prompt-btn {
  margin-top: 2rem;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
}

.auth-links {
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.9rem;
  color: #4b5563;
  text-align: center;
}

.auth-links a {
  color: #2563eb;
  text-decoration: none;
}

.auth-links a:hover {
  text-decoration: underline;
}
</style>
