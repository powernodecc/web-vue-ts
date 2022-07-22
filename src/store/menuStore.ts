import {defineStore} from "pinia";
import IMenu, {Menu} from "../../types/menu";
import router from "@/router";


const menuStore = defineStore('menuStore', {
    state: () => {
        return {
            menus: [] as IMenu[],
            isClick: ref<boolean>()
        }
    },
    actions: {
        init() {
            this.getMenuByRoute()
        },
        getMenuByRoute() {
            this.menus = router.getRoutes()
                .filter(originRoute => originRoute.meta.menu !== undefined && originRoute.children.length > 0)
                .map(route => {
                    let menu: IMenu = route.meta.menu as IMenu
                    menu.children = route.children.filter(route => route.meta?.menu !== undefined).map(route => {
                        return {...route.meta?.menu, route: route.name}
                    }) as IMenu[]
                    return menu
                }).filter(route => route.children?.length)
        },
        resetMenu(menu: IMenu) {
            this.menus.forEach(menu => {
                menu.isClick = false
                menu.children?.forEach(menu => {
                    menu.isClick = false
                })
            })
        },
        toggleMenu(menu: IMenu, _menu: Menu) {
            if (menu.isClick === true && _menu === null) {
                menu.isClick = false
            } else {
                this.resetMenu(menu)
                menu.isClick = true
                if (_menu !== null) {
                    _menu.isClick = true
                }
            }
        }
    }
})

export default menuStore