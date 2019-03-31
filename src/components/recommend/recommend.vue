<template>

<div>
    <app-nav></app-nav>
    <div class="container">
    <div class="recommend">
        <h2>关于</h2>
    </div>
    </div>
    <app-foot></app-foot>
    </div>
</template>
<script>
import './recommend.scss'
import appNav from '../nav/nav'
import appFoot from '../foot/foot'
export default {
     components : {
        appNav,appFoot
    },
}
</script>

