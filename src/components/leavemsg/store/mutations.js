import types from './types'
const mutations = {
    [types.loading] : (state,payload)=>{
        state.loading = payload;
    },
    [types.getlist] : (state,payload)=>{
        state.listData = payload
    },
    [types.getdetail] : (state,payload)=>{
        state.detailData = payload
    },
}

export default mutations