<template>
  <div class="tabs-nav">
    <router-link to="/" class="tab-item">
      <div class="tab-icon">🏠</div>
      <div class="tab-label">首页</div>
    </router-link>
    <router-link to="/progress" class="tab-item">
      <div class="tab-icon">📊</div>
      <div class="tab-label">进度</div>
    </router-link>
    <router-link to="/achievements" class="tab-item">
      <div class="tab-icon">🏆</div>
      <div class="tab-label">成就</div>
    </router-link>
    <router-link to="/profile" class="tab-item">
      <div class="tab-icon">👤</div>
      <div class="tab-label">我的</div>
    </router-link>
  </div>
</template>

<script setup>
// 不需要额外的逻辑
</script>

<style scoped>
.tabs-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #666;
  transition: color 0.3s;
  width: 25%;
}

.tab-icon {
  font-size: 1.5rem;
  margin-bottom: 4px;
}

.tab-label {
  font-size: 0.8rem;
}

.router-link-active {
  color: #4CAF50;
  font-weight: bold;
}
</style> 