<script setup lang="ts">
import { onMounted, ref } from 'vue'
import HomeSearchInput from './HomeSearchInput.vue'
import HomeSearchButton from './HomeSearchButton.vue'

const emit = defineEmits(['search'])

const search = ref('')
const homeSearchInput = ref<InstanceType<typeof HomeSearchInput>>()

const onSearchClick = () => {
  emit('search', search.value)
}

onMounted(() => {
  homeSearchInput.value?.focus()
})
</script>

<template>
  <div class="mt-16 w-full px-2 md:px-0 md:w-1/2 mx-auto text-center">
    <form @submit.prevent="onSearchClick" class="w-full">
      <HomeSearchInput
        ref="homeSearchInput"
        v-model="search"
      />
      <HomeSearchButton @click="onSearchClick" />
    </form>
  </div>
</template>
