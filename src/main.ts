import { createApp } from 'vue'
import { initResources } from './boot'
import App from './App.vue'

const app = createApp(App) 

initResources(app)

app.mount('#app')
