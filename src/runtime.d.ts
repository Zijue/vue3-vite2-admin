// 挂载到vue实例上
import { ElMessageBox, ElMessage, ElNotification } from "element-plus"
import SvgIcon from "./components/SvgIcon.vue"
import { Size } from "./plugins/element"

// vue实例上挂载属性类型声明
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $message: typeof ElMessage
    $notify: typeof ElNotification
    $confirm: typeof ElMessageBox.confirm
    $alert: typeof ElMessageBox.alert
    $prompt: typeof ElMessageBox.prompt
    $ELEMENT: {
      size: Size
    }
  }
  interface GlobalComponents {
    "svg-icon": typeof SvgIcon // 给全局引入的SvgIcon组件添加代码提示
  }
}
