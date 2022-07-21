<script setup>
import { useQuery } from '@vue/apollo-composable'
import { GetOwnerInfo } from '@/graphql/Repository.gql'
import { ref, computed, reactive, watchEffect } from 'vue'
import { OPTIONS as OPTIONS_ORDER_BY } from '@/components/OptionsOrderBy.vue'
import { isEmpty, some } from 'lodash-es'

// COMPONENTES
import HeaderTitle from '@/components/HeaderTitle.vue'
import UsernameInput from '@/components/UsernameInput.vue'
import RepositoriesContainer from '@/components/RepositoriesContainer.vue'
import EmptySearch from '@/components/EmptySearch.vue'
import NotFoundUser from '@/components/NotFoundUser.vue'
import AppLoading from '@/components/AppLoading.vue'
import OptionsContainer from '@/components/OptionsContainer.vue'

// PROPRIEDADES
const query = reactive({
  login: '',
  first: 100
})

const filters = reactive({})
const search = ref('')
const appError = ref(false)

// APOLLO CALL
const { result, loading, onError } = useQuery(GetOwnerInfo, query)

onError(function (error) {
  if (error.networkError.statusCode === 401) {
    appError.value = true
  }
})

// PROPRIEDADES COMPUTADAS
const login = computed(() => result?.value?.repositoryOwner?.login)
const userExists = computed(() => !!result?.value?.repositoryOwner)
const repositories = computed(() => result?.value?.repositoryOwner?.repositories?.nodes || [])

const getComponent = computed(() => {
  if (loading.value) {
    return {
      component: AppLoading,
      attrs: {},
      on: {}
    }
  }

  if (!userExists) {
    return {
      component: NotFoundUser,
      attrs: {},
      on: {}
    }
  }

  if (!query.login) {
    return {
      component: EmptySearch,
      attrs: {
        loading
      },
      on: {}
    }
  }

  return {
    component: RepositoriesContainer,
    attrs: {
      login: login.value,
      repositories: getRepositories(repositories.value)
    },
    on: {
      'order-by': onOrderBy
    }
  }
})

// MÉTODOS
const hasFilteredRepositories = filters => {
  if (isEmpty(filters)) {
    return false
  }

  return some(filters, (value) => value === true)
}

const hasSearchedRepositories = search => {
  return !isEmpty(search)
}

const getFilteredRepositories = repositories => {
  const filteredRepositories = []

  if (!hasFilteredRepositories(filters)) {
    return repositories
  }

  if (filters.archived) {
    filteredRepositories.push(...repositories.filter((item) => item.isArchived))
  }

  if (filters.stargazer) {
    filteredRepositories.push(...repositories.filter((item) => item.stargazerCount >= 1))
  }

  if (filters.empty) {
    filteredRepositories.push(...repositories.filter((item) => item.isEmpty))
  }

  return filteredRepositories
}

const getSearchedRepositories = repositories => {
  return repositories.filter(({ name }) => name.includes(search.value))
}

const getRepositories = repositories => {
  // Prioriza a busca por repositórios pelo nome,
  // depois filtra os nomes buscados.
  if (hasSearchedRepositories(search.value)) {
    return getFilteredRepositories(
      getSearchedRepositories(repositories)
    )
  }

  if (hasFilteredRepositories(filters)) {
    return getFilteredRepositories(repositories)
  }

  return repositories
}

const onUserSearch = (searchedUsername) => {
  query.login = searchedUsername
}

const onOrderBy = field => {
  if (isEmpty(field)) {
    delete query.orderBy
    return
  }

  if (field === OPTIONS_ORDER_BY.NAME) {
    query.orderBy = {
      field,
      direction: 'ASC'
    }

    return
  }

  query.orderBy = {
    field,
    direction: 'DESC'
  }
}

const onFilter = (inputs) => {
  Object.assign(filters, inputs)
}

const onSearch = (searchedValue) => {
  search.value = searchedValue
}
</script>

<template>
  <div class="container my-3">
    <div class="d-flex flex-column flex-sm-row justify-content-between align-items-baseline">
      <HeaderTitle />
      <UsernameInput @search="onUserSearch" />
    </div>

    <OptionsContainer
      v-if="query.login"
      class="mt-3"
      @order-by="onOrderBy"
      @filter="onFilter"
      @search="onSearch"
    />

    <div
      v-if="appError"
      class="mt-5 pt-5 text-center"
    >
      <h4 class="text-danger fw-bold">OPS!</h4>
      <h5 class="mt-4 text-secondary">Ocorreu um erro ao se comunicar com a API, por favor, tente novamente mais tarde.
      </h5>
    </div>
    <Component
      v-else
      :is="getComponent.component"
      v-bind="getComponent.attrs"
      v-on="getComponent.on"
    ></Component>
  </div>
</template>
