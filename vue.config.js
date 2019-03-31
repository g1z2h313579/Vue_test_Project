module.exports = {
    devServer:{
        // proxy: 'http://localhost:3000',//告诉开发服务器将任何未知请求 (没有匹配到静态文件的请求) 代理到http://localhost:4000。
        // host: '0.0.0.0',
        // port: 8003,
        // open: true,
        // https: false,
        // proxy: null, // string | Object
        proxy:{//代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
          // '/api':{//axios访问 /api ==  target + /api  
          //   target:'https://uncle9.top',
          //   changeOrigin:true,//创建虚拟服务器 
          //   ws:true,//websocket代理
          // },
          '/api':{// axios 访问 /douban == target + '/douban'
            // target:'https://interface.meiriyiwen.com/article/today',
            // target : "https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api",
            target : 'https://ticket-api-m.mtime.cn/movie/detail.api',
            // target : 'http://localhost:3000/proxyApi',
            // target : 'http://localhost:11111/proxyApi',
            changeOrigin:true,
            pathRewrite:{//路径替换
              '^/api':'',// axios 访问/douban/v2 == target + /v2
            }
        },
        '/admin':{
          target : 'http://guanzhihannb.top:3000/admin/login.html',
          // target : 'http://localhost:11111/proxyApiCount',
          changeOrigin:true,
          pathRewrite:{
            '^/admin':'',
          },
        }
      },
      
    }
}