<script setup lang="ts">
import { useToastStore } from '@/store/toast-store'
import { computed } from 'vue'

import ToastAlert from './ToastAlert.vue'

const toastStore = useToastStore()

const toasts = computed(() => toastStore.toasts)
</script>

<template>
  <TransitionGroup
    tag="div"
    class="absolute right-2 top-2 md:top-3 md:right-3 z-50"
    name="toast"
  >
    <ToastAlert
      v-for="toast in toasts"
      :key="toast.id"
      :type="toast.type"
      :message="toast.message"
    />
  </TransitionGroup>
</template>

<style>
.toast-move,
.toast-enter-active,
.toast-leave-active {
  @apply transition-all;
}

.toast-enter-from,
.toast-leave-to {
  @apply opacity-0 translate-x-10;
}

.toast-leave-active {
  @apply absolute w-fit;
}
</style>
