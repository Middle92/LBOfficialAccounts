<template>
  <div class="container">
    <apply-component>
      <img slot="banner" src="../../static/bg04.png" alt="">
      <div class="content" slot="content">
        <div class="group">
          <label for="username">姓名</label>
          <input v-model="contacts" class="gruop-input" id="username" type="text" placeholder="请输入您的姓名">
        </div>
        <div class="group">
          <label for="telephone">电话</label>
          <input v-model="phone" class="gruop-input" id="telephone" type="text" placeholder="请输入您的联系电话">
        </div>
        <div class="group">
          <label for="email">邮箱</label>
          <input v-model="email" class="gruop-input" id="email" type="text" placeholder="请输入您的邮箱">
        </div>
        <div class="group submit">
          <button class="btn default" @click="submit">提交申请</button>
        </div>
      </div>
    </apply-component>
    <footer-component text="联系我们：400-800-788"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: null,
      phone: null,
      email: null
    };
  },
  methods: {
    submit() {
      let { contacts, phone, email } = this;
      let validate = this.validate([
        {
          value: contacts,
          required: true,
          requiredMassage: '请输入姓名'
        }, {
          value: phone,
          required: true,
          type: 'phone',
          requiredMassage: '请输入电话',
          regularMassage: '请输入正确电话号码'
        }, {
          value: email,
          required: true,
          type: 'email',
          requiredMassage: '请输入邮箱',
          regularMassage: '请输入正确邮箱'
        }
      ])
      if(!validate) return;
      this.Fetch({
        url: '/operator/applyJoin',
        body: {
          contacts,
          phone,
          email
        },
        credentials: false
      }).then(res => {
        if(res) {
          vm.$vux.toast.show({
              type: 'text',
              text: '提交成功',
              width: '3em',
              onHide: () => {
                this.$router.replace({ path: '/Login' })
              }
          })
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100%;
  position: relative;
}
</style>

