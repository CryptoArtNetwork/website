import "babel-polyfill" // 引入垫片
import Vue from "vue"
import VueI18n from "vue-i18n"

// import 'Directives'; // 全局注入指令（请使用局部注入）

// 引入样式reset
import "normalize.css"
import "animate.css"

import "@/modules/cloudart/plugins/element.js"

// 引入插件
import router from "@/modules/cloudart/plugins/router"

import store from "@/modules/cloudart/plugins/store"

// import VueFullpage from 'vue-fullpage.js'

// 引入国际化文件
import enLocale from "@/modules/cloudart/locale/en.json"
import zhLocale from "@/modules/cloudart/locale/zh-CN.json"

// 引入根组件
import App from "@/modules/cloudart/views/App"

// 可作为全局通信的载体,用于非父子关系的组件间的通信上，常见的业务一般都可以用vuex替代
window.GLOBAL.vbus = new Vue()

// Vue.use(VueFullpage)

// 引入国际化
Vue.use(VueI18n)

// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

import { getLocale } from "@/modules/cloudart/utils/tools"

const i18n = new VueI18n({
    locale: getLocale(), // 设置默认使用语言
    messages: {
        en: Object.assign(enLocale, {}),
        zh: Object.assign(zhLocale, {}),
    },
})

new Vue({
    router,
    i18n,
    store,
    render: (h) => h(App),
}).$mount("#app")
