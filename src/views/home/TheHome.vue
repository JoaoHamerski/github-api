<script setup lang="ts">
import HomeHeader from './partials/HomeHeader.vue'
import HomeSearch from './partials/HomeSearch.vue'

const emit = defineEmits(['search'])

const onSearch = (search: string) => {
  emit('search', search)
}
</script>

<template>
  <div class="mx-auto mt-10">
    <HomeHeader />
    <HomeSearch
      @search="onSearch"
    />
  </div>
</template>
