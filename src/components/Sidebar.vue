<template>
  <el-menu default-active="dashboard" class="menu-style" router>
    <div class="brand">
      <el-image
        :src="iconUrl"
        style="width: 50px; height: 50px; margin-right: 10px"
        alt="图片资源加载失败"
      >
      </el-image>
      <div class="info-card">
        <h1 class="brand-title">心理健康AI助手</h1>
        <p class="brand-subtitle">管理后台</p>
      </div>
    </div>
    <el-menu-item
      @click="selectMenu"
      v-for="item in router.options.routes[1].children"
      :key="item.path"
      :index="item.path"
    >
      <el-icon><component :is="item.meta.icon"></component></el-icon>
      <span>{{ item.meta.title }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

// 选择菜单
const selectMenu = (key) => {
  const currentRoute = router.options.routes[0];
  router.push(`${currentRoute.redirect}/${key.index}`);
};

// logo图片路径
const iconUrl = new URL("@/assets/images/机器人.png", import.meta.url).href;
</script>

<style scoped lang="scss">
.menu-style {
  height: 100%;
  border-right: none; /* 去除默认侧边线 */

  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px 0;
    background-color: #ffffff;
    border-bottom: 1px solid rgba(47, 111, 163, 0.08); /* 柔和分割线 */
    margin-bottom: 12px;

    .info-card {
      .brand-title {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 4px;
        color: #17324a; /* 现代深蓝字色 */
        letter-spacing: 0.5px;
      }
      .brand-subtitle {
        font-size: 13px;
        color: #5f7890; /* 灰蓝副标题 */
      }
    }
  }

  :deep(.el-menu-item) {
    margin: 4px 16px;
    border-radius: 8px;
    color: #5f7890;
    height: 48px;
    line-height: 48px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
      background-color: #f8fbfe; /* 浅蓝悬停背景 */
      color: #2f6fa3; /* 主强调色 */
    }

    &.is-active {
      background-color: #edf4fa; /* 激活背景 */
      color: #2f6fa3;
      font-weight: 600;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        left: -16px; /* 紧贴左边缘 */
        top: 50%;
        transform: translateY(-50%);
        height: 24px;
        width: 4px;
        background-color: #2f6fa3;
        border-radius: 0 4px 4px 0;
      }
    }

    .el-icon {
      font-size: 18px;
      margin-right: 12px;
    }
  }
}
</style>
