<template>
  <router-view/>
</template>

<script>
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
  }
};
</script>

<style lang="scss">
@import url('./assets/css/reset.css');

html,
body {
  height: 100%;
}

// 默认按钮颜色
button.btn {
  font-size: rem(15);
  border: none;
  outline: none;
  height: rem(37.5);
  line-height: rem(37.5);
  display: block;
  margin: auto;
  border-radius: rem(18.75);
  box-sizing: border-box;
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
// 取消按钮
button.cancel {
  background-color: $cancel-botton-background-color;
  color: $cancel-botton-color;
  border: rem(1) solid $cancel-botton-color;
  a {
    color: $cancel-botton-color;
  }
}

.group {
  font-size: 0;
  margin-top: rem(18.75);
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
    border-bottom: rem(1) solid $border-color;
    font-size: rem(12);
  }
  &.submit {
    padding: 0 rem(24);
    margin-top: rem(50);
    button.default {
      width: 100%;
    }
  }
}

.el-select.gruop-input input {
  border: none;
  padding: 0;
  font-size: rem(12);
  &::placeholder {
    color: $border-color;
  }
}
</style>
