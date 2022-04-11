<template>
    <div class="photo-frame">
        <div class="container">
            <h2>{{ $t("home.Digital-photo-frame") }}</h2>
            <div class="item-body" ref="box">
                <div
                    class="left animate__animated animate__fadeInUp animate__delay-1s"
                    v-show="isShow"
                >
                    <img src="@/modules/cloudart/assets/images/zuo@2x.png" alt="" />
                </div>
                <div
                    class="right animate__animated animate__fadeInUp animate__delay-2s"
                    v-show="isShow"
                >
                    <img src="@/modules/cloudart/assets/images/you@2x.png" alt="" />
                    <div class="bottom-title">
                        {{ $t("home.Digital-photo-served") }}
                    </div>
                </div>
            </div>
        </div>
        <img class="digital1" src="@/modules/cloudart/assets/images/digital@2x.png" alt="" />
        <img class="digital2" src="@/modules/cloudart/assets/images/digital3@2x.png" alt="" />
        <img class="digital3" src="@/modules/cloudart/assets/images/digital2@2x.png" alt="" />
    </div>
</template>

<script>
    export default {
        name: "photo-frame",
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
                if (scrollTop - this.top >= 100) {
                    this.isShow = true
                    window.GLOBAL.vbus.$off("windowScroll", this.onScroll)
                }
            },
        },
    }
</script>

<style scoped lang="scss">
    .container {
        position: relative;
        z-index: 1;
    }
    .photo-frame {
        padding-top: 100px;
        position: relative;
        padding-bottom: 207px;
        position: relative;
        min-height: 968px;
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
        display: flex;
        align-items: flex-start;
        justify-content: center;
    }
    .digital1 {
        position: absolute;
        left: 0;
        top: 100px;
        width: 228px;
    }
    .digital2 {
        position: absolute;
        right: 0;
        top: 160px;
        width: 68px;
    }
    .digital3 {
        position: absolute;
        right: 0;
        width: 220px;
        bottom: 0;
    }
    .left {
        width: 377px;
        height: 543px;
        opacity: 1;
        background: #d1cfbc;
        border-radius: 10px;
        img {
            width: 500px;
            margin-top: -64px;
            margin-left: -90px;
        }
    }
    .right {
        position: relative;
        width: 614px;
        height: 428px;
        opacity: 1;
        margin-left: 95px;
        background: #d2d3d8;
        border-radius: 15px;
        img {
            width: 720px;
            height: 550px;
            margin-top: -67px;
            margin-left: -65px;
        }
    }
    .bottom-title {
        position: absolute;
        left: 50%;
        white-space: nowrap;
        transform: translateX(-50%);
        bottom: -87px;
        font-size: 18px;
        font-family: Helvetica Neue Regular, Helvetica Neue Regular-Regular;
        font-weight: 400;
        text-align: center;
        color: #101010;
    }
    .bottom-title::before {
        content: "";
        display: block;
        position: absolute;
        top: 4px;
        left: -30px;
        width: 11px;
        height: 11px;
        opacity: 1;
        transform: rotateZ(45deg);
        background: #7bcfff;
    }
</style>
