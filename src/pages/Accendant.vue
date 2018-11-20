<template>
  <div>
    <login-component>
      <div class="content" slot="content">
        <div class="group">
          <label for="username">账号</label>
          <input class="gruop-input" id="username" type="text" placeholder="请输入您的账号">
        </div>
        <div class="group">
          <label for="password">密码</label>
          <input class="gruop-input" id="password" type="password" placeholder="请输入您的密码">
        </div>
        <div class="group submit">
          <button class="default">登录</button>
        </div>
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
