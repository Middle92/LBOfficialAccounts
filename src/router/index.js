import Vue from 'vue';
import Router from 'vue-router';
import codePage from '@/pages/Code';// 扫码领袋页
import choosePage from '@/pages/Choose';// 扫码领袋页
import applyWerbenPage from '@/pages/ApplyWerben';// 申请广告页
import applyJoinPage from '@/pages/ApplyJoin';// 申请加盟页
import accendantPage from '@/pages/Accendant';// 维护人员登陆页
import loginPage from '@/pages/Login';// 登陆页
import registerPage from '@/pages/Register';// 注册页
import retrievePasswordPage from '@/pages/RetrievePassword';// 忘记密码
import homePage from '@/pages/Home';// 忘记密码
import statisticsPage from '@/pages/Statistics'; // 数据统计
import promotionPage from '@/pages/PromotionApplication'; // 公众号推广申请
import personalPage from '@/pages/PersonalCenter'; // 公众号推广申请
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'codePage',
      component: codePage
    }, {
      path: '/choose',
      name: 'choosePage',
      component: choosePage
    }, {
      path: '/werben',
      name: 'applyWerbenPage',
      component: applyWerbenPage
    }, {
      path: '/join',
      name: 'applyJoinPage',
      component: applyJoinPage
    }, {
      path: '/accendant',
      name: 'accendantPage',
      component: accendantPage
    }, {
      path: '/login',
      name: 'loginPage',
      component: loginPage
    }, {
      path: '/register',
      name: 'registerPage',
      component: registerPage
    }, {
      path: '/retrieve',
      name: 'retrievePasswordPage',
      component: retrievePasswordPage
    }, {
      path: '/home',
      name: 'homePage',
      component: homePage
    }, {
      path: '/statistics',
      name: 'statisticsPage',
      component: statisticsPage
    }, {
      path: '/promotion',
      name: 'promotionPage',
      component: promotionPage
    }, {
      path: '/personal',
      name: 'personalPage',
      component: personalPage
    }
  ]
})
