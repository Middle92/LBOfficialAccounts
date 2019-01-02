<template>
    <div class="item">
        <p class="item-title">{{title}}</p>
        <div class="item-info">
            <span class="status">
                {{statusText}}
            </span>
            <span class="time">
                {{time}}
            </span>
        </div>
        <div class="item-detail">内容：{{content}}</div>
        <div class="item-detail">备注：{{remark}}</div>
        <!-- <button class="btn" :class="status ? 'default' : 'disabled'" @click="callback">{{status ? '标为解决' : '已解决'}}</button> -->
        <button class="btn" :class="status ? 'default' : 'disabled'" @click="modalCommit">{{status ? '标为解决' : '已解决'}}</button>
    </div>
</template>

<script>
import commit from '@/utils/commit';
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        statusText: {
            type: String,
            default: ''
        },
        time: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        remark: {
            type: String,
            default: ''
        },
        status: {
            type: Boolean,
            default: false
        },
        id: {
            default: ''
        }
    },
    data() {
        return {}
    },
    methods: {
        modalCommit() {
            if(this.status) commit.$emit('modal', this.id)
        }
    }
}
</script>

<style lang="scss" scoped>
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
    .item-detail {
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
</style>

