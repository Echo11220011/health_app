<template>
  <view class="health-journey-card">
    <text class="card-title">{{ title }}</text>
    
    <view class="stats-container">
      <view class="stat-item" v-for="(stat, index) in stats" :key="index">
        <text class="stat-value">{{ stat.value }}</text>
        <text class="stat-label">{{ stat.label }}</text>
      </view>
    </view>
    
    <view class="progress-bar">
      <view class="progress-fill" :style="{ width: completionRate }"></view>
    </view>
  </view>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '你的健康旅程'
  },
  stats: {
    type: Array,
    default: () => [
      { value: '87%', label: '完成度' },
      { value: '24', label: '连续天数' },
      { value: '12', label: '目标数' }
    ]
  },
  completion: {
    type: Number,
    default: 87
  }
});

const completionRate = computed(() => {
  return `${props.completion}%`;
});
</script>

<style scoped>
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
</style> 