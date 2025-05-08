<template>
  <div class="home">
    <h1>首页</h1>
    <div class="content">
      <div class="card">
        <h2>今日运动目标</h2>
        <div class="progress-circle">
          <div class="percentage">75%</div>
        </div>
        <button class="primary-button">开始运动</button>
      </div>
      
      <div class="card">
        <h2>活动建议</h2>
        <div class="activity-item">
          <div class="activity-icon">🏃</div>
          <div class="activity-info">
            <h3>慢跑</h3>
            <p>30分钟，消耗200卡路里</p>
          </div>
        </div>
        <div class="activity-item">
          <div class="activity-icon">🚴</div>
          <div class="activity-info">
            <h3>骑行</h3>
            <p>45分钟，消耗300卡路里</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <TabsNav />
</template>

<script setup>
import TabsNav from '../components/TabsNav.vue';
</script>

<style scoped>
.home {
  padding: 20px;
  padding-bottom: 70px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card h2 {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.2rem;
  color: #333;
}

.progress-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: conic-gradient(#4CAF50 0% 75%, #e0e0e0 75% 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  position: relative;
}

.progress-circle::before {
  content: '';
  position: absolute;
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 50%;
}

.percentage {
  position: relative;
  z-index: 1;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.primary-button {
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 12px 20px;
  width: 100%;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.primary-button:hover {
  background: #388E3C;
}

.activity-item {
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

.activity-item:last-child {
  border-bottom: none;
}

.activity-icon {
  font-size: 2rem;
  margin-right: 15px;
}

.activity-info h3 {
  margin: 0;
  font-size: 1rem;
}

.activity-info p {
  margin: 5px 0 0;
  color: #666;
  font-size: 0.9rem;
}
</style> 