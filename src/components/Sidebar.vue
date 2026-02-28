<template>
  <el-menu
      default-active="dashboard"
      class="menu-style"
      router
  >
    <div class="brand">
      <el-image
          :src="iconUrl"
          style="width: 50px;height: 50px;margin-right: 10px"
          alt="图片资源加载失败">
      </el-image>
      <div class="info-card">
        <h1 class="brand-title">心理健康AI助手</h1>
        <p class="brand-subtitle">管理后台</p>
      </div>
    </div>
    <el-menu-item @click="selectMenu" v-for="item in router.options.routes[1].children" :key="item.path" :index="item.path">
      <el-icon><component :is="item.meta.icon"></component></el-icon>
      <span>{{ item.meta.title }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import {useRouter} from "vue-router";


const router = useRouter();

// 选择菜单
const selectMenu =(key) => {
  const currentRoute = router.options.routes[0]
  router.push(`${currentRoute.redirect}/${key.index}`)
}

// logo图片路径
const iconUrl = new URL('@/assets/images/机器人.png', import.meta.url).href;


</script>

<style scoped lang="scss">
.menu-style {
  height: 100%;
  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-bottom: 1px solid #e5e7eb;
    .info-card {
      .brand-title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 5px;
        color: #1f2973;
      }
      .brand-subtitle {
        font-size: 14px;
        color: #6b7280;
      }
    }
  }
}

</style>