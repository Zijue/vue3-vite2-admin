import { App } from "vue"
import SvgIcon from "@/components/SvgIcon.vue"

// 使用require.context 加载./svg目录下所有svg文件
//const files = import.meta.globEager<any>("./svg/*.svg")
import "virtual:svg-icons-register"
export default (app: App) => {
  // 全局注册svg-icon组件
  // eslint-disable-next-line vue/component-definition-name-casing
  app.component("svg-icon", SvgIcon)
}
