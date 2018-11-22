<template>
  <div>
    <div class="banner">
      <slot name="banner"></slot>
    </div>
    <slot name="content"></slot>
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
  .banner {
    height: rem(112.5);
    img {
      width: 100%;
    }
  }
  .content {
    padding: rem(5.5) rem(37.5) rem(54);
  }
}
</style>

