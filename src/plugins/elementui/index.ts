import {App} from "vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

export default function setupElementPlus(app:App){
    app.use(ElementPlus)
}