<template>
    <div class="components">
        <img
            style="
                position: absolute;
                width: auto;
                height: 542px;
                left: -180px;
                top: 101px;
            "
            src="@/modules/cloudart/assets/images/uniarts-left1@2x.png"
            alt=""
        />
        <img
            style="
                position: absolute;
                width: auto;
                height: 375px;
                right: -140px;
                top: 138px;
            "
            src="@/modules/cloudart/assets/images/uniarts-left2@2x.png"
            alt=""
        />
        <img
            style="
                position: absolute;
                width: auto;
                height: 529px;
                right: -120px;
                bottom: -83px;
            "
            src="@/modules/cloudart/assets/images/uniarts-right1@2x.png"
            alt=""
        />
        <img
            style="
                position: absolute;
                width: auto;
                height: 375px;
                left: -190px;
                bottom: -94px;
            "
            src="@/modules/cloudart/assets/images/uniarts-right2@2x.png"
            alt=""
        />
        <div class="container">
            <h2>{{ $t("home.components-title") }}</h2>
            <div class="item-body" v-show="isShow">
                <div
                    ref="box"
                    class="item animate__animated animate__fadeInUp animate__delay-1s"
                >
                    <div class="img-box">
                        <img
                            src="@/modules/cloudart/assets/images/SDK@2x.png"
                            style="width: 81px; height: 67px;"
                            alt=""
                        />
                    </div>
                    <h3>{{ $t("home.components-item6") }}</h3>
                    <p>
                        {{ $t("home.components-item6-desc") }}
                    </p>
                </div>
                <div
                    class="item animate__animated animate__fadeInUp animate__delay-2s"
                >
                    <div class="img-box">
                        <img
                            src="@/modules/cloudart/assets/images/brige@2x.png"
                            style="width: 112px; height: 47px;"
                            alt=""
                        />
                    </div>
                    <h3>{{ $t("home.components-item7") }}</h3>
                    <p>
                        {{ $t("home.components-item7-desc") }}
                    </p>
                </div>
                <div
                    class="item animate__animated animate__fadeInUp animate__delay-3s"
                >
                    <div class="img-box">
                        <img
                            src="@/modules/cloudart/assets/images/dao@2x.png"
                            style="width: 83px; height: 77px;"
                            alt=""
                        />
                    </div>
                    <h3>{{ $t("home.components-item8") }}</h3>
                    <p>
                        {{ $t("home.components-item8-desc") }}
                    </p>
                </div>
                <div
                    class="item animate__animated animate__fadeInUp animate__delay-4s"
                >
                    <div class="img-box">
                        <img
                            src="@/modules/cloudart/assets/images/shop@2x.png"
                            style="width: 81px; height: 56px;"
                            alt=""
                        />
                    </div>
                    <h3>{{ $t("home.components-item9") }}</h3>
                    <p>
                        {{ $t("home.components-item9-desc") }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "components",
        data() {
            return {
                isShow: false,
                top: 0,
            }
        },
        mounted() {
            this.top =
                this.$refs.box.getBoundingClientRect().top - window.innerHeight
            if (this.top > 0) {
                window.GLOBAL.vbus.$on("windowScroll", this.onScroll)
            } else {
                this.isShow = true
            }
        },
        methods: {
            onScroll(scrollTop) {
                if (scrollTop - this.top >= 100) {
                    this.isShow = true
                    window.GLOBAL.vbus.$off("windowScroll", this.onScroll)
                }
            },
        },
    }
</script>

<style scoped lang="scss">
    .components {
        padding-top: 96px;
        padding-bottom: 200px;
        position: relative;
        background: linear-gradient(0deg, #e5f2ff 0%, #ffffff 99%);
        min-height: 1132px;
        overflow: hidden;
    }
    h2 {
        opacity: 1;
        font-size: 38px;
        font-family: Microsoft YaHei Bold, Microsoft YaHei Bold-Bold;
        font-weight: 800;
        text-align: center;
        margin-bottom: 65px;
        color: #101010;
    }
    .item-body {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .item {
            width: 585px;
            /* height: 309px; */
            padding: 24px 29px 40px 29px;
            margin-bottom: 40px;
            background: #ffffff;
            box-shadow: 0px 0px 28px 2px rgba(198, 198, 198, 0.29);
        }
        .img-box {
            height: 77px;
            text-align: left;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        h3 {
            font-size: 25px;
            font-weight: 500;
            text-align: left;
            color: #101010;
            margin-bottom: 20px;
        }
        p {
            font-size: 16px;
            font-weight: 400;
            text-align: left;
            color: #101010;
            line-height: 30px;
        }
    }
</style>
