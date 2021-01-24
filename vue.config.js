module.exports = {
    devServer:{
        // proxy: {//代理跨域
        //     "/api": {
        //         target: "http://120.78.82.147:8888",
        //         pathRewrite: {"^/api" : ""}
        //     },
        // }
        
        proxy: {//代理跨域
            "/api": {
                target: "http://localhost:8888",
                pathRewrite: {"^/api" : ""}
            },
        }    
    },  
}