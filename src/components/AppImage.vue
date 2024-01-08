<script setup lang="ts">
import { ref } from 'vue'

interface AppImageProps {
  src?: string
  alt?: string
}

defineProps<AppImageProps>()
defineOptions({
  inheritAttrs: false,
})

const isLoading = ref(true)

const onImageLoad = () => {
  isLoading.value = false
}
</script>

<template>
  <TransitionGroup
    tag="div"
    class="relative h-full"
    enter-active-class="animate__animated animate__fadeIn animate__faster"
  >
    <span
      v-show="isLoading"
      key="loading"
      class="loading loading-spinner text-primary absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    />
    <img
      v-show="!isLoading"
      key="image"
      v-bind="{ ...$attrs, src, alt }"
      @load="onImageLoad"
    />
  </TransitionGroup>
</template>
