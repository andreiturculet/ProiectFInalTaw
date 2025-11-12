<!-- 
  folosit in paginile Login Signup Forgot
  container card pentru formulare autentificare
-->
<template>
  <div class="auth-card">
    <slot />
  </div>
</template>

<script setup>
</script>

<style scoped>
.auth-card {
  z-index: 2;
  width: 100%;
  max-width: 420px;
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
}
</style>


