// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import service from '../src/interceptor/service'
import 'font-awesome/css/font-awesome.min.css'
// import FastClick from 'fastclick'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vuetify from "./plugins/vuetify";

Vue.use(Vuetify)

Vue.prototype.axios = axios
Vue.prototype.service = service
Vue.config.productionTip = false

// FastClick.attach(document.body);  // 解决ElementUI el-select在移动端需要点击两次才能弹出下拉与选中

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   vuetify:new vuetify(),
//   components: { App },
//   template: '<App/>'
// })

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
