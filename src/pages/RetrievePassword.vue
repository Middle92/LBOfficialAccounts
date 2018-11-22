<template>
  <div>
    <login-component>
      <div class="content" slot="content">
        <div class="group">
          <label for="tel">手机号码</label>
          <input class="gruop-input" id="tel" type="text" placeholder="请输入您的手机号码">
        </div>
        <div class="group">
          <label for="code">验证码</label>
          <input class="gruop-input" id="code" type="text" placeholder="请输入您的验证码">
        </div>
        <div class="group">
          <label for="password">新密码</label>
          <input class="gruop-input" id="password" type="password" placeholder="请输入新密码">
        </div>
        <div class="group">
          <label for="password2">确认密码</label>
          <input class="gruop-input" id="password2" type="password" placeholder="请确认新密码">
        </div>
        <div class="group submit">
          <button class="btn default" @click="submit">确认</button>
        </div>
      </div>
    </login-component>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    submit() {
      this.$router.push({ path: '/login' })
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
