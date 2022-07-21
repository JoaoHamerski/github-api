import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from '@vue/apollo-composable'
import apolloClient from "./vue-apollo"
import App from "./App.vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/sass/app.scss'

// Create app configs
const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App)
})

// Global components
app.component('FontAwesomeIcon', FontAwesomeIcon)

// App mount
app.mount("#app")
