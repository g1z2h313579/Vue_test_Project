import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


import actions from './components/leavemsg/store/actions'
import getters from './components/leavemsg/store/getters'
import mutations from './components/leavemsg/store/mutations'
import state from './components/leavemsg/store/state'

const store = new Vuex.Store({
    actions,getters,mutations,state
})

export default store;