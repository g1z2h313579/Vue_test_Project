import types from './types';
import axios from '../../../axios';
import urll from '../../../urlConfig/url.config'
const actions = {
    [types.loading] : ({commit},payload)=>{
        commit(types.loading,payload)
    },
    [types.getlist] : ({commit,state},payload)=>{
        payload == 10 ? payload : 0;
            let tmpax = [];
            
            for(let i = state.startpage; i < state.endpage + payload; i++){
                //    let obj =  {i : `axios({url:"/api",params : {locationId:290,movieId:${i}}})`}
               let obj =  {i : `axios({url:"${urll.dataUrl}",params : {locationId:290,movieId:${i}}})`}
                 tmpax.push(eval(obj.i));
            }
            
            let p = new Promise(function(resolve){
                axios.all([...tmpax]).then(axios.spread((...resq)=>{
                    let listData = [];
                    resq.forEach((val)=>{
                        // this.list.push(val.data.data);
                        listData.push(val.data.data);
                    })
                    resolve(listData)
                    commit(types.getlist,listData)
                    state.endpage += payload;
                    // console.log(state.endpage)
                }))
            })
            return p;
        
    },
    [types.getdetail] : ({commit},payload)=>{
        commit(types.getdetail,payload)
    }
}

export default actions