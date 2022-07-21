<script setup>
import { reactive } from 'vue';
import AppCheckbox from './AppCheckbox.vue'

const inputs = reactive({
  archived: false,
  stargazer: false,
  empty: false
})

const emit = defineEmits(['filter'])

const onCheckboxInput = () => {
  emit('filter', inputs)
}

</script>

<template>
  <div>
    <b>Filtros</b><span class="small text-secondary"> (incluir)</span>
    <div class="form-group">
      <AppCheckbox
        id="archived"
        v-model="inputs.archived"
        @input="onCheckboxInput('archived', $event)"
      >
        Arquivados
      </AppCheckbox>
    </div>

    <div class="form-group">
      <AppCheckbox
        id="stargazer"
        v-model="inputs.stargazer"
        @input="onCheckboxInput('stargazer', $event)"
      >
        Pelo menos uma estrela
      </AppCheckbox>
    </div>
    <div class="form-group">
      <AppCheckbox
        id="empty"
        v-model="inputs.empty"
        @input="onCheckboxInput('empty', $event)"
      >
        Vazios
      </AppCheckbox>
    </div>
  </div>
</template>