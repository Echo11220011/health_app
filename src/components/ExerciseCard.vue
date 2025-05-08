<template>
  <view>
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
            <text class="stats-value">{{ exerciseData.calories.current }}</text>
            <text class="stats-unit">/ {{ exerciseData.calories.target }} 千卡</text>
          </view>
        </view>
      </view>
      
      <view class="stats-card heart-rate">
        <text class="stats-icon">❤️</text>
        <view class="stats-content">
          <text class="stats-label">心率</text>
          <view class="stats-value-container">
            <text class="stats-value">{{ exerciseData.heartRate }}</text>
            <text class="stats-unit">次/分</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 运动目标部分 -->
    <view class="section-title">
      <text>你的运动目标</text>
    </view>

    <!-- 目标列表 -->
    <view 
      v-for="(goal, index) in exerciseData.goals" 
      :key="index"
      class="goal-card"
      :class="goal.type"
    >
      <view class="goal-icon">{{ goal.icon }}</view>
      <view class="goal-details">
        <view class="goal-main">
          <text class="goal-title">{{ goal.title }}</text>
          <text class="goal-subtitle">{{ goal.subtitle }}</text>
        </view>
        <text class="goal-progress">{{ goal.progress }}</text>
      </view>
      <view class="goal-actions">
        <view 
          v-if="goal.displayType === 'percentage'" 
          class="goal-progress-circle" 
          :style="{ '--percent': `${goal.percent}%` }"
        >
          <text>{{ goal.percent }}%</text>
        </view>
        <view
          v-else-if="goal.displayType === 'count'"
          class="goal-progress-count"
        >
          <text>{{ goal.current }}/{{ goal.target }}</text>
        </view>
        <button 
          class="log-button" 
          :class="goal.buttonType || ''"
          @click="onActionClick(goal, index)"
        >{{ goal.buttonText }}</button>
      </view>
    </view>

    <!-- 添加运动目标按钮 -->
    <button class="add-goal-button" @click="onAddGoal">
      <text class="plus-icon">+</text>
      <text>添加运动目标</text>
    </button>
  </view>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  exerciseData: {
    type: Object,
    default: () => ({
      calories: {
        current: 450,
        target: 600
      },
      heartRate: 112,
      goals: [
        {
          type: 'steps',
          icon: '🚶',
          title: '10,000 步',
          subtitle: '每日步行目标',
          progress: '今日已走 7,500 步',
          displayType: 'percentage',
          percent: 75,
          buttonText: '记录活动',
          buttonType: ''
        },
        {
          type: 'strength',
          icon: '💪',
          title: '力量训练',
          subtitle: '每周 3 次',
          progress: '本周已完成 2 次',
          displayType: 'count',
          current: 2,
          target: 3,
          buttonText: '完成',
          buttonType: 'complete-button'
        },
        {
          type: 'swimming',
          icon: '🏊',
          title: '游泳',
          subtitle: '每周 2 次，每次 30 分钟',
          progress: '本周已完成 1 次',
          displayType: 'count',
          current: 1,
          target: 2,
          buttonText: '记录游泳',
          buttonType: ''
        }
      ]
    })
  }
});

const emit = defineEmits(['action-click', 'add-goal']);

const onActionClick = (goal, index) => {
  emit('action-click', { goal, index });
  // TODO: 根据不同类型的目标执行不同操作
};

const onAddGoal = () => {
  emit('add-goal');
  // TODO: 打开添加目标表单
};
</script>

<style scoped>
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

.log-button, .complete-button {
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

.plus-icon {
  font-size: 32rpx;
  font-weight: bold;
}
</style> 