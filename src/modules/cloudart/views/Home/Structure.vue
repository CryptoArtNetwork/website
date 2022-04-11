<template>
    <div class="structure" ref="box">
        <div class="container">
            <h2>云画链区块链浏览器</h2>
            <div class="item-body">
                <div
                    v-show="isShow"
                    class="web animate__animated animate__fadeInUp animate__delay-1s"
                ></div>
            </div>
            <div class="explorer-container">
                <div class="explorer-desc">
                    实时更新区块信息 查询地址持有的藏品 查询转增信息
                </div>
                <a
                    class="explorer-button"
                    href="https://explorer.cpaintchain.cn"
                    target="_blank"
                    >使用云画链浏览器</a
                >
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "structure",
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
    .structure {
        padding-top: 100px;
        position: relative;
        padding-bottom: 37px;
        height: 1332px;
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
    .item-body {
        width: 100%;
        height: 917px;
        padding: 106px 113px;
        display: flex;
        background: url(~@/modules/cloudart/assets/images/app-bottom-bg@2x.png) no-repeat;
        background-size: 1198px 917px;
        align-items: flex-start;
        justify-content: center;
        position: relative;
        img {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 20px;
            left: 0;
        }
    }

    .web {
        background: url(~@/modules/cloudart/assets/images/web@2x.png) no-repeat;
        background-size: 100% auto;
        background-position: center;
        position: relative;
        width: 1042px;
        height: 775px;
        opacity: 1;
        box-shadow: 0px 1px 28px 2px rgba(178, 178, 178, 0.74);
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
            margin: 0 auto;
            margin-top: 15px;
            border-radius: 4px;
            border: 1px solid #bdc4ce;
            background-color: white;
            display: block;
            width: 405px;
            height: 41px;
            text-align: center;
            line-height: 31px;
            padding: 5px 0;
            font-size: 15px;
            cursor: pointer;
            color: black;
        }
    }
</style>
