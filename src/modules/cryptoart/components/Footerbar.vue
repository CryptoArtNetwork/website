<template>
    <div class="footerbar">
        <div class="container body">
            <img
                src="~@/modules/cryptoart/assets/121212@2x.png"
                style="position:absolute;height: 211px;width: 332px;top: 20px;"
                alt=""
            />
            <div class="info">
                <div style="width: 25%;" class="el-col info-item name">
                    <div class="logo">
                        <img
                            src="~@/modules/cryptoart/assets/logo@2x.png"
                            alt=""
                        />
                    </div>
                    <div class="link">
                        <a href="https://t.me/uniarts" target="_blank"><i class="link-icon"></i></a>
                        <a href="mailto:support@vigchain.com" target="_blank"><i class="link-icon"></i></a>
                        <a href="https://github.com/uni-arts-chain" target="_blank"><i class="link-icon"></i></a>
                    </div>
                </div>
                <div style="width: 75%" class="el-col info-item ul">
                    <div class="el-col">
                        <span class="title">摘要</span>
                        <ul>
                            <li>常见问题</li>
                            <li>联系我们</li>
                            <li>公司地址</li>
                        </ul>
                    </div>
                    <div class="el-col">
                        <span class="title">技术</span>
                        <ul>
                            <li>
								<a href="https://telemetry.polkadot.io/#list/Uni-Arts%20Staging%20network" target="_blank"
                                    >测试网络</a
                                >
                            </li>
                            <li>
                                <a href="https://t.me/uniarts" target="_blank"
                                    >Telegram</a
                                >
                            </li>
                            <li><a
                                    href="https://github.com/uni-arts-chain/UniArts-white-paper"
                                    target="_blank"
                                    >白皮书</a
                                ></li>
                        </ul>
                    </div>
                    <div class="el-col">
                        <span class="title">产品展示</span>
                        <ul>
                            <li>
                                <a href="https://uniarts.network/" target="_blank"
                                    >云画链</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftestnet.uniarts.me#/explorer"
                                    target="_blank"
                                    >浏览器</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <span>苏ICP备2022012299号-1</span
                >
                <span>南京加密艺画科技有限公司</span
                >
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
		},
		methods: {
			goTelegram() {
				
			}
		}
    }
</script>

<style lang="scss" scoped>
    .footerbar {
        flex: 0 0 auto;
        min-height: 249px;
        // background: $footer-bg;
        background: linear-gradient(#19056a 0%, #391fa3 99%);
        width: 100%;
    }
    .body {
        min-height: 249px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
    }
    .info {
        min-height: 100px;
        display: flex;
        justify-content: space-between;
        color: white;
        padding-top: 2.5rem;
        position: relative;
        z-index: 1;
        .name {
            font-size: 17px;
            font-weight: 400;
            text-align: left;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #ffffff;
            line-height: 30px;
            .logo {
                margin-bottom: 30px;
                width: 130px;
                height: 80px;
                margin-top: 10px;
                overflow: hidden;
                position: relative;
                img {
                    width: 260px;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translateX(-50%) translateY(-50%);
                }
            }   
        }
        .link {
            width: 210px;
            display: flex;
            align-items: center;
            justify-content: center;
            .link-icon {
                display: block;
                width: 25px;
                height: 25px;
				margin: 0 10px;
                background-size: 25px 25px;
                cursor: pointer;
            }
            /* a:nth-child(1) .link-icon {
                background-image: url(~@/modules/cryptoart/assets/zhifu@2x.png);
            } */
            a:nth-child(1) .link-icon {
                background-image: url(~@/modules/cryptoart/assets/feiji@2x.png);
            }
            a:nth-child(2) .link-icon {
                background-image: url(~@/modules/cryptoart/assets/youjian@2x.png);
            }
            a:nth-child(3) .link-icon {
                background-image: url(~@/modules/cryptoart/assets/github@2x.png);
            }
            /* a:nth-child(5) .link-icon {
                background-image: url(~@/modules/cryptoart/assets/weibo@2x.png);
            } */
        }
        .info-item.ul {
            padding-left: 15%;
            display: flex;
            padding-bottom: 48px;
            justify-content: space-between;
            .el-col {
                float: left;
                width: 180px;
                margin-right: 30px;
            }
            .title {
                font-size: 1.2rem;
                font-weight: 400;
                text-align: left;
                color: #ffffff;
                line-height: 30px;
                padding-bottom: 0.8rem;
                margin-bottom: 1rem;
                border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            }
            li {
                width: 100%;
                text-align: left;
                font-size: 14px;
                font-weight: 400;
                padding: 0.3rem 0;
                margin-bottom: 0.4rem;
            }
            li a {
                text-decoration: none;
                color: inherit;
            }
        }
        .info-item {
            span {
                text-align: left;
                display: block;
                font-size: 16px;
                font-weight: 400;
                text-align: left;
                color: #ffffff;
                line-height: 30px;
            }
            img {
                max-width: 260px;
            }
        }
    }
    .copyright {
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        height: 41px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
        text-align: left;
        color: #ffffff;
        line-height: 41px;
        > span {
            margin: 0 30px;
        }
    }
</style>
