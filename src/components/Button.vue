vreai<template>
  <!-- Comentariu: Buton reutilizabil care emite eveniment și poate primi handler -->
  <button
    type="button"
    class="inline-flex items-center justify-center rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50 hover:bg-brand-500 active:bg-brand-600/90 disabled:opacity-50 disabled:cursor-not-allowed"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script setup>
// Comentariu: Props pentru etichetă și funcție opțională executată la click
const props = defineProps({
  label: {
    type: String,
    default: 'Buton',
  },
  click: {
    type: Function,
    default: undefined,
  },
})

// Comentariu: Emitem evenimentul click pentru ascultători externi
const emit = defineEmits(['click'])

const handleClick = () => {
  if (props.click) {
    props.click()
  }
  emit('click')
}
</script>

