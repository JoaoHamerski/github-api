<script setup lang="ts">
import type { ToastTypes } from '@/store/toast-store'
import { computed } from 'vue'

const TOAST_TYPES_MAP: Record<ToastTypes, string> = {
  success: 'alert-success',
  error: 'alert-error',
  info: 'alert-info',
}

type ToastAlertTypes = {
  type: ToastTypes
  message: String
}

const props = defineProps<ToastAlertTypes>()

const alertClass = computed(() => TOAST_TYPES_MAP[props.type])
</script>

<template>
  <div class="alert shadow-xl rounded-lg mb-3" :class="alertClass">
    {{ message }}
  </div>
</template>
