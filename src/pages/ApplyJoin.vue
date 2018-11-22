<template>
  <div class="container">
    <apply-component>
      <img slot="banner" src="@/assets/imgs/bg04.png" alt="">
      <div class="content" slot="content">
        <div class="group">
          <label for="username">姓名</label>
          <input class="gruop-input" id="username" type="text" placeholder="请输入您的姓名">
        </div>
        <div class="group">
          <label for="telephone">电话</label>
          <input class="gruop-input" id="telephone" type="text" placeholder="请输入您的联系电话">
        </div>
        <div class="group">
          <label for="email">邮箱</label>
          <input class="gruop-input" id="email" type="text" placeholder="请输入您的邮箱">
        </div>
        <div class="group submit">
          <button class="btn default" @click="submit">提交申请</button>
        </div>
      </div>
    </apply-component>
    <footer-component text="联系我们：400-800-788"/>
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
.container {
  min-height: 100%;
  position: relative;
}
</style>

