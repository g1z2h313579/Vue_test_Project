<template>
    <div class="container-fluid">
        <loading v-show = loading></loading>
        <t-nav></t-nav>

        <transition
            mode="out-in"
            enter-active-class="animated fadeInLeft faster"
            leave-active-class="animated fadeOutRight faster"
        >
            <router-view></router-view>
        </transition>

        <t-footer></t-footer>
    </div>
</template>
<script>
import './leavemsg.scss'
import tNav from './touchnav/touch-nav'
import tFooter from './t-footer/t-footer'

import {mapGetters} from 'vuex'
export default {
    components : {
        tNav,tFooter
    },
    computed : mapGetters(['loading']),
    name: 'carrousel',
    data() {
      return {
        list : []
      }
    },
    
}
</script>

