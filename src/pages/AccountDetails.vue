<template>
    <div class="container">
        <!-- 选择日期 -->
        <!-- <div class="date" id="date">
            <group>
                <calendar-component
                    placeholder="选择日期" 
                    v-model="dateValue"
                    :display-format="displayFormat"
                    leng=2>
                    <template slot="icon">
                        <img class="data-icon" src="../../static/icon10.png" alt="">
                    </template>
                    </calendar-component>
            </group>
        </div> -->
        <group class="select">
            <popup-picker 
                :data="selectData" 
                v-model="selectValue" 
                value-text-align="left"
                :columns="1"
                show-name
                placeholder="选择公众号"></popup-picker>
        </group>
        <div class="content" v-if="data && data.length > 0">
            <div class="item" v-for="(item, index) in data" :key="index">
                <p class="item-title">绿葆公众号</p>
                <div class="item-content">
                    <div class="item-list">
                        <p>￥{{item.completeMoney}}</p>
                        <span>已吸粉价格</span>
                    </div>
                    <div class="item-list">
                        <p>￥{{item.money}}</p>
                        <span>余额</span>
                    </div>
                </div>
            </div>
            <!-- <div class="item">
                <p class="item-title">绿葆公众号</p>
                <div class="item-content">
                    <div class="item-list">
                        <p>￥233,000</p>
                        <span>已吸粉价格</span>
                    </div>
                    <div class="item-list">
                        <p>￥1,000</p>
                        <span>余额</span>
                    </div>
                </div>
            </div>
            <div class="item">
                <p class="item-title">绿葆公众号</p>
                <div class="item-content">
                    <div class="item-list">
                        <p>￥233,000</p>
                        <span>已吸粉价格</span>
                    </div>
                    <div class="item-list">
                        <p>￥1,000</p>
                        <span>余额</span>
                    </div>
                </div>
            </div> -->
        </div>
        <div v-else class="no-data">
            暂无数据
        </div>
    </div>
</template>

<script>
import format from '@/utils/date-format';
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            // dateValue: [],
            selectData: [],
            selectValue: [],
            data: null
        }
    },
    methods: {
        // displayFormat(value, type) {
        //     let dateValue;
        //     if(type === 'array') {
        //         dateValue = value.map((elem, index) => {
        //             return format(elem, 'YYYY年MM月DD日');
        //         })
        //     }
        //     return typeof value === 'string' ? value : dateValue.join('-')
        // }
        // 账户明细
        queryPubNumsByAd() {
            this.Fetch({
                url: '/pubNum/queryPubNumsByAd.ad',
                body: {
                    id: this.userinfo.id,
                    name: this.selectValue[0]
                }
            }).then(res => {
                this.data = res;
                this.selectData = res.map(item => {
                    return {
                        name: item.name,
                        value: item.id.toString()
                    }
                })
            })
        }
    },
    computed: {
        ...mapGetters(['userinfo'])
    },
    mounted() {
        // 公众号
        this.queryPubNumsByAd();
    }
}
</script>

<style lang="scss" scoped>
.container {
    padding: 0 rem(15);
    .content {
        .item {
            padding: rem(24) rem(15);
            border: rem(1) solid $border-color;
            margin-top: rem(15);
            border-radius: rem(5);
            box-shadow: $default-shadow-style;
            .item-title {
                color: $default-color;
                font-size: rem(15)
            }
            .item-content {
                display: flex;
                .item-list {
                    flex: 1;
                    p {
                        font-size: rem(23);
                        color: $base-background-color;
                        margin-top: rem(20);
                    }
                    span {
                        color: $placeholder-color;
                        display: block;
                        font-size: rem(12);
                        margin-top: rem(10);
                    }
                }
            }
        }
    }
}
</style>

<style lang="scss">
.select {
    padding-top: rem(15);
    .weui-cells {
        margin: 0;
        background: $base-background-color;
        height: rem(38);
        line-height: rem(38);
        border-radius: rem(5);
        &::before, &::after {
            content: initial;
        }
        .weui-cell {
            padding-top: 0;
            padding-bottom: 0;
            .vux-cell-value {
                color: $default-botton-color;
                font-size: rem(15);
            }
            .vux-cell-placeholder {
                color: $default-botton-color;
                font-size: rem(15);
            }
            .weui-cell__ft {
                &::after {
                    border-color: $default-botton-color;
                    height: rem(6);
                    width: rem(6);
                }
            }
        }
    }
}
</style>



