<template>
  <div class="container">
    <div class="content">
      <!-- 选择日期 -->
      <div class="date" id="date">
        <group>
          <!-- <calendar-component
            placeholder="选择日期" 
            v-model="startDateValue"
            :display-format="displayFormat"
            leng=2>
              <template slot="icon">
                <img class="data-icon" src="../../static/icon10.png" alt="">
              </template>
            </calendar-component> -->
            <datetime 
              placeholder="选择日期" 
              value-text-align="left"
              v-model="startDateValue" 
              format="YYYY-MM">
              </datetime>
        </group>
      </div>
      <!-- select -->
      <div class="choose" id="statisticsChoose">
        <ul>
          <li>
            <group class="select" v-bg-image="'bg07'">
              <popup-picker 
                value-text-align="left" 
                :data="list1" 
                v-model="value1"
                :columns="1"
                show-name
                placeholder="请选择公众号"></popup-picker>
            </group>
          </li>
          <li>
            <group class="select" v-bg-image="'bg08'">
              <popup-picker 
                value-text-align="left" 
                :data="list2" 
                v-model="value2"
                :columns="1"
                show-name
                placeholder="请选择区域"></popup-picker>
            </group>
          </li>
          <li>
            <group class="select" v-bg-image="'bg09'">
              <popup-picker 
                value-text-align="left" 
                :data="list3" 
                v-model="value3"
                :columns="1"
                show-name
                placeholder="请选择性别"></popup-picker>
            </group>
          </li>
        </ul>
      </div>
      <!-- 数字视图 -->
      <div class="number-view">
        <ul>
          <li>
            <span>关注总数量</span>
            {{countTotel}}
          </li>
          <li>
            <span>取消关注量</span>
            {{countCancel}}
          </li>
        </ul>
      </div>
    </div>
    <div id="main">
      <v-chart 
        :data="data"
        backgroundColor="transparent">
        <v-scale x type="timeCat" mask="YYYY/MM/DD" :tick-count="3" />
        <v-scale y :min="0" alias="" :tick-count="5" />
        <v-point
          :style="{
            stroke: '#fff',
            lineWidth: 1
          }"
          shape="smooth" />
        <v-line shape="smooth" />
      </v-chart>
    </div>
  </div>
</template>

