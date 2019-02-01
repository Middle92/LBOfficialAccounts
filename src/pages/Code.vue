<template>
  <div class="container" v-show="isShow">
    <div class="banner">
      <img :src="require('../../static/banner02.png')" alt="">
    </div>
    <div class="content"> <!-- v-bg-image="'bg01'" -->
      <div class="one" >
        <p class="title">
          <img :src="require('../../static/bg13.png')" alt="">
          <!-- 关注公众号<br>
          免费领取环保袋 -->
        </p>
        <!-- <div class="code">
          <div class="code-content" v-bg-image="'bg02'">
            <button class="btn default">
              <router-link to="/Choose">付费购买　1.00元</router-link>
            </button>
          </div>
        </div> -->
        <div class="buy-btn">
          <div class="buy-inner-btn">
            <div class="buy-innner-two-btn">
              <span>点击购买</span>
            </div>
          </div>
        </div>
        <div class="thank">感谢你，为环保出一份力</div>
      </div>
      <div class="two" v-show="false">
        <div class="title">
          <img :src="require('../../static/bg14.png')" alt="">
          <p>扫码免费领取绿葆水溶环保袋</p>
          <!-- 关注公众号<br>
          免费领取环保袋 -->
        </div>
        <div class="code-btn">
          <img :src="require('../../static/code.png')" alt="">
        </div>
        <button class="green-btn" v-bg-image="'icon11'">1元助力环保</button>
        <div class="thank">无需免费，我要为环保出力！</div>
      </div>
      <div class="footer tip">
        <!-- <p class="tip-text">提示：您一天可免费领取购物袋的上限为*次，如有需要，您可付费进行购物袋的购买</p> -->
        <img :src="require('../../static/bg12.png')" alt="">
      </div>
    </div>
  </div>
</template>

<script>
// 转换location.search为对象
import searchObject from '@/utils/search-query'
export default {
  data() {
    return {
      isShow: false
    };
  },
  beforeRouteEnter(to, from, next) {
    let state = searchObject(location.search)["state"]
    let pushRoute = (path) => {
      next(vm => {
        vm.$router.push({path})
      })
    }
    if(state && state.toLocaleLowerCase() == 'login') {
      pushRoute('/Login')
    } else if(state && state.toLocaleLowerCase() == 'accendant') {
      pushRoute('/Accendant')
    } else {
      next(vm => {
        vm.isShow = true
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  .banner {
    height: rem(187);
    background-color: #45d773;
    img {
      width: 100%;
    }
  }
  .content {
    flex: 1;
    background-size: cover;
    position: relative;
    margin-top: rem(-40);
    border-top-left-radius: rem(40);
    border-top-right-radius: rem(40);
    background: linear-gradient(top, #3bb78b, #45d773);
    .title {
      font-size: rem(25);
      text-align: center;
      line-height: rem(30);
      color: #ffffff;
      margin-top: rem(66);
      img {
        width: rem(316);
      }
    }
    .code {
      width: rem(240);
      height: rem(325);
      background-color: #fff;
      border-radius: rem(10);
      margin: auto;
      margin-top: rem(27.5);
      padding-top: rem(25);
      box-sizing: border-box;
      .code-content {
        float: left;
        width: 100%;
        height: 100%;
        // background-image: url('/static/bg02.png');
        background-size: cover;
        button {
          width: rem(200);
          margin-top: rem(225);
        }
      }
    }
    .buy-btn {
      width: rem(169);
      height: rem(169);
      box-sizing: border-box;
      border-radius: 50%;
      border: rem(3) solid #ffffff;
      margin: auto;
      margin-top: rem(25);
      background-color: #51b998;
      display: flex;
      .buy-inner-btn {
        width: rem(147);
        height: rem(147);
        margin: auto;
        background: linear-gradient(-110deg, #e2e3e5, #ffffff);
        border-radius: 50%;
        box-shadow: rem(-3.5) rem(3.5) rem(0) #509984;
        padding: rem(19);
        box-sizing: border-box;
        .buy-innner-two-btn {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(-110deg, #c7c8cb 1%, #ffffff 99%);
          display: flex;
          align-items: center;
          text-align: center;
          font-size: rem(25);
          span {
            display: block;
            width: 50px;
            margin: auto;
            color: $base-background-color;
          }
        }
      }
    }
    .two {
      .title {
        margin-top: rem(29);
        img {
          width: rem(564/2)
        }
        p {
          font-size: rem(32/2);
          color: #fff;
          letter-spacing: rem(5);
        }
      }
      .code-btn {
        width: rem(380/2);
        height: rem(380/2);
        margin: auto;
        margin-top: rem(32/2);
        img {
          max-width: 100%;
        }
      }
      .green-btn {
        display: block;
        width: rem(382/2);
        height: rem(100/2);
        background-size: cover;
        border: none;
        background-color: transparent;
        font-size: rem(20);
        font-weight: bold;
        color: #007e6f;
        padding-left: rem(50);
        margin: auto;
        margin-top: rem(50/2);
      }
    }
    .thank {
      font-size: rem(11);
      text-align: center;
      color: #ffffff;
      padding: 0;
      margin-top: rem(25);
    }
    .footer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .tip {
      // padding: rem(10) rem(15);
      // background-color: $code-background-color;
      img {
        width: 100%;
        float: left;
      }
      .tip-text {
        font-size: rem(12);
        color: $code-text-color;
        line-height: rem(18);
      }
    }
  }
}
</style>


