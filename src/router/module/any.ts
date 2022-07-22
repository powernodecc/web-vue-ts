import {RouteRecordRaw} from "vue-router";

export default {
    name: 'notfound',
    path: '/:any(.*)',
    component: () => import("@/views/error/404.vue")
} as RouteRecordRaw