<template>
    <div class="modal" v-show="isShow">
        <div class="madal-content">
            <div class="modal-header">
                备注
                <img class="icon" src="../../static/icon09.png" alt="" @click="cancel">
            </div>
            <div class="modal-body">
                <textarea v-model="remark" placeholder="请填写设备故障具体信息"></textarea>
            </div>
            <div class="modal-footer">
                <button class="btn default" @click="submit">提交</button>
            </div>
        </div>
    </div>
</template>

<script>
import commit from '@/utils/commit';
export default {
    data() {
        return {
            isShow: false,
            id: null,
            remark: null
        }
    },
    methods: {
        cancel() {
            this.isShow = false;
        },
        submit() {
            let { id, remark } = this;
            this.Fetch({
                url: '/guardianLog/editDate.gu',
                body: {
                    id,
                    remark
                }
            }).then(res => {
            })
        }
    },
    mounted() {
        commit.$on('modal', (res) => {
            this.id = res;
            this.isShow = true;
        })
    }
}
</script>

<style lang="scss" scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    .madal-content {
        display: flex;
        flex-direction: column;
        background-color: $modal-background-color;
        padding: rem(15) rem(20) rem(20);
        width: rem(250);
        height: rem(250);
        box-sizing: border-box;
        margin: auto;
        border-radius: rem(10);
        .modal-header {
            font-size: rem(15);
            .icon {
                width: rem(12);
                height: rem(12);
                float: right;
            }
        }
        .modal-body {
            flex: 1;
            height: rem(122);
            margin-top: rem(20);
            margin-bottom: rem(20);
            textarea {
                box-sizing: border-box;
                border: none;
                outline: none;
                height: 100%;
                width: 100%;
                resize: none;
            }
        }
        .modal-footer {
            button.btn {
                width: rem(130);
            }
        }
    }
}
</style>

