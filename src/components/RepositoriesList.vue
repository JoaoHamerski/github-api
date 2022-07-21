<script setup>
import { DateTime } from 'luxon'
import { faUpRightFromSquare, faStar } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { computed } from '@vue/reactivity';
import AppContainer from './AppContainer.vue'

const GITHUB_URL = 'https://github.com'

const props = defineProps({
  login: {
    type: String,
    required: true
  },
  repositories: {
    type: Array,
    required: true
  }
})

const profileUrl = computed(() => `${GITHUB_URL}/${props.login}`)

const formatDatetime = (datetime) => DateTime
  .fromISO(datetime)
  .toFormat("dd/MM/y 'às' HH:mm ")
</script>

<template>
  <AppContainer
    class="mt-3"
    hide-border
    hide-padding
  >
    <template #title>
      <div class="position-relative">
        <a
          :href="profileUrl"
          class="stretched-link"
          target="_blank"
        />
        <FontAwesomeIcon
          :icon="faGithub"
          fixed-width
          size="lg"
        ></FontAwesomeIcon>
        {{ login }}
      </div>
    </template>

    <ul class="list-group list-group">
      <li
        class="list-group-item d-flex align-items-center"
        v-for="repository in repositories"
        :key="repository.id"
      >
        <div class="me-3">
          <a
            :href="repository.url"
            target="_blank"
          >
            <FontAwesomeIcon
              class=" "
              :icon="faUpRightFromSquare"
              size="lg"
            />
          </a>
        </div>
        <div>
          <div class="fw-bold">{{ repository.name }}</div>
          <div
            class="small"
            v-if="repository.description"
          >
            {{ repository.description }}
          </div>
          <small class="text-secondary">
            <b>
              Criado em:
            </b>
            <span>{{ formatDatetime(repository.createdAt) }}</span>
          </small>
          &bull;
          <small class="text-secondary">
            <b>Último commit: </b>
            <span>{{ formatDatetime(repository.pushedAt) }}</span>
          </small>
        </div>
        <div class="ms-auto">
          <span
            class="badge bg-danger me-2 py-2"
            v-if="repository.isEmpty"
          >
            Vazio
          </span>
          <span
            class="badge bg-info me-2 py-2"
            v-if="repository.isArchived"
          >
            Arquivado
          </span>
          <span class="badge text-bg-warning py-2">
            <FontAwesomeIcon
              :icon="faStar"
              fixed-width
            ></FontAwesomeIcon>

            {{ repository.stargazerCount }}
          </span>
        </div>
      </li>
    </ul>
  </AppContainer>
</template>