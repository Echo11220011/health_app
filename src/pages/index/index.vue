<template>
  <view class="container">
    <!-- 顶部个人信息栏 -->
    <view class="header">
      <view class="user-avatar">
        <text class="iconfont icon-user"></text>
      </view>
      <text class="greeting">你好，用户！</text>
      <view class="icons">
        <text class="iconfont icon-notification"></text>
        <text class="iconfont icon-settings"></text>
      </view>
    </view>

    <!-- 健康旅程卡片 -->
    <view class="health-journey-card">
      <text class="card-title">你的健康旅程</text>
      
      <view class="stats-container">
        <view class="stat-item">
          <text class="stat-value">87%</text>
          <text class="stat-label">完成度</text>
        </view>
        
        <view class="stat-item">
          <text class="stat-value">24</text>
          <text class="stat-label">连续天数</text>
        </view>
        
        <view class="stat-item">
          <text class="stat-value">12</text>
          <text class="stat-label">目标数</text>
        </view>
      </view>
      
      <view class="progress-bar">
        <view class="progress-fill" style="width: 87%;"></view>
      </view>
    </view>

    <!-- 分类导航 -->
    <view class="tab-navigation">
      <view class="tab-item" :class="{ active: activeTab === 'exercise' }" @click="switchTab('exercise')">
        <text>运动</text>
      </view>
      <view class="tab-item" :class="{ active: activeTab === 'diet' }" @click="switchTab('diet')">
        <text>饮食</text>
      </view>
      <view class="tab-item" :class="{ active: activeTab === 'wellness' }" @click="switchTab('wellness')">
        <text>健康</text>
      </view>
    </view>

    <!-- 运动部分 -->
    <block v-if="activeTab === 'exercise'">
      <!-- 今日锻炼 -->
      <view class="section-title">
        <text class="iconfont icon-run"></text>
        <text>今日锻炼</text>
      </view>

      <!-- 卡路里和心率卡片 -->
      <view class="stats-row">
        <view class="stats-card calories">
          <text class="stats-icon">🔥</text>
          <view class="stats-content">
            <text class="stats-label">卡路里</text>
            <view class="stats-value-container">
              <text class="stats-value">450</text>
              <text class="stats-unit">/ 600 千卡</text>
            </view>
          </view>
        </view>
        
        <view class="stats-card heart-rate">
          <text class="stats-icon">❤️</text>
          <view class="stats-content">
            <text class="stats-label">心率</text>
            <view class="stats-value-container">
              <text class="stats-value">112</text>
              <text class="stats-unit">次/分</text>
            </view>
          </view>
        </view>
      </view>

      <!-- 运动目标部分 -->
      <view class="section-title">
        <text>你的运动目标</text>
      </view>

      <!-- 步数目标 -->
      <view class="goal-card steps">
        <view class="goal-icon">🚶</view>
        <view class="goal-details">
          <view class="goal-main">
            <text class="goal-title">10,000 步</text>
            <text class="goal-subtitle">每日步行目标</text>
          </view>
          <text class="goal-progress">今日已走 7,500 步</text>
        </view>
        <view class="goal-actions">
          <view class="goal-progress-circle" style="--percent: 75%;">
            <text>75%</text>
          </view>
          <button class="log-button">记录活动</button>
        </view>
      </view>

      <!-- 力量训练 -->
      <view class="goal-card strength">
        <view class="goal-icon">💪</view>
        <view class="goal-details">
          <view class="goal-main">
            <text class="goal-title">力量训练</text>
            <text class="goal-subtitle">每周 3 次</text>
          </view>
          <text class="goal-progress">本周已完成 2 次</text>
        </view>
        <view class="goal-actions">
          <view class="goal-progress-count">
            <text>2/3</text>
          </view>
          <button class="complete-button">完成</button>
        </view>
      </view>

      <!-- 游泳 -->
      <view class="goal-card swimming">
        <view class="goal-icon">🏊</view>
        <view class="goal-details">
          <view class="goal-main">
            <text class="goal-title">游泳</text>
            <text class="goal-subtitle">每周 2 次，每次 30 分钟</text>
          </view>
          <text class="goal-progress">本周已完成 1 次</text>
        </view>
        <view class="goal-actions">
          <view class="goal-progress-count">
            <text>1/2</text>
          </view>
          <button class="log-button">记录游泳</button>
        </view>
      </view>

      <!-- 添加运动目标按钮 -->
      <button class="add-goal-button">
        <text class="plus-icon">+</text>
        <text>添加运动目标</text>
      </button>
    </block>

    <!-- 饮食部分 -->
    <block v-if="activeTab === 'diet'">
      <!-- 今日营养 -->
      <view class="section-title">
        <text class="iconfont icon-food"></text>
        <text>今日营养</text>
      </view>

      <!-- 营养摄入卡片 -->
      <view class="nutrition-stats-row">
        <view class="nutrition-card">
          <text class="nutrition-label">卡路里</text>
          <view class="nutrition-value-container">
            <text class="nutrition-value">1,450</text>
            <text class="nutrition-target">/ 2,000</text>
          </view>
          <view class="nutrition-progress-bar calories">
            <view class="nutrition-progress-fill" style="width: 72%;"></view>
          </view>
        </view>
        
        <view class="nutrition-card">
          <text class="nutrition-label">蛋白质</text>
          <view class="nutrition-value-container">
            <text class="nutrition-value">85g</text>
            <text class="nutrition-target">/ 120g</text>
          </view>
          <view class="nutrition-progress-bar protein">
            <view class="nutrition-progress-fill" style="width: 70%;"></view>
          </view>
        </view>
        
        <view class="nutrition-card">
          <text class="nutrition-label">水分</text>
          <view class="nutrition-value-container">
            <text class="nutrition-value">1.8L</text>
            <text class="nutrition-target">/ 2.5L</text>
          </view>
          <view class="nutrition-progress-bar water">
            <view class="nutrition-progress-fill" style="width: 72%;"></view>
          </view>
        </view>
      </view>

      <!-- 营养目标部分 -->
      <view class="section-title">
        <text>你的营养目标</text>
      </view>

      <!-- 蔬菜摄入 -->
      <view class="goal-card veggies">
        <view class="goal-icon">🥦</view>
        <view class="goal-details">
          <view class="goal-main">
            <text class="goal-title">5 份蔬菜</text>
            <text class="goal-subtitle">每日摄入</text>
          </view>
          <text class="goal-progress">今日还需 2 份</text>
        </view>
        <view class="goal-actions">
          <view class="veg-count-container">
            <view class="veg-count-circle active">3</view>
            <view class="veg-count-circle active">2</view>
            <view class="veg-count-circle">0</view>
          </view>
          <button class="log-button">记录饮食</button>
        </view>
      </view>

      <!-- 无加工糖 -->
      <view class="goal-card no-sugar">
        <view class="goal-icon">❌</view>
        <view class="goal-details">
          <view class="goal-main">
            <text class="goal-title">无加工糖</text>
            <text class="goal-subtitle">每日挑战</text>
          </view>
          <text class="goal-progress">今日已完成</text>
        </view>
        <view class="goal-actions">
          <view class="check-circle">
            <text class="iconfont icon-check"></text>
          </view>
          <button class="reset-button">重置</button>
        </view>
      </view>

      <!-- 水分摄入 -->
      <view class="goal-card water">
        <view class="goal-icon">💧</view>
        <view class="goal-details">
          <view class="goal-main">
            <text class="goal-title">2.5L 水</text>
            <text class="goal-subtitle">每日水分</text>
          </view>
          <text class="goal-progress">今日已喝 1.8L</text>
        </view>
        <view class="goal-actions">
          <view class="goal-progress-circle" style="--percent: 72%;">
            <text>72%</text>
          </view>
          <button class="add-button">+250ml</button>
        </view>
      </view>

      <!-- 添加营养目标按钮 -->
      <button class="add-goal-button add-nutrition">
        <text class="plus-icon">+</text>
        <text>添加营养目标</text>
      </button>
    </block>

    <!-- 健康部分 -->
    <block v-if="activeTab === 'wellness'">
      <!-- 健康检查 -->
      <view class="section-title">
        <text class="iconfont icon-heart"></text>
        <text>心理健康检查</text>
      </view>

      <!-- 情绪问询 -->
      <view class="mood-question">
        <text>今天感觉如何？</text>
      </view>

      <!-- 情绪选择 -->
      <view class="mood-options">
        <view class="mood-option">
          <view class="mood-emoji stressed">
            <text>😣</text>
          </view>
          <text class="mood-label">压力大</text>
        </view>
        
        <view class="mood-option">
          <view class="mood-emoji neutral">
            <text>😐</text>
          </view>
          <text class="mood-label">一般</text>
        </view>
        
        <view class="mood-option">
          <view class="mood-emoji good">
            <text>😊</text>
          </view>
          <text class="mood-label">不错</text>
        </view>
        
        <view class="mood-option">
          <view class="mood-emoji great">
            <text>😄</text>
          </view>
          <text class="mood-label">很好</text>
        </view>
      </view>

      <!-- 健康目标部分 -->
      <view class="section-title">
        <text>你的健康目标</text>
      </view>

      <!-- 睡眠目标 -->
      <view class="goal-card sleep">
        <view class="goal-icon">🌙</view>
        <view class="goal-details">
          <view class="goal-main">
            <text class="goal-title">8 小时睡眠</text>
            <text class="goal-subtitle">每晚休息</text>
          </view>
          <text class="goal-progress">已完成目标的 75%</text>
        </view>
        <view class="goal-actions">
          <view class="goal-progress-circle" style="--percent: 75%; --color: #9370db;">
            <text>7.5h</text>
          </view>
          <button class="log-button sleep-log">记录睡眠</button>
        </view>
      </view>

      <!-- 冥想 -->
      <view class="goal-card meditation">
        <view class="goal-icon">🧘</view>
        <view class="goal-details">
          <view class="goal-main">
            <text class="goal-title">10 分钟冥想</text>
            <text class="goal-subtitle">每日专注</text>
          </view>
          <text class="goal-progress">今日已完成</text>
        </view>
        <view class="goal-actions">
          <view class="goal-complete-circle">
            <text class="iconfont icon-check"></text>
          </view>
          <button class="meditation-button">冥想</button>
        </view>
      </view>

      <!-- 阅读 -->
      <view class="goal-card reading">
        <view class="goal-icon">📚</view>
        <view class="goal-details">
          <view class="goal-main">
            <text class="goal-title">阅读 30 分钟</text>
            <text class="goal-subtitle">每日阅读</text>
          </view>
          <text class="goal-progress">已完成 50%</text>
        </view>
        <view class="goal-actions">
          <view class="goal-progress-circle" style="--percent: 50%; --color: #32cd32;">
            <text>15m</text>
          </view>
          <button class="log-button reading-log">记录阅读</button>
        </view>
      </view>

      <!-- 添加健康目标按钮 -->
      <button class="add-goal-button add-wellness">
        <text class="plus-icon">+</text>
        <text>添加健康目标</text>
      </button>
    </block>
  </view>
