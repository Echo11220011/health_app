<template>
  <view class="progress-page">
    <view class="header">
      <text class="header-title">进度追踪</text>
    </view>
    
    <view class="progress-content">
      <view class="progress-card">
        <text class="card-title">本周目标完成度</text>
        <view class="progress-bar">
          <view class="progress" :style="{ width: '75%' }"></view>
        </view>
        <view class="progress-stats">
          <view class="stat">
            <text class="number">75%</text>
            <text class="label">完成度</text>
          </view>
          <view class="stat">
            <text class="number">5/7</text>
            <text class="label">达标天数</text>
          </view>
        </view>
      </view>
      
      <view class="daily-progress">
        <text class="card-title">每日进度</text>
        <view class="day-list">
          <view v-for="day in 7" :key="day" class="day-item">
            <view class="day-circle" :class="{ completed: day <= 5 }">
              {{ ['一', '二', '三', '四', '五', '六', '日'][day-1] }}
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style>
.progress-page {
  padding: 40rpx;
}

.header {
  margin-bottom: 60rpx;
}

.header-title {
  font-size: 48rpx;
  font-weight: bold;
}

.card-title {
  font-size: 36rpx;
  font-weight: bold;
  display: block;
  margin-bottom: 30rpx;
}

.progress-card {
  background: white;
  border-radius: 24rpx;
  padding: 40rpx;
  margin-bottom: 40rpx;
  box-shadow: 0 4rpx 16rpx rgba(0,0,0,0.1);
}

.progress-bar {
  height: 16rpx;
  background: #eee;
  border-radius: 8rpx;
  margin: 30rpx 0;
}

.progress {
  height: 100%;
  background: #6654e0;
  border-radius: 8rpx;
  transition: width 0.3s ease;
}

.progress-stats {
  display: flex;
  justify-content: space-around;
  margin-top: 30rpx;
}

.stat {
  text-align: center;
}

.number {
  display: block;
  font-size: 48rpx;
  font-weight: bold;
  color: #6654e0;
}

.label {
  font-size: 28rpx;
  color: #666;
}

.daily-progress {
  background: white;
  border-radius: 24rpx;
  padding: 40rpx;
  box-shadow: 0 4rpx 16rpx rgba(0,0,0,0.1);
}

.day-list {
  display: flex;
  justify-content: space-between;
  margin-top: 30rpx;
}

.day-circle {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  border: 4rpx solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28rpx;
  color: #666;
}

.day-circle.completed {
  background: #6654e0;
  border-color: #6654e0;
  color: white;
}
</style> 