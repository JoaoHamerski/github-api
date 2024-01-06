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
  <div class="flex gap-10">
    <div class="avatar">
      <div class="relative w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <a
          :href="user.html_url"
          target="_blank"
          class="absolute inset-0"
        />
        <img :src="user.avatar_url">
      </div>
    </div>
    <div class="flex flex-col justify-center">
      <div class="mb-4">
        <h3
          class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-0"
        >
          <a
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
      <div class="flex gap-8 text-sm">
        <ProfileBadge
          icon="fa-solid fa-users"
          label="Seguidores:"
          :text="formatNumber(user.followers, {notation: 'compact'})"
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
