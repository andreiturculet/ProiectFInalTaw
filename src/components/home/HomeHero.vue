<!-- 
  folosit in pagina Home
  sectiune hero cu titlu si butoane actiune
-->
<template>
  <div class="hero">
    <h2 class="hero-title">Bine ai venit la ProiectFinal TAW</h2>
    <div class="hero-actions">
      <slot />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  align-items: center;
}
  
.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: #1f2937;
}

.hero-subtitle {
  max-width: 560px;
  color: #4b5563;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
</style>


