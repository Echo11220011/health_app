<template>
  <view class="container">
    <!-- 页面标题 -->
    <view class="header">
      <text class="header-title">目标进度</text>
      <text class="header-subtitle">{{ formatDate(new Date()) }}</text>
    </view>
    
    <!-- 总体进度 -->
    <view class="progress-overview">
      <view class="progress-circle-container">
        <view class="progress-circle" :style="{ '--percent': `${overallProgress}%` }">
          <text class="progress-circle-text">{{ overallProgress }}%</text>
        </view>
      </view>
      <view class="progress-stats">
        <view class="progress-stat">
          <text class="progress-stat-value">{{ completedGoals }}</text>
          <text class="progress-stat-label">已完成</text>
        </view>
        <view class="progress-stat">
          <text class="progress-stat-value">{{ totalGoals }}</text>
          <text class="progress-stat-label">总目标</text>
        </view>
      </view>
    </view>
    
    <!-- 分类标签 -->
    <view class="category-tabs">
      <view 
        v-for="(tab, index) in tabs" 
        :key="index"
        class="category-tab" 
        :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id"
      >
        <text>{{ tab.label }}</text>
      </view>
    </view>

    <!-- 目标进度列表 -->
    <view class="goal-list">
      <view 
        v-for="(goal, index) in filteredGoals" 
        :key="index"
        class="goal-card"
      >
        <view class="goal-icon">{{ goal.icon }}</view>
        <view class="goal-info">
          <view class="goal-header">
            <text class="goal-title">{{ goal.title }}</text>
            <text class="goal-category" :style="{ backgroundColor: getCategoryColor(goal.category) }">{{ goal.category }}</text>
          </view>
          <view class="goal-progress-bar">
            <view class="goal-progress-fill" :style="{ width: `${goal.progress}%`, backgroundColor: getCategoryColor(goal.category) }"></view>
          </view>
          <view class="goal-details">
            <text class="goal-progress-text">{{ goal.progressText }}</text>
            <text class="goal-date">{{ goal.lastUpdated }}</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 添加按钮 -->
    <view class="add-button" @click="openAddGoalModal">
      <text class="add-icon">+</text>
    </view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue';
// import { useUserStore } from '@/store';

// const userStore = useUserStore();

// 标签页数据
const tabs = [
  { id: 'all', label: '全部' },
  { id: 'exercise', label: '运动' },
  { id: 'diet', label: '饮食' },
  { id: 'wellness', label: '健康' }
];

// 当前选中标签
const activeTab = ref('all');

// 目标数据
const goalList = ref([
  {
    id: 1,
    title: '每日 10,000 步',
    category: '运动',
    icon: '🚶',
    progress: 75,
    progressText: '今日已走 7,500 / 10,000 步',
    lastUpdated: '今天 10:30'
  },
  {
    id: 2,
    title: '每周力量训练 3 次',
    category: '运动',
    icon: '💪',
    progress: 66,
    progressText: '本周已完成 2 / 3 次',
    lastUpdated: '昨天 16:45'
  },
  {
    id: 3,
    title: '每日 5 份蔬菜',
    category: '饮食',
    icon: '🥦',
    progress: 60,
    progressText: '今日已吃 3 / 5 份',
    lastUpdated: '今天 12:20'
  },
  {
    id: 4,
    title: '每日 2.5L 水',
    category: '饮食',
    icon: '💧',
    progress: 72,
    progressText: '今日已喝 1.8 / 2.5 升',
    lastUpdated: '今天 14:15'
  },
  {
    id: 5,
    title: '每晚 8 小时睡眠',
    category: '健康',
    icon: '🌙',
    progress: 94,
    progressText: '昨晚睡了 7.5 / 8 小时',
    lastUpdated: '今天 07:30'
  },
  {
    id: 6,
    title: '每日 10 分钟冥想',
    category: '健康',
    icon: '🧘',
    progress: 100,
    progressText: '今日已完成 10 / 10 分钟',
    lastUpdated: '今天 08:00'
  }
]);

// 根据当前选中的标签过滤目标
const filteredGoals = computed(() => {
  if (activeTab.value === 'all') {
    return goalList.value;
  }
  
  const categoryMap = {
    'exercise': '运动',
    'diet': '饮食',
    'wellness': '健康'
  };
  
  return goalList.value.filter(goal => goal.category === categoryMap[activeTab.value]);
});

