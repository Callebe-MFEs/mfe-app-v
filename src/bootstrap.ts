import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import getRouter from './router'

const app = createApp(App)

app.use(getRouter(import.meta.env.BASE_URL))

app.mount('#app')
