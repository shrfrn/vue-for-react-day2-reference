import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import CarIndex from '../pages/car-index.vue'
import CarDetails from '../pages/car-details.vue'
import CarEdit from '../pages/car-edit.vue'

const routerOptions = {
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HomeView,
        },
        {
            path: '/car',
            component: CarIndex,
        },
        {
            path: '/car/:_id',
            component: CarDetails,
        },
        {
            path: '/car/edit/:_id?',
            component: CarEdit,
        },
        {
            path: '/about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../pages/AboutView.vue'),
        },
    ],
}
const router = createRouter(routerOptions)

export default router