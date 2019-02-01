<template>
  <div>
    <login-component>
      <div class="content" slot="content">
        <div class="group">
          <label for="tel">手机号码</label>
          <input v-model="phone" class="gruop-input" id="tel" type="text" placeholder="请输入您的手机号码">
        </div>
        <div class="group">
          <label for="imgCode">验证码</label>
          <div class="flex">
            <input v-model="imgCode" class="gruop-input" id="imgCode" type="text" placeholder="请输入您的图片验证码">
            <img class="imgCode" ref="imgCode" src="" alt="" @click="imgCodeFun">
          </div>
        </div>
        <div class="group">
          <label for="code">手机验证码</label>
          <div class="flex">
            <input v-model="code" class="gruop-input" id="code" type="text" placeholder="请输入您的验证码">
            <button class="btn" :class="iscode ? 'default' : 'disabled'" @click="codeFun">{{codeText}}</button>
          </div>
        </div>
        <div class="group">
          <label for="password">新密码</label>
          <input v-model="password" class="gruop-input" id="password" type="password" placeholder="请输入新密码">
        </div>
        <div class="group">
          <label for="password2">确认密码</label>
          <input v-model="password2" class="gruop-input" id="password2" type="password" placeholder="请确认新密码">
        </div>
        <div class="group submit">
          <button class="btn default" @click="submit">确认</button>
        </div>
      </div>
    </login-component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: null,
      code: null,
      password: null,
      password2: null,
      imgCode: null,
      iscode: true,
      codeText: '获取验证码'
    };
  },
  methods: {
    submit() {
      let { phone, code, password, password2 } = this;

      let validate = this.validate([
        {
          value: phone,
          required: true,
          type: 'phone',
          requiredMassage: '请输入手机号码',
          regularMassage: '请输入正确手机号码'
        }, {
          value: code,
          required: true,
          requiredMassage: '输入验证码'
        }, {
          value: password,
          required: true,
          type: 'password',
          requiredMassage: '请输入密码',
          regularMassage: '密码由英文字母和数字组成的4-10位字符,密码不能含有非法字符'
        }, {
          value: password2,
          required: true,
          requiredMassage: '密码不一致'
        }
      ])

      if(!validate) return;

      if(password != password2) {
        vm.$vux.toast.show({
          type: 'warn',
          text: '密码不一致',
          width: '3em'
        })
        return
      }
      this.Fetch({
        url: '/advertiser/setPassword',
        body: {
          phone,
          code,
          password
        }
      }).then(res => {
        if(res) {
          vm.$vux.toast.show({
            text: '修改成功',
            width: '3em',
            onHide: () => {
              this.$router.replace({ path: '/Login' })
            }
          })
        }
      })
    },
    // 获取图片验证码
    imgCodeFun() {
      let self = this;
      var xmlhttp;
      if (window.XMLHttpRequest) {
          //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
          xmlhttp=new XMLHttpRequest();
      } else {
          // IE6, IE5 浏览器执行代码
          xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
      xmlhttp.open("POST", `${process.env.API_ROOT}/randomImg/getRandcode`, true);
      xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      xmlhttp.responseType = "blob";
      xmlhttp.onload = function(){
        if (this.status == 200) {
          var blob = this.response;
          self.$refs.imgCode.src = window.URL.createObjectURL(blob);
        }
      }
      xmlhttp.send();
    },
    // 获取验证码
    codeFun() {
      let { phone, imgCode, iscode } = this;
      
      if(iscode) {
        this.Fetch({
          url: '/sendMessaging/sendsms',
          body: {
            phone,
            imgCode
          }
        }).then(res => {
          this.iscode = false;
          let count = 60;
          let timer;
          timer = setInterval(() => {
            if(count <= 0) {
              this.iscode = true;
              this.codeText = '获取验证码';
              clearInterval(timer);
            } else {
              this.codeText = `${count}秒后再获取`;
              count--
            }
          }, 1000)
        })
      }
    }
  },
  mounted() {
    this.imgCodeFun();
  }
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
}
</style>
