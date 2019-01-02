import Vue from 'vue';
import Vuex from 'vuex';
import Fetch from '@/utils/fetch'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        code: null, // 微信公众好获取code
        userinfo: null, // 用户信息
    },
    getters: {
        // 返回code
        code(state) {
            return state.code;
        },
        // 返回userinfo
        userinfo(state) {
            return state.userinfo;
        },
        // 维护人员登陆
        login: (state) => (url, body, callback, role) => {
            Fetch({
                url: url,
                code: true,
                body: body
            }, '登录中...').then(res => {
                if (res) {
                    if(!res) return;
                    state.userinfo = res;
                    // 登陆成功后的回调
                    vm.$vux.toast.show({
                        text: '登陆成功',
                        width: '3em',
                        onHide: () => {
                          // 保存账号密码
                          setCookie("username", phone);
                          setCookie("password", password);
                          // 是否有role
                          role && setCookie("role", role);
                          // 回调
                          callback(res);
                        }
                    })
                    
                }
            })
        }
    },
    mutations: {
        // 设置code
        setCode(state, code) {
            state.code = code;
        },
        // 设置userinfo
        setUserinfo(state, userinfo) {
            state.userinfo = userinfo;
        },
        // 继承userinfo
        assignUserinfo(state, userinfo) {
            state.userinfo = Object.assign(state.userinfo, userinfo);
        }
    }
})

export default store;