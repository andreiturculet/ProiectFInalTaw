<template>
  <!-- Comentariu: Zonă de titlu și mesaj de bun venit pentru dashboard -->
  <header class="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6">
    <div class="flex flex-col gap-2">
      <h2 class="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        Bine ai revenit, {{ userName }}!
      </h2>
      <p class="text-slate-600">
        Ai acces rapid la secțiunile principale ale aplicației tale.
      </p>
    </div>
  </header>
</template>

<script setup>
// Comentariu: Primim numele utilizatorului pentru personalizarea mesajului
defineProps({
  userName: {
    type: String,
    default: 'utilizator',
  },
})
</script>

