<template>
  <div id="app">
    <!-- <app-nav></app-nav> -->
    <transition
      mode="out-in"
      enter-active-class="animated fadeInLeft faster"
      leave-active-class="animated fadeOutRight faster"
    >
      <router-view></router-view>
    </transition>
    <!-- <app-foot></app-foot> -->
  </div>
</template>
<script>
// import search from './core/search/search';
import appNav from './components/nav/nav'
// import app_banner from './core/banner/banner'
import appFoot from './components/foot/foot'

export default {
  components : {
    appNav,appFoot
  }
}
</script>
<style scoped>
  body,html,#app{
    height: 100%!important;
  }
  
</style>

