<template>
    <div class="team">
        <h2 ref="box" class="title">{{ $t("home.team-title2") }}</h2>
        <div class="item-content">
            <div class="container">
                <h1
                    v-show="isShow"
                    class="animate__animated animate__fadeInUp animate__delay-1s"
                >
                    {{ $t("home.team-title") }}
                </h1>
                <p
                    v-show="isShow"
                    class="animate__animated animate__fadeInUp animate__delay-2s"
                    v-html="$t('home.team-desc')"
                ></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "team",
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
                if (scrollTop - this.top >= 300) {
                    this.isShow = true
                    window.GLOBAL.vbus.$off("windowScroll", this.onScroll)
                }
            },
        },
    }
</script>

<style scoped lang="scss">
    .team {
        padding-top: 105px;
        min-height: 884px;
        width: 100%;
    }
    .item-content {
        width: 100%;
        height: 631px;
        overflow: hidden;
        background: url(~@/modules/cloudart/assets/images/team@2x.png) no-repeat;
        background-size: 100% 100%;
        background-position: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    h2.title {
        font-size: 38px;
        font-family: Microsoft YaHei Bold, Microsoft YaHei Bold-Bold;
        font-weight: 700;
        text-align: center;
        color: #101010;
        margin-bottom: 105px;
    }
    h1 {
        font-size: 46px;
        font-family: Helvetica Neue Regular, Helvetica Neue Regular-Regular;
        font-weight: 400;
        text-align: center;
        padding-bottom: 55px;
        color: #fefefe;
        position: relative;
        margin-bottom: 31px;
        text-shadow: 2px 2px 5px rgba(14, 41, 87, 0.93);
    }
    h1::after {
        content: "";
        display: block;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        width: 199px;
        height: 4px;
        opacity: 1;
        background: #ffffff;
        box-shadow: 1px 2px 8px rgba(14, 41, 87, 0.75);
    }
    p {
        font-size: 30px;
        font-family: Helvetica Neue Regular, Helvetica Neue Regular-Regular;
        font-weight: 400;
        text-align: center;
        color: #fefefe;
        text-shadow: 1px 2px 4px rgba(14, 41, 87, 0.93);
        max-width: 80%;
        margin: 0 auto;
    }
</style>
