<template>
    <div>
        <div class="top-bg" v-bg-image="'bg06'">
            <div class="head-portrait">
                <div class="head">
                    <img :src="userinfo && (userinfo.headImg || userinfo.logo)" v-if="userinfo && (userinfo.headImg || userinfo.logo)" alt="">
                </div>
                <p class="text">{{userinfo && userinfo.name}}</p>
            </div>
        </div>

        <div class="content">
            <div class="item" v-for="(item, index) of items" :key="index" @click="item.callback">
                <div class="item-content">
                <img :src="item.icon" alt="">
                <p>{{item.title}}</p>
                <span>{{item.titleTip}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    props: {
        items: {
            type: Array,
            default: [{
                title: '标题',
                titleTip: '标题提示',
                icon: '../../static/icon04.png',
                callback() {
                    console.log(this)
                }
            }]
        }
    },
    data() {
        return {}
    },
    computed: {
        ...mapGetters(['userinfo'])
    }
}
</script>

<style lang="scss" scoped>
.top-bg {
  height: rem(230);
//   background-image: url(../../static/bg06.png);
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
      overflow: hidden;
      img {
          max-width: 100%;
          max-height: 100%;
      }
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

