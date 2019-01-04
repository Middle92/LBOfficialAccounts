<template>
    <div class="container">
        <item-component v-for="(item, index) of data" :key="index"
            :title="`您有一台设备(设备ID:${item.machine})`"
            :statusText="statusText(item.status)"
            :time="dataFormat(item.addTime, 'YYYY-MM-DD')"
            :content="item.content"
            :remark="item.remark"
            :status="Boolean(item.status-0)"
            :id="item.id"
        ></item-component>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import dataFormat from '@/utils/date-format';
export default {
    data() {
        return {
            isshow: false,
            data: [
                {
                    title: '您有一台设备(设备ID:123456789)',
                    statusText: '待补货',
                    time: '2018/09/09',
                    detail: '详情：这里是详情，设备的信息详情之类的，一般不会太多，如果多了可折叠。最多两行。',
                    status: true
                }, {
                    title: '您有一台设备(设备ID:123456789)',
                    statusText: '待补货',
                    time: '2018/09/09',
                    detail: '详情：这里是详情，设备的信息详情之类的，一般不会太多，如果多了可折叠。最多两行。',
                    status: false
                },
                {
                    title: '您有一台设备(设备ID:123456789)',
                    statusText: '待补货',
                    time: '2018/09/09',
                    detail: '详情：这里是详情，设备的信息详情之类的，一般不会太多，如果多了可折叠。最多两行。',
                    status: true
                }, {
                    title: '您有一台设备(设备ID:123456789)',
                    statusText: '待补货',
                    time: '2018/09/09',
                    detail: '详情：这里是详情，设备的信息详情之类的，一般不会太多，如果多了可折叠。最多两行。',
                    status: false
                },
                {
                    title: '您有一台设备(设备ID:123456789)',
                    statusText: '待补货',
                    time: '2018/09/09',
                    detail: '详情：这里是详情，设备的信息详情之类的，一般不会太多，如果多了可折叠。最多两行。',
                    status: true
                }, {
                    title: '您有一台设备(设备ID:123456789)',
                    statusText: '待补货',
                    time: '2018/09/09',
                    detail: '详情：这里是详情，设备的信息详情之类的，一般不会太多，如果多了可折叠。最多两行。',
                    status: false
                }
            ]
        }
    },
    methods: {
        dataFormat,
        popover() {
            this.isshow = true;
        },
        cancel(isshow) {
            this.isshow = isshow;
        },
        // 获取数据
        queryLogList() {
            this.Fetch({
                url: '/guardianLog/queryLogList.gu',
                body: {
                    id: this.userinfo.id
                }
            }).then(res => {
                this.data = res
            })
        },
        // status
        statusText(status) {
            switch(status) {
                case "0":
                    return '未解决';
                case "1":
                    return '已解决';
                default: 
                    return '暂无状态';
            }
        },
    },
    mounted() {
        this.queryLogList();
    },
    computed: {
        ...mapGetters(['userinfo'])
    },
    watch: {
        isshow(val, oldval) {
            if(val) {
                document.querySelector('body').style.position="fixed";
            } else {
                document.querySelector('body').style.position="static";
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    padding: rem(20) rem(15);
    .item {
        padding: rem(20) rem(20) rem(40);
        border-radius: rem(10);
        box-shadow: $default-shadow-style;
        background: $item-background;
        position: relative;
        margin-bottom: rem(34);
        .item-title {
            font-size: rem(15);
            color: $default-color;
        }
        .item-info {
            font-size: rem(12);
            line-height: rem(22);
            margin-top: rem(10);
            margin-bottom: rem(15);
            .status {
                padding-left: rem(10);
                padding-right: rem(10); 
                background-color: $item-status-background;
                color: $cancel-botton-color;
                border-radius: rem(11);
                margin-right: rem(30);
            }
            .time {
                color: $placeholder-color;
            }
        }
        .item-default {
            font-size: rem(12);
            line-height: rem(22);
            color: $placeholder-color;
        }
        .btn {
            position: absolute;
            bottom: rem(-20);
            font-size: rem(15);
            height: rem(40);
            line-height: rem(40);
            left: 50%;
            width: rem(130);
            margin-left: rem(-75);
        }
    }
}
</style>

