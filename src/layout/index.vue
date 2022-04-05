<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <Sidebar />
    </div>
    <div class="main-container">
      <div class="header">
        <Navbar />
        <div class="tags-view">tagsview</div>
      </div>
      <app-main />
    </div>
  </div>
</template>
<script setup lang="ts">
import Sidebar from "@/components/Sidebar/index.vue"
import AppMain from "@/components/AppMain/index.vue"
import Navbar from "@/components/Navbar/index.vue"
</script>
<style lang="scss" scoped>
.app-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  .main-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    .header {
      background: cyan;
      .navbar {
        height: 50px;
        background: #1890ff;
      }
      .tags-view {
        height: 34px;
        background: #12efff;
      }
    }
    .app-main {
      /**navbar 50px  tags-view 34px */
      min-height: calc(100vh - 84px);
      background: red;
    }
  }
}
</style>
