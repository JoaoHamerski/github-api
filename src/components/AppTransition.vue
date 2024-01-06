<script setup lang="ts">
/**
 * Wrapper para o componente padrão Transition
 * baseado em animações simples do animate.css
 */

interface AppTransitionProps {
  enterClass: 'fadeIn'
  leaveClass: 'fadeOut'
  mode: 'out-in' | 'in-out'
}

withDefaults(defineProps<AppTransitionProps>(), {
  mode: 'out-in',
})
</script>

<template>
  <Transition
    :enter-active-class="`animate__animated animate__${enterClass} animate__faster`"
    :leave-active-class="`animate__animated animate__${leaveClass} animate__faster`"
    :mode="mode"
  >
    <slot />
  </Transition>
</template>