</template>

<script setup>
import { ref } from 'vue';

// 活动标签状态
const activeTab = ref('wellness');

// 切换标签方法
const switchTab = (tab) => {
  activeTab.value = tab;
};
</script>

<style>
.container {
  padding: 30rpx;
  background-color: #f5f5f7;
  min-height: 100vh;
}

/* 顶部个人信息栏 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30rpx;
}

.user-avatar {
  width: 80rpx;
  height: 80rpx;
  background-color: #e0e0e5;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.greeting {
  font-size: 32rpx;
  font-weight: bold;
}

.icons {
  display: flex;
  gap: 20rpx;
}

/* 健康旅程卡片 */
.health-journey-card {
  background-color: #6654e0;
  border-radius: 30rpx;
  padding: 40rpx;
  color: white;
  margin-bottom: 30rpx;
}

.card-title {
  font-size: 36rpx;
  font-weight: bold;
  margin-bottom: 30rpx;
}

.stats-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30rpx;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 48rpx;
  font-weight: bold;
}

.stat-label {
  font-size: 24rpx;
  opacity: 0.8;
}

.progress-bar {
  height: 10rpx;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10rpx;
}

.progress-fill {
  height: 100%;
  background-color: white;
  border-radius: 10rpx;
}

/* 分类导航 */
.tab-navigation {
  display: flex;
  justify-content: space-around;
  margin-bottom: 30rpx;
  border-bottom: 2rpx solid #e0e0e5;
}

