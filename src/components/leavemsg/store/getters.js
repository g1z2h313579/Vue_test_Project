const getter = {
    loading : (state)=>{
        return state.loading
    },
    getlist : (state)=>{
        return state.listData
    },
    getdetail : (state)=>{
        return state.detaildata
    }
}

export default getter