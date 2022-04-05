<script setup lang="ts">
import { ElMessage } from "element-plus"
// import SvgIcon from "@/components/SvgIcon.vue"
import { getCurrentInstance } from "vue"

const clickModal = () => {
  ElMessage("this is a message!")
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const { proxy } = getCurrentInstance()!
const sayHi = () => {
  proxy?.$message.success("恭喜你，这是一条成功信息")
  // proxy?.$ELEMENT // 这个能够自动提示，说明全局挂载成功
}
</script>
<template>
  <div>
    <h2>Dashboard page</h2>
    <el-button type="primary" @click="clickModal">点击弹框</el-button>
    <div>
      <svg-icon
        color="green"
        class-name="custom-class"
        icon-name="bug"
        @click="sayHi"
      />
      <svg-icon icon-name="chart" />
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
