<template>
    <div class="news">
        <div class="container">
            <h2>{{ $t("new.title") }}</h2>
            <div class="news-item">
                <a class="item">
                    <AdaptiveImage width="100%" height="160px" :url="picture" />
                    <div class="date">2021-01-18</div>
                    <div class="title">
                        <RowText :text="text" :textLength="textLength" />
                    </div>
                </a>
                <a class="item">
                    <AdaptiveImage width="100%" height="160px" :url="picture" />
                    <div class="date">2021-01-18</div>
                    <div class="title">
                        <RowText :text="text" :textLength="textLength" />
                    </div>
                </a>
                <a class="item">
                    <AdaptiveImage width="100%" height="160px" :url="picture" />
                    <div class="date">2021-01-18</div>
                    <div class="title">
                        <RowText :text="text" :textLength="textLength" />
                    </div>
                </a>
                <a class="item">
                    <AdaptiveImage width="100%" height="160px" :url="picture" />
                    <div class="date">2021-01-18</div>
                    <div class="title">
                        <RowText :text="text" :textLength="textLength" />
                    </div>
                </a>
            </div>
            <div class="more">{{ $t("global.more") }}</div>
        </div>
        <CusCircle class="circle1" r="4.5" bg="#50c3ff"></CusCircle>
        <CusCircle class="circle2" r="14.5" bg="#ffca50"></CusCircle>
        <CusCircle class="circle3" r="33" bg="#50c3ff"></CusCircle>
    </div>
</template>

<script>
    import AdaptiveImage from "@/modules/cloudart/components/AdaptiveImage"
    import RowText from "@/modules/cloudart/components/RowText"
    import CusCircle from "@/modules/cloudart/components/Circle"
    import picture from "@/modules/cloudart/assets/images/news21.webp"
    export default {
        name: "news",
        components: {
            CusCircle,
            AdaptiveImage,
            RowText,
        },
        data() {
            return {
                picture,
                text: "Bitfrost 与达尔文达成战略合作，探索NFT与Defi的跨链融合",
                textLength: "38",
            }
        },
    }
</script>

<style scoped lang="scss">
    .news {
        padding-top: 100px;
        position: relative;
    }
    h2 {
        text-align: left;
        font-size: 38px;
        font-weight: 300;
        text-align: left;
        color: #101010;
        letter-spacing: 0px;
        margin-bottom: 65px;
    }
    .news-item {
        overflow: hidden;
        width: 100%;
    }
    .more {
        font-weight: 600;
        font-size: 20px;
        padding: 0 75px;
        border-radius: 27px;
        line-height: 50px;
        color: white;
        background: #ffca50;
        width: 230px;
        height: 50px;
        margin: 0 auto;
        margin-top: 70px;
        cursor: pointer;
    }
    .item {
        width: 25%;
        float: left;
        padding: 0 15px;
        cursor: pointer;
    }
    .date {
        font-weight: 700;
        letter-spacing: 0.5px;
        line-height: 20px;
        font-size: 12px;
        -webkit-order: -1;
        order: -1;
        opacity: 0.5;
        text-align: left;
        margin-top: 10px;
        color: #00141f;
        margin-bottom: 5px;
    }
    .title {
        font-size: 16px;
        line-height: 1.5;
        text-align: left;
    }
    .circle1 {
        right: 20%;
        top: 200px;
    }
    .circle2 {
        left: 10%;
        top: 20px;
    }
    .circle3 {
        right: 40%;
        bottom: 0%;
    }
</style>
