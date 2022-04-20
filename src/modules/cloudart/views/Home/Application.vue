<template>
    <div class="application" ref="box">
        <div class="container">
            <h2>生态应用</h2>
            <div class="app-info">
                <img src="@/modules/cloudart/assets/images/jiama-logo.png" alt="" />
                <div class="app-name">
                    <div class="name">加码射线</div>
                    <img src="@/modules/cloudart/assets/images/jiama-name-logo.png" alt="" />
                    <div class="app-decs">
                        泛二次元数字收藏
                    </div>
                </div>
                <a
                    style="color: black;"
                    href="https://app.jiamashexian.com/pages/download"
                    target="_blank"
                    class="download"
                    >下载</a
                >
            </div>
            <div
                v-show="isShow"
                class="web animate__animated animate__fadeInUp animate__delay-1s"
            ></div>
            <div class="app-info jx">
                <img class="app-logo" src="@/modules/cloudart/assets/images/jiuxing-logo.png" alt="" />
                <div class="app-name">
                    <div class="name">久星数藏</div>
                    <img src="@/modules/cloudart/assets/images/jiuxing-logo2.png" style="width: 180px;height: 80px;margin-top: 4px;margin-bottom: 4px;" alt="" />
                    <div class="app-decs">
                        国风文化数字藏品推广和收藏
                    </div>
                </div>
                <a
                    style="color: black;"
                    href="https://hzqiaoke.cn/download"
                    target="_blank"
                    class="download"
                    >下载</a
                >
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "application",
        computed: {
            locale() {
                return this.$store.state.language
            },
        },
        data() {
            return {
                isShow: false,
                top: 0,
            }
        },
        mounted() {
            this.top =
                this.$refs.box.getBoundingClientRect().top - window.innerHeight
            window.GLOBAL.vbus.$on("windowScroll", this.onScroll)
        },
        methods: {
            onScroll(scrollTop) {
                if (scrollTop - this.top >= 400) {
                    this.isShow = true
                    window.GLOBAL.vbus.$off("windowScroll", this.onScroll)
                }
            },
        },
    }
</script>

<style scoped lang="scss">
    .application {
        padding-top: 100px;
        position: relative;
        padding-bottom: 37px;
        height: 1754px;
    }
    .container {
        height: 100%;
    }
    h2 {
        font-size: 38px;
        font-family: Microsoft YaHei Bold, Microsoft YaHei Bold-Bold;
        font-weight: 700;
        text-align: center;
        margin-bottom: 75px;
        color: #101010;
    }

    .web {
        background: url(~@/modules/cloudart/assets/images/jiama-app-info.png) no-repeat;
        background-size: 100% auto;
        background-position: center;
        position: relative;
        width: 1042px;
        height: 775px;
        opacity: 1;
        margin: 0 auto;
    }
    .app {
        background: url(~@/modules/cloudart/assets/images/app@2x.png) no-repeat;
        background-size: 325px;
        background-position: center;
        position: relative;
        width: 267px;
        height: 575px;
        opacity: 1;
        border-radius: 30px;
        box-shadow: 0px 1px 28px 2px rgba(178, 178, 178, 0.92);
    }
    .bottom-title {
        position: absolute;
        display: block;
        width: 440px;
        top: 600px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 18px;
        font-family: PingFang SC Medium, PingFang SC Medium-Medium;
        font-weight: 500;
        text-align: left;
        color: #ffffff;
    }

    .explorer-container {
        margin-top: 40px;
        width: 100%;
        background-color: #c4dafd;
        border: 1px solid #bdc4ce;
        padding: 20px 40px;
        .explorer-desc {
            font-size: 19px;
        }
        .explorer-button {
            margin-top: 15px;
            border-radius: 4px;
            border: 1px solid #bdc4ce;
            background-color: white;
            width: 405px;
            height: 41px;
            text-align: center;
            padding: 5px 0;
            font-size: 15px;
            cursor: pointer;
        }
    }
    .app-info.jx {
        margin-top: 160px;
    }
    .app-info {
        width: 957px;
        height: 222px;
        border-color: rgb(187, 187, 187);
        border-width: 1px;
        border-style: solid;
        border-radius: 7px;
        font-size: 14px;
        padding: 0px;
        text-align: center;
        line-height: 20px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 40px;
        margin-bottom: 40px;
        .app-logo {
            max-width: 160px;
        }
        .app-name {
            display: flex;
            flex-direction: column;
            align-items: center;
            .name {
                font-size: 25px;
                font-weight: 500;
            }
            .app-decs {
                font-size: 25px;
                font-weight: 500;
            }
            > img {
                width: 145px;
                height: 49px;
                margin: 20px 0;
            }
        }
        .download {
            width: 160px;
            width: 170px;
            height: 53px;
            border-color: rgb(187, 187, 187);
            border-width: 1px;
            border-style: solid;
            border-radius: 4px;
            font-size: 15px;
            text-align: center;
            line-height: 53px;
            cursor: pointer;
        }
    }
</style>
