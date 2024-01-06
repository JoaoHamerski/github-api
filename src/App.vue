<script setup lang="ts">
import { isEmpty } from 'lodash-es'
import type { User } from '@/types/profile'
import fetchAPI from './utils/fetch-api'
import { computed, onMounted, provide, ref } from 'vue'
import { useToastStore } from './store/toast-store'
import { getUrlParams, updateUrlParams } from './utils/general'

import TheHome from '@/views/home/TheHome.vue'
import TheProfile from '@/views/profile/TheProfile.vue'
import ToastComponent from '@/components/toast/ToastComponent.vue'

const isLoading = ref<boolean>(false)
const user = ref<User>({})
const toast = useToastStore()

const hasUser = computed<boolean>(() => !isEmpty(user.value))

const onSearch = async (username: string) => {
  isLoading.value = true

  try {
    user.value = await fetchAPI(`users/${username}`)

    updateUrlParams({ username })
  } catch (error) {
    if (error instanceof Response) {
      const errorMessage =
        error.status === 404
          ? 'Usuário não encontrado'
          : 'Ops! Algo deu errado.'

      toast.error(errorMessage)
    }

    if (!(error instanceof Response)) {
      toast.error('Ops! Algo deu errado.')
    }
  }

  isLoading.value = false
}

const onBackClick = () => {
  user.value = {}
  updateUrlParams({ username: null })
}

onMounted(() => {
  const username = getUrlParams('username')

  if (username) {
    onSearch(username as string)
  }
})
provide('isSearchLoading', isLoading)
</script>

<template>
  <ToastComponent />
  <AppContainer class="p-10 mx-auto mt-10 w-3/4 overflow-auto h-[90vh]">
    <Transition
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
      mode="out-in"
    >
      <TheHome v-if="!hasUser" key="the-home" @search="onSearch" />
      <TheProfile v-else key="the-profile" :user="user" @back="onBackClick" />
    </Transition>
  </AppContainer>
</template>
