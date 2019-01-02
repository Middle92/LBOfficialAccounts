<template>
  <div>
    <login-component>
      <div class="content" slot="content">
        <div class="group">
          <label for="username">账号</label>
          <input
            v-model="phone"
            class="gruop-input"
            id="username"
            type="text"
            placeholder="请输入您的账号"
          >
        </div>
        <div class="group">
          <label for="password">密码</label>
          <input
            v-model="password"
            class="gruop-input"
            id="password"
            type="password"
            placeholder="请输入您的密码"
          >
        </div>
        <div class="group submit">
          <button class="btn default" @click="submit">登录</button>
        </div>
      </div>
    </login-component>
  </div>
</template>

<script>
import { setCookie, getCookie, checkCookie } from "@/utils/cookie";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      phone: null,
      password: null
    };
  },
  methods: {
    submit() {
      let { phone, password } = this;
      let validate = this.validate([
        {
          value: phone,
          required: true,
          requiredMassage: "请输入账号"
        },
        {
          value: password,
          required: true,
          requiredMassage: "请输入密码"
        }
      ]);
      if (!validate) return;

      this.login('/guardian/login', {
        phone,
        password
      }, (res) => {
        // setCookie("role", "guardian");
        this.$router.replace({ path: "/AccendantHome" });
      }, 'guardian');
    }
  },
  computed: {
    ...mapGetters(["login"])
  }
};
</script>

<style lang="scss" scoped>
</style>
