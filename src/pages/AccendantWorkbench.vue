<template>
    <div class="container">
        <div class="bg" v-bg-image="'bg05'">
            <div class="title">
                <p>工作台</p>
                <span>workbench</span>
            </div>
            <span @click="routerPush">查看更多</span>
        </div>
        <div class="content">
            <item-component v-for="(item, index) of data" :key="index"
                :title="`您有一台设备(设备ID:${item.machine})`"
                :statusText="statusText(item.status)"
                :time="dataFormat(item.addTime, 'YYYY-MM-DD')"
                :content="item.content"
                :remark="item.remark"
                :status="item.status"
                :id="item.id"
            ></item-component>
        </div>
        <div class="question">
            <p class="title">问题及建议
                <span>Question & Suggestion</span>
            </p>
            <textarea v-model="content" placeholder="提交在日常维护中无法解决的问题或建议"></textarea>
        </div>
        <button class="btn default" @click="submit">提交</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import dataFormat from '@/utils/date-format';
import commit from '@/utils/commit';
export default {
    data() {
        return {
            data: [],
            content: null
        }
    },
    computed: {
        ...mapGetters(['userinfo'])
    },
    methods: {
        dataFormat,
        // 跳转
        routerPush() {
            this.$router.push({ path: '/AccendantWorkbenchMore' });
        },
        // 获取数据
        queryLogList() {
            this.Fetch({
                url: '/guardianLog/queryLogList.gu',
                body: {
                    id: this.userinfo.id
                }
            }).then(res => {
                if(res) {
                    this.data = res.splice(0, 2)
                }
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
        // 提交问题及建议
        submit() {
            let { content } = this;

            let validate = this.validate([
                {
                    value: content,
                    required: true,
                    requiredMassage: '请填写问题及建议'
                }
            ])

            if(validate) {
                this.Fetch({
                    url: '/suggestions/add.gu',
                    body: {
                        guardian: this.userinfo.name,
                        content
                    }
                }).then(res => {
                    if(res) {
                        this.$vux.toast.show({
                            type: 'text',
                            text: '提交成功',
                            width: '3em',
                            onHide: () => {
                                this.content = '';
                            }
                        })
                    }
                })
            }
        }
    },
    mounted() {
        this.queryLogList();
        commit.$on('reset', () => {
            this.queryLogList()
        })
    }
}
</script>

<style lang="scss" scoped>
.container {
    padding: 0 rem(15);
    .bg {
        height: rem(150);
        background-color: $base-background-color;
        // background-image: url("../../static/bg05.png");
        background-size: cover;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        padding: 0 rem(15);
        padding-bottom: rem(47);
        box-sizing: border-box;
        .title {
            flex: 1;
            p {
                font-size: rem(23);
                color: $default-botton-color;
                letter-spacing: rem(15);
                display: block;
            }
            span {
                text-transform: uppercase;
                font-size: rem(15);
                font-weight: bold;
                color: rgba(255, 255, 255, .5);
                display: block;
                margin-top: rem(10);
            }
        }
        & > span {
            font-size: rem(12);
            display: inline-block;
            color: $default-botton-color;
            background-color: rgba(0, 140, 112, .5);
            padding: rem(5) rem(9);
            border-radius: rem(11);
        }
    }
    .content {
        padding-top: rem(106);
    }
    .question {
        .title {
            font-size: rem(15);
            color: $default-botton-background-color;
            margin-top: rem(49);
            span {
                margin-left: rem(11);
                text-transform: uppercase;
                color: $disabled-botton-background-color;
            }
        }
        textarea {
            box-sizing: border-box;
            width: 100%;
            height: rem(150);
            padding: rem(20) rem(15);
            border-radius: rem(5);
            margin-top: rem(17);
            background-color: $box-background;
            border: none;
            resize: none;
            outline: none;
        }
    }
    & > .btn {
        width: rem(250);
        margin-top: rem(25);
        margin-bottom: rem(30);
    }
}
</style>

