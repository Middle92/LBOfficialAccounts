/**
 * @param {string} url 接口地址
 * @param {string} method 请求方法：GET、POST，只能大写
 * @param {JSON} [body=''] body的请求参数，默认为空
 * @param {JSON} [header={}] 设置请求头，默认空对象
 * @param {String,Boolean} [type='qs'] 设置请求数据，json/form qs/json/false false:不做任何处理
 * @return 返回Promise
 * options = {
 * 	catchs: 异常处理，控制台抛出的异常是否自己处理：true 是，false 否 由公共方法统一处理优化显示给用户 默认 false
 * 	credentials: 请求带上cookies，是每次请求保持会话一直
 * 	method: 请求使用的方法，如 GET、POST
 * 	headers: 请求的头信息，形式为 Headers 对象或 ByteString。
 * 	body: 请求的 body 信息：可能是一个 Blob、BufferSource、FormData、URLSearchParams 或者 USVString 对象。注意 GET 或 HEAD 方法的请求不能包含 body 信息。
 * 	mode: 请求的模式，如 cors、no-cors 或者same-origin。是否允许跨域请求
 * 	cache:  请求的 cache 模式: default, no-store, reload, no-cache, force-cache, or only-if-cached.
 * }
 */
import qs from 'qs'
import Vue from 'vue'
// 转换location.search为对象
import searchObject from './search-query'

import { LoadingPlugin, ToastPlugin } from 'vux';
Vue.use(LoadingPlugin);
Vue.use(ToastPlugin);
let vm2 = new Vue();

const Fetch = (options, text='加载中...') => {
    vm2.$vux.loading.show({
        text
    })
    let { url, method='post', body, headers, type="qs", code, credentials = true } = options;
    url = process.env.API_ROOT + url
    // 是否自带code字段
    if(code) {
        body = Object.assign(body, {
            code: searchObject(location.search)["code"] || vm.$store.getters.code
        })
    }
    if(type == 'qs') {
        // 表单格式
        body = qs.stringify(body);
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    } else if(type == 'json') {
        // json格式
        body = JSON.stringify(body);
        headers = {
            'Content-Type': 'application/json'
        }
    }
    return fetch(url, {
        method,
        body,
        headers: Object.assign({}, headers),
        credentials: credentials ? 'include' : 'omit',
    })
}

const FetchRace = (options, text='加载中...', timeout = 3000) => {
    return Promise.race([
        Fetch(options, text), 
        new Promise((resolve, rejects) => {
            setTimeout(() => {
                
                rejects(new Error('request timeout'))
            }, timeout)
        })
    ])
    .then(res => {
        return res.json()
    })
    .then(res => {
        vm2.$vux.loading.hide();
        // 处理header
        // 如果 code 返回不是 000 处理错误提示`
        if(!res.body && res.error) {
            vm2.$vux.toast.show({
                type: 'text',
                text: res.error,
                width: '3em'
            })
            return false
        }
        if(res.header.code != '000') {
            vm2.$vux.toast.show({
                type: 'text',
                text: res.body,
                width: '3em'
            })
            return false
        }
        // code 是 000 返回body
        return res.body
    }).catch(err => {
        vm2.$vux.loading.hide();
        if(/request timeout/.test(err.toString())) {
            vm2.$vux.toast.show({
                type: 'text',
                text: '请求超时'
            })
        } else {
            vm2.$vux.toast.show({
                type: 'text',
                text: err.toString()
            })
        }
        throw new Error(err);
    })
}

export default FetchRace;