.tab-item {
  padding: 20rpx 10rpx;
  font-size: 28rpx;
  position: relative;
}

.tab-item.active {
  color: #6654e0;
  font-weight: bold;
}

.tab-item.active::after {
  content: '';
  position: absolute;
  bottom: -2rpx;
  left: 0;
  width: 100%;
  height: 4rpx;
  background-color: #6654e0;
  border-radius: 4rpx;
}

/* 今日锻炼部分 */
.section-title {
  display: flex;
  align-items: center;
  gap: 10rpx;
  margin: 30rpx 0 20rpx;
  font-size: 32rpx;
  font-weight: bold;
}

/* 卡路里和心率卡片 */
.stats-row {
  display: flex;
  gap: 20rpx;
  margin-bottom: 30rpx;
}

.stats-card {
  flex: 1;
  background-color: white;
  border-radius: 20rpx;
  padding: 20rpx;
  display: flex;
  align-items: center;
  gap: 20rpx;
}

.stats-icon {
  font-size: 48rpx;
}

.stats-content {
  display: flex;
  flex-direction: column;
}

.stats-label {
  font-size: 24rpx;
  color: #8f8f94;
}

.stats-value-container {
  display: flex;
  align-items: baseline;
}

.stats-value {
  font-size: 32rpx;
  font-weight: bold;
}

