import Vue from "vue"
import Router from "vue-router"
import ROUTES from "@/modules/cloudart/router/index"

import NProgress from "nprogress" // progress bar
import "nprogress/nprogress.css" // progress bar style

NProgress.configure({
    showSpinner: false,
}) // NProgress Configuration

function routerBeforeEachFunc(to, from, next) {
    // 这里可以做页面拦截，也可以在这里面做权限处理
    NProgress.start()
    next()
}

function routerAfterEachFunc() {
    NProgress.done() // finish progress bar
}

Vue.use(Router)
// 路由默认配置，路由表并不从此注入
const ROUTER_DEFAULT_CONFIG = {
    waitForData: true,
    transitionOnLoad: true,
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    mode: "history",
    base: "",
}

// 注入默认配置和路由表
let routerInstance = new Router({
    ...ROUTER_DEFAULT_CONFIG,
    routes: ROUTES,
})
// 注入拦截器
routerInstance.beforeEach(routerBeforeEachFunc)
routerInstance.afterEach(routerAfterEachFunc)

export default routerInstance
