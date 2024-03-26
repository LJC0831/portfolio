import { createApp } from 'vue'
import router from './router/index.js';
import App from './App.vue'

const app = createApp(App);
app.use(router);  // 라우터 사용
app.mount('#app');
