import { getLocalStore } from "@/modules/cloudart/utils/storage"
import { setLocalStore } from "@/modules/cloudart/utils/storage"

export function getLocale() {
    let pathQuery = location.search ? location.search.slice(1) : ""
    let pathQueryList = pathQuery.split("&")
    let lang = pathQueryList.find((v) => {
        return v.split("=")[0] == "lang"
    })
    if (lang) {
        let result = lang.split("=")[1] == "zh-CN" ? "zh" : "en"
        setLocalStore("local_language", result)
        return result
    }
    let language =
        getLocalStore("local_language") ||
        (navigator.browserLanguage
            ? navigator.browserLanguage
            : navigator.language)

    if (language === "en-US") {
        language = "en"
    } else if (language === "zh-CN" || language === "zh-cn") {
        language = "zh"
    } else if (language !== "en" && language !== "zh") {
        language = "en"
    }
    return language
}
