<template>
  <div class="container">
    <div class="logo" v-bg-image="'bg10'">
      <div class="upload" @click="uploadFile">
        <input ref="imageFile" type="file" hidden @change="imgChange">
        <div v-if="isdefault" class="default">
          <img src="../../static/icon07.png" alt="">
          <span>选择上传文件</span>
        </div>
        <div v-else  class="default active">
          <img ref="imageTag" src="" alt="">
        </div>
      </div>
    </div>
    <div class="describe">
      <div class="describe-top">
        <span>上传二维码</span>
      </div>
      <div class="describe-bottom">
        <textarea v-model="introduce" placeholder="请输入您的二维码描述"></textarea>
      </div>
    </div>
    <div class="content" id="PromotionApplication">
      <div class="group">
        <label for="region">投放区域</label>
        <group id="region">
          <popup-picker 
            value-text-align="left" 
            :data="regionOptions" 
            v-model="area"
            :columns="1"
            show-name
            placeholder="请选择投放区域"></popup-picker>
        </group>
      </div>
      <div class="group">
        <label for="channel">投放渠道</label>
        <group id="channel">
          <popup-picker 
            value-text-align="left" 
            :data="channelOptions" 
            v-model="channel"
            :columns="1"
            show-name
            placeholder="请选择投放渠道"></popup-picker>
        </group>
      </div>
      <div class="checked">
        <label for="">选择投放人群和吸粉量</label>
        <!-- <el-checkbox-group> -->
          <div class="check-gruop">
            <el-checkbox v-model="man">男</el-checkbox>
            <el-input-number size="mini" v-model="manValue" :min="0"></el-input-number>
          </div>

          <div class="check-gruop">
            <el-checkbox v-model="woman">女</el-checkbox>
            <el-input-number size="mini" v-model="womanValue" :min="0"></el-input-number>
          </div>
        <!-- </el-checkbox-group> -->
      </div>
      <div class="total">
        <div class="total-text">
          <label for="">合计价格</label>
          <span>{{totalMoney}}</span>
        </div>
        <div class="info">
          <div class="info-group">
            <label for="">投放区域</label>
            <div class="gruop-box">{{regionOptionsValue}}</div>
          </div>
          <div class="info-group">
            <label for="">投放渠道</label>
            <div class="gruop-box">{{channelOptionsValue}}</div>
          </div>
          <div class="info-group">
            <label for="">投放人群</label>
            <div class="gruop-box">
              <ul>
                <li v-show="man">
                  <span>男</span>
                  <span>{{manValue}}个</span>
                </li>
                <li v-show="woman">
                  <span>女</span>
                  <span>{{womanValue}}个</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="btns">
        <button class="btn cancel">取消</button>
        <button class="btn default" @click="submit">提交审核</button>
      </div>
    </div>
  </div>
</template>

