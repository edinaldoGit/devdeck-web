import "./assets/main.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())

const redirect = new URLSearchParams(window.location.search).get('redirect')
if (redirect) {
  router.replace(redirect)
}

app.use(router)
app.mount('#app')
