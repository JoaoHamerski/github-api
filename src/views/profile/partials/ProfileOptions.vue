<script setup lang="ts">
import type {
  ReposOption,
  ReposOptions,
  ReposSort,
  Repository,
} from '@/types/profile'
import { computed, ref } from 'vue'

import type { AppSelectOption } from '@/components/AppSelect.vue'

type ProfileReposOptionsProps = {
  repos: Repository[]
  options: ReposOptions
}

const emit = defineEmits(['update:options'])

const props = defineProps<ProfileReposOptionsProps>()

const selectOptions = ref<AppSelectOption[]>([
  { label: 'Nome', value: 'full_name' },
  { label: 'Data de cadastro', value: 'created' },
  { label: 'Último commit', value: 'pushed' },
])

const onOptionsChange = ({ option, value }: ReposOption) => {
  emit('update:options', { option, value })
}

const forksCount = computed<number>(
  () => props.repos.filter((repo) => repo.fork).length,
)

const archivedCount = computed<number>(
  () => props.repos.filter((repo) => repo.archived).length,
)
</script>

<template>
  <div class="flex gap-5">
    <div class="grow">
      <AppSelect
        :value-model="options.sort"
        :options="selectOptions"
        label-icon="fas fa-sort"
        label="Ordenar por"
        size="sm"
        @change="
          (value: ReposSort) => onOptionsChange({ option: 'sort', value })
        "
      />
    </div>
    <div class="grow flex flex-col">
      <AppToggle
        class="mb-3"
        :model-value="options.hideForks"
        :label="'Ocultar forks' + (forksCount ? ` (${forksCount})` : '')"
        :disabled="!forksCount"
        disabled-message="Este usuário não possui forks públicos"
        @toggle="
          (value: boolean) => onOptionsChange({ option: 'hideForks', value })
        "
      />

      <AppToggle
        :model-value="options.hideArchived"
        :label="
          'Ocultar arquivados' + (archivedCount ? ` (${archivedCount})` : '')
        "
        :disabled="!archivedCount"
        disabled-message="Este usuário não possui repositórios arquivados públicos"
        @toggle="
          (value: boolean) => onOptionsChange({ option: 'hideArchived', value })
        "
      />
    </div>
  </div>
</template>
