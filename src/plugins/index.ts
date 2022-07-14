import {App} from "vue";
import {setupTailwindCSS} from "./tailwindcss";

export default function setupPlugins(app: App) {
    setupTailwindCSS()
}