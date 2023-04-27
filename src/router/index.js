import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('../views/homePage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

