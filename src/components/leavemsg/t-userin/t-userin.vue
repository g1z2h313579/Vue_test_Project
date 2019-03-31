<template>
    <div class="warp_userin">
        <header>
            <div class="head-box">
               <h3>我</h3>
               <div class="head-icon-outer">
                    <div class="head-icon"></div>
               </div>
               <h5>头像点击可以更换</h5>
            </div>
        </header>
        <article>
            <div class="weui_cells weui_cells_access">
                <a class="weui_cell" href="person_info.html">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p>资料修改</p>
                    </div>
                    <i class="iconfont">&#xe642;</i>
                </a>
            </div>
            <div class="weui_cells weui_cells_access">
                <a class="weui_cell" href="modify.html">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p>密码修改</p>
                    </div>
                   <i class="iconfont">&#xe642;</i>
                </a>
            </div>
            <div class="weui_cells weui_cells_access">
                <a class="weui_cell" href="javascript:;">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p>检查新版本</p>
                    </div>
                   <i class="iconfont">&#xe642;</i>
                </a>
            </div>
            <div class="button">
                <div class="bd">
                    <a @click = 'quit' class="weui_btn weui_btn_primary">退出</a>
                </div>
            </div>
           
        </article>
    </div>
</template>
<script>
import 'animate.css';
import './css/font.css';
import './css/jquery-weui.min.css'
// import './css/self.css'
import './css/weui.min.css'
import './fonts/iconfont.css';
import './t-userin.scss'
export default {
    methods : {
        setCookie(key,value,day){
            var d = new Date();
            d.setDate(d.getDate() + day);
            document.cookie = key + "=" + value + ";expires" + d;
        },
        removeCookie(key){
            this.setCookie(key,"123",-1);
        },
        quit(){
            this.removeCookie("countkey");
            this.$router.push({path : '/leavemsg/t-user'})
        }
    }
}
</script>

<style scoped>
header{
    position: static;
}
.titlebar.reverse{
	border-color:#0498a1; 
}
.head-box{
	position: relative;
	padding-top: 10px;
	height: 210px;
	background-color: #0498a1;
}

.head-box h3{
	color: #fff;
	text-align: center;
}

.head-box h5{
	position: absolute;
	color: #fff;
	text-align: center;
	font-size: 0.55rem;
	bottom: 12px;
	width: 100%;
}

.head-box .head-icon-outer{
	position: absolute;
	width: 5.75rem;
	height: 5.75rem;
	border-radius: 50%;
	top: 50%;
	left: 50%;
	margin-top: -2.875rem;
	margin-left: -2.875rem;
	background-color: #fff;
}

.head-box .head-icon-outer .head-icon{
	position: absolute;
	width: 5.4rem;
	height: 5.4rem;
	border-radius: 50%;
	top: 0.175rem;
	left: 0.175rem;
	background: url(./images/icon.jpg) center center no-repeat;
}

.weui_btn_primary{
	margin-top: 20px;
	background-color: #f45438;
}

.weui_btn_primary:not(.weui_btn_disabled):active {
    background-color: #f45438;
}

.button .bd {
    padding: 0 15px;
}

.button .bd .weui_btn{
    font-size: 0.875rem;
    line-height: 2.125rem;
    height: 2.125rem;
}

.weui_cells{
	margin-top: 0;
}

.weui_cells:before{
	border:0;
}

body>header+article {
    padding-top: 220px;
}

.weui_cell_primary p{
	font-size: 0.7rem;
}

.weui_cell_bd{
	padding: 0 15px;
}

.weui_cell{
	padding: 0 0;
	line-height: 2.5rem;
}

.weui_cell i{
	color: #93929a;
	font-size: 0.8rem;
}
</style>
