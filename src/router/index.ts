import {App} from "vue";
import {createRouter, createWebHistory} from "vue-router";
import setupBaseRoute from "./routes";
import loadRoutes from "@/router/load";


const router = createRouter({
    history: createWebHistory(),
    routes: [...setupBaseRoute(), ...loadRoutes]
})

export function setupRouter(app: App) {
    app.use(router)
}

export default router