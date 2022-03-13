<script setup lang="ts">
import { useMainStore } from "@/store"
import { ElMessage } from "element-plus"
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
  </div>
</template>
