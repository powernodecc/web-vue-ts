import {App} from "vue";
import {createRouter, createWebHistory} from "vue-router";
import guard from "@/router/guard";
import autoload from "@/router/autoload";


const router = createRouter({
    history: createWebHistory(),
    routes: []
})

export function setupRouter(app: App) {
    autoload(router)
    guard(router)
    app.use(router)
}

export default router