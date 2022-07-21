<script setup>
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { ref } from 'vue'

const username = ref('')
const emit = defineEmits(['search'])

const onSearchBtnClick = () => {
  emit('search', username.value)
}
</script>

<template>
  <div class="d-flex flex-column align-items-center mt-3">
    <form @submit.prevent="onSearchBtnClick">
      <div class="input-group">
        <input
          v-model="username"
          type="text"
          class="username-input form-control"
          placeholder="Digite um nome de usuário..."
          name="username"
        >
        <button class="btn btn-primary">
          <FontAwesomeIcon
            :icon="faSearch"
            @click.prevent="onSearchBtnClick"
          />
        </button>
      </div>
    </form>
  </div>
</template>
