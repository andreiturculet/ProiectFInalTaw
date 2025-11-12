<!-- 

  InputField.vue

  folosit in formularele de autentificare

  camp input reutilizabil cu v-model

-->
<template>
  <label class="flex w-full flex-col gap-1 text-sm text-slate-600">
    <span class="font-medium">{{ label }}</span>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      class="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 shadow-xs focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 transition"
      @input="onInput"
    />
  </label>
</template>

<script setup>
// Comentariu: Definim props pentru placeholder, tip și etichetă
const props = defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  label: {
    type: String,
    default: 'Label',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
})

// Comentariu: Emitem noua valoare pentru a fi folosită cu v-model
const emit = defineEmits(['update:modelValue'])

const onInput = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

