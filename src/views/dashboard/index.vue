<script setup lang="ts">
import { useMainStore } from "@/store"
import { ElMessage } from "element-plus"
import SvgIcon from "@/components/SvgIcon.vue"
import { getCurrentInstance } from "vue"

const mainStore = useMainStore()
const add = () => {
  //适合多字段改变
  mainStore.$patch({
    firstName: "张",
    lastName: "三",
    count: mainStore.count + 1
  })
}
const add2 = () => {
  mainStore.$patch((state) => ({
    firstName: "李",
    lastName: "四",
    count: mainStore.count + 2
  }))
}
const clickModal = () => {
  ElMessage("this is a message!")
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const { proxy } = getCurrentInstance()!
const sayHi = () => {
  proxy?.$message.success("恭喜你，这是一条成功信息")
}
</script>
<template>
  <div>
    <h2>Dashboard page</h2>
    <p>name: {{ mainStore.name }}</p>
    <p>count: {{ mainStore.count }}</p>
    <button @click="mainStore.count++">mainStore.count++</button>
    <button @click="add()">add()</button>
    <button @click="mainStore.addAmount(3)">mainStore.addAmount(3)</button>
    <el-button type="primary" @click="clickModal">点击弹框</el-button>
    <div>
      <SvgIcon
        color="green"
        class-name="custom-class"
        name="bug"
        @click="sayHi"
      />
      <SvgIcon name="chart" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.custom-class {
  // 自定义样式bug
  font-size: 200px;
  /* color: green; */
}
</style>
