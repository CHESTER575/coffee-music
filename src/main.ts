import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vant from 'vant'

import './assets/main.css'
import 'vant/lib/index.css';

// 设置rem相对值
document.documentElement.style.fontSize = document.body.clientWidth / 750 + 'px'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vant)

app.mount('#app')
