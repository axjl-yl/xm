// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import Axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import Vuerify from 'vuerify'

Vue.config.productionTip = false
Vue.prototype.$axios = Axios

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(Vuerify, {
  tel: {
    test: /^\d{11}$/,
    message: '十一位手机号'
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
