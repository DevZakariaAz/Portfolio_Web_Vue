import router from './router'
import { createApp } from 'vue'
import 'aos/dist/aos.css';
import './style.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App.vue'

createApp(App).use(router).mount('#app')