<script>
import imgBase from '@/utils/img-base64';
import uploadFile from '@/utils/upload-file';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      checked: false,
      regionOptions: [],
      regionOptionsValue: null,
      channelOptions: [],
      channelOptionsValue: null,
      man: false,
      manValue: 0,
      manObject: null,
      woman: false,
      womanValue: 0,
      womanObject: null,
      array: null,
      image: null,
      introduce: null,
      totalMoney: null,
      area: [],
      channel: [],
      advertiser: null,
      isdefault: true,
      array: [],
    }
  },
  methods: {
    // 触发选择图片
    uploadFile() {
      this.$refs.imageFile.click();
    },
    // 监听图片变化
    imgChange(event) {
      this.image = this.$refs.imageFile.files;
      let el = this.$refs.imageFile.files[0];
      this.isdefault = false;
      imgBase(el).then(res => {
        this.$refs.imageTag.src = res;
      })
    },
    // 查询区域-渠道-人群条件下的价格
    async getPrice() {
      let { area, channel, man, woman, manValue, womanValue } = this;

      if(area[0] && channel[0] && (man || woman)) {
        if(man) {
          await this.Fetch({
            url: '/priceSet/getPrice.ad',
            body: {
              area: area[0], 
              channel: channel[0], 
              people: '男'
            }
          }).then(res => {
            this.manObject = res;
          })
        }
        if(woman) {
          await this.Fetch({
            url: '/priceSet/getPrice.ad',
            body: {
              area: area[0], 
              channel: channel[0], 
              people: '女'
            }
          }).then(res => {
            this.womanObject = res;
          })
        }
      }
    },
    // 要查询对应数据的名称.比如('投放区域','投放渠道')
    queryMetadatas(name) {
      return this.Fetch({
        url: '/metadata/queryMetadatas.ad',
        body: {
          name
        }
      })
    },
    // 提交
    submit() {
      let { introduce, totalMoney, area, channel, array, image } = this;
      
      let validate = this.validate([
         {
          value: this.userinfo && this.userinfo.id,
          required: true,
          requiredMassage: '请重新登陆',
          callBack:() => {
            this.$router.replace({ path: '/Login' })
          }
        }, {
          value: image,
          required: true,
          requiredMassage: '请选择图片'
        }, {
          value: introduce,
          required: true,
          requiredMassage: '请填写描述'
        }, {
          value: area,
          required: true,
          requiredMassage: '请填写区域'
        }, {
          value: channel,
          required: true,
          requiredMassage: '请填写渠道'
        }, {
          value: array,
          required: true,
          requiredMassage: '请选择投放人群和吸粉量'
        }, {
          value: totalMoney,
          required: true,
          requiredMassage: '请填写总金额'
        }
      ])

      let generalize = (image) => {
        this.Fetch({
          url: '/pubNum/generalize.ad',
          body: {
            array: JSON.stringify(array), 
            image,
            introduce,
            totalMoney,
            area: area[0],
            channel: channel[0],
            advertiser: this.userinfo.id
          }
        }).then(res => {
          if(res) {
            this.$vux.toast.show({
              type: 'text',
              text: '成功',
              width: '3em',
              onHide: () => {
                this.$router.replace({ path: '/Home' })
              }
            })
          }
        })
      }

      if(validate) {
        (async () => {
          const v1 = await uploadFile(image[0]);
          if(!v1) return false;
          const v2 = await generalize(v1)
        })()
      }
    },
    // 计算总价格
    totalMoneyFun() {
      let { womanValue, womanObject, manValue, manObject } = this;

      this.array = [];
      let pushMan = () => {
        this.array.push({
          id: manObject.id,
          count: manValue * manObject.price
        })
      }
      let pushWoman = () => {
        this.array.push({
          id: womanObject.id,
          count: womanValue * womanObject.price
        })
      }

      if(womanObject && manObject) {
        this.totalMoney = womanValue * womanObject.price + manValue * manObject.price;
        pushWoman();
        pushMan();
      } else if(womanObject) {
        this.totalMoney = womanValue * womanObject.price;
        pushWoman();
      } else if (manObject) {
        this.totalMoney = manValue * manObject.price;
        pushMan();
      }
    }
  },
  watch: {
    async area(val, oldval) {
      await this.getPrice();
      this.regionOptionsValue = this.regionOptions.filter(item => item.value == val[0])[0].name;
      await this.totalMoneyFun();
    },
    async channel(val, oldval) {
      await this.getPrice();
      this.channelOptionsValue = this.channelOptions.filter(item => item.value == val[0])[0].name;
      await this.totalMoneyFun();
    },
    manValue(val, oldval) {
      this.totalMoneyFun();
    },
    womanValue(val, oldval) {
      this.totalMoneyFun();
    },
    async man(val, oldval) {
      await this.getPrice();
      await this.totalMoneyFun();
    },
    async woman(val, oldval) {
      await this.getPrice();
      await this.totalMoneyFun();
    }
  },
  mounted() {
    this.queryMetadatas('投放区域').then(res => {
      if(res) {
        let arr = res.map(item => {
          return {
            name: item.content,
            value: item.id.toString()
          }
        })
        this.regionOptions = arr;
      }
    })
    this.queryMetadatas('投放渠道').then(res => {
      if(res) {
        let arr = res.map(item => {
          return {
            name: item.content,
            value: item.id.toString()
          }
        })
        this.channelOptions = arr;
      }
    })
  },
  computed: {
    ...mapGetters(['userinfo'])
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: inline-block;
  width: 100%;
  .logo {
    // background-image: url('../../static/bg10.png');
    background-color: $base-background-color;
    height: rem(150);
    background-size: cover;
    padding-top: rem(33);
    box-sizing: border-box;
    .upload {
      width: rem(90);
      height: rem(90);
      background-color: #F5F5F5;
      text-align: center;
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 1;
      .default {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
          width: rem(35);
          display: block;
        }
        &.active img {
          width: auto;
          max-width: 100%;
          max-height: 100%;
        }
        span {
          font-size: rem(10);
          float: left;
          width: 100%;
          margin-top: rem(10);
          color: #999999;
          transform: scale(0.8);
        }
      }
    }
  }
  .describe {
    width: rem(345);
    height: rem(200);
    margin: auto;
    background-color: #ffffff;
    margin-top: rem(-72);
    border-radius: rem(10);
    box-shadow: $default-shadow-style;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .describe-top {
      font-size: rem(12);
      padding: rem(55) 0 rem(15);
      margin: 0 rem(10);
      text-align: center;
      border-bottom: rem(1) solid #EAEAEA;
    }
    .describe-bottom {
      flex: 1;
      textarea {
        display: block;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: rem(15);
        resize: none;
        font-size: rem(14);
        border: none;
        &:focus {
          outline: none;
        }
      }
    }
  }
  .content {
    padding: 0 rem(38);
    .checked {
      display: inline-block;
      width: 100%;
      border-bottom: rem(1) solid $border-color;
      label {
        font-size: rem(12);
        color: $placeholder-color;
      }
      .check-gruop {
        display: flex;
        justify-content: center;
        align-items: center;
        .el-checkbox {
          flex: 1;
        }
        &:first-of-type {
          margin-top: rem(20);
          margin-bottom: rem(30);
        }
        &:last-child {
          margin-bottom: rem(20);
        }
      }
    }
    .total {
      .total-text {
        display: flex;
        align-items: baseline;
        margin-top: rem(18);
        margin-bottom: rem(10);
        label {
          flex: 1;
          font-size: rem(12);
          color: $default-color;
        }
        span {
          font-size: rem(16);
          color: $base-background-color;
        }
      }
      .info {
        padding: rem(15);
        background-color: $box-background;
        margin-bottom: rem(25);
        .info-group {
          display: flex;
          margin-bottom: rem(20);
          &:last-child {
            margin-bottom: 0;
          }
          label {
            display: inline-block;
            font-size: rem(12);
            color: $placeholder-color;
            width: rem(88);
          }
          .gruop-box {
            flex: 1;
            font-size: rem(12);
            color: $default-color;
            ul {
              li {
                &:first-child {
                  margin-bottom: rem(15);
                }
                span {
                  display: inline-block;
                  &:first-child {
                    width: rem(36);
                  }
                }
              }
            }
          }
        }
      }
    }
    .btns {
      display: flex;
      justify-content: center;
      margin-bottom: rem(60);
      .btn {
        display: inline-block;
        width: rem(130);
      }
    }
  }
}
</style>

<style lang="scss">
#PromotionApplication {
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
        .vux-cell-value {
          font-size: rem(12);
          color: $default-color;
        }
        .vux-cell-placeholder {
          font-size: rem(12);
        }
      }
  }
}

.check-gruop {
  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: $base-background-color;
    border-color: $base-background-color;
  }
  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: $base-background-color;
  }
  .el-input-number__decrease:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled), 
  .el-input-number__increase:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled),
  .el-input.is-active .el-input__inner, 
  .el-input__inner:focus,
  .el-checkbox__inner:hover,
  .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: $base-background-color;
  }
}
</style>

