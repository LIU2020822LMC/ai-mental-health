<template>
  <div class="backend-layout">
    <el-container class="main-container">
      <el-aside width="250px">
        <Sidebar></Sidebar>
      </el-aside>
      <el-container>
        <el-header>
          <Navbar></Navbar>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<style scoped lang="scss">
.backend-layout {
  height: 100vh;
  background-color: #f4f8fc; /* 海洋蓝极简背景 */

  .main-container {
    height: 100%;
  }

  :deep(.el-header) {
    padding: 0;
    height: 64px;
  }

  :deep(.el-main) {
    background-color: #ffffff;
    margin: 16px;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(47, 111, 163, 0.04); /* 清透阴影 */
    padding: 24px;
    overflow-x: hidden;
  }

  :deep(.el-aside) {
    background-color: #ffffff;
    box-shadow: 2px 0 8px rgba(47, 111, 163, 0.03);
    z-index: 10;
  }
}
</style>
