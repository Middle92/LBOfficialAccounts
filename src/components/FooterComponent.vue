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
  padding: 0.48rem 0.4rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: RGBA(242, 242, 242, 1);
  line-height: 0.48rem;
  span {
    font-size: 0.32rem;
    color: RGBA(153, 153, 153, 1);
    float: left;
  }
}
</style>


