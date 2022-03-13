import { createApp } from "vue"
import App from "./App.vue"
import "./global.css" // 全局样式，直接引入即可

const app = createApp(App)
app.mount("#app")
