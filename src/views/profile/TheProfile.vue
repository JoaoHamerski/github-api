<script setup lang="ts">
import type { User, Repository, ReposOptions, ReposOption, RepoParams } from '@/types/profile'
import { onMounted, ref } from 'vue'
import fetchAPI from '@/utils/fetch-api'
import { useToastStore } from '@/store/toast-store'

import ProfileHeader from './partials/ProfileHeader.vue'
import ProfileRepos from './partials/ProfileRepos.vue'
import ProfileBack from './partials/ProfileBack.vue'
import ProfileOptions from './partials/ProfileOptions.vue'
import ProfileContainer from './partials/ProfileContainer.vue'

interface TheProfileProps {
  user: User
}

const toast = useToastStore()
const emit = defineEmits(['back'])
const props = defineProps<TheProfileProps>()

const repos = ref<Repository[]>([])
const reposCache = ref<Repository[]>([])

const isLoading = ref<boolean>(false)

const reposOptions = ref<ReposOptions>({
  sort: 'full_name',
  hideArchived: false,
  hideForks: false
})

const onBackClick = () => { 
  emit('back')
}

const applyFilters = () => {
  repos.value = reposCache.value
  
  if (reposOptions.value.hideArchived) {
    repos.value = repos.value.filter((repo) => !repo.archived)
  }
  
  if (reposOptions.value.hideForks) {
    repos.value = repos.value.filter((repo) => !repo.fork)
  }
}

const onOptionsUpdate = async ({ option, value }: ReposOption) => {
  const options: ReposOptions = { ...reposOptions.value, [option]: value }

  if (option === 'sort') {
    await fetchData({ sort: value })
  }

  reposOptions.value = options

  applyFilters()
}

const fetchData = async (params: RepoParams = {}) => {
  const DEFAULT_PARAMS: RepoParams = {
    sort: 'full_name',
    per_page: 100
  }
  
  isLoading.value = true

  try {
    reposCache.value = repos.value = await fetchAPI(props.user.repos_url, {
      headers: {
        'Accept': 'application/vnd.github+json'
      },
      params: { ...DEFAULT_PARAMS, ...params }
    })
  } catch (error) {
    if (error instanceof Error) {
      onBackClick()
      toast.error('Ops! Algo deu errado.')
    }
  }

  isLoading.value = false
}

onMounted(async () => {
  await fetchData()
})
</script>

<template>
  <div>
    <ProfileBack
      class="mb-4"
      @back="onBackClick"
    />
    
    <ProfileHeader
      :user="user"
      class="mb-10"
    />

    <ProfileContainer class="mb-4">
      <ProfileOptions
        :repos="reposCache"
        :options="reposOptions"
        @update:options="onOptionsUpdate"
      />
    </ProfileContainer>

    <Transition 
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate_animated animate__fadeOut"
      mode="out-in"
    >
      <AppLoading
        v-if="isLoading"
        key="loading"
        class="py-14"
      />
      <ProfileRepos
        v-else
        key="profile-repos"
        class="mt-10"
        :repos="repos"
        @update:options="onOptionsUpdate"
      />
    </Transition>
  </div>
</template>

