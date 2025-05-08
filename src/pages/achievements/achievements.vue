<template>
  <view class="achievements-page">
    <view class="header">
      <text class="header-title">我的奖励</text>
    </view>
    
    <view class="achievements-content">
      <view class="achievement-card">
        <view class="achievement-icon">🏃</view>
        <view class="achievement-info">
          <text class="achievement-title">运动达人</text>
          <text class="achievement-desc">连续运动7天</text>
          <view class="progress-bar">
            <view class="progress" :style="{ width: (5/7*100) + '%' }"></view>
          </view>
          <text class="progress-text">5/7天</text>
        </view>
      </view>

      <view class="achievement-card">
        <view class="achievement-icon">🥗</view>
        <view class="achievement-info">
          <text class="achievement-title">健康饮食</text>
          <text class="achievement-desc">记录饮食30天</text>
          <view class="progress-bar">
            <view class="progress" :style="{ width: (15/30*100) + '%' }"></view>
          </view>
          <text class="progress-text">15/30天</text>
        </view>
      </view>

      <view class="achievement-card">
        <view class="achievement-icon">🧘</view>
        <view class="achievement-info">
          <text class="achievement-title">冥想大师</text>
          <text class="achievement-desc">完成10次冥想</text>
          <view class="progress-bar">
            <view class="progress" :style="{ width: (8/10*100) + '%' }"></view>
          </view>
          <text class="progress-text">8/10次</text>
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
.achievements-page {
  padding: 40rpx;
}

.header {
  margin-bottom: 60rpx;
}

.header-title {
  font-size: 48rpx;
  font-weight: bold;
}

.achievement-card {
  background: white;
  border-radius: 24rpx;
  padding: 40rpx;
  margin-bottom: 40rpx;
  box-shadow: 0 4rpx 16rpx rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
}

.achievement-icon {
  font-size: 64rpx;
  margin-right: 40rpx;
  background: #f5f5f7;
  width: 120rpx;
  height: 120rpx;
  border-radius: 60rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.achievement-info {
  flex: 1;
}

.achievement-title {
  font-size: 36rpx;
  margin-bottom: 10rpx;
  display: block;
  font-weight: bold;
}

.achievement-desc {
  color: #666;
  font-size: 28rpx;
  margin-bottom: 20rpx;
  display: block;
}

.progress-bar {
  height: 12rpx;
  background: #eee;
  border-radius: 6rpx;
  margin-bottom: 10rpx;
}

.progress {
  height: 100%;
  background: #6654e0;
  border-radius: 6rpx;
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 24rpx;
  color: #666;
  text-align: right;
  display: block;
}
</style> 