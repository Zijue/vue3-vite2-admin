import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
// 初始化css，重置css默认样式
import "normalize.css/normalize.css"
// 全局css
import "@/styles/index.scss"
import { createPinia } from "pinia"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import "virtual:svg-icons-register"

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount("#app")
