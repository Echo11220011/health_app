<template>
  <view class="icon-text-container">
    <text class="iconfont" :class="iconClass"></text>
    <slot>{{ text }}</slot>
  </view>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  text: {
    type: String,
    default: ''
  }
});

const iconClass = computed(() => {
  return `icon-${props.icon}`;
});
</script>

<style scoped>
.icon-text-container {
  display: flex;
  align-items: center;
  gap: 10rpx;
}

.iconfont {
  font-size: 32rpx;
}
</style> 