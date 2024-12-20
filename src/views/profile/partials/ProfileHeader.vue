<script setup lang="ts">
import type { User } from '@/types/profile'
import { formatNumber } from '@/formatters/format-number'
import { formatDateTime } from '@/formatters/format-datetime'

import ProfileBadge from './ProfileBadge.vue'

interface ProfileHeaderProps {
  user: User
}

defineProps<ProfileHeaderProps>()
</script>

<template>
  <div class="flex flex-col md:flex-row gap-10">
    <div class="avatar mx-auto md:mx-0">
      <div
        class="relative w-32 rounded-full ring ring-blue-500 hover:ring-blue-600 transition-shadow ring-offset-base-100 ring-offset-2"
      >
        <a
          :href="user.html_url"
          target="_blank"
          class="absolute inset-0 z-10"
        />
        <AppImage :src="user.avatar_url" />
      </div>
    </div>
    <div class="flex flex-col justify-center">
      <div class="mb-4 text-center md:text-left">
        <h3 class="text-xl md:text-3xl font-bold mb-0">
          <a
            class="text-blue-500 hover:text-blue-600 transition-colors"
            :href="user.html_url"
            target="_blank"
          >
            {{ user.name || user.login }}
          </a>
        </h3>
        <div
          v-if="user.name"
          class="tooltip tooltip-bottom"
          data-tip="Nome de usuário"
        >
          ({{ user.login }})
        </div>
      </div>
      <div class="flex flex-wrap md:flex-nowrap justify-center md:justify-normal gap-8 text-xs md:text-sm py-4 md:py-4">
        <ProfileBadge
          icon="fa-solid fa-users"
          label="Seguidores:"
          :text="formatNumber(user.followers, { notation: 'compact' })"
        />

        <ProfileBadge
          icon="fa-solid fa-folder-open"
          label="Repositórios públicos:"
          :text="formatNumber(user.public_repos)"
        />

        <ProfileBadge
          label="Cadastro:"
          icon="fa-solid fa-calendar-days"
          :text="formatDateTime(user.created_at).toRelative()!"
        />

        <ProfileBadge
          label="Última atualização:"
          icon="fa-solid fa-calendar-days"
          :text="formatDateTime(user.updated_at).toRelative()!"
        />
      </div>
    </div>
  </div>
</template>
