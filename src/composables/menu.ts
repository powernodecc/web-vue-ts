import IMenu from "../../types/menu";
import {RouteLocationNormalized} from "vue-router";
import router from "@/router";
import {map} from "lodash";

class Menu {

    public menus = ref<IMenu[]>([])

    private breadcrumbs = ref<RouteLocationNormalized[]>()

    constructor() {
        console.log("menu create ...")
        // this.menus.value = this.getMenuRoute()
    }

    private getMenuRoute() {

        // return router.getRoutes().filter(originRoute => {
        //     return originRoute.children.length > 0 && originRoute.meta.menu !== undefined
        // }).map(parentRoute => {
        //     let menu: IMenu = parentRoute.meta.menu as IMenu
        //     menu.children = parentRoute.children.filter(childRoute => {
        //         return childRoute.meta?.menu !== undefined
        //     }).map(changeRoute => {
        //         return {...changeRoute}
        //     }) as IMenu[]
        //     return menu
        // }) as IMenu[]
    }
}

const useMenu = new Menu()

export default useMenu