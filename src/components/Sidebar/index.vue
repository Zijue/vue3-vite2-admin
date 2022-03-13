<template>
  <div>
    <!--测试展开收起-->
    <h5 @click="isCollapse = !isCollapse">展收测试</h5>
    <el-menu
      class="sidebar-container-menu"
      mode="vertical"
      :default-active="activeMenu"
      :background-color="scssVariables.menuBg"
      :text-color="scssVariables.menuText"
      :active-text-color="scssVariables.menuActiveText"
      :collapse="isCollapse"
      :collapse-transition="true"
    >
      <sidebar-item
        v-for="route in menuRoutes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue"
import { useRoute } from "vue-router"
// 导入scss变量在组件中使用
import variables from "@/styles/variables.scss"
// 导入路由表
import { routes } from "@/router"
// el-menu-item封装
import SidebarItem from "./SidebarItem.vue"

export default defineComponent({
  name: "Sidebar",
  components: {
    SidebarItem
  },
  setup() {
    const route = useRoute() // 等价于 this.$route
    // 根据路由路径 对应 当前激活的菜单
    const activeMenu = computed(() => {
      const { path } = route
      return path
    })
    // scss变量
    const scssVariables = computed(() => variables)
    // 展开收起状态 稍后放store
    const isCollapse = ref(false)
    // 渲染路由
    const menuRoutes = computed(() => routes)
    return {
      scssVariables,
      isCollapse,
      activeMenu,
      menuRoutes
    }
  }
})
</script>
