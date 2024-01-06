<script setup lang="ts">
import {  useToastStore } from '@/store/toast-store'
import { computed } from 'vue'

import ToastAlert from './ToastAlert.vue'

const toastStore = useToastStore()

const toasts = computed(() => toastStore.toasts)
</script>

<template>
  <div class="toast toast-top toast-end">
    <ToastAlert
      v-for="toast in toasts"
      :key="toast.id"
      :type="toast.type"
      :message="toast.message"
    />
  </div>
</template>
