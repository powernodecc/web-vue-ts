import {RouteRecordRaw} from "vue-router";

export default {
    name: 'auth',
    path: '/auth',
    component: () => import("@/layouts/admin.vue"),
    children: [
        {
            name: 'auth.login',
            path: 'login',
            component: () => import("@/views/auth/login.vue")
        },
        {
            name: 'auth.register',
            path: 'register',
            component: () => import("@/views/auth/register.vue")
        }
    ]
} as RouteRecordRaw