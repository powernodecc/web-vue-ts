import IMenu from "../../types/menu";
import {RouteLocationNormalized, RouteRecordRaw} from "vue-router";
import router from "@/router";
import localStore from "@/utils/localStore";
import {LocalStorageEnum} from "@/enum/localStorageEnum";

class Menu {

    public menus = ref<IMenu[]>([])

    public history = ref<IMenu[]>([])

    public route = ref<RouteLocationNormalized>()

    constructor() {
        this.menus.value = this.getMenuRoute()
        this.history.value = this.getHistoryMenu()
    }

    getMenuRoute() {
        return router.getRoutes()
            .filter(route => route.children.length > 0 && route.meta.menu !== undefined)
            .map(route => {
                let menu: IMenu = {...route.meta.menu}
                menu.children = route.children
                    .filter(route => route.meta?.menu !== undefined)
                    .map(route => {
                        return {...route.meta?.menu, route: route.name} as IMenu
                    })
                return menu
            })
    }

    getHistoryMenu() {
        const routes: RouteRecordRaw[] = []
        router.getRoutes().forEach(route => {
            routes.push(...route.children)
        })

        const history: IMenu[] = localStore.get(LocalStorageEnum.HISTORY_MENU) ?? []
        return history.filter(h => {
            return routes.some(r => r.name === h.route)
        })
    }

    addHistoryMenu(route: RouteLocationNormalized) {
        if (!route.meta.menu) return
        this.route.value = route

        const menu: IMenu = {...route.meta.menu, route: route.name as string}
        const exist = this.history.value.some(h => h.route == menu.route)
        if (!exist) {
            this.history.value.unshift(menu)
        }
        if (this.history.value.length > 10) {
            this.history.value.pop()
        }
        localStore.set(LocalStorageEnum.HISTORY_MENU, this.history.value, 0)
    }

    removeHistoryMenu(menu: IMenu) {
        const index = this.history.value.indexOf(menu)
        this.history.value.splice(index, 1)
        localStore.set(LocalStorageEnum.HISTORY_MENU, this.history.value)
    }

    toggleParentMenu(menu: IMenu) {
        this.menus.value.forEach(menu => {
            menu.isClick = false;
        })
        menu.isClick = true
    }

    setCurrentMenu(route: RouteLocationNormalized) {
        this.menus.value.forEach(p => {
            p.isClick = false
            p.children?.forEach(c => {
                c.isClick = false
                if (c.route == route.name) {
                    c.isClick = true
                    p.isClick = true
                }
            })
        })
    }
}

const menuService = new Menu()

export default menuService
