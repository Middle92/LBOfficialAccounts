import Vue from 'vue';
import Router from 'vue-router';
const CodePage = () => import('@/pages/Code').then(m => m.default); // 扫码领袋页
const ChoosePage = () => import('@/pages/Choose').then(m => m.default); // 扫码领袋页
const ApplyWerbenPage = () => import('@/pages/ApplyWerben').then(m => m.default); // 申请发布广告
const ApplyJoinPage = () => import('@/pages/ApplyJoin').then(m => m.default); // 申请加盟页
const AccendantPage = () => import('@/pages/Accendant').then(m => m.default); // 维护人员登录
const LoginPage = () => import('@/pages/Login').then(m => m.default); // 广告主登录
const RegisterPage = () => import('@/pages/Register').then(m => m.default); // 注册页
const RetrievePasswordPage = () => import('@/pages/RetrievePassword').then(m => m.default); // 忘记密码
const HomePage = () => import('@/pages/Home').then(m => m.default); // 忘记密码
const StatisticsPage = () => import('@/pages/Statistics').then(m => m.default); // 数据统计
const PromotionApplicationPage = () => import('@/pages/PromotionApplication').then(m => m.default); // 公众号推广申请
const PersonalCenterPage = () => import('@/pages/PersonalCenter').then(m => m.default); // 个人中心
const SystemMessagePage = () => import('@/pages/SystemMessage').then(m => m.default); // 系统消息
const AccendantHomePage = () => import('@/pages/AccendantHome').then(m => m.default); // 工作台
const AccendantWorkbenchPage = () => import('@/pages/AccendantWorkbench').then(m => m.default); // 工作台维护页
const AccendantWorkbenchMorePage = () => import('@/pages/AccendantWorkbenchMore').then(m => m.default); // 工作台维护页（查看更多）
const AccountDetailsPage = () => import('@/pages/AccountDetails').then(m => m.default); // 账户明细

const ModalComponent = () => import('@/components/ModalComponent').then(m => m.default); // ModalComponent
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CodePage',
      meta: {
        isRouter: true
      },
      component: CodePage
    }, {
      path: '/Choose',
      name: 'ChoosePage',
      meta: {
        isRouter: true
      },
      component: ChoosePage
    }, {
      path: '/ApplyWerben',
      name: 'ApplyWerbenPage',
      meta: {
        isRouter: true
      },
      component: ApplyWerbenPage
    }, {
      path: '/ApplyJoin',
      name: 'ApplyJoinPage',
      meta: {
        isRouter: true
      },
      component: ApplyJoinPage
    }, {
      path: '/Accendant',
      name: 'AccendantPage',
      meta: {
        isRouter: true
      },
      component: AccendantPage
    }, {
      path: '/Login',
      name: 'LoginPage',
      meta: {
        isRouter: true
      },
      component: LoginPage
    }, {
      path: '/Register',
      name: 'RegisterPage',
      meta: {
        isRouter: true
      },
      component: RegisterPage
    }, {
      path: '/RetrievePassword',
      name: 'RetrievePasswordPage',
      meta: {
        isRouter: true
      },
      component: RetrievePasswordPage
    }, {
      path: '/Home',
      name: 'HomePage',
      meta: {
        role: 'advertiser'
      },
      component: HomePage
    }, {
      path: '/Statistics',
      name: 'StatisticsPage',
      meta: {
        role: 'advertiser'
      },
      component: StatisticsPage
    }, {
      path: '/PromotionApplication',
      name: 'PromotionApplicationPage',
      meta: {
        role: 'advertiser'
      },
      component: PromotionApplicationPage
    }, {
      path: '/PersonalCenter/:role',
      name: 'PersonalCenterPage',
      component: PersonalCenterPage
    }, {
      path: '/SystemMessage',
      name: 'SystemMessagePage',
      meta: {
        role: 'advertiser'
      },
      component: SystemMessagePage
    }, {
      path: '/AccendantHome',
      name: 'AccendantHomePage',
      meta: {
        role: 'guardian'
      },
      component: AccendantHomePage
    }, {
      path: '/AccendantWorkbench',
      name: 'AccendantWorkbenchPage',
      meta: {
        role: 'guardian'
      },
      components: {
        default: AccendantWorkbenchPage,
        modal: ModalComponent
      }
    }, {
      path: '/AccendantWorkbenchMore',
      name: 'AccendantWorkbenchMorePage',
      meta: {
        role: 'guardian'
      },
      components: {
        default: AccendantWorkbenchMorePage,
        modal: ModalComponent
      }
    }, {
      path: '/AccountDetails',
      name: 'AccountDetailsPage',
      meta: {
        role: 'advertiser'
      },
      component: AccountDetailsPage
    }
  ]
})
