<template>
  <div class="container">
    <apply-component>
      <img slot="banner" src="../../static/bg03.png" alt="">
      <div class="content" slot="content">
        <div class="group">
          <label for="username">姓名</label>
          <input v-model="name" class="gruop-input" id="username" type="text" placeholder="请输入您的姓名">
        </div>
        <div class="group">
          <label for="telephone">电话</label>
          <input v-model="phone" class="gruop-input" id="telephone" type="text" placeholder="请输入您的联系电话">
        </div>
        <div class="group">
          <label for="email">邮箱</label>
          <input v-model="email" class="gruop-input" id="email" type="text" placeholder="请输入您的邮箱">
        </div>
        <div class="group">
          <label for="type">类型</label>
          <group id="Type">
            <popup-picker 
              value-text-align="left" 
              :data="typeOptions" 
              v-model="type" 
              placeholder="请选择类型"
              show-name></popup-picker>
          </group>
        </div>
        <div class="group">
          <label for="sign">标志</label>
          <div class="gruop-input arrow" @click="triggerFile">
            <input id="sign" @change="signFile" multiple ref="sign" type="file" hidden>
            <span v-if="logo.length == 0" class="placeholder">请选择标志</span>
            <img v-else ref="imgsign" src="" alt="">
          </div>
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
import imgBase from '@/utils/img-base64';
import uploadFile from '@/utils/upload-file';
export default {
  data() {
    return {
      typeOptions: [[
        { name: '终端设备广告', value: "1"}, 
        { name: 'H5广告', value: "2"}, 
        { name: '广告袋广告', value: "3"}
      ]],
      name: null,
      phone: null,
      email: null,
      type: [],
      logo: []
    }
  },
  methods: {
    submit() {
      let { name, phone, email, type, logo } = this;
      let validate = this.validate([
        {
          value: name,
          required: true,
          requiredMassage: '请输入姓名'
        }, {
          value: phone,
          required: true,
          type: 'phone',
          requiredMassage: '请输入电话'
        }, {
          value: email,
          required: true,
          type: 'email',
          requiredMassage: '请输入邮箱'
        }, {
          value: type.length > 0 && type[0],
          required: true,
          requiredMassage: '请输入类型'
        }, {
          value: logo.length > 0 && logo[0].name,
          required: true,
          requiredMassage: '请输入标志'
        },
      ])
      if(!validate) return;
      
      // 上传图片
      // let uploadImgFile = () => {
      //   var form = new FormData(); // FormData 对象
      //   form.append("file", logo[0]); // 文件对象
      //   return this.Fetch({
      //     url: '/asyncUpload/uploadImgFile',
      //     body: form,
      //     type: false
      //   })
      // }
      // 提交表单
      let applyAd = (logo) => {
        return this.Fetch({
          url: '/adApply/applyAd',
          body: {
            name, 
            phone, 
            email, 
            type: type[0], 
            logo: logo
          },
          credentials: false
        })
      }
      // 同步执行 自调
      (async () => {
        // 上传图片的回调
        const v1 = await uploadFile(logo[0]);
        // 不返回false
        console.log(v1)
        if(!v1) return false;
        // 执行提交表单
        const v2 = await applyAd(v1);
        // 等待执行成功提示
        this.$vux.toast.show({
          type: 'text',
          text: '提交成功',
          width: '3em',
          onHide: () => {
            this.$router.push({ path: '/Accendant' })
          }
        })
      })()
    },
    triggerFile() {
      this.$refs.sign.click()
    },
    signFile(event) {
      this.logo = this.$refs.sign.files;
      let el = this.$refs.sign.files[0];
      imgBase(el).then(res => {
        this.$refs.imgsign.src = res;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100%;
  position: relative;
  .gruop-input {
    img {
      width: rem(30);
      height: rem(30);
      vertical-align: middle;
    }
  }
}
</style>

<style lang="scss">
#Type {
  .weui-cells {
      margin: 0;
      &::before {
        content: initial;
      }
      &::after {
        content: initial;
      }
      .weui-cell {
        height: rem(43.5);
        line-height: rem(43.5);
        padding: 0;
        .vux-cell-placeholder {
          font-size: rem(12);
        }
        .vux-cell-value {
          font-size: rem(12);
          color: $default-color;
        }
      }
  }
}
  
</style>

