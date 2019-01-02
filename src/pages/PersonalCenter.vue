<template>
    <div>
        <div class="bg" v-bg-image="'bg11'">
            <img class="icon" src="../../static/icon08.png" alt="" @click="toSystemMessage">
        </div>
        <div class="content">
            <div class="head">
                <img :src="userinfo && userinfo.headImg" alt="">
            </div>
            <div class="name">{{userinfo && userinfo.name}}</div>
            <div class="form-gruop" v-if="userinfo">
                <div class="group-inline">
                    <label for="">手机号码</label>
                    <span class="gruop-input">{{userinfo.phone}}</span>
                </div>
                <div class="group-inline">
                    <label for="">账户余额</label>
                    <span class="gruop-input">{{userinfo.money}}元</span>
                    <router-link to="/AccountDetails">账户明细</router-link>
                </div>
            </div>
            <div class="btn-content">
                <button class="btn default" @click="loginOut">退出登录</button>
            </div>
        </div>
    </div> 
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {}
    },
    computed: {
        ...mapGetters(['userinfo'])
    },
    mounted() {
        this.Fetch({
            url: '/advertiser/personalCenter.ad',
            body: {
                id: this.userinfo.id
            }
        }).then(res => {
            if(res) {
                this.$store.commit('assignUserinfo', res);
            }
        })
    },
    methods: {
        loginOut() {
            this.Fetch({
                url: '/advertiser/loginOut.ad'
            }).then(res => {
                console.log(res)
                if(res) {
                    this.$vux.toast.show({
                        type: 'text',
                        text: '退出登录成功',
                        onHide: () => {
                            // alert('x')
                        }
                    })
                }
            })
        },
        toSystemMessage() {
            this.$router.push({ path: '/SystemMessage' })
        }
    }
}
</script>

<style lang="scss" scoped>
.bg {
    height: rem(130);
    // background-image: url("../../static/bg11.png");
    background-size: cover;
    position: relative;
    .icon {
        width: rem(19);
        position: absolute;
        top: rem(15);
        right: rem(16);
    }
}
.content {
    margin-top: rem(-50);
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 rem(38);
    .head {
        display: inline-block;
        width: rem(100);
        height: rem(100);
        border-radius: 50%;
        background-color: #ffffff;
        overflow: hidden;
        img {
            max-width: 100%;
            max-height: 100%;
        }
    }
    .name {
        font-size: rem(21);
        color: $base-background-color;
        margin-top: rem(19);
    }
    .form-gruop {
        width: 100%;
        margin-top: rem(40);
    }
    .btn-content {
        padding-left: rem(15);
        padding-right: rem(15);
        width: 100%;
        box-sizing: border-box;
        margin-top: rem(50);
        button {
            width: 100%;
            box-sizing: border-box;
        }
    }
}
</style>

