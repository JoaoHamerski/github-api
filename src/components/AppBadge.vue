<script setup lang="ts">
type AppBadgeProps = {
  label: string,
  icon?: string
}

defineProps<AppBadgeProps>()
</script>

<template>
  <span class="badge text-xs">
    <span
      v-if="icon"
      class="mr-1"
    >
      <FWIcon :icon="icon" />
    </span>
    <span>{{ label }}</span> 
  </span>
</template>
