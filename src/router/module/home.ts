import {RouteRecordRaw} from "vue-router";

export default {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue')
} as RouteRecordRaw

