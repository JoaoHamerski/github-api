<script setup lang="ts">
import type { Repository } from '@/types/profile'
import ProfileReposListItem from './ProfileReposListItem.vue'
import { computed } from 'vue'

interface ProfileReposListProps {
  repos: Repository[]
}

const props = defineProps<ProfileReposListProps>()

const hasRepos = computed(() => props.repos.length)
</script>

<template>
  <ul
    v-auto-animate="{ duration: 150 }"
    class="overflow-hidden"
  >
    <li
      v-if="!hasRepos"
      class="text-center py-10"
    >
      <div class="mb-5">
        <FWIcon
          size="2xl"
          icon="fa-regular fa-folder-open"
        />
      </div>
      <div>Nenhum repositório público</div>
    </li>
    <template
      v-for="repo in repos"
      v-else
      :key="repo.id"
    >
      <ProfileReposListItem :repo="repo" />
      <div class="divider last:hidden" />
    </template>
  </ul>
</template>
