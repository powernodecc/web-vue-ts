import {RouteRecordRaw} from "vue-router";

export default {
    name: 'editor',
    path: '/editor',
    meta: {menu: {title: '编辑器', icon: 'fa-solid fa-e'}},
    component: () => import("@/layouts/admin.vue"),
    children: [
        {
            name: 'editor.markdown',
            path: 'markdown',
            meta: {menu: {title: 'markdown编辑器'}},
            component: () => import("@/views/editor/markdown.vue")
        },
        {
            name: 'editor.base',
            path: 'base',
            meta: {menu: {title: '富文本编辑器'}},
            component: () => import("@/views/editor/base.vue")
        }
    ]
} as RouteRecordRaw