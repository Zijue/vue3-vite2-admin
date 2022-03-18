import { App } from "vue"
import * as ElIconModules from "@element-plus/icons-vue"

export default (app: App) => {
  Object.keys(ElIconModules).forEach((key) => {
    // 使用TS，当数组下标为字符串时，会报错
    // 解决办法：在tsconfig.json内添加如下规则："suppressImplicitAnyIndexErrors": true
    app.component(key, ElIconModules[key])
  })
}
