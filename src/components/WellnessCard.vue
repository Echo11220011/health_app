<template>
  <view>
    <!-- 健康检查 -->
    <view class="section-title">
      <text class="iconfont icon-heart"></text>
      <text>心理健康检查</text>
    </view>

    <!-- 情绪问询 -->
    <view class="mood-question">
      <text>{{ wellnessData.moodQuestion }}</text>
    </view>

    <!-- 情绪选择 -->
    <view class="mood-options">
      <view 
        v-for="(mood, index) in wellnessData.moods" 
        :key="index"
        class="mood-option"
        @click="onMoodSelect(mood)"
      >
        <view class="mood-emoji" :class="mood.type">
          <text>{{ mood.emoji }}</text>
        </view>
        <text class="mood-label">{{ mood.label }}</text>
      </view>
    </view>

    <!-- 健康目标部分 -->
    <view class="section-title">
      <text>你的健康目标</text>
    </view>

    <!-- 目标列表 -->
    <view 
      v-for="(goal, index) in wellnessData.goals" 
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
          :style="{ '--percent': `${goal.percent}%`, '--color': goal.color }"
        >
          <text>{{ goal.percentText }}</text>
        </view>
        <view
          v-else-if="goal.displayType === 'complete'"
          class="goal-complete-circle"
        >
          <text class="iconfont icon-check"></text>
        </view>
        <button 
          class="log-button" 
          :class="goal.buttonType || ''"
          @click="onActionClick(goal, index)"
        >{{ goal.buttonText }}</button>
      </view>
    </view>

    <!-- 添加健康目标按钮 -->
    <button class="add-goal-button add-wellness" @click="onAddGoal">
      <text class="plus-icon">+</text>
      <text>添加健康目标</text>
    </button>
  </view>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  wellnessData: {
    type: Object,
    default: () => ({
      moodQuestion: '今天感觉如何？',
      selectedMood: null,
      moods: [
        {
          type: 'stressed',
          emoji: '😣',
          label: '压力大',
          value: 1
        },
        {
          type: 'neutral',
          emoji: '😐',
          label: '一般',
          value: 2
        },
        {
          type: 'good',
          emoji: '😊',
          label: '不错',
          value: 3
        },
        {
          type: 'great',
          emoji: '😄',
          label: '很好',
          value: 4
        }
      ],
      goals: [
        {
          type: 'sleep',
          icon: '🌙',
          title: '8 小时睡眠',
          subtitle: '每晚休息',
          progress: '已完成目标的 75%',
          displayType: 'percentage',
          percent: 75,
          percentText: '7.5h',
          color: '#9370db',
          buttonText: '记录睡眠',
          buttonType: 'sleep-log'
        },
        {
          type: 'meditation',
          icon: '🧘',
          title: '10 分钟冥想',
          subtitle: '每日专注',
          progress: '今日已完成',
          displayType: 'complete',
          buttonText: '冥想',
          buttonType: 'meditation-button'
        },
        {
          type: 'reading',
          icon: '📚',
          title: '阅读 30 分钟',
          subtitle: '每日阅读',
          progress: '已完成 50%',
          displayType: 'percentage',
          percent: 50,
          percentText: '15m',
          color: '#32cd32',
          buttonText: '记录阅读',
          buttonType: 'reading-log'
        }
      ]
    })
  }
});

const emit = defineEmits(['mood-select', 'action-click', 'add-goal']);

const onMoodSelect = (mood) => {
  emit('mood-select', mood);
  // TODO: 更新用户情绪状态
};

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
/* 健康检查部分 */
.section-title {
  display: flex;
  align-items: center;
  gap: 10rpx;
  margin: 30rpx 0 20rpx;
  font-size: 32rpx;
  font-weight: bold;
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

/* 健康目标卡片 */
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

.log-button, .sleep-log, .meditation-button, .reading-log {
  background-color: #f0f0f2;
  color: #6654e0;
  font-size: 24rpx;
  border-radius: 30rpx;
  padding: 6rpx 20rpx;
  border: none;
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

.add-wellness {
  background-color: #ffe6f0;
  color: #ff69b4;
}

.plus-icon {
  font-size: 32rpx;
  font-weight: bold;
}
</style> 