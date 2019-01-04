<template>
  <div>
    <login-component>
      <div class="content" slot="content">
        <div class="group">
          <label for="username">姓名</label>
          <input class="gruop-input" v-model="name" id="username" type="text" placeholder="请输入您的姓名">
        </div>
        <div class="group">
          <label for="tel">手机号码</label>
          <input class="gruop-input" v-model="phone" id="tel" type="text" placeholder="请输入您的手机号码">
        </div>
        <div class="group">
          <label for="set">设备代理商</label>
          <popup-picker 
            class="gruop-input"
            :data="operatorOption" 
            v-model="operator"
            value-text-align="left" 
            :columns="1"
            show-name
            placeholder="请选择设备代理商"></popup-picker>
          <!-- <input class="gruop-input" v-model="operator" id="set" type="text" placeholder="默认显示用户扫码时的设备所属代理商"> -->
        </div>
        <div class="group">
          <label for="password">密码</label>
          <input class="gruop-input" v-model="password" id="password" type="password" placeholder="请设置登录密码">
        </div>
        <div class="group submit">
          <button class="btn default" @click="submit">立即注册</button>
        </div>
      </div>
      <div class="footer" slot="footer">
        <router-link to="/Login" class="green center">已有账号，现在登陆 </router-link>
      </div>
    </login-component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      phone: null,
      password: null,
      operator: [],
      operatorOption: []
    };
  },
  methods: {
    submit(){
      let {name, phone, password, operator} = this;
      let validate = this.validate([
        {
          value: name,
          required: true,
          requiredMassage: '请输入姓名'
        },
        {
          value: phone,
          required: true,
          requiredMassage: '请输入手机号码'
        },
        {
          value: password,
          required: true,
          requiredMassage: '请输入密码'
        },
        {
          value: operator[0],
          required: true,
          requiredMassage: '请输入设备代理商'
        },
      ])
      if(!validate) return;

      this.Fetch({
        url: '/advertiser/register',
        code: true,
        credentials: false,
        body: {
          name,
          phone,
          password,
          operator: operator[0]
        }
      }).then(res => {
        if(res) {
          vm.$vux.toast.show({
            text: '注册成功',
            width: '3em',
            onHide: () => {
              this.$router.replace({ path: '/Login' })
            }
          })
        }
      })
      
    }
  },
  mounted() {
    // 设备代理商
    this.Fetch({
      url: '/operator/queryAllOperatorIdNames',
    }).then(res => {
      this.operatorOption = res.map(item => {
        return {
          name: item.name,
          value: item.id.toString()
        }
      })
    })
  }
};
</script>

<style lang="scss" scoped>
</style>
