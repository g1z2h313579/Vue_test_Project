import axios from 'axios';
import store from './vuex.confi'
import types from './components/leavemsg/store/types'
window.axios = axios;


axios.interceptors.request.use(function(config){
    store.dispatch(types.loading,true)
    return config;
},function(err){
    console.log("axios出错")
    return Promise.reject(err)
})

axios.interceptors.response.use(function(config){
    store.dispatch(types.loading,false)
    return config;
},function(err){
    console.log("axios出错2")
    return Promise.reject(err)
})

export default axios;