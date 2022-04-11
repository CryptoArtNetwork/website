import Vue from "vue"
import Vuex from "vuex"

import { getLocale } from "@/modules/cloudart/utils/tools"
import { setLocalStore } from "@/modules/cloudart/utils/storage"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        language: getLocale(),
        isProducts: false,
        // scrollTop: 0,
    },
    mutations: {
        UPDATE_LANGUAGE(state, language) {
            state.language = language
        },
        UPDATE_PRODUCTS(state, isProducts) {
            state.isProducts = isProducts
        },
        // UPDATE_SCROLLTOP(state, scrollTop) {
        //     state.scrollTop = scrollTop;
        // }
    },
    actions: {
        UpdateLanguage: ({ commit }, language) => {
            setLocalStore("local_language", language)
            commit("UPDATE_LANGUAGE", language)
        },
        UpdateIsProducts: ({ commit }, isProducts) => {
            commit("UPDATE_PRODUCTS", isProducts)
        },
        // UpdateScrollTop: ({ commit }, scrollTop) => {
        //     commit("UPDATE_SCROLLTOP", scrollTop)
        // },
    },
})

export default store
