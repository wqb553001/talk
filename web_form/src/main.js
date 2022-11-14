// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import service from '../src/interceptor/service'
import '@/plugins/element.js'            // 按需引用（具体引用，封装到了 element.js 中）
// import elementUI from 'element-ui'    // 全量引用
// import {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
// import FastClick from 'fastclick'
// Vue.use(elementUI)
Vue.prototype.axios = axios
Vue.prototype.service = service
Vue.config.productionTip = false

// FastClick.attach(document.body);  // 解决ElementUI el-select在移动端需要点击两次才能弹出下拉与选中

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
