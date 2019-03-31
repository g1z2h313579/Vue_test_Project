import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from 'jquery';

window.$ = window.jQuery = $
import './axios';

import loading from './components/leavemsg/plugins/loading'
Vue.use(loading)

import 'animate.css';


import store from './vuex.confi'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
