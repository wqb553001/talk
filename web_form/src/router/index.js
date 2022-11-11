import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
// import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Login
    }
    ,
    {
      path: '/login',
      name: '登录',
      redirect: '/login',

      component: Login
      // hidden: true,
      // component: () => import('@/components/Login')
    }
    // ,{
    //   path: '*',
    //   name: '404',
    //   hidden: true,
    //   component: () => import('@/components/NotFound')
    // }
  ]
})
