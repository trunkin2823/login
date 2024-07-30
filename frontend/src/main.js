import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store.js";

const app = createApp(App)
app.use(router)
app.use(store) //sử dụng Vue store
app.mount('#app')
