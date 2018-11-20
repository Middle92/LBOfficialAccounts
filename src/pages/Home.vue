<template>
  <div>
    <div class="top-bg">
      <div class="head-portrait">
        <div class="head"></div>
        <p class="text">name</p>
      </div>
    </div>

    <div class="content">
      <div class="item">
        <div class="item-content">
          <img src="../assets/icon04.png" alt="">
          <p>公众号推广</p>
          <span>generalize</span>
        </div>
      </div>
      <div class="item">
        <div class="item-content">
          <img src="../assets/icon05.png" alt="">
          <p>数据统计</p>
          <span>statistics</span>
        </div>
      </div>
      <div class="item">
        <div class="item-content">
          <img src="../assets/icon03.png" alt="">
          <p>个人中心</p>
          <span>personal</span>
        </div>
      </div>
      <div class="item">
        <div class="item-content">
          <img src="../assets/icon06.png" alt="">
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
  }
}
</script>

<style lang="scss" scoped>
.top-bg {
  height: 6.13rem;
  background-image: url(../assets/bg06.png);
  background-repeat: no-repeat;
  background-size: contain;
  .head-portrait {
    text-align: center;
    padding-top: 0.98rem;
    .head {
      height: 1.6rem;
      width: 1.6rem;
      background-color: #ffffff;
      border-radius: 50%;
      margin: auto;
    }
    .text {
      margin-top: .32rem;
      font-size: .4rem;
      color: #fff;
    }
  }
}
.content {
  padding: 0 .4rem;
  margin-top: -2rem;
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
    margin-bottom: .4rem;
    &:nth-of-type(2n+1) {
      padding-right: .2rem;
    }
    &:nth-of-type(2n) {
      padding-left: .2rem;
    }
    .item-content {
      width: 100%;
      border: 1px solid RGBA(234, 234, 234, 1);
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.53rem 0;
      background-color: #fff;
      img {
        height: 1.6rem;
        width: 1.6rem;
      }
      p {
        font-size: .4rem;
        color: RGBA(51, 51, 51, 1);
        margin-top: .4rem;
        margin-bottom: 0.186rem;
      }
      span {
        color: RGBA(221, 221, 221, 1);
        font-size: 0.26rem;
        text-transform:uppercase;
      }
    }
  }
}
</style>


