<template>
  <div>
    <div class="logo">
      <div class="upload">
        <img src="@/assets/imgs/icon07.png" alt="">
        <span>选择上传文件</span>
      </div>
    </div>
    <div class="describe">
      <div class="describe-top">
        <span>上传二维码</span>
      </div>
      <div class="describe-bottom">
        <textarea name="" id="" placeholder="请输入您的二维码描述"></textarea>
      </div>
    </div>
    <div class="content">
      <div class="group">
        <label for="">投放区域</label>
        <el-select class="gruop-input" placeholder="请选择投放区域">
          <el-option value="区域">
          </el-option>
        </el-select>
      </div>
      <div class="group">
        <label for="">投放渠道</label>
        <el-select class="gruop-input" placeholder="请选择投放渠道">
          <el-option value="渠道">
          </el-option>
        </el-select>
      </div>
      <div class="checked">
        <label for="">选择投放人群和吸粉量</label>
        <div class="check-gruop">
          <el-checkbox v-model="checked">男</el-checkbox>
          <el-input-number size="mini"></el-input-number>
        </div>

        <div class="check-gruop">
          <el-checkbox v-model="checked">女</el-checkbox>
          <el-input-number size="mini"></el-input-number>
        </div>
      </div>
      <div class="total">
        <div class="total-text">
          <label for="">合计价格</label>
          <span>56000.00元</span>
        </div>
        <div class="info">
          <div class="info-group">
            <label for="">投放区域</label>
            <div class="gruop-box">未选择</div>
          </div>
          <div class="info-group">
            <label for="">投放渠道</label>
            <div class="gruop-box">广州讯猫软件有限公司</div>
          </div>
          <div class="info-group">
            <label for="">投放人群</label>
            <div class="gruop-box">
              <ul>
                <li>
                  <span>男</span>
                  <span>1000个</span>
                </li>
                <li>
                  <span>女</span>
                  <span>500个</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="btns">
        <button class="btn cancel">取消</button>
        <button class="btn default">提交审核</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  background-image: url('../assets/imgs/bg10.png');
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
    img {
      width: rem(35);
      display: block;
    }
    span {
      font-size: rem(10);
      float: left;
      width: 100%;
      margin-top: rem(10);
      color: #999999;
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
</style>


