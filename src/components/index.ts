import type { App } from "vue"

const components = import.meta.glob('./**/App*.vue', {
  eager: true
})

const registerGlobalComponents = (app: App<Element>) => {
  Object.entries(components).forEach(([path, definition]: [string, any]) => {
    const componentName = path
      .split('/')
      .pop()!
      .replace(/\.\w+$/, '')

      app.component(componentName, definition.default)
  })
}

export default registerGlobalComponents
