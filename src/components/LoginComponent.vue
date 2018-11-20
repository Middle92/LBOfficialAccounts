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
      height: 5.33rem;
      background-image: url(../assets/bg05.png);
      background-repeat: no-repeat;
      background-color: RGBA(26, 188, 156, 1);
      background-size: contain;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        font-size: 0.8rem;
        font-weight: bold;
        color: #fff;
      }
    }
    .content {
      margin: 0rem 0.6rem;
      background-color: #fff;
      margin-top: -1.65rem;
      border-radius: 5px;
      box-shadow: 0px 5px 20px RGBA(170, 170, 170, 0.5);
      padding: 0.68rem 0.4rem;
    }
    .footer {
      position: fixed;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0.5rem 0.6rem;
      a {
        font-size: 0.346rem;
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
          color: RGBA(153, 153, 153, 1);
        }
        &.green {
          color: RGBA(26, 188, 156, 1);
        }
      }
    }
  }
</style>


