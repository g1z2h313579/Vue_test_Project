<template>
    <div class="warp">
        <div class="actors">
            <ul>
                <li>
                    <p>演员名：{{mDetail.basic.actors[0].name}} <span>{{mDetail.basic.actors[0].nameEn}}</span></p>
                    <img :src="mDetail.basic.actors[0].img" alt="">
                    <p>扮演：{{mDetail.basic.actors[0].roleName}}</p>
                    <img :src="mDetail.basic.actors[0].roleImg" alt="">
                </li>
            </ul>
           
        </div>
    </div>
</template>

<script>
import './t-detail.scss'
import store from '../../../vuex.confi'
import types from '../store/types'
export default {
    name : "detail",
    data(){
        return {
            mDetail : {}
        }
    },

    beforeMount(){

        if(!store.getters[types.getdetail]){
            for(let i = 0; i < this.$route.query.larr.length; i++){
    
                if(this.$route.query.larr[i].basic.movieId == this.$route.params.id){
                    this.mDetail = this.$route.query.larr[i];
                    break;
                }   
            }
            store.dispatch(types.getdetail,this.mDetail)
        }else{
            this.mDetail = store.getters[types.getdetail]
        }

        
    }
}
</script>

