import {App} from "vue";

export default function registryGlobalComponents(app: App) {
    const components: Record<string, { [key: string]: any }> = import.meta.glob("@/components/*.vue", {eager: true})
    Object.keys(components).forEach(componentName => {
        const name = componentName.replace(/\/src\/|.+components\/|\.vue/ig, '')
        app.component(name, components[componentName].default)
    })

}