<!-- 
  folosit in paginile Login Signup Forgot
  layout doua parti stanga branding dreapta formular
-->
<template>
  <div class="login-page">
    <div class="auth-header">
      <RouterLink class="home-link" to="/">Acasă</RouterLink>
    </div>
    <section class="left-side">
      <!-- <img class="logo" :src="logoSrc" alt="Logo" v-if="logoSrc" /> -->
      <div class="brand" v-if="brandName">{{ brandName }}</div>
      <p class="tagline" v-if="tagline">{{ tagline }}</p>
      <slot name="left-cta" />
    </section>

    <section class="right-side" :style="bgStyle">
      <slot />
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  brandName: { type: String, default: '' },
  tagline: { type: String, default: '' },
  // logoSrc: { type: String, default: '/logo.svg' },
  backgroundImage: { type: String, default: '' } // e.g. '/camera.jpg'
})

const bgStyle = computed(() => {
  if (!props.backgroundImage) {
    return {}
  }
  return {
    backgroundImage: `url('${props.backgroundImage}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
})
</script>

<style scoped>
.login-page {
  display: flex;
  min-height: 100vh;
  background: #ffffff;
  position: relative;
}

.auth-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: flex-start;
  z-index: 10;
}

.home-link {
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
}

.home-link:hover {
  text-decoration: underline;
}

.left-side {
  flex: 1;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  text-align: center;
  border-right: 1px solid #e5e7eb;
}

.left-side .brand {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.left-side .tagline {
  font-size: 1.1rem;
  color: #4b5563;
  max-width: 300px;
}

.logo {
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
  object-fit: contain;
}

.right-side {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
}

@media (max-width: 900px) {
  .login-page {
    flex-direction: column;
  }
  .left-side {
    border-right: none;
  }
}
</style>


