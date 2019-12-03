import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import registered from '@/components/registered'
import login from '@/components/login'
import toplist from '@/components/toplist'
import topsearch from '@/components/topsearch'
import bottom from '@/components/bottom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {path: '/', component: topsearch}
      ]

    }, {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '/registered',
      name: 'registered',
      component: registered
    }
  ]
})
