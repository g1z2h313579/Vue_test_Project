<template>
    
    <nav class="pc-nav">
        <ul class="navbar navbar-dark navbar-expand-lg bg-dark list-inline justify-content-center nnva-block">
            <li class="nav-item"><router-link  class = "text-light nav-link" to = "/index" active-class = "active">首页</router-link></li>
            <li class="nav-item"><router-link href="javascript:;" class = "text-light nav-link" to = "/recommend" active-class = "active">关于</router-link>
                <ul class="sub-nav navbar-dark navbar-expand-lg bg-dark list-inline justify-content-center">
                    <li class="nav-item">
                        <router-link class = "text-light nav-link" to = '/recommend/aboutme' active-class = "active">关于内容1</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class = "text-light nav-link" to = '/recommend/aboutable' active-class = "active">关于内容2</router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item"><router-link href="javascript:;" class = "text-light nav-link" to = "/grow" active-class = "active">成长</router-link></li>
            <li class="nav-item"><router-link href="javascript:;" class = "text-light nav-link" to = "/learn" active-class = "active">学习</router-link></li>
            <li class="nav-item"><router-link href="javascript:;" class = "text-light nav-link" to = "/entertainment" active-class = "active">娱乐</router-link></li>
            <li class="nav-item"><router-link href="javascript:;" class = "text-light nav-link" to = "/leavemsg" active-class = "active">移动端
            </router-link></li>
        </ul>


        <div class="silde-nav">
            <nav class="navbar navbar-dark bg-dark flex-row-reverse">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
            <div class="collapse" id="navbarToggleExternalContent">
                <ul class="navbar-dark bg-dark list-inline">
                    <li class="nav-item"><router-link href="javascript:;" class = "text-light nav-link" to = "/index" > 首页 </router-link></li>
                    <li class="nav-item"><router-link href="javascript:;" class = "text-light nav-link" to = "/recommend">关于</router-link></li>
                    <li class="nav-item"><router-link href="javascript:;" class = "text-light nav-link" to = "/grow">成长</router-link></li>
                    <li class="nav-item"><router-link href="javascript:;" class = "text-light nav-link" to = "/learn">学习</router-link></li>
                    <li class="nav-item"><router-link href="javascript:;" class = "text-light nav-link" to = "/entertainment">娱乐</router-link></li>
                    <li class="nav-item"><router-link href="javascript:;" class = "text-light nav-link" to = "/leavemsg">留言</router-link></li>
                </ul>
            </div>
        </div>
    </nav>


    
  
</template>
<script>
import './nav.scss'
export default {
    // mounted(){
    //     console.log($)
    // }
}
</script>

