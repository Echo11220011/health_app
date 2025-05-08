<template>
  <view>
    <!-- 今日营养 -->
    <view class="section-title">
      <text class="iconfont icon-food"></text>
      <text>今日营养</text>
    </view>

    <!-- 营养摄入卡片 -->
    <view class="nutrition-stats-row">
      <view 
        v-for="(item, index) in dietData.nutrition" 
        :key="index"
        class="nutrition-card"
      >
        <text class="nutrition-label">{{ item.label }}</text>
        <view class="nutrition-value-container">
          <text class="nutrition-value">{{ item.current }}</text>
          <text class="nutrition-target">/ {{ item.target }}</text>
        </view>
        <view class="nutrition-progress-bar" :class="item.type">
          <view class="nutrition-progress-fill" :style="{ width: `${item.percent}%` }"></view>
        </view>
      </view>
    </view>

    <!-- 营养目标部分 -->
    <view class="section-title">
      <text>你的营养目标</text>
    </view>

    <!-- 目标列表 -->
    <view 
      v-for="(goal, index) in dietData.goals" 
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
        <view v-if="goal.displayType === 'veg-count'">
          <view class="veg-count-container">
            <view 
              v-for="n in goal.total" 
              :key="n"
              class="veg-count-circle"
              :class="{ active: n <= goal.completed }"
            >{{ n }}</view>
          </view>
        </view>
        <view 
          v-else-if="goal.displayType === 'percentage'" 
          class="goal-progress-circle" 
          :style="{ '--percent': `${goal.percent}%`, '--color': goal.color }"
        >
          <text>{{ goal.percentText || `${goal.percent}%` }}</text>
        </view>
        <view 
          v-else-if="goal.displayType === 'check'"
          class="check-circle"
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

    <!-- 添加营养目标按钮 -->
    <button class="add-goal-button add-nutrition" @click="onAddGoal">
      <text class="plus-icon">+</text>
      <text>添加营养目标</text>
    </button>
  </view>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  dietData: {
    type: Object,
    default: () => ({
      nutrition: [
        {
          type: 'calories',
          label: '卡路里',
          current: '1,450',
          target: '2,000',
          percent: 72
        },
        {
          type: 'protein',
          label: '蛋白质',
          current: '85g',
          target: '120g',
          percent: 70
        },
        {
          type: 'water',
          label: '水分',
          current: '1.8L',
          target: '2.5L',
          percent: 72
        }
      ],
      goals: [
        {
          type: 'veggies',
          icon: '🥦',
          title: '5 份蔬菜',
          subtitle: '每日摄入',
          progress: '今日还需 2 份',
          displayType: 'veg-count',
          completed: 3,
          total: 5,
          buttonText: '记录饮食',
          buttonType: ''
        },
        {
          type: 'no-sugar',
          icon: '❌',
          title: '无加工糖',
          subtitle: '每日挑战',
          progress: '今日已完成',
          displayType: 'check',
          buttonText: '重置',
          buttonType: 'reset-button'
        },
        {
          type: 'water',
          icon: '💧',
          title: '2.5L 水',
          subtitle: '每日水分',
          progress: '今日已喝 1.8L',
          displayType: 'percentage',
          percent: 72,
          percentText: '72%',
          color: '#4a91ff',
          buttonText: '+250ml',
          buttonType: 'add-button'
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
/* 今日营养部分 */
.section-title {
  display: flex;
  align-items: center;
  gap: 10rpx;
  margin: 30rpx 0 20rpx;
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

.log-button, .add-button, .reset-button {
  background-color: #f0f0f2;
  color: #6654e0;
  font-size: 24rpx;
  border-radius: 30rpx;
  padding: 6rpx 20rpx;
  border: none;
}

.reset-button {
  background-color: #ffefef;
  color: #ff6b6b;
}

.add-button {
  background-color: #e7f3ff;
  color: #4a91ff;
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

.plus-icon {
  font-size: 32rpx;
  font-weight: bold;
}
</style> 