import { createApp } from 'vue'
import './css/main.css'
import './libs/fontawesome'

import App from './App.vue'
import Bootstrap from './bootstrap'

const app = createApp(App)
const bootstrap = new Bootstrap(app)

// prettier-ignore
bootstrap
    .addPinia()
    .addGlobalComponents()
    .addAutoAnimate()
    .addFontAwesome()

app.mount('#app')
