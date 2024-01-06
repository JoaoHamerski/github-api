<script setup lang="ts">
import { inject } from 'vue'
import type { Ref } from 'vue'

const loading: Ref<boolean> | undefined = inject('isSearchLoading')
</script>

<template>
  <div class="mt-8">
    <button
      class="btn btn-primary px-10 font-bold"
      :disabled="loading"
      @click="$attrs.click"
    >
      <span v-if="loading" class="loading loading-spinner" />
      <FWIcon v-else icon="fa-solid fa-search" />
      BUSCAR
    </button>
  </div>
</template>
