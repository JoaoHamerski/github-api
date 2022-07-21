<script setup>
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { ref } from 'vue'
const value = ref('')

const emit = defineEmits(['search'])

const onSearchClick = () => {
  emit('search', value)
}

const onClearClick = () => {
  emit('search', '')
  value.value = ''
}
</script>

<template>
  <div>
    <form @submit.prevent="onSearchClick">
      <label
        class="form-label fw-bold d-block"
        for="repositoryName"
      >Nome do repositório</label>
      <div class="input-group">
        <input
          v-model="value"
          id="repositoryName"
          name="repositoryName"
          type="text"
          class="form-control"
          placeholder="Procure por um repositório..."
        >
        <button
          class="btn btn-outline-primary"
          @click.prevent="onSearchClick"
        >
          <FontAwesomeIcon :icon="faSearch"></FontAwesomeIcon>
        </button>
      </div>
    </form>
    <div
      @click="onClearClick"
      class="small link-primary clickable"
      v-if="value"
    >Limpar</div>
  </div>
</template>