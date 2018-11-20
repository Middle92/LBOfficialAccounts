<template>
  <div class="container">
    <div class="banner">
      <img src="@/assets/banner01.png" alt="">
    </div>
    <div class="content">
      <p class="title">
        关注公众号<br>
        免费领取环保袋
      </p>
      <div class="code">
        <div class="code-content">
          <button class="default">
            <router-link to="/choose">付费购买　1.00元</router-link>
          </button>
        </div>
      </div>
      <div class="footer tip">
        <p class="tip-text">提示：您一天可免费领取购物袋的上限为*次，如有需要，您可付费进行购物袋的购买</p>
      </div>
    </div>
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
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  .banner {
    height: 2rem;
    img {
      width: 100%;
    }
  }
  .content {
    flex: 1;    
    background: url('../assets/bg01.png');
    background-size: cover;
    position: relative;
    .title {
      font-size: .66rem;
      text-align: center;
      line-height: .8rem;
      color: #ffffff;
      margin-top: .8rem;
    }
    .code {
      width: 6.4rem;
      height: 8.66rem;
      background-color: #fff;
      border-radius: 10px;
      margin: auto;
      margin-top: 0.73rem;
      padding-top: .66rem;
      box-sizing: border-box;
      .code-content {
        height: 100%;
        background-image: url('../assets/bg02.png');
        background-size: cover;
        button {
          width: 5.33rem;
          margin-top: 5.89rem;
        }
      }
    }
    .footer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .tip {
      padding: 0.26rem .4rem;
      background-color: RGBA(255, 255, 255, .6);
      .tip-text {
        font-size: 0.32rem;
        color: RGBA(0, 141, 113, 1);
        line-height: 0.48rem;
      }
    }
  }
}
</style>


