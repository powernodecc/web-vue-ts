import {RouteRecordRaw} from "vue-router";

export default {
    name: 'error',
    path: '/error',
    component: () => import("@/layouts/error.vue")
} as RouteRecordRaw