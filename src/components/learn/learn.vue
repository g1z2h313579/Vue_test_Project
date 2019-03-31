<template>

<div>
    <app-nav></app-nav>
    <div class="container">
    <div class="learn">
        <h2>学习</h2>
    </div>
     </div>
    <app-foot></app-foot>
    </div>
</template>
<script>
import './learn.scss'
import appNav from '../nav/nav'
import appFoot from '../foot/foot'
export default {
     components : {
        appNav,appFoot
    },
}
</script>

