import {App} from "vue";
import {setupTailwindCSS} from "./tailwindcss";
import setupPinia from "@/plugins/pinia";
import setupElementPlus from "@/plugins/elementui";
import 'animate.css';

export default function setupPlugins(app: App) {
    setupPinia(app)
    setupTailwindCSS()
    setupElementPlus(app)
}