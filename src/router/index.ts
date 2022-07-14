import {App} from "vue";
import {createRouter, createWebHistory} from "vue-router";
import setupBaseRoute from "./routes";

const router = createRouter({
    history: createWebHistory(),
    routes: [...setupBaseRoute()]
})

export function setupRouter(app: App) {
    app.use(router)
}

export default router