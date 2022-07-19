import {RouteRecordRaw} from "vue-router";

export default {
    name: 'admin',
    path: '/admin',
    redirect: {name: 'admin.home'},
    meta: {menu: {title: 'dashboard', icon: 'fa-solid fa-gauge'}},
    component: () => import("@/layouts/admin.vue"),
    children: [
        {
            name: 'admin.home',
            path: 'home',
            meta: {menu: {title: '工作台'}},
            component: () => import("@/views/admin/home.vue")
        }
    ]
} as RouteRecordRaw