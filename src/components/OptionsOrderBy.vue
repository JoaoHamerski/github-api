<script>
export const OPTIONS = {
  NAME: 'NAME',
  PUSHED_AT: 'PUSHED_AT'
}
</script>

<script setup>
import { ref } from 'vue';

const value = ref('');

const emit = defineEmits(['order-by'])

const onSelectChange = event => {
  emit('order-by', event.target.value)
}
</script>

<template>
  <div>
    <label
      for="orderBy"
      class="form-label fw-bold"
    >
      Ordenar por:
    </label>
    <select
      v-model="value"
      @change="onSelectChange"
      id="orderBy"
      class="form-select form-select-sm"
      aria-label="Selected de ordenação"
    >
      <option
        selected
        value=""
      >Selecione uma opção</option>
      <option :value="OPTIONS.NAME">Nome</option>
      <option :value="OPTIONS.PUSHED_AT">Último commit</option>
    </select>
  </div>
</template>