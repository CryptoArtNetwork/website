<template>
    <div class="route">
        <h2 ref="box">{{ $t("home.route-title") }}</h2>
        <div class="router-img">
            <img src="@/modules/cloudart/assets/images/route.png" alt="" />
        </div>
        <img class="map1" src="@/modules/cloudart/assets/images/roadmap1@2x.png" alt="" />
        <img class="map2" src="@/modules/cloudart/assets/images/roadmap2@2x.png" alt="" />
    </div>
</template>

<script>
    export default {
        name: "Route",
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
    .route {
        width: 100%;
        padding-top: 49px;
        min-height: 681px;
        position: relative;
        padding-bottom: 100px;
        overflow: hidden;
        background: linear-gradient(0deg, #7bcfff 0%, #ffec86 100%);
        .map1 {
            width: 754px;
            position: absolute;
            top: 0;
            right: 0;
        }
        .map2 {
            width: 703px;
            position: absolute;
            bottom: 0;
            left: 0;
        }
    }
    h2 {
        font-size: 50px;
        font-family: Microsoft YaHei Bold, Microsoft YaHei Bold-Bold;
        font-weight: 700;
        text-align: center;
        color: #424242;
        margin-bottom: 84px;
    }
    .route-item {
        overflow: hidden;
        position: relative;
        z-index: 1;
    }
    .item {
        float: left;
        width: 25%;
    }
    .line-body {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 64px;
        .line {
            width: 140.5px;
            height: 4px;
            background: #ffffff;
        }
        .circle {
            width: 19px;
            height: 19px;
            border: 3px solid white;
            border-radius: 50%;
        }
    }
    .content::before {
        content: "";
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        border-top: 16px solid transparent;
        border-left: 16px solid transparent;
        border-bottom: 16px solid white;
        border-right: 16px solid transparent;
    }
    .content::-webkit-scrollbar {
        display: none; /*ChromeSafari*/
    }

    .content {
        position: relative;
        background: white;
        margin: 0px 12.5px;
        width: 275px;
        padding: 26px 28px;
        text-align: left;
        height: 354px;
        overflow: hidden;
        scrollbar-width: none; /*Firefox*/
        -ms-overflow-style: none; /*IE10+*/
        overflow-y: scroll;
        p {
            font-size: 16px;
            font-family: Helvetica Neue Regular, Helvetica Neue Regular-Regular;
            font-weight: 400;
            text-align: left;
            color: #101010;
            margin-bottom: 15px;
        }
        .date {
            margin-bottom: 31px;
            .year {
                font-size: 48px;
                font-family: Microsoft YaHei Bold, Microsoft YaHei Bold-Bold;
                font-weight: 700;
                text-align: left;
                color: #101010;
            }
            .month {
                font-size: 30px;
                font-family: Helvetica Neue Regular,
                    Helvetica Neue Regular-Regular;
                font-weight: 400;
                text-align: left;
                color: #101010;
            }
        }
    }
    .item.disabled {
        .line-body {
            opacity: 0.5;
        }
        .content {
            background-color: rgba(256, 256, 256, 0.3);
        }
        .content::before {
            border-bottom-color: rgba(256, 256, 256, 0.3);
        }
        .date .year {
            color: white;
        }
        .date .month {
            color: white;
        }
        .content p {
            color: white;
        }
    }

    .router-img {
        max-width: 100%;
        width: 1300px;
        margin: 0 auto;
        img {
            width: 100%;
            margin-left: 30px;
        }
    }
</style>
