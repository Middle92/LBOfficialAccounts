<template>
  <home-component
    :items="items"
  ></home-component>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: '公众号推广',
          titleTip: 'generalize',
          icon: require('../../static/icon04.png'),
          callback: () => {
            this.pushRouter('/PromotionApplication');
          }
        }, {
          title: '数据统计',
          titleTip: 'statistics',
          icon: require('../../static/icon05.png'),
          callback: () => {
            this.pushRouter('/Statistics');
          }
        }, {
          title: '个人中心',
          titleTip: 'personal',
          icon: require('../../static/icon03.png'),
          callback: () => {
            this.pushRouter('/PersonalCenter/advertiser');
          }
        }, {
          title: '系统消息',
          titleTip: 'system news',
          icon: require('../../static/icon06.png'),
          callback: () => {
            this.pushRouter('/SystemMessage');
          }
        }
      ]
    }
  },
  methods: {
    pushRouter(router, params = false){
      if(!params) {
        this.$router.push({ path: router })
      } else {
        this.$router.push({ path: router, params: params })
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


