<template>
    <nav :class="{ products: isProducts }">
        <div class="container">
            <img
                @click="goHome"
                class="left"
                src="@/modules/cloudart/assets/images/logo@2x.png"
            />
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {}
        },
        computed: {
            isProducts() {
                return this.$store.state.isProducts
            },
            lang() {
                return this.$store.state.language
            },
        },
        methods: {
            goHome() {
                this.$router.push("/")
            },
            changeLanguage() {
                let curLang = this.lang == "en" ? "zh" : "en"
                this.$store.dispatch("UpdateLanguage", curLang)
                this.$i18n.locale = curLang
                if (curLang == "zh") {
                    let meta_keywords = document.querySelector(
                        "meta[name=keywords]"
                    )
                    let meta_description = document.querySelector(
                        "meta[name=description]"
                    )
                    meta_keywords.setAttribute(
                        "content",
                        this.$t("meta.keywords")
                    )
                    meta_description.setAttribute(
                        "content",
                        this.$t("meta.description")
                    )
                }
            },
        },
    }
</script>

<style scoped lang="scss">
    nav {
        height: 90px;
        flex: 0 0 auto;
        padding-top: 15px;
        padding-bottom: 15px;
    }

    nav.products {
        background-color: #172026;
        .right li {
            color: white;
        }
        .right li.active {
            color: white;
            /* background-color: #fff; */
        }
        .github {
            background-image: url(~@/modules/cloudart/assets/images/github2@2x.png);
            background-size: 25px;
            background-repeat: no-repeat;
        }
    }

    .container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    img.left {
        height: 140px;
        margin-left: -30px;
        cursor: pointer;
    }
    .right.en {
        li {
            cursor: pointer;
        }
    }
    .right {
        ul {
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
        li {
            opacity: 1;
            font-size: 20px;
            font-family: Helvetica Neue Thin, Helvetica Neue Thin-Thin;
            font-weight: 200;
            text-align: center;
            color: #101010;
            letter-spacing: 1px;
            margin: 0 20px;
        }
        li a {
            color: inherit;
            text-decoration: none;
            white-space: nowrap;
        }
        li.active {
        }
        li.other {
            padding-left: 0;
            padding-right: 0;
            display: flex;
            cursor: default;
            align-items: center;
            justify-content: space-between;
            > div,
            > a {
                margin: 0 15px;
                cursor: pointer;
            }
        }
        .wallet {
            width: 25px;
            height: 25px;
            background-image: url(~@/modules/cloudart/assets/images/uniarts.png);
            background-size: 25px 25px;
            background-repeat: no-repeat;
        }
        .github {
            width: 25px;
            height: 25px;
            background-image: url(~@/modules/cloudart/assets/images/github3@2x.png);
            background-size: 25px;
            background-repeat: no-repeat;
        }
        .lang {
            width: 25px;
            height: 25px;
            background-size: 25px;
            background-repeat: no-repeat;
        }
        .lang.en {
            background-image: url(~@/modules/cloudart/assets/images/lang1@2x.png);
        }
        .lang.zh-cn {
            background-image: url(~@/modules/cloudart/assets/images/lang2@2x.png);
        }
    }
</style>
