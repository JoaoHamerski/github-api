<script setup lang="ts">
import { computed } from 'vue'

export type AppSelectOption = {
  label: string,
  value: string|number,
  disabled?: boolean,
}

interface AppSelectProps {
  valueModel: string | number,
  labelIcon?: string,
  label?: string,
  options: AppSelectOption[],
  hint?: string,
  size: keyof typeof APP_SELECT_SIZES
}

const APP_SELECT_SIZES = {
  sm: 'select-sm',
  md: 'select-md',
  lg: 'select-lg'
}

const emit = defineEmits(['change'])

const props = withDefaults(defineProps<AppSelectProps>(), {
  size: 'md',
  label: undefined,
  labelIcon: undefined,
  hint: undefined
})

const sizeClass = computed(() => APP_SELECT_SIZES[props.size])

const onSelectChange = (event: Event) => {
  const target = (event.target as HTMLSelectElement)

  emit('change', target.value)
}
</script>

<template>
  <label class="form-control w-full">
    <div
      v-if="label"
      class="label"
    >
      <span class="label-text font-bold">
        <FWIcon
          v-if="labelIcon"
          fixed-width
          :icon="labelIcon"
        />
        {{ label }}
      </span>
    </div>

    <select
      class="select select-bordered"
      :class="[sizeClass]"
      @change="onSelectChange"
    >
      <template
        v-for="option in options"
        :key="option.value"
      >
        <option
          :disabled="option.disabled"
          :selected="valueModel === option.value"
          :value="option.value"
        >{{ option.label }}</option>
      </template>
    </select>

    <div class="label">
      <span
        v-if="hint"
        class="label-text-alt"
      >{{ hint }}</span>
    </div>
  </label>
</template>
