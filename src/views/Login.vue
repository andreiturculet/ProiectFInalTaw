<!-- 

  Login.vue

  se deschide la ruta /login

  pagina autentificare cu formular email si parola

-->
<template>
  <AuthLayout
    brandName="Numele Brandului"
    tagline="Bun venit în aplicația ta. Autentifică-te pentru a continua."
    logoSrc=""
  >
    <template #left-cta>
      <RouterLink class="prompt-btn" to="/signup">Creează cont</RouterLink>
    </template>

    <AuthCard>
      <LoginForm />
      <div class="auth-links">
        <RouterLink to="/forgot">Ai uitat parola?</RouterLink>
        <RouterLink to="/signup">Nu ai cont? Creează unul</RouterLink>
      </div>
    </AuthCard>
  </AuthLayout>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import AuthLayout from '@/components/layout/AuthLayout.vue'
import AuthCard from '@/components/AuthCard.vue'
import LoginForm from '@/components/LoginForm.vue'
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
