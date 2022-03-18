import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
// 初始化css，重置css默认样式
import "normalize.css/normalize.css"
// 全局css
import "@/styles/index.scss"
import { createPinia } from "pinia"
// element-plus
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
// element-plus官方提供了工具，只需要配置即可实现全局挂载及按需导入，所以下面这部分不需要
// import installElementPlus from "@/plugins/element"
import initElementIcons from "@/plugins/element-icon"
// SvgIcon全局导入
import initSvgIcon from "@/plugins/svgIcon"

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ElementPlus, { size: "medium", zIndex: 2000 })
app.use(initElementIcons)
app.use(initSvgIcon)
app.mount("#app")
