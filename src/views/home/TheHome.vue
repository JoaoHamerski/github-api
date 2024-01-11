<script setup lang="ts">
import HomeHeader from './partials/HomeHeader.vue'
import HomeSearch from './partials/HomeSearch.vue'

const emit = defineEmits(['search'])

const onSearch = (search: string) => {
  emit('search', search)
}
</script>

<template>
  <div class="mx-auto -mt-10 flex flex-col items-center justify-center h-full">
    <HomeHeader />
    <HomeSearch @search="onSearch" />
  </div>
</template>
