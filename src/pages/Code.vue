<template>
  <div class="container">
    <div class="banner">
      <img :src="require('../../static/banner01.png')" alt="">
    </div>
    <div class="content" v-bg-image="'bg01'">
      <p class="title">
        关注公众号<br>
        免费领取环保袋
      </p>
      <div class="code">
        <div class="code-content" v-bg-image="'bg02'">
          <button class="btn default">
            <router-link to="/Choose">付费购买　1.00元</router-link>
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
// 转换location.search为对象
import searchObject from '@/utils/search-query'
export default {
  data() {
    return {};
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
      pushRoute('/code')
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
    height: rem(75);
    img {
      width: 100%;
    }
  }
  .content {
    flex: 1;
    background-size: cover;
    position: relative;
    .title {
      font-size: rem(25);
      text-align: center;
      line-height: rem(30);
      color: #ffffff;
      margin-top: rem(30);
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
    .footer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .tip {
      padding: rem(10) rem(15);
      background-color: $code-background-color;
      .tip-text {
        font-size: rem(12);
        color: $code-text-color;
        line-height: rem(18);
      }
    }
  }
}
</style>


