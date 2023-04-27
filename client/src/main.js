import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入插件
import 'lib-flexible/flexible.js'

createApp(App).use(router).mount('#app')
