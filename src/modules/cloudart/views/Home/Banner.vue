<template>
    <div class="banner">
        <div class="container">
            <h1 class="title" v-html="$t('home.banner-title')"></h1>
            <h3 class="desc">{{ $t("home.banner-desc") }}</h3>
            <div class="image"></div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped lang="scss">
    .banner {
        background: #bcd5fd;
        padding-top: 120px;
        height: 511px;
    }
    .container {
        position: relative;
        height: 100%;
    }
    .image {
        width: 459px;
        height: 374px;
        right: -100px;
        bottom: 0;
        position: absolute;
        background: url(~@/modules/cloudart/assets/images/top-pic@2x.png);
        background-size: 100% 100%;
    }
    .title {
        font-size: 33px;
        font-weight: 600;
        text-align: left;
        color: #11408b;
        line-height: 28px;
        margin-bottom: 43px;
    }
    .desc {
        width: 694px;
        opacity: 1;
        font-size: 24px;
        font-family: Century Gothic Regular, Century Gothic Regular-Regular;
        font-weight: 400;
        text-align: left;
        color: #11408b;
        line-height: 40px;
        padding-bottom: 120px;
    }
</style>
