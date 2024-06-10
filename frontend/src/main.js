import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
//引入图标库
import 'font-awesome/css/font-awesome.min.css'

const app = createApp(App)

app.use(ElementPlus)

app.use(createPinia())
app.use(router)

app.mount('#app')