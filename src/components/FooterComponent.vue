<template>
  <div class="footer">
    <span>{{text}}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.footer {
  padding: rem(18) rem(15);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: $footer-background-color;
  line-height: rem(18);
  span {
    font-size: rem(12);
    color: $placeholder-color;
    float: left;
  }
}
</style>


