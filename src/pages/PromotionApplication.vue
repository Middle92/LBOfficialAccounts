<template>
  <div>
    <div class="logo">
      <div class="upload">
        <img src="@/assets/icon07.png" alt="">
        <span>选择上传文件</span>
      </div>
      <div class="describe">
        <div class="describe-top"></div>
        <div class="describe-bottom"></div>
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
.logo {
  background-image: url('../assets/bg10.png');
  background-color: RGBA(26, 188, 156, 1);
  height: 4rem;
  background-size: cover;
  padding-top: 1.73rem;
  .upload {
    width: 2.4rem;
    height: 2.4rem;
    background-color: #F5F5F5;
    text-align: center;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    img {
      width: 0.93rem;
      display: block;
    }
    span {
      font-size: 0.26rem;
      float: left;
      width: 100%;
      margin-top: 0.26rem;
      color: #999999;
    }
  }
  .describe {
    width: 9.2rem;
    height: 5.33rem;
    margin: auto;
    background-color: #ffffff;
    margin-top: -1.2rem;
    border-radius: 10px;
    box-shadow: 0 0 20px #aaaaaa;
  }
}
</style>

