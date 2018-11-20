<template>
  <div>
    <login-component>
      <div class="content" slot="content">
        <div class="group">
          <label for="username">姓名</label>
          <input class="gruop-input" id="username" type="text" placeholder="请输入您的姓名">
        </div>
        <div class="group">
          <label for="tel">手机号码</label>
          <input class="gruop-input" id="tel" type="text" placeholder="请输入您的手机号码">
        </div>
        <div class="group">
          <label for="set">设备代理商</label>
          <input class="gruop-input" id="set" type="text" placeholder="默认显示用户扫码时的设备所属代理商">
        </div>
        <div class="group">
          <label for="password">密码</label>
          <input class="gruop-input" id="password" type="password" placeholder="请设置登录密码">
        </div>
        <div class="group submit">
          <button class="default">立即注册</button>
        </div>
      </div>
      <div class="footer" slot="footer">
        <router-link to="/login" class="green center">已有账号，现在登陆 </router-link>
      </div>
    </login-component>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>
