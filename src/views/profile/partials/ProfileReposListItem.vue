<script setup lang="ts">
import type { Repository } from '@/types/profile'
import { formatNumber } from '@/formatters/format-number'
import { formatDateTime } from '@/formatters/format-datetime'
import { computed } from 'vue'
import type { DropdownItem } from '@/components/AppDropdown.vue'
import { copyToClipboard } from '@/utils/general'

interface ProfileReposListItemProps {
  repo: Repository
}

const props = defineProps<ProfileReposListItemProps>()

const dropdownItems = computed<DropdownItem[]>(() => [
  {
    label: 'Copiar SSH',
    icon: 'far fa-copy',
    onClick: () =>
      copyToClipboard(
        props.repo.ssh_url,
        'Repositório copiado para área de transferência',
      ),
  },
  {
    label: 'Copiar HTTP URL',
    icon: 'far fa-copy',
    onClick: () =>
      copyToClipboard(
        props.repo.clone_url,
        'Repositório copiado para área de transferência',
      ),
  },
])
</script>

<template>
  <li>
    <div class="flex justify-between items-baseline mb-3">
      <div>
        <a
          :href="repo.html_url"
          class="mr-3"
          target="_blank"
        >
          <FWIcon
            class="text-blue-600 hover:text-blue-500 cursor-pointer transition-colors"
            icon="fa-solid fa-up-right-from-square"
          />
        </a>
        <span class="font-bold mr-3">{{ repo.name }}</span>
        <span
          v-show="repo.fork"
          :key="repo.id"
          class="tooltip tooltip-right"
          data-tip="Fork de outro repositório"
        >
          <FWIcon icon="fa-solid fa-code-fork" />
        </span>
      </div>
      <div>
        <AppDropdown
          icon="fa-ellipsis"
          :items="dropdownItems"
        />
      </div>
    </div>

    <div class="text-sm mb-2">
      {{ repo.description }}
    </div>

    <div class="flex flex-col md:flex-row justify-between">
      <div class="flex flex-col md:flex-row text-xs mb-5 md:mb-0">
        <span>
          <b>Criado </b>
          <span>{{ formatDateTime(repo.created_at).toRelative() }}</span>
        </span>
        <span class="mx-2 hidden md:block">&bull;</span>
        <span>
          <b>Último commit: </b>
          <span>{{ formatDateTime(repo.pushed_at).toRelative() }}</span>
        </span>
      </div>

      <div class="flex gap-3">
        <AppBadge
          v-if="repo.archived"
          class="badge-warning"
          label="Arquivado"
        />

        <AppBadge
          v-if="repo.language"
          class="badge-outline badge-info"
          :label="repo.language"
        />
        <AppBadge
          class="badge-outline badge-warning"
          :label="formatNumber(repo.stargazers_count, { notation: 'compact' })"
          icon="fa-regular fa-star"
        />
      </div>
    </div>
  </li>
</template>
