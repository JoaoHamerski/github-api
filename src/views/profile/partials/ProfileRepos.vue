<script setup lang="ts">
import type { Repository } from '@/types/profile'
import ProfileReposList from './ProfileReposList.vue'
import ProfileContainer from './ProfileContainer.vue'

interface ProfileReposProps {
  repos: Repository[],
}

defineProps<ProfileReposProps>()

</script>

<template>
  <ProfileContainer>
    <ProfileReposList
      :repos="repos"
    />
  </ProfileContainer>
</template>
