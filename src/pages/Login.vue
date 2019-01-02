<template>
  <login-component>
    <div class="content" slot="content">
      <div class="group">
        <label for="username">账号</label>
        <input v-model="phone" class="gruop-input" id="username" type="text" placeholder="请输入您的账号">
      </div>
      <div class="group">
        <label for="password">密码</label>
        <input v-model="password" class="gruop-input" id="password" type="password" placeholder="请输入您的密码">
      </div>
      <div class="group submit">
        <button class="btn default" @click="submit">登录</button>
      </div>
    </div>
    <div class="footer" slot="footer">
      <router-link to="/RetrievePassword" class="grey left">忘记密码?</router-link>
      <router-link to="/Register" class="green right">快速注册</router-link>
    </div>
  </login-component>
</template>

<script>
import { mapGetters } from "vuex";
import { setCookie, getCookie, checkCookie } from "@/utils/cookie";
export default {
  data() {
    return {
      phone: null,
      password: null
    };
  },
  computed: {
    ...mapGetters(["login"])
  }, 
  methods: {
    submit() {
      let { phone, password } = this;
      let validate = this.validate([
        {
          value: phone,
          required: true,
          // type: 'username',
          requiredMassage: '请输入账号',
          // regularMassage: '用户名由英文字母和数字组成的4-16位字符，以字母开头'
        }, {
          value: password,
          required: true,
          // type: 'password',
          requiredMassage: '请输入密码',
          // regularMassage: '密码由英文字母和数字组成的4-10位字符'
        }
      ])
      if(!validate) return
      // this.Fetch({
      //   url: '/advertiser/login',
      //   code: true,
      //   body: {
      //     phone, 
      //     password
      //   }
      // }, '登录中...').then(res => {
      //   if(res) {
      //     this.$store.commit('setUserinfo', res) 
      //     this.$vux.toast.show({
      //       text: '登陆成功',
      //       width: '3em',
      //       onHide: () => {
      //         this.$router.replace({ path: '/Home' })
      //       }
      //     })
      //   }
      // })
      this.login('/advertiser/login', {
        phone,
        password
      }, (res) => {
        this.$router.replace({ path: "/Home" });
      }, 'advertiser');
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
