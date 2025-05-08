<template>
  <view class="header">
    <view class="user-avatar" @click="onAvatarClick">
      <text class="iconfont icon-user"></text>
    </view>
    <text class="greeting">{{ greeting }}</text>
    <view class="icons">
      <text class="iconfont icon-notification" @click="onNotificationClick"></text>
      <text class="iconfont icon-settings" @click="onSettingsClick"></text>
    </view>
  </view>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  userName: {
    type: String,
    default: '用户'
  }
});

const emit = defineEmits(['avatar-click', 'notification-click', 'settings-click']);

const greeting = computed(() => {
  return `你好，${props.userName}！`;
});

const onAvatarClick = () => {
  emit('avatar-click');
  // TODO: 导航到个人中心页面
};

const onNotificationClick = () => {
  emit('notification-click');
  // TODO: 打开通知面板
};

const onSettingsClick = () => {
  emit('settings-click');
  // TODO: 打开设置面板
};
</script>

<style scoped>
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
</style> 