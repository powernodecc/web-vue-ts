import {createApp} from 'vue'
import App from './App.vue'
import {setupRouter} from "./router";
import setupPlugins from "./plugins";
import "@fortawesome/fontawesome-free/css/all.css"

function bootstrap() {
    const app = createApp(App)
    setupPlugins(app)
    setupRouter(app)

    app.mount("#app")
}

bootstrap()
