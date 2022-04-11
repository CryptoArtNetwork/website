<template>
    <footer>
        <div class="container">
            <div class="title">{{ $t("footer.foundation") }}</div>
            <div class="top">
                <div class="col">
                    <span style="margin-bottom: 20px;">{{
                        $t("footer.technology")
                    }}</span>
                    <ul>
                        <!-- <li>{{ $t("navbar.testnet") }}</li> -->
                        <li>
                            <a
                                target="_blank"
                                href="https://telemetry.polkadot.io/#list/Uni-Arts%20Staging%20network
"
                                >{{ $t("footer.telemetry") }}</a
                            >
                        </li>
                        <li>
                            <a
                                target="_blank"
                                href="https://github.com/uni-arts-chain/UniArts-white-paper"
                                >{{ $t("navbar.white-page") }}</a
                            >
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <span style="margin-bottom: 20px;">{{
                        $t("footer.product")
                    }}</span>
                    <ul>
                        <li>
                            <a target="_blank" href="https://app.uniarts.me">{{
                                $t("footer.uni-arts-chain")
                            }}</a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                href="http://explorer.uniarts.me/#/explorer"
                                >{{ $t("navbar.explorer") }}</a
                            >
                        </li>
                    </ul>
                </div>
                <div class="right-text">
                    <p>
                        {{ $t("footer.subscribe-text") }}
                    </p>
                    <button>{{ $t("footer.subscribe") }}</button>
                </div>
            </div>
        </div>
        <!-- <div class="bottom">
            <div class="container">
                ©2019-2021 uniarts.me
            </div>
        </div> -->
    </footer>
</template>

<script>
    export default {}
</script>

<style scoped lang="scss">
    footer {
        min-height: 447px;
        padding-top: 95px;
        position: relative;
        background: #ececec;
        flex: 0 0 auto;
    }
    .bottom {
        height: 46px;
        position: absolute;
        bottom: 0;
        width: 100%;
        /* background: #072642; */
        .container {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            font-weight: 400;
            text-align: left;
            color: #101010;
            line-height: 30px;
        }
    }
    .title {
        font-size: 28px;
        font-family: Microsoft YaHei Bold, Microsoft YaHei Bold-Bold;
        font-weight: 800;
        text-align: left;
        color: #101010;
        line-height: 30px;
        margin-bottom: 10px;
    }
    .bottom-logo {
        display: flex;
        flex-direction: column;
        width: 420px;
        .bottom-logo > img.en {
            width: 180px;
            height: 32px;
        }

        ul {
            margin-top: 6px;
        }
        ul li {
            float: left;
            width: 41px;
            height: 41px;
            margin-right: 18px;
        }
        ul li a {
            display: block;
            width: 100%;
            height: 100%;
            color: inherit;
            text-decoration: none;
        }
        ul li > img {
            height: 100%;
            margin-right: 18px;
        }
        ul li:nth-child(1) {
            background: url(~@/modules/cloudart/assets/images/wechat@2x.png) no-repeat;
            background-size: 41px 41px;
        }
        ul li:nth-child(2) {
            background: url(~@/modules/cloudart/assets/images/feiji@2x.png) no-repeat;
            background-size: 41px 41px;
        }
        ul li:nth-child(3) {
            background: url(~@/modules/cloudart/assets/images/youjian@2x.png) no-repeat;
            background-size: 41px 41px;
        }
        ul li:nth-child(4) {
            background: url(~@/modules/cloudart/assets/images/github@2x.png) no-repeat;
            background-size: 41px 41px;
        }
        ul li:nth-child(5) {
            background: url(~@/modules/cloudart/assets/images/discord@2x.png) no-repeat;
            background-size: 41px 41px;
        }
        ul li:nth-child(6) {
            background: url(~@/modules/cloudart/assets/images/twitter@2x.png) no-repeat;
            background-size: 41px 41px;
        }
        ul li:nth-child(7) {
            background: url(~@/modules/cloudart/assets/images/medium@2x.png) no-repeat;
            background-size: 41px 41px;
        }
        > img {
            width: 138px;
        }
    }
    .top {
        overflow: hidden;
        padding-top: 33px;
        padding-bottom: 40px;
        .col {
            display: flex;
            flex-direction: column;
            float: left;
        }
        .col {
            width: 23%;
        }
        .col > span {
            font-size: 18px;
            font-family: PingFang SC Medium, PingFang SC Medium-Medium;
            font-weight: 500;
            text-align: left;
            color: #101010;
            line-height: 30px;
        }
        .col ul li {
            font-size: 16px;
            font-family: PingFang SC Regular, PingFang SC Regular-Regular;
            font-weight: 400;
            text-align: left;
            color: #101010;
            line-height: 30px;
            margin-bottom: 15px;
            // line-height: 30px;
        }
        .col ul li a {
            color: inherit;
            text-decoration: none;
        }
        .right-text {
            float: left;
            width: 311px;
            text-align: left;
            p {
                font-size: 16px;
                font-family: PingFang SC Regular, PingFang SC Regular-Regular;
                font-weight: 400;
                text-align: left;
                color: #101010;
                line-height: 30px;
                margin-bottom: 35px;
            }
            button {
                width: 162px;
                height: 45px;
                cursor: pointer;
                opacity: 1;
                background: linear-gradient(
                    110deg,
                    #59b3ff 0%,
                    #093af7 66%,
                    #093af7 87%,
                    #8137dc 95%
                );
                border-radius: 23px;
                font-size: 16px;
                font-family: PingFang SC Medium, PingFang SC Medium-Medium;
                font-weight: 500;
                text-align: center;
                color: #ffffff;
                line-height: 30px;
            }
        }
    }
</style>