.stats-unit {
  font-size: 24rpx;
  color: #8f8f94;
  margin-left: 4rpx;
}

/* 运动目标卡片 */
.goal-card {
  background-color: white;
  border-radius: 20rpx;
  padding: 30rpx;
  margin-bottom: 20rpx;
  display: flex;
  align-items: center;
}

.goal-icon {
  font-size: 48rpx;
  margin-right: 20rpx;
}

.goal-details {
  flex: 1;
}

.goal-main {
  margin-bottom: 10rpx;
}

.goal-title {
  font-size: 32rpx;
  font-weight: bold;
}

.goal-subtitle {
  font-size: 24rpx;
  color: #8f8f94;
}

.goal-progress {
  font-size: 24rpx;
  color: #8f8f94;
}

.goal-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rpx;
}

.goal-progress-circle {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  background: conic-gradient(var(--color, #6654e0) 0% var(--percent), #e0e0e5 var(--percent) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24rpx;
  font-weight: bold;
  color: var(--color, #6654e0);
  position: relative;
}

.goal-progress-circle::before {
  content: '';
  position: absolute;
  width: 60rpx;
  height: 60rpx;
  border-radius: 50%;
  background-color: white;
}

.goal-progress-circle text {
  position: relative;
  z-index: 1;
}

.goal-progress-count {
  width: 60rpx;
  height: 60rpx;
  border-radius: 50%;
  background-color: #e7e4f9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24rpx;
  font-weight: bold;
  color: #6654e0;
}

.log-button, .complete-button, .reset-button, .add-button, .meditation-button {
  background-color: #f0f0f2;
  color: #6654e0;
  font-size: 24rpx;
  border-radius: 30rpx;
  padding: 6rpx 20rpx;
  border: none;
}

.complete-button {
  background-color: #e7e4f9;
}

.reset-button {
  background-color: #ffefef;
  color: #ff6b6b;
}

.add-button {
  background-color: #e7f3ff;
  color: #4a91ff;
}

.sleep-log {
  background-color: #f2e6ff;
  color: #9370db;
}

.meditation-button {
  background-color: #e6f0ff;
  color: #4a91ff;
}

.reading-log {
  background-color: #e6ffe6;
  color: #32cd32;
}

/* 添加目标按钮 */
.add-goal-button {
  background-color: #f0f0f2;
  border: none;
  border-radius: 20rpx;
  padding: 30rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rpx;
  width: 100%;
  margin: 30rpx 0;
  color: #6654e0;
  font-weight: bold;
}

.add-nutrition {
  background-color: #fff5e6;
  color: #ffa500;
}

.add-wellness {
  background-color: #ffe6f0;
  color: #ff69b4;
}

.plus-icon {
  font-size: 32rpx;
  font-weight: bold;
}

/* 营养部分 */
.nutrition-stats-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30rpx;
}

.nutrition-card {
  flex: 1;
  background-color: white;
  border-radius: 20rpx;
  padding: 20rpx;
  margin: 0 5rpx;
}

.nutrition-label {
  font-size: 24rpx;
  color: #8f8f94;
  margin-bottom: 10rpx;
}

.nutrition-value-container {
  display: flex;
  align-items: baseline;
  margin-bottom: 10rpx;
}

.nutrition-value {
  font-size: 32rpx;
  font-weight: bold;
}

.nutrition-target {
  font-size: 24rpx;
  color: #8f8f94;
  margin-left: 4rpx;
}

.nutrition-progress-bar {
  height: 6rpx;
  border-radius: 6rpx;
  background-color: #f0f0f2;
}

.nutrition-progress-fill {
  height: 100%;
  border-radius: 6rpx;
}

.nutrition-progress-bar.calories .nutrition-progress-fill {
  background-color: #ffa500;
}

.nutrition-progress-bar.protein .nutrition-progress-fill {
  background-color: #4cd964;
}

.nutrition-progress-bar.water .nutrition-progress-fill {
  background-color: #4a91ff;
}

/* 蔬菜计数 */
.veg-count-container {
  display: flex;
  gap: 5rpx;
}

.veg-count-circle {
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
  background-color: #f0f0f2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20rpx;
  color: #8f8f94;
}

.veg-count-circle.active {
  background-color: #4cd964;
  color: white;
}

/* 检查标记 */
.check-circle {
  width: 60rpx;
  height: 60rpx;
  border-radius: 50%;
  background-color: #ffefef;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32rpx;
  color: #ff6b6b;
}

.goal-complete-circle {
  width: 60rpx;
  height: 60rpx;
  border-radius: 50%;
  background-color: #e6f0ff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32rpx;
  color: #4a91ff;
}

.icon-check:before {
  content: "\e70c";
}

.icon-food:before {
  content: "\e7ee";
}

.icon-heart:before {
  content: "\e7df";
}

/* 情绪问询 */
.mood-question {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 20rpx;
}

/* 情绪选择 */
.mood-options {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30rpx;
}

.mood-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rpx;
}

.mood-emoji {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40rpx;
}

.mood-emoji.stressed {
  background-color: #ffefef;
}

.mood-emoji.neutral {
  background-color: #fff9e6;
}

.mood-emoji.good {
  background-color: #e6ffe6;
}

.mood-emoji.great {
  background-color: #e6f0ff;
}

.mood-label {
  font-size: 24rpx;
  color: #666;
}

/* 空状态 */
.empty-state {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300rpx;
  background-color: white;
  border-radius: 20rpx;
  margin: 30rpx 0;
  color: #8f8f94;
}
</style>
