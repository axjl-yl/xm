import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import registered from '@/components/registered'
import login from '@/components/login'
import topsearch from '@/components/topsearch'
import goods from '@/components/goods'
import fabu from '@/components/fabu'
import applytext from '@/components/applyText'
import shang from '@/components/shang'
import personal from '@/components/personal'
import want from '@/components/want'
import message from '@/components/message'
import userinfo from '@/components/userinfo'
import ren from '@/components/ren'
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
    },{
      path:'/c/:id',
      component:goods
    },{
      path:'/fabu',
      component:fabu
    },{
      path:'/applytext',
      component:applytext
    },{
      path:'/shang/:id',
      name:'shang',
      component:shang
    },{
      path:'/personal',
      name:'personal',
      component:personal
    },
    {
      path:'/want',
      name:'want',
      component:want
    },
    {
      path:'/message',
      name:'message',
      component:message
    },
    {
      path:'/userinfo',
      name:'userinfo',
      component:userinfo
    },
    {
      path:'/ren',
      name:'ren',
      component:ren
    }
  ]
})
