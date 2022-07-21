<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  modelValue: {
    type: Boolean,
    default: false
  }
}) 
</script>

<template>
  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      :value="modelValue"
      :checked="modelValue"
      :id="id"
      @input="$emit('update:modelValue', $event.target.checked)"
    >
    <label
      class="form-check-label"
      :for="id"
    >
      <slot />
    </label>
  </div>
</template>