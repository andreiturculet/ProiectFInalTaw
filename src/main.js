// Punctul de intrare al aplicației Vue
// Aici se inițializează aplicația, se conectează router-ul și se montează totul în DOM
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

createApp(App).use(router).mount('#app')