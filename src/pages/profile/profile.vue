<template>
  <view class="profile-page">
    <view class="header">
      <text class="header-title">个人中心</text>
    </view>
    
    <view class="profile-content">
      <view class="user-info">
        <view class="avatar">
          <image src="https://placekitten.com/100/100" mode="aspectFill"></image>
        </view>
        <view class="info">
          <text class="username">用户名</text>
          <text class="user-level">健康达人 Lv.3</text>
        </view>
      </view>

      <view class="menu-list">
        <view class="menu-item" @click="navigateTo('/pages/stats/stats')">
          <text class="menu-icon">📊</text>
          <text class="menu-text">数据统计</text>
          <text class="menu-arrow">›</text>
        </view>
        
        <view class="menu-item" @click="navigateTo('/pages/settings/settings')">
          <text class="menu-icon">⚙️</text>
          <text class="menu-text">设置</text>
          <text class="menu-arrow">›</text>
        </view>
        
        <view class="menu-item" @click="navigateTo('/pages/help/help')">
          <text class="menu-icon">❓</text>
          <text class="menu-text">帮助与反馈</text>
          <text class="menu-arrow">›</text>
        </view>
        
        <view class="menu-item" @click="navigateTo('/pages/about/about')">
          <text class="menu-icon">ℹ️</text>
          <text class="menu-text">关于我们</text>
          <text class="menu-arrow">›</text>
        </view>
      </view>

      <button class="logout-btn" @click="logout">退出登录</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    navigateTo(url) {
      uni.navigateTo({
        url
      });
    },
    logout() {
      // 退出登录逻辑
      uni.showModal({
        title: '提示',
        content: '确定要退出登录吗？',
        success: (res) => {
          if (res.confirm) {
            // 清除登录信息
            uni.redirectTo({
              url: '/pages/login/login'
            });
          }
        }
      });
    }
  }
}
</script>

<style>
.profile-page {
  padding: 40rpx;
}

.header {
  margin-bottom: 60rpx;
}

.header-title {
  font-size: 48rpx;
  font-weight: bold;
}

.user-info {
  background: white;
  border-radius: 24rpx;
  padding: 40rpx;
  margin-bottom: 40rpx;
  box-shadow: 0 4rpx 16rpx rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
}

.avatar {
  margin-right: 40rpx;
}

.avatar image {
  width: 160rpx;
  height: 160rpx;
  border-radius: 80rpx;
}

.username {
  font-size: 40rpx;
  font-weight: bold;
  display: block;
  margin-bottom: 10rpx;
}

.user-level {
  color: #666;
  font-size: 28rpx;
}

.menu-list {
  background: white;
  border-radius: 24rpx;
  margin-bottom: 60rpx;
  box-shadow: 0 4rpx 16rpx rgba(0,0,0,0.1);
  overflow: hidden;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 30rpx 40rpx;
  border-bottom: 1rpx solid #f5f5f7;
}

.menu-item:last-child {
  border-bottom: none;
}

.menu-icon {
  font-size: 40rpx;
  margin-right: 30rpx;
}

.menu-text {
  flex: 1;
  font-size: 32rpx;
}

.menu-arrow {
  color: #999;
  font-size: 40rpx;
}

.logout-btn {
  width: 100%;
  height: 90rpx;
  line-height: 90rpx;
  background: #ff4d4f;
  color: white;
  border: none;
  border-radius: 16rpx;
  font-size: 32rpx;
  font-weight: bold;
}
</style> 