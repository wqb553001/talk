import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      name: '首页',
      hidden: true,
      component: () => import('@/components/Login')
    },
    {
      path: '/login',
      name: 'Login',
      hidden: true,
      component: () => import('@/components/Login')
    },
    {
      path: '*',
      name: '404',
      hidden: true,
      component: () => import('@/components/NotFound')
    },
    {
        path: '/home',
        hidden: true,
        // component: Home
        component: () => import('@/components/Home')
        // component: resolve => require(['@/components/Home'], resolve)
    },
    {
      path: '/talk/talk',
      name: '赛事',
      hidden: false,
      iconClass: 'fa fa-chart',
      component: () => import('@/components/Home'),
      children:[
        {
          path: '/talk/talk',
          name: '赛台',
          hidden: false,
          iconClass: 'fa fa-chart',
          component: () => import('@/components/talk/Talk'),
        },
        {
          path: '/talk/rule',
          name: '规则',
          hidden: false,
          iconClass: 'fa fa-chart',
          component: () => import('@/components/talk/Rule'),
        },
        {
          path: '/talk/rule/set',
          name: '规则设置',
          hidden: false,
          iconClass: 'fa fa-chart',
          component: () => import('@/components/talk/RuleSet'),
        }
      ]
    },
    {
      path: '/person/person',
      name: '关于我',
      hidden: false,
      iconClass: 'fa fa-users',
      component: () => import('@/components/Home'),
      children: [
        {
          path: '/person/person',
          name: '基本信息',
          hidden: false,
          iconClass: 'fa fa-user',
          component: () => import('@/components/person/Person')
        },
        {
          path: '/person/collection',
          name: '我的收藏',
          hidden: false,
          iconClass: 'fa fa-list',
          component: () => import('@/components/person/Collection')
        }
      ]


    },

  ]
})
