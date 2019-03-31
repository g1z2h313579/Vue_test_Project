<template>
    <div class="am-g myapp-login">
	<div class="myapp-login-bg">
		 <div class="myapp-login-logo">
		 	<i class="am-icon-stumbleupon"></i>
		 </div>
		 <div class="am-u-sm-10 myapp-login-form">
		 	<form class="am-form">
			  <fieldset>
		
			    <div class="am-form-group">

			      <input type="text" class="" id="doc-ipt-email-1" value="" placeholder="username" v-model="username">
			    </div>

			    <div class="am-form-group">
			     
			      <input type="password" class="" id="doc-ipt-pwd-1" value=""  placeholder="password" v-model="password">
			    </div>
			    <p><button type="button" class="am-btn am-btn-default" @click = 'sub'>Login</button></p>
					{{error}}
			    <div class="login-text">
			    	Forgot Password?
						
			    </div>
			  </fieldset>
			</form>
		 </div>
	</div>
</div>
</template>

<script>
import './amazeui.min.css';
import axios from 'axios';
import urll from '../../../urlConfig/url.config'
export default {
    data(){
			return {
				username : '',
				password : '',
				error : ''
			}
		},
		beforeMount(){
			// console.log(this.getCookie("countkey"))
			if(this.getCookie("countkey") == "1"){
				this.$router.push({path : '/leavemsg/t-user/t-userin'})
			}
			

		},
		methods : {
			getCookie(key){
				var arr = document.cookie.split("; ");
				for(let i = 0; i < arr.length; i++){
						if(arr[i].split("=")[0] == key){
								return arr[i].split("=")[1];
						}
				}
				return "";
			},
			setCookie(key,value,day){
				var d = new Date();
				d.setDate(d.getDate() + day);
				document.cookie = key + "=" + value + ";expires" + d;
      		},
			removeCookie(key){
				this.setCookie(key,"123",-1);
			},

			sub(){
				axios({
					// url : '/admin',
					url : urll.countUrl,
					method : 'post',
					data : {
						user : this.username,
						psd : this.password
					}
				}).then((res)=>{
					if(res.data == 'success'){
						this.setCookie("countkey","1")
						this.$router.push({path : '/leavemsg/t-user/t-userin'})
					}else if(res.data === "error"){
						this.error = "用户名或密码有误"
					}
					console.log(res)
				}).catch((err)=>{
					console.log(err)
				})
			}
		}
		
		
}
</script>

<style scoped>

/* Write your styles */
html,body { background: rgb(42,144,223);height: 100%!important;}
/* 登陆logo */
.myapp-login { background: url(./img/bg.jpg) rgb(42,144,223) top no-repeat; background-size: 100%; height: 100%;}
.myapp-login .myapp-login-bg { padding-top: 30px;  height: 100%;}
.myapp-login .myapp-login-logo { width: 100%; text-align: center;}
.myapp-login .myapp-login-logo i { font-size:120px; color: #fff;}
.myapp-login .myapp-login-form { margin: 0 auto; float:none; padding-top: 20px; }
.myapp-login .myapp-login-form  .am-form .am-form-group input { font-size: 14px; padding:10px 0 ;background:none;border: none; text-align: center; border-bottom: 1px solid #fff; color: #fff;}
.myapp-login .myapp-login-form  .am-form button { background: #fff; width: 100%; border-radius: 30px; color: #2a90df; border: none; font-size: 14px; margin-top: 20px;}
.myapp-login .myapp-login-form  .am-form .login-text {font-size: 14px; width: 100%; color: #fff; padding-top: 20px; text-align: center;}


</style>
