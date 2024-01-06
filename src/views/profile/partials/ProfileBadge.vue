<script setup lang="ts">

interface ProfileBadgeProps {
  icon?: string,
  label: string,
  text: string
}

defineProps<ProfileBadgeProps>()
</script>

<template>
  <div>
    <FWIcon
      v-if="icon"
      :icon="icon"
      fixed-width
      class="mr-2"
    /> 
    <span>
      <span>{{ label }}&nbsp;</span>
      <b>{{ text }}</b>
    </span>
  </div>
</template>
