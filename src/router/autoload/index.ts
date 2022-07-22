import {Router, RouteRecordRaw} from "vue-router";

function loadModuleRoutes(): RouteRecordRaw[] {
    const modules: { [key: string]: any } = import.meta.glob("../module/**/*.ts", {eager: true})
    const routes: RouteRecordRaw[] = []
    Object.keys(modules).forEach(key => {
        routes.push(modules[key].default)
    })
    return routes
}

function autoload(router: Router) {
    let routes = loadModuleRoutes()

    routes.forEach(route => {
        router.addRoute(route)
    })
}

export default autoload