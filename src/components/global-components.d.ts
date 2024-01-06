import type AppBadge from './AppBadge.vue'
import type AppContainer from './AppContainer.vue'
import type AppDropdown from './AppDropdown.vue'
import type AppLoading from './AppLoading.vue'
import type AppSelect from './AppSelect.vue'
import type AppToggle from './AppToggle.vue'

/**
 * Cada componente global precisa ser declarado para
 * que as inferência de tipo funcione por toda
 * a aplicação.
 */
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    AppBadge: typeof AppBadge
    AppContainer: typeof AppContainer
    AppDropdown: typeof AppDropdown
    AppLoadnig: typeof AppLoading
    AppSelect: typeof AppSelect
    AppToggle: typeof AppToggle
  }
}

export default {}
