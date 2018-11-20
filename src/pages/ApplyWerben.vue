<template>
  <div class="container">
    <apply-component>
      <img slot="banner" src="@/assets/bg03.png" alt="">
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
        <div class="group">
          <label for="type">类型</label>
          <!-- <select id="type" class="gruop-input">
            <option value="">请选择</option>
            <option value="1">屏幕广告</option>
            <option value="2">公众号推广</option>
            <option value="3">袋子广告</option>
          </select> -->
          <el-select class="gruop-input" v-model="value" placeholder="请选择">
            <el-option value="屏幕广告"></el-option>
            <el-option value="公众号推广"></el-option>
            <el-option value="袋子广告"></el-option>
          </el-select>
        </div>
        <div class="group">
          <label for="sign">标志</label>
          <input id="sign" class="gruop-input" type="file">
          <!-- <select id="sign" class="gruop-input">
            <option value="">请选择您的标志</option>
          </select> -->
        </div>
        <div class="group submit">
          <button class="default">提交申请</button>
        </div>
      </div>
    </apply-component>
    <footer-component text="联系我们：400-800-788"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100%;
  position: relative;
}
</style>

