import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// import components
import App from './App.vue';
import routes from './routes.js';

// import css
import './index.css';

// create router
const router = createRouter({
    routes: routes,
    history: createWebHistory()
});

// create vue instance
const app = createApp(App);
app.use(router);
app.mount('#app');
