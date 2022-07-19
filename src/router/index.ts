import {App} from "vue";
import {createRouter, createWebHistory} from "vue-router";
import setupBaseRoute from "./routes";
import loadRoutes from "@/router/load";
import guard from "@/router/guard";


const router = createRouter({
    history: createWebHistory(),
    routes: [...setupBaseRoute(), ...loadRoutes]
})

export function setupRouter(app: App) {
    guard(router)
    app.use(router)
}

export default router