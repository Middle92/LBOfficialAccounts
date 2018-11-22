<template>
  <div class="container">
    <div class="logo">
      <span>LOGO</span>
    </div>
    <slot name="content"></slot>
    <slot name="footer"></slot>
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
  .container {
    background-color: #fff;
    .logo {
      height: rem(200);
      background-image: url(../assets/imgs/bg05.png);
      background-repeat: no-repeat;
      background-color: $base-background-color;
      background-size: contain;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        font-size: rem(30);
        font-weight: bold;
        color: #fff;
      }
    }
    .content {
      margin: 0 rem(22.5);
      background-color: #fff;
      margin-top: rem(-62);
      border-radius: 5px;
      box-shadow: 0px 5px 20px RGBA(170, 170, 170, 0.5);
      padding: rem(25) rem(15);
    }
    .footer {
      position: fixed;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: rem(20) rem(22.5);
      a {
        font-size: rem(12);
        text-decoration: none;
        &.right {
          float: right;
        }
        &.left {
          float: left;
        }
        &.center {
          transform: translateX(-50%);
          float: left;
          margin-left: 50%;
        }
        &.grey {
          color: $placeholder-color;
        }
        &.green {
          color: $base-background-color;
        }
      }
    }
  }
</style>


