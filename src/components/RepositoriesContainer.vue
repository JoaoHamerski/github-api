<script setup>
import { computed } from '@vue/reactivity';

import RepositoriesList from './RepositoriesList.vue'

const props = defineProps({
  login: {
    type: String,
    default: ''
  },
  repositories: {
    type: Array,
    default: () => []
  }
})

const isRepositoriesEmpty = computed(() => !props.repositories.length)
</script>

<template>
  <div class="mt-4">
    <div
      v-if="isRepositoriesEmpty"
      class="text-secondary text-center"
    >
      Nenhum repositório foi encontrado.
    </div>
    <div v-else>
      <RepositoriesList
        :login="login"
        :repositories="repositories"
      />
    </div>
  </div>
</template>