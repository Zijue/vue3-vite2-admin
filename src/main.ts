import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
// 初始化css，重置css默认样式
import "normalize.css/normalize.css"
// 全局css
import "@/styles/index.scss"
import { createPinia } from "pinia"
import "virtual:svg-icons-register"
// element-plus
import installElementPlus from "@/plugins/element"

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(installElementPlus)
app.mount("#app")
