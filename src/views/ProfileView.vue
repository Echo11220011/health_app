<template>
  <div class="profile">
    <div class="profile-header">
      <div class="user-avatar">
        <img src="https://via.placeholder.com/100" alt="用户头像" />
      </div>
      <h2 class="user-name">张小健</h2>
      <div class="user-level">
        <span class="level-badge">Lv.5</span>
        <span class="level-title">健康达人</span>
      </div>
    </div>
    
    <div class="stats-card">
      <div class="stat-item">
        <div class="stat-value">120</div>
        <div class="stat-label">连续打卡</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">24</div>
        <div class="stat-label">解锁成就</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">3800</div>
        <div class="stat-label">积分</div>
      </div>
    </div>
    
    <div class="menu-section">
      <div class="menu-item" @click="goToPage('personal-data')">
        <div class="menu-icon">📊</div>
        <div class="menu-label">健康数据</div>
        <div class="menu-arrow">›</div>
      </div>
      <div class="menu-item" @click="goToPage('settings')">
        <div class="menu-icon">⚙️</div>
        <div class="menu-label">设置</div>
        <div class="menu-arrow">›</div>
      </div>
      <div class="menu-item" @click="goToPage('notifications')">
        <div class="menu-icon">🔔</div>
        <div class="menu-label">通知</div>
        <div class="menu-arrow">›</div>
      </div>
      <div class="menu-item" @click="goToPage('help')">
        <div class="menu-icon">❓</div>
        <div class="menu-label">帮助与反馈</div>
        <div class="menu-arrow">›</div>
      </div>
    </div>
    
    <button class="logout-button" @click="logout">退出登录</button>
  </div>
  <TabsNav />
</template>

<script setup>
import TabsNav from '../components/TabsNav.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToPage = (page) => {
  console.log(`导航到 ${page} 页面`);
  // TODO: 实现页面导航
};

const logout = () => {
  console.log('退出登录');
  // TODO: 实现退出登录功能
  // 重定向到登录页
  router.push('/login');
};
</script>

<style scoped>
.profile {
  padding: 20px;
  padding-bottom: 70px;
}

.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 20px;
}

.user-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 15px;
  border: 3px solid #4CAF50;
}

.user-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-name {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.user-level {
  display: flex;
  align-items: center;
}

.level-badge {
  background-color: #4CAF50;
  color: white;
  font-size: 0.8rem;
  padding: 2px 6px;
  border-radius: 4px;
  margin-right: 8px;
}

.level-title {
  color: #666;
  font-size: 0.9rem;
}

.stats-card {
  background: white;
  border-radius: 12px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.stat-value {
  font-size: 1.3rem;
  font-weight: bold;
  color: #4CAF50;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.8rem;
  color: #666;
}

.menu-section {
  background: white;
  border-radius: 12px;
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}

.menu-item:last-child {
  border-bottom: none;
}

.menu-icon {
  font-size: 1.5rem;
  margin-right: 15px;
  width: 24px;
  text-align: center;
}

.menu-label {
  flex: 1;
  font-size: 1rem;
  color: #333;
}

.menu-arrow {
  color: #999;
  font-size: 1.5rem;
}

.logout-button {
  width: 100%;
  background-color: #f5f5f5;
  color: #ff6b6b;
  border: none;
  border-radius: 12px;
  padding: 15px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.logout-button:hover {
  background-color: #ffefef;
}
</style> 