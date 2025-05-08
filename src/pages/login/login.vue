<template>
  <view class="login-page">
    <view class="login-container">
      <view class="logo">
        <image src="/static/logo.png" mode="aspectFit" class="logo-img"></image>
        <text class="logo-text">健康旅程</text>
      </view>

      <view class="form-group">
        <view class="input-group">
          <text class="icon">👤</text>
          <input 
            type="text" 
            v-model="username" 
            placeholder="请输入用户名"
            @keypress.enter="handleLogin"
          />
        </view>
        <view class="input-group">
          <text class="icon">🔒</text>
          <input 
            :type="showPassword ? 'text' : 'password'" 
            v-model="password" 
            placeholder="请输入密码"
            @keypress.enter="handleLogin"
          />
          <text 
            class="toggle-password" 
            @click="showPassword = !showPassword"
          >
            {{ showPassword ? '👁️' : '👁️‍🗨️' }}
          </text>
        </view>
      </view>

      <view class="actions">
        <button 
          class="login-btn" 
          @click="handleLogin"
          :disabled="!username || !password"
        >
          登录
        </button>
        <view class="login-link">
          还没有账号？<text class="link" @click="toRegister">立即注册</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const username = ref('')
    const password = ref('')
    const showPassword = ref(false)

    const handleLogin = async () => {
      if (!username.value || !password.value) return
      
      try {
        // TODO: 实现实际的登录逻辑
        console.log('登录信息：', {
          username: username.value,
          password: password.value
        })
        
        // 模拟登录成功
        uni.switchTab({
          url: '/pages/index/index'
        })
      } catch (error) {
        console.error('登录失败：', error)
      }
    }

    const toRegister = () => {
      uni.navigateTo({
        url: '/pages/register/register'
      })
    }

    return {
      username,
      password,
      showPassword,
      handleLogin,
      toRegister
    }
  }
}
</script>

<style>
.login-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #6654e0 0%, #8e7bff 100%);
  padding: 40rpx;
}

.login-container {
  width: 100%;
  background: white;
  border-radius: 32rpx;
  padding: 80rpx 60rpx;
  box-shadow: 0 16rpx 48rpx rgba(0, 0, 0, 0.15);
}

.logo {
  text-align: center;
  margin-bottom: 80rpx;
}

.logo-img {
  width: 160rpx;
  height: 160rpx;
  margin-bottom: 32rpx;
}

.logo-text {
  font-size: 48rpx;
  color: #333;
  font-weight: bold;
}

.form-group {
  margin-bottom: 60rpx;
}

.input-group {
  position: relative;
  margin-bottom: 40rpx;
}

.input-group input {
  width: 100%;
  height: 90rpx;
  padding: 0 80rpx;
  border: 4rpx solid #eee;
  border-radius: 16rpx;
  font-size: 32rpx;
}

.input-group input:focus {
  border-color: #6654e0;
}

.icon {
  position: absolute;
  left: 24rpx;
  top: 50%;
  transform: translateY(-50%);
  font-size: 36rpx;
}

.toggle-password {
  position: absolute;
  right: 24rpx;
  top: 50%;
  transform: translateY(-50%);
  font-size: 36rpx;
}

.login-btn {
  width: 100%;
  height: 90rpx;
  line-height: 90rpx;
  background: #6654e0;
  color: white;
  border: none;
  border-radius: 16rpx;
  font-size: 32rpx;
  font-weight: bold;
}

.login-btn[disabled] {
  background: #ccc;
}

.login-link {
  text-align: center;
  margin-top: 40rpx;
  color: #666;
  font-size: 28rpx;
}

.link {
  color: #6654e0;
  font-weight: bold;
}
</style> 