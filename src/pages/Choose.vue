<template>
    <div class="container">
      <div class="title">
        申请加盟/申请发布广告
        <span>快来加入我们，为自己代言</span>
      </div>
      <div class="content">
        <div class="choose green" @click="join">
          <div class="choose-text">
            申请加盟
            <span>join in</span>
          </div>
          <span class="bg-text">join in</span>
          <img src="@/assets/imgs/icon01.png" alt="">
        </div>
        <div class="choose blue" @click="werben">
          <div class="choose-text">
            申请发布广告
            <span>werben</span>
          </div>
          <span class="bg-text">werben</span>
          <img src="@/assets/imgs/icon02.png" alt="">
        </div>
      </div>
      <footer-component text="填写资料后，平台会和您进行线下联系，请保持电话畅通"/>
    </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    join() {
      this.$router.push({ path: '/join' })
    },
    werben() {
      this.$router.push({ path: '/werben' })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 0 rem(37.5);
  position: relative;
  height: 100%;
  float: left;
  .title {
    font-size: rem(23);
    color: $default-color;
    margin-top: rem(25);
    margin-bottom: rem(40);
    span {
      display: block;
      font-size: rem(12);
      color: $border-color;
      margin-top: rem(10);
    }
  }
  .choose {
    width: rem(300);
    height: rem(100);
    display: flex;
    align-items: center;
    padding: 0 rem(20);
    box-sizing: border-box;
    border-radius: rem(5);
    position: relative;
    box-shadow: $default-shadow-style;
    &.green {
      background: linear-gradient(to top right, RGBA(2, 226, 178, 1), RGBA(1, 174, 247, 1));
    }
    &.blue {
      background: linear-gradient(to top right, RGBA(0, 133, 255, 1), RGBA(1, 174, 247, 1));
    }
    &:not(:last-child) {
      margin-bottom: rem(62);
    }
    &:active {
      transform: scale(.9);
      transition: all .3s;
    }
    .choose-text {
      flex: 1;
      font-size: rem(15);
      color: #fff;
      span {
        display: block;
        font-size: rem(12);
        margin-top: rem(10);
        text-transform: uppercase;
      }
    }
    .bg-text {
      text-transform: uppercase;
      font-weight: 600;
      position: absolute;
      font-size: rem(20);
      right: rem(100);
      color: $background-text-color;
    }
    img {
      width: rem(75);
      height: rem(75);
    }
  }
}
</style>

