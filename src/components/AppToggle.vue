<script setup lang="ts">
type AppToggleProps = {
  modelValue?: boolean
  label?: string
  disabled?: boolean
  disabledMessage?: string
}

const emit = defineEmits(['update:model-value', 'toggle'])

defineProps<AppToggleProps>()

const onToggle = (event: Event) => {
  const target = event.target as HTMLInputElement

  emit('toggle', target.checked)
  emit('update:model-value', target.checked)
}
</script>

<template>
  <div class="form-control inline">
    <div
      :class="{ tooltip: disabledMessage && disabled }"
      :data-tip="disabledMessage && disabled ? disabledMessage : ''"
    >
      <label class="flex gap-2 items-center">
        <input
          type="checkbox"
          class="toggle toggle-sm md:toggle-md toggle-primary"
          :checked="modelValue"
          :disabled="disabled"
          @change="onToggle"
        />
        <span
          v-if="label"
          class="label-text text-xs md:text-md"
          >{{ label }}</span
        >
      </label>
    </div>
  </div>
</template>
