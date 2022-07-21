<script setup>
import { computed } from '@vue/reactivity';

const props = defineProps({
  hideBorder: {
    type: Boolean,
    default: false
  },
  hidePadding: {
    type: Boolean,
    default: false
  }
})

const cardClasses = computed(() => {
  const classes = []

  if (props.hideBorder) {
    classes.push('border-0')
  }

  return classes
})

const bodyClasses = computed(() => {
  const classes = []

  if (props.hidePadding) {
    classes.push('p-0')
  }

  return classes
})
</script>

<template>
  <div>
    <div
      class="container-title"
      v-if="$slots.title"
    >
      <slot name="title" />
    </div>
    <div
      class="card m-0"
      :class="cardClasses"
    >
      <div
        class="card-body"
        :class="bodyClasses"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
.container-title {
  margin-left: 1rem;
  display: inline-block;
  background-color: var(--bs-primary);
  padding: .25rem .9rem;
  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;
  color: white;
  font-weight: bold;
}
</style>