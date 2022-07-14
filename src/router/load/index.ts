import {RouteRecordRaw} from "vue-router";
import viteEnv from "@/utils/viteEnv";
import autoloadRoutes from "@/router/load/autoloadRoutes";

let loadRoutes: RouteRecordRaw[] = []

viteEnv.VITE_AUTO_OR_MODULE_ROUTE === true ? loadRoutes = autoloadRoutes() : []

export default loadRoutes