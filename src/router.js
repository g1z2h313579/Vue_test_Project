import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index/index'
import entertainment from '@/components/entertainment/entertainment'
import grow from '@/components/grow/grow'
import learn from '@/components/learn/learn'
import leavemsg from '@/components/leavemsg/leavemsg'
import recommend from '@/components/recommend/recommend'
import aboutable from '@/components/recommend/aboutable/aboutable'
import aboutme from '@/components/recommend/aboutme/aboutme'
import tIndex from '@/components/leavemsg/t-index/t-index'
import tList from '@/components/leavemsg/t-list/t-list'
import tUser from '@/components/leavemsg/t-user/t-user'
import tDetail from '@/components/leavemsg/t-detail/t-detail'
import tUserIn from '@/components/leavemsg/t-userin/t-userin'




Vue.use(Router)
let router = new Router({
  mode: 'history',
  routes: [
    { path : '/index', component : index},
    { path : '/entertainment', component : entertainment},
    { path : '/grow', component : grow},
    { path : '/learn', component : learn},
    { path : '/leavemsg',redirect : '/leavemsg/t-index', component : leavemsg, children : [
      { path : '/leavemsg/t-index', component : tIndex},
      { path : '/leavemsg/t-list', component : tList},
      { path : '/leavemsg/t-user', component : tUser},
      { name : 'detail', path : '/leavemsg/t-detail', component : tDetail},
      { path : '/leavemsg/t-user/t-userin',component : tUserIn},
    ]},
    { path : '/recommend', component : recommend},
    { path : '/recommend/aboutme', component : aboutme},
    { path : '/recommend/aboutable', component : aboutable},
    { path : '/', component : index},
  ]
})
export default router
