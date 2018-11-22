<template>
  <div>
    <div class="top-bg">
      <div class="head-portrait">
        <div class="head"></div>
        <p class="text">name</p>
      </div>
    </div>

    <div class="content">
      <div class="item" @click="pushRouter('/promotion')">
        <div class="item-content">
          <img src="@/assets/imgs/icon04.png" alt="">
          <p>公众号推广</p>
          <span>generalize</span>
        </div>
      </div>
      <div class="item" @click="pushRouter('/statistics')">
        <div class="item-content">
          <img src="@/assets/imgs/icon05.png" alt="">
          <p>数据统计</p>
          <span>statistics</span>
        </div>
      </div>
      <div class="item">
        <div class="item-content">
          <img src="@/assets/imgs/icon03.png" alt="">
          <p>个人中心</p>
          <span>personal</span>
        </div>
      </div>
      <div class="item">
        <div class="item-content">
          <img src="@/assets/imgs/icon06.png" alt="">
          <p>系统消息</p>
          <span>system news</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    pushRouter(router){
      this.$router.push({ path: router })
    }
  }
}
</script>

<style lang="scss" scoped>
.top-bg {
  height: rem(230);
  background-image: url(../assets/imgs/bg06.png);
  background-repeat: no-repeat;
  background-size: contain;
  .head-portrait {
    text-align: center;
    padding-top: rem(36);
    .head {
      height: rem(60);
      width: rem(60);
      background-color: #ffffff;
      border-radius: 50%;
      margin: auto;
    }
    .text {
      margin-top: rem(12);
      font-size: rem(15);
      color: #fff;
    }
  }
}
.content {
  padding: 0 rem(15);
  margin-top: rem(-75);
  &::after {
    content: '';
    display: block;
    clear: both;
  }
  .item {
    display: inline-block;
    width: 50%;
    float: left;
    box-sizing: border-box;
    margin-bottom: rem(15);
    &:nth-of-type(2n+1) {
      padding-right: rem(7.5);
    }
    &:nth-of-type(2n) {
      padding-left: rem(7.5);
    }
    .item-content {
      width: 100%;
      border: 1px solid $border-color;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: rem(20) 0;
      background-color: #fff;
      img {
        height: rem(60);
        width: rem(60);
      }
      p {
        font-size: rem(15);
        color: $default-color;
        margin-top: rem(15);
        margin-bottom: rem(7);
      }
      span {
        color: $default-tip-color;
        font-size: rem(10);
        text-transform:uppercase;
      }
    }
  }
}
</style>


