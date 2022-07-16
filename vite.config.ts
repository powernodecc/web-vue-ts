import {defineConfig} from 'vite'
import setupVitePlugins from "./vite/plugins";
import alias from "./vite/alias";

export default defineConfig(({command, mode}) => {
    const isBuild: boolean = command === 'build'
    return {
        plugins: setupVitePlugins(isBuild),
        resolve: {
            alias
        },
    }
})
