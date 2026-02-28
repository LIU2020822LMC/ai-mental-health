<template>
  <el-menu
      default-active="dashboard"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      router
  >
    <el-menu-item v-for="item in router.options.routes[1].children" :key="item.path" :index="item.path">
      <el-icon><component :is="item.meta.icon"></component></el-icon>
      <span>{{ item.meta.title }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter();
const handleOpen = () => {

}

const handleClose = () => {}
</script>

<style scoped lang="scss">

</style>