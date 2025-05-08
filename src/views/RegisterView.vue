<template>
  <view class="register-container">
    <view class="register-header">
      <image class="register-logo" src="/static/logo.png" mode="aspectFit"></image>
      <text class="register-title">注册账号</text>
    </view>
    
    <view class="register-form">
      <view class="input-group">
        <text class="input-label">用户名</text>
        <input 
          class="input-field" 
          type="text" 
          v-model="username" 
          placeholder="请输入用户名" 
        />
      </view>
      
      <view class="input-group">
        <text class="input-label">邮箱</text>
        <input 
          class="input-field" 
          type="email" 
          v-model="email" 
          placeholder="请输入邮箱地址" 
        />
      </view>
      
      <view class="input-group">
        <text class="input-label">密码</text>
        <input 
          class="input-field" 
          type="password" 
          v-model="password" 
          placeholder="请输入密码" 
        />
      </view>
      
      <view class="input-group">
        <text class="input-label">确认密码</text>
        <input 
          class="input-field" 
          type="password" 
          v-model="confirmPassword" 
          placeholder="请再次输入密码" 
        />
      </view>
      
      <view class="terms-agreement">
        <checkbox v-model="agreeTerms" />
        <text>我已阅读并同意 <text class="terms-link" @click="viewTerms">服务条款</text> 和 <text class="terms-link" @click="viewPrivacy">隐私政策</text></text>
      </view>
      
      <button 
        class="register-button" 
        :disabled="isLoading || !isFormValid" 
        @click="handleRegister"
      >
        {{ isLoading ? '注册中...' : '注册' }}
      </button>
      
      <view class="login-link">
        已有账号? <text @click="goToLogin">登录</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const agreeTerms = ref(false);
const isLoading = ref(false);

const isFormValid = computed(() => {
  return username.value && 
         email.value && 
         password.value && 
         confirmPassword.value && 
         password.value === confirmPassword.value &&
         agreeTerms.value;
});

const handleRegister = async () => {
  if (!isFormValid.value) {
    // TODO: 显示错误提示
    console.log('请完成所有必填项');
    return;
  }
  
  try {
    isLoading.value = true;
    // TODO: 调用注册API
    
    // 模拟成功注册
    console.log('注册成功');
    // 导航到登录页
    router.push('/login');
  } catch (error) {
    // TODO: 显示错误提示
    console.log('注册失败', error);
  } finally {
    isLoading.value = false;
  }
};

const viewTerms = () => {
  // TODO: 显示服务条款
  console.log('查看服务条款');
};

const viewPrivacy = () => {
  // TODO: 显示隐私政策
  console.log('查看隐私政策');
};

const goToLogin = () => {
  router.push('/login');
};
</script>

<style>
.register-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 40rpx;
  background-color: #f5f5f7;
}

.register-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40rpx;
  margin-top: 40rpx;
}

.register-logo {
  width: 100rpx;
  height: 100rpx;
  margin-bottom: 20rpx;
}

.register-title {
  font-size: 40rpx;
  font-weight: bold;
  color: #333;
}

.register-form {
  background-color: #fff;
  border-radius: 30rpx;
  padding: 40rpx;
  box-shadow: 0 10rpx 30rpx rgba(0, 0, 0, 0.05);
}

.input-group {
  margin-bottom: 30rpx;
}

.input-label {
  display: block;
  font-size: 28rpx;
  margin-bottom: 10rpx;
  color: #666;
}

.input-field {
  width: 100%;
  height: 90rpx;
  border: 2rpx solid #e0e0e5;
  border-radius: 10rpx;
  padding: 0 20rpx;
  font-size: 30rpx;
  background-color: #f9f9f9;
}

.terms-agreement {
  display: flex;
  align-items: center;
  margin-bottom: 30rpx;
  font-size: 26rpx;
  color: #666;
}

.terms-link {
  color: #6654e0;
  text-decoration: underline;
}

.register-button {
  width: 100%;
  height: 90rpx;
  border-radius: 10rpx;
  background-color: #6654e0;
  color: white;
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 30rpx;
}

.register-button:disabled {
  background-color: #a99fe8;
}

.login-link {
  text-align: center;
  font-size: 26rpx;
  color: #666;
}

.login-link text {
  color: #6654e0;
  font-weight: bold;
}
</style> 