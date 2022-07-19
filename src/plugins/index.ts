import {App} from "vue";
import {setupTailwindCSS} from "./tailwindcss";
import setupPinia from "@/plugins/pinia";

export default function setupPlugins(app: App) {
    setupPinia(app)
    setupTailwindCSS()
}