import {RouteRecordRaw} from "vue-router";

const layouts = import.meta.glob('@/layouts/*.vue', {eager: true})
const views = import.meta.glob('@/views/**/*.vue', {eager: true})

export default function autoloadRoutes(): RouteRecordRaw[] {
    const routes: RouteRecordRaw[] = []
    // console.log(layouts);
    Object.entries(layouts).forEach(([fileName, module]) => {
        const layoutRoute: RouteRecordRaw = getRouteByModule(fileName, module as { [key: string]: any })
        layoutRoute.children = getChildrenRoute(layoutRoute)
        routes.push(layoutRoute)
    })
    // console.log(routes);
    return routes
}

function getChildrenRoute(layoutRoute: RouteRecordRaw) {
    const routes: RouteRecordRaw[] = []
    // console.log(layoutRoute.name)
    Object.entries(views).forEach(([fileName, module]) => {
        if (fileName.includes(layoutRoute.name as string)) {
            const route = getRouteByModule(fileName, module as { [key: string]: any })
            // console.log(route);
            routes.push(route)
        }
    })
    return routes
}


function getRouteByModule(fileName: string, module: { [key: string]: any }): RouteRecordRaw {
    // console.log(module)
    // console.log(fileName);
    // console.log(fileName.replace(/\/src\/|layouts\/|views\/|.vue/gi, '')); /src/view/ auth/login .vue
    const routeName = fileName.replace(/\/src\/|layouts\/|views\/|.vue/gi, '')
    // console.log(routeName);
    const route: RouteRecordRaw = {
        name: routeName.replace('/', '.'),
        path: `/${routeName}`,
        component: module.default
    }
    return Object.assign(route, module.default?.route)
}
