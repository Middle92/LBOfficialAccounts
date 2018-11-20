<template>
  <div class="container">
    <div class="content">
      <!-- 选择日期 -->
      <div class="date">
        <!-- 开始时间 -->
        <div class="date-item">
          <el-date-picker
            ref="startDate"
            v-model="startDateValue"
            type="date"
            placeholder="选择开始日期"
            :picker-options="startPickerOptions"
            @change="changeDate">
          </el-date-picker>
        </div>
        <!-- 结束时间 -->
        <div class="date-item">
          <el-date-picker
            ref="endDate"
            v-model="endDateValue"
            :disabled="!startDateValue"
            type="date"
            placeholder="选择结束日期"
            :picker-options="endPickerOptions">
          </el-date-picker>
        </div>
        <!-- 过滤时间的值 -->
        <div class="date-modle" @click="triggerDate">
          <span>{{startDateValue | formatDate('yyyy')}}</span> {{startDateValue | formatDate('MM月dd日')}} - 
          <span>{{endDateValue | formatDate('yyyy')}}</span> {{endDateValue | formatDate('MM月dd日')}}
          <i class="el-icon-date"></i>
        </div>
      </div>
      <!-- select -->
      <div class="choose">
        <ul>
          <li>
            <el-select class="choose-input blue" v-model="value1" placeholder="绿葆公众号">
              <el-option value="绿葆公众号"></el-option>
            </el-select>
          </li>
          <li>
            <el-select class="choose-input green" v-model="value2" placeholder="区域">
              <el-option value="区域"></el-option>
            </el-select>
          </li>
          <li>
            <el-select class="choose-input origin" v-model="value3" placeholder="男">
              <el-option value="男"></el-option>
            </el-select>
          </li>
        </ul>
      </div>
      <!-- 数字视图 -->
      <div class="number-view">
        <ul>
          <li>
            <span>关注总数量</span>
            356000
          </li>
          <li>
            <span>取消关注量</span>
            1200
          </li>
        </ul>
      </div>
    </div>
    <div id="main"></div>
  </div>
</template>

<script>
let echarts = require("echarts");
export default {
  data() {
    return {
      // 开始日期值
      startDateValue: Date.now(),
      // 结束日期值
      endDateValue: null,
      // 开始日期选项
      startPickerOptions: {
        disabledDate(time) {
          return time.getTime() < new Date(Date.now() - 24 * 60 * 60 * 1000);
        }
      },
      // 结束日期选项
      endPickerOptions: {
        disabledDate: time => {
          return time.getTime() <= this.startDateValue;
        }
      },
      // choose值
      value1: "绿葆公众号",
      value2: "区域",
      value3: "男"
    };
  },
  methods: {
    triggerDate() {
      this.$refs.startDate.$el.querySelector("input").focus();
    },
    changeDate() {
      this.$refs.endDate.$el.querySelector("input").focus();
    }
  },
  filters: {
    formatDate(value, fmt = "yyyy-MM-dd hh:mm:ss") {
      if (value) {
        let date = new Date(value);
        var o = {
          "M+": date.getMonth() + 1, //月份
          "d+": date.getDate(), //日
          "h+": date.getHours(), //小时
          "m+": date.getMinutes(), //分
          "s+": date.getSeconds(), //秒
          "q+": Math.floor((date.getMonth() + 3) / 3), //季度
          S: date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(
            RegExp.$1,
            (date.getFullYear() + "").substr(4 - RegExp.$1.length)
          );
        }
        for (var k in o) {
          if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(
              RegExp.$1,
              RegExp.$1.length == 1
                ? o[k]
                : ("00" + o[k]).substr(("" + o[k]).length)
            );
          }
        }
        return fmt;
      } else {
        return value;
      }
    }
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    setTimeout(() => {
      console.log(document.getElementById("main").clientHeight);
      let myChart = echarts.init(document.getElementById("main"));
      // 绘制图表
      let option = {
        grid: {
          top: 10,
          bottom: 40
        },
        xAxis: {
          type: "category",
          data: ["09/01", "09/02", "09/03", "09/04", "09/05"]
        },
        yAxis: {
          type: "value",
          offset: -10
        },
        series: [
          {
            data: [20, 40, 60, 80, 100],
            type: "line"
          }
        ]
      };
      myChart.setOption(option);
    })
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  .content {
    padding: 0rem 0.4rem;
    .date {
      display: block;
      position: relative;
      line-height: 0.58rem;
      height: 0.58rem;
      margin: 0.66rem 0 0.53rem;
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      .date-item {
        width: 50%;
        height: 100%;
        display: inline-block;
        float: left;
        opacity: 0;
        overflow: hidden;
      }
      .date-modle {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        font-size: 0.4rem;
        .el-icon-date {
          position: absolute;
          vertical-align: middle;
          font-size: 0.58rem;
          color: #cccccc;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        span {
          font-size: 0.61rem;
        }
      }
    }
    .choose {
      font-size: 0;
      margin-bottom: 0.13rem;
      li {
        width: 33.3%;
        display: inline-block;
        box-sizing: border-box;
        &:first-child {
          padding-right: 0.13rem;
        }
        &:last-child {
          padding-left: 0.13rem;
        }
        &:not(:first-child:last-child) {
          padding: 0 0.13rem;
        }
      }
    }
    .number-view {
      padding: 1.013rem 0;
      border: 1px solid RGBA(234, 234, 234, 1);
      box-shadow: 0px 5px 10px RGBA(170, 170, 170, 0.2);
      font-size: 0;
      margin-bottom: 0.56rem;
      li {
        width: 50%;
        display: inline-block;
        font-size: 0.8rem;
        color: RGBA(26, 188, 156, 1);
        padding-left: 0.8rem;
        box-sizing: border-box;
        span {
          display: block;
          font-size: 0.32rem;
          color: RGBA(153, 153, 153, 1);
          margin-bottom: 0.4rem;
        }
      }
    }
  }
  #main {
    flex: 1;
    overflow: hidden;
  }
}
.el-date-editor.el-input {
  float: left;
  width: 100%;
}
</style>

<style lang="scss">
.choose-input {
  width: 100%;
  .el-input {
    font-size: 0.32rem;
    input {
      padding-left: 0.13rem;
      height: 1.013rem;
      line-height: 1.013rem;
      background-size: cover;
      color: #fff;
    }
    .el-input__icon {
      font-size: 0.32rem;
      line-height: 1.013rem;
    }
  }
  &.blue input {
    background-image: url("../assets/bg07.png");
  }
  &.green input {
    background-image: url("../assets/bg08.png");
  }
  &.origin input {
    background-image: url("../assets/bg09.png");
  }
}
</style>


