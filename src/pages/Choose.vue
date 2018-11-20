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
          <img src="@/assets/icon01.png" alt="">
        </div>
        <div class="choose blue" @click="werben">
          <div class="choose-text">
            申请发布广告
            <span>werben</span>
          </div>
          <span class="bg-text">werben</span>
          <img src="@/assets/icon02.png" alt="">
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
  padding: 0 1rem;
  position: relative;
  height: 100%;
  float: left;
  .title {
    font-size: 0.61rem;
    color: RGBA(51, 51, 51, 1);
    margin-top: 0.69rem;
    margin-bottom: 1.06rem;
    span {
      display: block;
      font-size: 0.32rem;
      color: RGBA(153, 153, 153, 1);
      margin-top: 0.26rem;
    }
  }
  .choose {
    width: 8rem;
    height: 2.66rem;
    display: flex;
    align-items: center;
    padding: 0 0.53rem;
    box-sizing: border-box;
    border-radius: 5px;
    position: relative;
    &.green {
      background: linear-gradient(to top right, RGBA(2, 226, 178, 1), RGBA(1, 174, 247, 1));
    }
    &.blue {
      background: linear-gradient(to top right, RGBA(0, 133, 255, 1), RGBA(1, 174, 247, 1));
    }
    &:not(:last-child) {
      margin-bottom: 1.46rem;
    }
    &:active {
      transform: scale(.9);
      transition: all .3s;
    }
    .choose-text {
      flex: 1;
      font-size: .4rem;
      color: #fff;
      span {
        display: block;
        font-size: 0.32rem;
        margin-top: 0.26rem;
        text-transform: uppercase;
      }
    }
    .bg-text {
      text-transform: uppercase;
      font-weight: 600;
      position: absolute;
      font-size: 0.53rem;
      right: 2.53rem;
      color: RGBA(255, 255, 255, .2)
    }
    img {
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>

