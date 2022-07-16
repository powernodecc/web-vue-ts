import {RouteRecordRaw} from "vue-router";

export default function loadModuleRoutes(): RouteRecordRaw[] {
    const modules: { [key: string]: any } = import.meta.glob("@/router/module/**/*.ts", {eager: true})
    const routes: RouteRecordRaw[] = []
    Object.keys(modules).forEach(moduleName => {
        routes.push(modules[moduleName].default)
    })
    return routes
}



