<template>
<div>
    <app-nav></app-nav>
    <div class="container">
    <div class="entertainment">
        <h2>娱乐</h2>
    </div>
    </div>
    <app-foot></app-foot>
    </div>
</template>
<script>
import appNav from '../nav/nav'
import appFoot from '../foot/foot'
import './entertainment.scss'
export default {
    components : {
        appNav,appFoot
    },
}
</script>

