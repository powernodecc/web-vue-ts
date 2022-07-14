import {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/index.vue')
    }
]

export default function setupBaseRoute(): RouteRecordRaw[] {
    return routes
}
