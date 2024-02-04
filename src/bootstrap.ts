import type { App } from 'vue'
import { createPinia } from 'pinia'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default class Bootstrap {
  protected app

  constructor(app: App) {
    this.app = app
  }

  addAutoAnimate() {
    this.app.use(autoAnimatePlugin)

    return this
  }

  addPinia() {
    const pinia = createPinia()

    this.app.use(pinia)

    return this
  }

  addFontAwesome() {
    this.app.component('FWIcon', FontAwesomeIcon)

    return this
  }

  addGlobalComponents() {
    const components = import.meta.glob('./**/App*.vue', {
      eager: true,
    })

    Object.entries(components).forEach(([path, definition]: [string, any]) => {
      const componentName = path
        .split('/')
        .pop()!
        .replace(/\.\w+$/, '')

      this.app.component(componentName, definition.default)
    })

    return this
  }
}