// 计算总体进度
const overallProgress = computed(() => {
  if (goalList.value.length === 0) return 0;
  
  const totalProgress = goalList.value.reduce((sum, goal) => sum + goal.progress, 0);
  return Math.round(totalProgress / goalList.value.length);
});

// 已完成目标数量
const completedGoals = computed(() => {
  return goalList.value.filter(goal => goal.progress === 100).length;
});

// 总目标数量
const totalGoals = computed(() => {
  return goalList.value.length;
});

// 根据分类获取颜色
const getCategoryColor = (category) => {
  const colorMap = {
    '运动': '#6654e0',
    '饮食': '#ffa500',
    '健康': '#ff69b4'
  };
  
  return colorMap[category] || '#6654e0';
};

// 格式化日期
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}年${month}月${day}日`;
};

// 打开添加目标模态框
const openAddGoalModal = () => {
  // TODO: 打开添加目标模态框
  console.log('打开添加目标模态框');
};
</script>

<style scoped>
.container {
  padding: 30rpx;
  background-color: #f5f5f7;
  min-height: 100vh;
  position: relative;
}

.header {
  margin-bottom: 30rpx;
}

.header-title {
  font-size: 40rpx;
  font-weight: bold;
  color: #333;
}

.header-subtitle {
  font-size: 24rpx;
  color: #666;
}

.progress-overview {
  background-color: white;
  border-radius: 20rpx;
  padding: 30rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30rpx;
  box-shadow: 0 4rpx 10rpx rgba(0, 0, 0, 0.05);
}

.progress-circle-container {
  position: relative;
}

.progress-circle {
  width: 160rpx;
  height: 160rpx;
  border-radius: 50%;
  background: conic-gradient(#6654e0 0% var(--percent), #e0e0e5 var(--percent) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.progress-circle::before {
  content: '';
  position: absolute;
  width: 130rpx;
  height: 130rpx;
  border-radius: 50%;
  background-color: white;
}

.progress-circle-text {
  position: relative;
  z-index: 1;
  font-size: 36rpx;
  font-weight: bold;
  color: #6654e0;
}

.progress-stats {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.progress-stat {
  display: flex;
  flex-direction: column;
}

.progress-stat-value {
  font-size: 40rpx;
  font-weight: bold;
  color: #333;
}

.progress-stat-label {
  font-size: 24rpx;
  color: #666;
}

.category-tabs {
  display: flex;
  margin-bottom: 30rpx;
  background-color: white;
  border-radius: 15rpx;
  overflow: hidden;
}

.category-tab {
  flex: 1;
  padding: 20rpx 0;
  text-align: center;
  font-size: 28rpx;
  color: #666;
  transition: all 0.3s ease;
}

.category-tab.active {
  color: white;
  background-color: #6654e0;
  font-weight: bold;
}

.goal-list {
  margin-bottom: 100rpx; /* 为底部按钮留空间 */
}

.goal-card {
  background-color: white;
  border-radius: 20rpx;
  padding: 20rpx;
  margin-bottom: 20rpx;
  display: flex;
  align-items: center;
  box-shadow: 0 4rpx 10rpx rgba(0, 0, 0, 0.05);
}

.goal-icon {
  font-size: 48rpx;
  margin-right: 20rpx;
}

.goal-info {
  flex: 1;
}

.goal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10rpx;
}

.goal-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
}

.goal-category {
  font-size: 20rpx;
  color: white;
  background-color: #6654e0;
  padding: 4rpx 10rpx;
  border-radius: 10rpx;
}

.goal-progress-bar {
  height: 10rpx;
  background-color: #f0f0f2;
  border-radius: 10rpx;
  margin-bottom: 10rpx;
  overflow: hidden;
}

.goal-progress-fill {
  height: 100%;
  background-color: #6654e0;
}

.goal-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.goal-progress-text {
  font-size: 24rpx;
  color: #666;
}

.goal-date {
  font-size: 22rpx;
  color: #999;
}

.add-button {
  position: fixed;
  bottom: 40rpx;
  right: 40rpx;
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  background-color: #6654e0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 6rpx 20rpx rgba(102, 84, 224, 0.3);
}

.add-icon {
  font-size: 60rpx;
  color: white;
  font-weight: bold;
  line-height: 1;
}
</style> 