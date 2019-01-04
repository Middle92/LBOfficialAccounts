<template>
    <div class="conatiner" v-if="data && data.length > 0">
        <div v-for="(item, index) in data" :key="index" @click="editDate">
            <span class="time">{{dateFormat(new Date(item.addTime).getTime(), 'YYYY-MM-DD')}}</span>
            <div class="content">
                <p class="content-title" :class="{'read': !item.dealTime}">{{item.title}}</p>
                <span class="content-default">{{item.content}}</span>
            </div>
        </div>
        <!-- <span class="time">昨天 21:00</span>
        <div class="content">
            <p class="content-title read">
                您的余额已经不足
            </p>
            <span class="content-default">
                这里是描述的详情，类似您的余额已经不足，请充值
            </span>
        </div>
        <span class="time">2018/10/23  21:00</span>
        <div class="content">
            <p class="content-title">
                您的余额已经不足
            </p>
            <span class="content-default">
                这里是描述的详情，类似您的余额已经不足，请充值保 证余额充足！
            </span>
        </div> -->
    </div>
    <div v-else class="no-data">暂无数据</div>
</template>

<script>
import { mapGetters } from 'vuex';
import dateFormat from '@/utils/date-format'; 
export default {
    data() {
        return {
            data: [],
            remark: null
        }
    },
    computed: {
        ...mapGetters(['userinfo'])
    },
    methods: {
        dateFormat,
        messageList() {
            this.Fetch({
                url: '/message/messageList.ad',
                body: {
                    id: this.userinfo.id
                }
            }).then(res => {
                this.data = res;
            })
        },
        editDate() {
            let { remark } = this
            this.Fetch({
                url: '/message/editDate.ad',
                body: {
                    id: this.userinfo.id
                }
            }).then(res => {
                console.log(res);
                // this.data = res;
            })
        }
    }, 
    mounted() {
        this.messageList();
    }
}
</script>

<style lang="scss" scoped>
.conatiner {
    padding: 0 rem(15);
    display: block;
    .time {
        display: block;
        font-size: rem(12);
        text-align: center;
        margin-top: rem(20);
        margin-bottom: rem(15);
        color: $placeholder-color;
    }
    .content {
        padding: rem(20) rem(15);
        background-color: $box-background;
        border-radius: rem(5);
        .content-title {
            font-size: rem(15);
            color: $default-color;
            position: relative;
            &.read::after {
                content: '';
                display: inline-block;
                width: rem(7);
                height: rem(7);
                background-color: $read-background;
                position: absolute;
                right: 0;
            }
        }
        .content-default {
            display: inline-block;
            font-size: rem(12);
            color: $content-color;
            line-height: rem(26);
            margin-top: rem(10)
        }
    }
}
</style>

