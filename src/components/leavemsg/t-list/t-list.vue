<template>
    <div class="t-warp" ref = 'ls'>
         <ul class="list-inline t-l-list d-flex">
            <router-link 
                    v-for = "val of list" 
                    :key = "val.basic.movieId" 
                    :to = "{name : 'detail', params : {id : val.basic.movieId}}"
                    tag = "li"
                    :mid = "val.basic.movieId" 
            >
                <span class="name">影名：{{val.basic.name}}</span>
                <span class="type">类别：{{val.basic.type}}</span>
                <span class="story">简介：{{val.basic.story}}</span>
                <img :src="val.basic.img" alt="">
            </router-link>
            
        </ul>
    </div>
</template>

<script>
import './t-list.scss';
// import axios from '../../../axios'
import store from '../../../vuex.confi'
import types from '../store/types'
export default {
    data(){
        return {
            list : [],
            loadmore : true
        }
    },
    beforeMount(){
        // console.log(store.state.listData.length)
        if(!store.state.listData.length){
            store.dispatch(types.getlist,0).then((res)=>{
                this.list = res
            })
        }else{
            this.list = store.getters[types.getlist]
        }
        

        // console.log(mapGetters([types.getlist]))
        

        
        // let tmpax = [];
        // for(let i = 125805; i < 125815; i++){
        //    let obj =  {i : `axios({url:"/api",params : {locationId:290,movieId:${i}}})`}
        //      tmpax.push(eval(obj.i));
        // }
        
        // axios.all([...tmpax]).then(axios.spread((...resq)=>{
        //     resq.forEach((val)=>{
        //         this.list.push(val.data.data);
        //     })
        //     this.$route.query.larr = [...resq]
        //     this.loading = '';
        // }))
    
    },
    mounted(){
        window.onscroll = ()=>{
            //滚轮距离顶部高度
            let st = document.documentElement.scrollTop;
            //视口高度
            let sh = document.documentElement.offsetHeight;
            // console.log(this.$refs.ls.offsetHeight)//列表实际高度
            // let lst = this.$refs.ls.offsetHeight;
            let lst = document.documentElement.scrollHeight
            // console.log(lst-sh-st)
            if(lst - sh - st < 200 && this.loadmore == true){
                // console.log("过了判断！")
                this.loadmore = false;
                store.dispatch(types.getlist,10).then(res=>{
                    this.list = res;
                    this.loadmore = true;
                    // console.log("触发action")
                })
            }
        }
    },
    beforeRouteLeave(to,from,next){
        to.query.larr = this.list
        next(true)
    }
}
</script>

<style scoped>
    .t-warp{
        margin-top: 41px;
    }
</style>
