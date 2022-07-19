import {RouteRecordRaw} from "vue-router";

export default {
    name: 'error',
    path: '/error',
    meta: {menu: {title: '错误页面', icon: 'fa-solid fa-c'}},
    component: () => import("@/layouts/admin.vue"),
    children: [
        {
            name: 'error.400',
            path: '401',
            meta: {menu: {title: '401页面'}},
            component: () => import("@/views/error/401.vue")
        },
        {
            name: 'error.404',
            path: '404',
            meta: {menu: {title: '404页面'}},
            component: () => import("@/views/error/404.vue")
        },
        {
            name: 'error.500',
            path: '500',
            meta: {menu: {title: '500页面'}},
            component: () => import("@/views/error/500.vue")
        }
    ]
} as RouteRecordRaw