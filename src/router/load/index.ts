import {RouteRecordRaw} from "vue-router";
import viteEnv from "@/utils/viteEnv";
import autoloadRoutes from "@/router/load/autoloadRoutes";
import loadModuleRoutes from "@/router/load/loadModuleRoutes";

let loadRoutes: RouteRecordRaw[] = []

viteEnv.VITE_AUTO_OR_MODULE_ROUTE === true ? loadRoutes = autoloadRoutes() : loadRoutes = loadModuleRoutes()

export default loadRoutes