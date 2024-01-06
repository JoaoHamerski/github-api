<script setup lang="ts">
import type { ToastTypes } from '@/store/toast-store'
import { computed } from 'vue'

const TOAST_TYPES_MAP: Record<ToastTypes, { className: string; icon: string }> =
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
  type: ToastTypes
  message: String
}

const props = defineProps<ToastAlertTypes>()
const toastProps = computed(() => TOAST_TYPES_MAP[props.type])
</script>

<template>
  <div
    class="alert shadow-xl rounded-lg mb-3 whitespace-nowrap p-4"
    :class="toastProps.className"
  >
    <FWIcon
      :icon="toastProps.icon"
      size="xl"
    ></FWIcon>
    <span class="text-sm">{{ message }}</span>
  </div>
</template>
