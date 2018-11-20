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
    height: 3rem;
    img {
      width: 100%;
    }
  }
  .content {
    padding: 0.146rem 1rem 1.44rem;
  }
}
</style>

