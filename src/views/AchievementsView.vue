<template>
  <view class="container">
    <!-- 页面标题 -->
    <view class="header">
      <text class="header-title">成就墙</text>
      <text class="header-subtitle">解锁 {{ unlockedCount }}/{{ totalCount }} 成就</text>
    </view>
    
    <!-- 成就进度 -->
    <view class="achievement-progress">
      <view class="achievement-progress-bar">
        <view class="achievement-progress-fill" :style="{ width: `${unlockedPercentage}%` }"></view>
      </view>
      <text class="achievement-progress-text">{{ unlockedPercentage }}% 已完成</text>
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
    
    <!-- 成就网格 -->
    <view class="achievements-grid">
      <view 
        v-for="(achievement, index) in filteredAchievements" 
        :key="index"
        class="achievement-card"
        :class="{ 'locked': !achievement.unlocked }"
        @click="showAchievementDetails(achievement)"
      >
        <view class="achievement-icon">
          <text v-if="achievement.unlocked">{{ achievement.icon }}</text>
          <text v-else class="lock-icon">🔒</text>
        </view>
        <view class="achievement-info">
          <text class="achievement-title">{{ achievement.title }}</text>
          <text class="achievement-description">{{ achievement.unlocked ? achievement.description : '继续努力解锁' }}</text>
          <text v-if="achievement.unlocked" class="achievement-date">{{ achievement.unlockDate }}</text>
        </view>
      </view>
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

// 成就数据
const achievements = ref([
  {
    id: 1,
    title: '早起者',
    description: '连续7天早上6点前起床',
    category: '健康',
    icon: '🌅',
    unlocked: true,
    unlockDate: '2023-04-10'
  },
  {
    id: 2,
    title: '万步达人',
    description: '单日走路超过10,000步',
    category: '运动',
    icon: '🚶',
    unlocked: true,
    unlockDate: '2023-04-15'
  },
  {
    id: 3,
    title: '水中蛟龙',
    description: '完成10次游泳训练',
    category: '运动',
    icon: '🏊',
    unlocked: false
  },
  {
    id: 4,
    title: '素食主义者',
    description: '连续30天摄入5份蔬菜',
    category: '饮食',
    icon: '🥦',
    unlocked: false
  },
  {
    id: 5,
    title: '冥想大师',
    description: '累计完成50次冥想',
    category: '健康',
    icon: '🧘',
    unlocked: true,
    unlockDate: '2023-04-18'
  },
  {
    id: 6,
    title: '无糖生活',
    description: '连续15天不摄入加工糖',
    category: '饮食',
    icon: '🍯',
    unlocked: true,
    unlockDate: '2023-04-20'
  },
  {
    id: 7,
    title: '力量王者',
    description: '完成20次力量训练',
    category: '运动',
    icon: '💪',
    unlocked: false
  },
  {
    id: 8,
    title: '深度睡眠',
    description: '连续30天获得8小时优质睡眠',
    category: '健康',
    icon: '😴',
    unlocked: false
  },
  {
    id: 9,
    title: '水分充足',
    description: '连续30天喝够2.5L水',
    category: '饮食',
    icon: '💧',
    unlocked: false
  }
]);

// 根据当前选中的标签过滤成就
const filteredAchievements = computed(() => {
  if (activeTab.value === 'all') {
    return achievements.value;
  }
  
  const categoryMap = {
    'exercise': '运动',
    'diet': '饮食',
    'wellness': '健康'
  };
  
  return achievements.value.filter(achievement => achievement.category === categoryMap[activeTab.value]);
});

// 解锁的成就数量
const unlockedCount = computed(() => {
  return achievements.value.filter(achievement => achievement.unlocked).length;
});

// 总成就数量
const totalCount = computed(() => {
  return achievements.value.length;
});

// 解锁百分比
const unlockedPercentage = computed(() => {
  return Math.round((unlockedCount.value / totalCount.value) * 100);
});

// 显示成就详情
const showAchievementDetails = (achievement) => {
  // TODO: 显示成就详情
  console.log('显示成就详情:', achievement.title);
};
</script>

<style scoped>
.container {
  padding: 30rpx;
  background-color: #f5f5f7;
  min-height: 100vh;
}

.header {
  margin-bottom: 20rpx;
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

.achievement-progress {
  margin-bottom: 30rpx;
}

.achievement-progress-bar {
  height: 16rpx;
  background-color: #e0e0e5;
  border-radius: 10rpx;
  overflow: hidden;
  margin-bottom: 10rpx;
}

.achievement-progress-fill {
  height: 100%;
  background-color: #6654e0;
  border-radius: 10rpx;
}

.achievement-progress-text {
  font-size: 24rpx;
  color: #666;
  text-align: right;
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

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20rpx;
}

.achievement-card {
  background-color: white;
  border-radius: 20rpx;
  padding: 20rpx;
  box-shadow: 0 4rpx 10rpx rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.achievement-card.locked {
  opacity: 0.7;
  background-color: #f0f0f2;
}

.achievement-icon {
  font-size: 60rpx;
  text-align: center;
  margin-bottom: 10rpx;
}

.lock-icon {
  opacity: 0.5;
}

.achievement-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.achievement-title {
  font-size: 28rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 6rpx;
  text-align: center;
}

.achievement-description {
  font-size: 22rpx;
  color: #666;
  text-align: center;
  margin-bottom: 10rpx;
  height: 64rpx; /* 固定高度，确保两行 */
}

.achievement-date {
  font-size: 20rpx;
  color: #999;
}
</style> 