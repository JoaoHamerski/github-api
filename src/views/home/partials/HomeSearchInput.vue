<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['update:modelValue'])

defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const input = ref<HTMLInputElement>()

const onInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value

  emit('update:modelValue', value)
}

const focus = () => {
  input.value?.focus()
}

defineExpose({ focus })
</script>

<template>
  <input
    ref="input"
    :value="modelValue"
    type="text"
    placeholder="Nome de usuário..."
    class="input input-bordered w-full input-lg"
    name="username"
    @input="onInput"
  />
</template>
