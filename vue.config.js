module.exports = {
    css: {
        loaderOptions: {
          sass: {
            implementation: require('sass'), // This line must in sass option
          },
        },
    },
    devServer: {
        port: 8080,
        proxy: {
            "/test/api": {
                target: "http://service.uniarts.me", // 接口的域名 测试
                pathRewrite: {
                    "^/test/api": "/api",
                },
            },
            "/api": {
                target: "http://service.uniarts.me", // 接口的域名 测试
                pathRewrite: {
                    "^api": "/api",
                },
            },
        },
    }
};
