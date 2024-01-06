<script setup lang="ts">
defineEmits(['back'])
</script>

<template>
  <div>
    <button
      class="btn btn-ghost font-bold"
      @click="$emit('back')"
    >
      <FWIcon
        icon="fa-solid fa-arrow-left"
        size="lg"
        class="mr-1"
      />
      <span>VOLTAR</span>
    </button>
  </div>
</template>
