import {defineConfig} from 'vite'
import setupVitePlugins from "./vite/plugins";
import alias from "./vite/alias";

export default defineConfig(({command, mode}) => {
    return {
        plugins: setupVitePlugins(),
        resolve:{
            alias
        }
    }
})
