import {createApp} from 'vue'
import App from './App.vue'
import router, {setupRouter} from "./router";
import setupPlugins from "./plugins";
import "@fortawesome/fontawesome-free/css/all.css"

async function bootstrap() {
    const app = createApp(App)
    setupPlugins(app)
    setupRouter(app)

    await router.isReady()
    app.mount("#app")
}

bootstrap()
