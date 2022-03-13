import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"
import Layout from "@/layout/index.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        meta: {
          title: "Dashboard"
        }
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
