<script setup lang="ts">
import type { ToastType } from '@/types/store'
import { computed } from 'vue'

const TOAST_TYPES_MAP: Record<ToastType, { className: string; icon: string }> =
  {
    success: {
      icon: 'fas fa-check-circle',
      className: 'alert-success',
    },
    error: {
      icon: 'fas fa-circle-xmark',
      className: 'alert-error',
    },
    info: {
      icon: 'fas fa-circle-exclamation',
      className: 'alert-info',
    },
  }

type ToastAlertTypes = {
  type: ToastType
  message: String
}

const props = defineProps<ToastAlertTypes>()
const toastProps = computed(() => TOAST_TYPES_MAP[props.type])
</script>

<template>
  <div
    class="alert shadow-xl rounded-md md:rounded-lg mb-2 md:mb-3 whitespace-nowrap p-2 md:p-4 flex flex-nowrap"
    :class="toastProps.className"
  >
    <FWIcon
      :icon="toastProps.icon"
      size="xl"
    />
    <span class="text-sm">{{ message }}</span>
  </div>
</template>
