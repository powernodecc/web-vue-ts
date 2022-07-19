import 'vue-router'
import IMenu from "./menu";

declare module 'vue-router' {
    interface RouteMeta {
        menu?: IMenu
    }
}