<template>
<div>
    <app-nav></app-nav>
    <div class="container">
    <div class="grow">
        <h2>成长</h2>
    </div>
    </div>
    <app-foot></app-foot>
    </div>
</template>
<script>
import './grow.scss';
import appNav from '../nav/nav'
import appFoot from '../foot/foot'
export default {
    components : {
        appNav,appFoot
    }
}
</script>

