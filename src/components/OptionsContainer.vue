<script setup>
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import AppContainer from '@/components/AppContainer.vue'
import OptionsOrderBy from '@/components/OptionsOrderBy.vue'
import OptionsSearchRepository from '@/components/OptionsSearchRepository.vue'
import OptionsFilters from '@/components/OptionsFilters.vue'

const emit = defineEmits(['filter', 'order-by', 'search'])

const onFilter = inputs => {
  emit('filter', inputs)
}

const onOrderBy = event => {
  emit('order-by', event)
}

const onSearch = search => {
  emit('search', search.value)
}
</script>

<template>
  <AppContainer>
    <template #title>
      <FontAwesomeIcon
        :icon="faFilter"
        fixed-width
      ></FontAwesomeIcon>
      Opções
    </template>

    <div class="row flex-column flex-sm-row">
      <div class="col">
        <OptionsSearchRepository @search="onSearch" />
        <OptionsOrderBy
          class="mt-3"
          @order-by="onOrderBy"
        />
      </div>

      <div class="col mt-3 mt-sm-0">
        <OptionsFilters @filter="onFilter" />
      </div>
    </div>
  </AppContainer>
</template>