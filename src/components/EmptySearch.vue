<script setup>
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'

</script>

<template>
  <h5 class="text-center text-secondary mt-5 pt-5">
    <div class="mb-4">
      <FontAwesomeIcon
        :icon="faGithubAlt"
        size="4x"
      ></FontAwesomeIcon>
    </div>
    Digite algum <b>nome de usuário</b> para buscar. Ex.: JoaoHamerski
  </h5>
</template>