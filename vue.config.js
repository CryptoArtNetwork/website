module.exports = {
    pages: {
        "/" : {
            entry: "src/modules/cryptoart/main.js",
            template: "public/index.html",
            filename: "index.html",
        },
        "/chain": {
            entry: "src/modules/cloudart/main.js",
            template: "public/cloudart.html",
            filename: "cloudart.html",
        },
    },
    css: {
        loaderOptions: {
            sass: {
                implementation: require("sass"), // This line must in sass option
            },
        },
    },
    devServer: {
        port: 8080,
    },
}
