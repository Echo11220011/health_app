<template>
  <view class="register-page">
    <view class="register-container">
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
          />
        </view>
        <view class="input-group">
          <text class="icon">📧</text>
          <input 
            type="text" 
            v-model="email" 
            placeholder="请输入邮箱"
          />
        </view>
        <view class="input-group">
          <text class="icon">🔒</text>
          <input 
            :type="showPassword ? 'text' : 'password'" 
            v-model="password" 
            placeholder="请输入密码"
          />
          <text 
            class="toggle-password" 
            @click="showPassword = !showPassword"
          >
            {{ showPassword ? '👁️' : '👁️‍🗨️' }}
          </text>
        </view>
        <view class="input-group">
          <text class="icon">🔒</text>
          <input 
            :type="showConfirmPassword ? 'text' : 'password'" 
            v-model="confirmPassword" 
            placeholder="请确认密码"
          />
          <text 
            class="toggle-password" 
            @click="showConfirmPassword = !showConfirmPassword"
          >
            {{ showConfirmPassword ? '👁️' : '👁️‍🗨️' }}
          </text>
        </view>
      </view>

      <view class="actions">
        <button 
          class="register-btn" 
          @click="handleRegister"
          :disabled="!isFormValid"
        >
          注册
        </button>
        <view class="login-link">
          已有账号？<text class="link" @click="toLogin">返回登录</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      showPassword: false,
      showConfirmPassword: false
    }
  },
  computed: {
    isFormValid() {
      return this.username && 
             this.email && 
             this.password && 
             this.confirmPassword && 
             this.password === this.confirmPassword;
    }
  },
  methods: {
    handleRegister() {
      if (!this.isFormValid) return;
      
      // 检查密码是否匹配
      if (this.password !== this.confirmPassword) {
        uni.showToast({
          title: '两次输入的密码不一致',
          icon: 'none'
        });
        return;
      }
      
      // TODO: 实现实际的注册逻辑
      console.log('注册信息：', {
        username: this.username,
        email: this.email,
        password: this.password
      });
      
      // 模拟注册成功
      uni.showToast({
        title: '注册成功',
        icon: 'success',
        duration: 2000,
        success: () => {
          setTimeout(() => {
            uni.redirectTo({
              url: '/pages/login/login'
            });
          }, 2000);
        }
      });
    },
    
    toLogin() {
      uni.navigateBack();
    }
  }
}
</script>

<style>
.register-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #6654e0 0%, #8e7bff 100%);
  padding: 40rpx;
}

.register-container {
  width: 100%;
  background: white;
  border-radius: 32rpx;
  padding: 80rpx 60rpx;
  box-shadow: 0 16rpx 48rpx rgba(0, 0, 0, 0.15);
}

.logo {
  text-align: center;
  margin-bottom: 60rpx;
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

.register-btn {
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

.register-btn[disabled] {
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