<script>
// let echarts = require("echarts");
import { VChart, VLine, VPoint, VScale, VTooltip } from 'vux'
import format from '@/utils/date-format';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      // 开始日期值
      // startDateValue: [
      //   new Date(),
      //   new Date().setDate(new Date().getDate() + 1)
      // ],
      startDateValue: null,
      // 结束日期值
      // endDateValue: null,
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
      list1: [],
      value1: [],
      list2: [],
      value2: [],
      list3: [
        {
          name: '男',
          value: '1'
        }, {
          name: '女',
          value: '2'
        }, {
          name: '其他',
          value: ''
        }
      ],
      value3: [],
      // chart
      data: [{ time: '2019/09/01', tem: 0 }],
      countTotel: 0,
      countCancel: 0
    };
  },
  methods: {
    // 日期format
    // displayFormat(value, type) {
    //   let dateValue;
    //   if(type === 'array') {
    //     dateValue = value.map((elem, index) => {
    //       return format(elem, 'YYYY年MM月DD日');
    //     })
    //   }
    //   return typeof value === 'string' ? value : dateValue.join('-')
    // },
    // select 请求
    selectFun(url, body, callback) {
      this.Fetch({
        url: url,
        body
      }).then(res => {
        callback(res)
      })
    },
    // v-chart
    dataStatistics() {
      let { startDateValue, value1, value2, value3 } = this; 
      this.Fetch({
        url: '/data/dataStatistics.ad',
        body: {
          advertiser: this.userinfo && this.userinfo.id,
          time: startDateValue,
          pub: value1[0],
          area: value2[0],
          sex: value3[0]
        }
      }).then(res => {
        this.countTotel = res.number.countTotel;
        this.countCancel = res.number.countCancel;
        this.data = res.data.map(item => {
          for (const key in item) {
            if (item.hasOwnProperty(key)) {
              const tem = item[key];
              const time = key;
              return {
                time,
                tem
              }
            }
          }
        })
      })
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
  components: {
    VChart,
    VPoint,
    VLine,
    VScale,
    VTooltip
  },
  computed: {
    ...mapGetters(['userinfo'])
  },
  mounted() {
    // 公众号
    if(this.userinfo) {
      this.selectFun('/pubNum/queryPubNumsByAd.ad', {
          id: this.userinfo.id,
        }, (res) => {
        this.list1 = res.map(item => {
          return {
            name: item.name,
            value: item.id.toString()
          }
        })}
      )
    }
    // 区域
    this.selectFun('/metadata/queryMetadatas.ad', {
        name: '区域',
      }, (res) => {
        this.list2 = res.map(item => {
          return {
            name: item.name,
            value: item.id.toString()
          }
      })}
    )
    this.dataStatistics();
  },
  watch: {
    startDateValue(val, oldval) {
      this.dataStatistics();
    },
    value1(val, oldval) {
      this.dataStatistics();
    },
    value2(val, oldval) {
      this.dataStatistics();
    },
    value3(val, oldval) {
      this.dataStatistics();
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  .content {
    padding: 0 rem(15);
    .date {
      display: block;
      position: relative;
      // line-height: rem(22);
      // height: rem(22);
      // margin: rem(25) 0 rem(20);
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
        font-size: rem(15);
        .el-icon-date {
          position: absolute;
          vertical-align: middle;
          font-size: rem(22);
          color: #cccccc;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        span {
          font-size: rem(22);
        }
      }
    }
    .choose {
      font-size: 0;
      margin-bottom: rem(11);
      li {
        width: 33.3%;
        display: inline-block;
        box-sizing: border-box;
        &:first-child {
          padding-right: rem(5);
        }
        &:last-child {
          padding-left: rem(5);
        }
        &:not(:first-child:last-child) {
          padding: 0 rem(5);
        }
      }
    }
    .number-view {
      padding: rem(38) 0;
      border: rem(1) solid $border-color;
      box-shadow: $default-shadow-style;
      font-size: 0;
      margin-bottom: rem(21);
      li {
        width: 50%;
        display: inline-block;
        font-size: rem(30);
        color: $base-background-color;
        padding-left: rem(30);
        box-sizing: border-box;
        span {
          display: block;
          font-size: rem(12);
          color: $placeholder-color;
          margin-bottom: rem(15);
        }
      }
    }
  }
  #main {
    flex: 1;
    overflow: hidden;
    background-color: $echarts-background;
    display: flex;
    align-items: center;
  }
}
</style>

<style lang="scss">
#statisticsChoose {
  ul {
    display: flex;
    .select {
      background-size: cover;
      padding-top: 0;
      border-radius: 4px;
      overflow: hidden;
    }
    .weui-cells {
      margin: 0;
      height: rem(38);
      line-height: rem(38);
      border-radius: rem(5);
      background-size: cover;
      background-color: transparent;
      .weui-cell {
        padding: 0 rem(10);
        .vux-cell-primary {
          white-space: pre;
          overflow: hidden;
          .vux-cell-value {
            font-size: rem(13);
            color: #fff;
          }
          .vux-cell-placeholder {
            font-size: rem(13);
            position: absolute;
            left: 0;
          }
        }
        .weui-cell__ft {
          display: inline-block;
          border: rem(4.5) solid #fff;
          border-left-color: transparent;
          border-right-color: transparent;
          border-bottom-color: transparent;
          position: absolute;
          right: rem(10);
          top: 50%;
          padding: 0;
          &::after {
            content: initial;
          }
        }
      }
    }
  }
  // .blue .weui-cells {
  //   background-image: url("../../static/bg07.png");
  // }
  // .green .weui-cells {
  //   background-image: url("../../static/bg08.png");
  // }
  // .origin .weui-cells {
  //   background-image: url("../../static/bg09.png");
  // }
}

#date {
  .weui-cells {
    .vux-datetime {
      padding: 0;
      font-size: rem(15);
      line-height: rem(22);
      height: rem(22);
      text-decoration: none;
      .vux-datetime-value {
        &::after {
          width: rem(22);
          height: rem(22);
          border: none;
          transform: none;
          background-image: url('../../static/icon10.png');
          background-size: cover;
          top: 0;
          margin-top: 0;
        }
      }
    }
  }
}
</style>
