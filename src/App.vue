<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style>
/* 引入图标字体 */
@font-face {
  font-family: "iconfont";
  src: url('https://at.alicdn.com/t/font_3317461_dqj8mp6s84.woff2') format('woff2');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-user:before {
  content: "\e7ae";
}

.icon-notification:before {
  content: "\e7c4";
}

.icon-settings:before {
  content: "\e78e";
}

.icon-run:before {
  content: "\e7d5";
}

.icon-food:before {
  content: "\e7ee";
}

.icon-check:before {
  content: "\e70c";
}

.icon-heart:before {
  content: "\e7df";
}

/* 全局样式 */
page {
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica,
    Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei',
    sans-serif;
  font-size: 28rpx;
  color: #333;
  background-color: #f5f5f7;
}

/* 处理安全区域 */
.safe-area-inset-bottom {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}

/* 常用flex布局 */
.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.justify-between {
  justify-content: space-between;
}

.justify-center {
  justify-content: center;
}

.align-center {
  align-items: center;
}
</style>
