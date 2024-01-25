import { createApp } from 'vue'

// Utilisation du même css pour tout le projet
import './style.css'

import App from './App.vue'

// Ajout du routeur au projet.
import router from './router';

// Utilisation du routeur
createApp(App).use(router).mount('#app')