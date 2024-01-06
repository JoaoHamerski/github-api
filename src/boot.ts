import type { App } from 'vue'
import './css/main.css'
import { createPinia } from 'pinia'
import registerFontAwesomePlugin from './libs/fontawesome'
import registerGlobalComponents from './components'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

export const initResources = (app: App<Element>) => {
  const pinia = createPinia()
  
  registerGlobalComponents(app)
  registerFontAwesomePlugin(app)

  app.use(pinia)
  app.use(autoAnimatePlugin)
}
