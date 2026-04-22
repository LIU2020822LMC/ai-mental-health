<template>
  <div class="navbar">
    <div class="flex-box">
      <el-button>
        <el-icon><Expand /></el-icon>
      </el-button>
      <p class="page-title">导航栏</p>
    </div>
    <div class="flex-box">
      <el-dropdown @command="handleCommand">
        <div class="flex-box">
          <el-avatar
            src="https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"
          />
          <p class="user-name">admin</p>
          <el-icon><ArrowDown /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const handleCommand = (command) => {
  if (command === "logout") {
    // 处理退出登录逻辑
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background: #ffffff;
  box-shadow: 0 1px 8px rgba(47, 111, 163, 0.03); /* 清透底部阴影 */
  border-bottom: 1px solid rgba(47, 111, 163, 0.08);

  .flex-box {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :deep(.el-button) {
    border: none;
    background: transparent;
    font-size: 20px;
    color: #5f7890;
    padding: 8px;
    transition: all 0.3s ease;

    &:hover {
      color: #2f6fa3;
      background-color: #f8fbfe;
      border-radius: 8px;
    }
  }

  .page-title {
    margin-left: 16px;
    font-size: 18px; /* 克制的字号 */
    font-weight: 600;
    color: #17324a;
    letter-spacing: 0.5px;
  }

  .user-name {
    margin: 0 12px;
    font-size: 14px;
    font-weight: 500;
    color: #17324a;
    cursor: pointer;
    transition: color 0.3s;
  }

  :deep(.el-dropdown) {
    cursor: pointer;
    display: flex;
    align-items: center;

    .el-icon {
      color: #5f7890;
      transition: color 0.3s;
    }

    &:hover {
      .user-name,
      .el-icon {
        color: #2f6fa3; /* 悬停激活深蓝 */
      }
    }
  }
}
</style>
