<template>
  <div style="height: 100%;">
    <router-view></router-view>
    <router-view name="modal"></router-view>
  </div>
</template>

<script>
import searchObject from '@/utils/search-query'
export default {
  name: "App",
  mounted() {
    document.addEventListener(
      "DOMContentLoaded",
      function(e) {
        document.getElementsByTagName("html")[0].style.fontSize =
          window.innerWidth / 10 + "px";
      },
      false
    );
    // 将code储存在vuex中
    this.$store.commit('setCode', searchObject(location.search)["code"])
  },
  methods: {
    
  }
};
</script>

<style lang="scss">
@import url('./assets/reset.css');
html,
body {
  width: 100%;
  height: 100%;
  background-color: $modal-background-color;
}
// 默认按钮颜色
button.btn {
  font-size: rem(15);
  border: none;
  outline: none;
  height: rem(38);
  line-height: rem(38);
  display: block;
  margin: auto;
  border-radius: rem(18.75);
  box-sizing: border-box;
  white-space: pre;
  a {
    text-decoration: none;
    display: block;
  }
}
button.default {
  background-color: $default-botton-background-color;
  color: $default-botton-color;
  a {
    color: $default-botton-color;
  }
}
button.disabled {
  background-color: $disabled-botton-background-color;
  color: $disabled-botton-color;
  a {
    color: $disabled-botton-color;
  }
}
// 取消按钮
button.cancel {
  background-color: $cancel-botton-background-color;
  color: $cancel-botton-color;
  border: rem(1) solid $cancel-botton-color;
  a {
    color: $cancel-botton-color;
  }
}
// 表单组合
.group {
  font-size: 0;
  margin-top: rem(18.75);
  border-bottom: rem(1) solid $border-color;
  label {
    font-size: rem(14);
    display: block;
    color: $default-color;
  }
  .gruop-input {
    height: rem(43.5);
    line-height: rem(43.5);
    width: 100%;
    border: none;
    outline: none;
    font-size: rem(12);
    position: relative;
    &::before {
      display: none;
    }
    .placeholder {
      color: $placeholder-color;
    }
    &.arrow::after {
      content: " ";
      display: inline-block;
      height: 6px;
      width: 6px;
      border-width: 2px 2px 0 0;
      border-color: #C8C8CD;
      border-style: solid;
      -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
      transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
      position: relative;
      top: -2px;
      position: absolute;
      top: 50%;
      margin-top: -4px;
      right: 2px;
    }
    .weui-cell {
      padding: 0;
      .vux-cell-value {
        color: $default-color;
      }
    }
  }
  &.submit {
    padding: 0 rem(24);
    margin-top: rem(50);
    border: none;
    button.default {
      width: 100%;
    }
  }
}
.group-inline {
  font-size: rem(15);
  border-bottom: rem(1) solid $border-color;
  line-height: rem(55);
  display: flex;
  label {
    color: $placeholder-color;
    margin-right: rem(50);
  }
  .gruop-input {
    color: $default-color;
    flex: 1;
  }
  a {
    color: $default-botton-background-color;
    text-decoration: none;
  }
}
// 定义全局样式
.choose-input {
  width: 100%;
  font-size: rem(13);
  height: rem(38);
  line-height: rem(38);
  background-size: cover;
  color: #fff;
  padding-left: rem(10);
  box-sizing: border-box;
  position: relative;
  border-radius: rem(5);
  &>.arrow {
    display: inline-block;
    border: rem(4.5) solid #fff;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    position: absolute;
    right: rem(10);
    top: 50%;
    margin-top: rem(-4.5);
  }
  // &.blue {
  //   background-image: url("../static/bg07.png");
  // }
  // &.green {
  //   background-image: url("../static/bg08.png");
  // }
  // &.origin {
  //   background-image: url("../static/bg09.png");
  // }
}
.pull-right {
  float: right;
}
.pull-left {
  float: left;
}
// 日期样式
#date {
  padding-top: rem(20);
  padding-bottom: rem(25);
  display: block;
  position: relative;
  .weui-cells {
    margin: 0;
    &:before {
      content: initial;
    }
    &:after {
      content: initial;
    }
    .vux-calendar{
      &:before {
        content: initial;
      }
      .weui-cell {
        padding: 0;
        .weui-cell__ft {
          text-align: left;
          font-size: rem(15);
          padding-right: rem(22);
          &:after {
            content: initial;
          }
          .vux-cell-value {
            color: $default-color;
          }
        }
      }
    }
  }
  .data-icon {
    width: rem(22);
    height: rem(22);
    position: absolute;
    right: 0;
  }
}
// .weui-toast
.weui-toast {
  width: rem(130);
  min-height: rem(130);
  margin-left: rem(-60);
  .weui-toast__content {
    font-size: rem(14);
  }
}

//.weui-toast
.weui-toast_text .weui-toast__content {
  line-height: 1.5em;
  padding-left: 10px;
  padding-right: 10px;
}

// 暂无资料
.no-data {
    font-size: rem(14);
    text-align: center;
    padding: 15px;
}
</style>
