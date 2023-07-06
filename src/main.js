import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify';

import App from './App.vue'
import router from './router'
import Header from './components/Header.vue'

const app = createApp(App)

const vuetify = createVuetify()

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.component('Header', Header) // Header 컴포넌트를 전역으로 등록합니다.

app.mount('#app')
