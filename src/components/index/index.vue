<template>
    <div>
    <app-nav></app-nav>
    <div class="container">
    <div class="index">

        <app-banner></app-banner>

        <div class="content">
            <div class="con-left">
                <div class="recom">
                    <h2>特别推荐</h2>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

                <div class="new-release">
                    <h2>最新发布</h2>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            

            <div class="con-right">
                <div class="tag"></div>
            </div>
        </div>

    </div>
    </div>
    <app-foot></app-foot>
    </div>
</template>
<script>
import appNav from '../nav/nav'
// import app_banner from './core/banner/banner'
import appFoot from '../foot/foot'
import './index.scss';
import appBanner from '../../core/banner/banner';
export default {
    components : {
        appBanner,appNav,appFoot
    },
    

}
</script>

