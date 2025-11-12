<!-- 
  se deschide la ruta /forgot
  pagina resetare parola
-->
<template>
  <AuthLayout
    brandName="Numele Brandului"
    tagline="Resetează-ți parola pentru a reveni în cont."
    logoSrc="/logo.svg"
  >
    <template #left-cta>
      <RouterLink class="prompt-btn" to="/login">Înapoi la autentificare</RouterLink>
    </template>

    <AuthCard>
      <ForgotForm />
      <div class="auth-links">
        <RouterLink to="/login">Înapoi la autentificare</RouterLink>
      </div>
    </AuthCard>
  </AuthLayout>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import AuthLayout from '@/components/layout/AuthLayout.vue'
import AuthCard from '@/components/AuthCard.vue'
import ForgotForm from '@/components/ForgotForm.vue'
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
