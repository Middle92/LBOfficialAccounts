// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// fetch 使用
import Fetch from './utils/fetch'
Vue.prototype.Fetch = Fetch;
// cookie
import {getCookie, checkCookie} from '@/utils/cookie'

// Vue.use(wx);
/**
 * 全局引入vux
 */
import { Group, PopupPicker, CheckIcon, LoadingPlugin, ToastPlugin, Datetime } from 'vux';
Vue.component('group', Group)
Vue.component('popup-picker', PopupPicker)
Vue.component('check-icon', CheckIcon)
Vue.component('datetime', Datetime)
Vue.use(LoadingPlugin);
Vue.use(ToastPlugin);
/**
 * element-ui 组件引用
 */
import { Checkbox, InputNumber } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Checkbox);
Vue.use(InputNumber);


/**
 * npm install lodash -D
 * 全局注册组件
*/
import { upperFirst, camelCase } from 'lodash'
const requireComponent = require.context(
  // 其组件目录的相对路径
  './components',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /[A-Z]\w+\.(vue|js)$/
)
requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 剥去文件名开头的 `./` 和结尾的扩展名
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )

  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})

// 引入校验插件
import validate from './utils/validate';
Vue.prototype.validate = validate;

// 自定义指令
Vue.directive('bg-image', {
  inserted: (el, binding) => {
    el.style.backgroundImage = `url(${require(`../static/${binding.value}.png`)})`
  }
})

Vue.config.productionTip = false;
/* eslint-disable no-new */

// 转换location.search为对象
import searchObject from '@/utils/search-query'
// 路由跳转前
router.beforeEach((to, form, next) => {
  let phone = checkCookie('username'),
      password = checkCookie('password'),
      role = checkCookie('role'),
      userinfo = store.getters.userinfo,
      url = '',
      code = searchObject(location.search)["code"],
      appid = 'wx0bfbb3aa682af17d',
      redirect_uri = 'http://www.greenbonnet.cn',
      scope= 'snsapi_userinfo',
      state = searchObject(location.search)["state"];
  if(!code && process.env.EVN_CONFIG != 'dev') {
    location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`
  }
  if(to.meta.isRouter || userinfo && (to.meta.role === getCookie('role'))) {
    next();
  } else {
    let routeRole = (to.meta.role || to.params.role)
    if(!userinfo && phone && password && role) {
      if(routeRole !== getCookie('role')) {
        if(routeRole === 'guardian') router.replace({ path: '/Accendant' })
        else if(routeRole === 'advertiser') router.replace({ path: '/Login' })
        return;
      }
      if(getCookie('role') === 'guardian') url = '/guardian/login'
      if(getCookie('role') === 'advertiser') url = '/advertiser/login'
      store.getters.login(url, {
        phone: getCookie('username'), 
        password: getCookie('password')
      },(res) => {
        next()
      })
    } else {
      if(routeRole === 'guardian') router.replace({ path: '/Accendant' })
      else if(routeRole === 'advertiser') router.replace({ path: '/Login' })
    }
  }
})

window.vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

