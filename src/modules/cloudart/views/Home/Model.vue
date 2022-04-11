<template>
    <div class="model">
        <div class="container">
            <h2>{{ $t("home.model-title") }}</h2>
            <div class="left">
                <div class="item">
                    <h3 class="title">
                        <img src="@/modules/cloudart/assets/images/uart@2x.png" alt="" />{{
                            $t("home.model-item1-title")
                        }}
                    </h3>
                    <p>{{ $t("home.model-item1-desc") }}</p>
                </div>
                <div class="item">
                    <h3 class="title">
                        <img
                            src="@/modules/cloudart/assets/images/uink@2x.png"
                            style="width: 50px; height: 58px; margin-right: 0;"
                            alt=""
                        />{{ $t("home.model-item2-title") }}
                    </h3>
                    <p>{{ $t("home.model-item2-desc") }}</p>
                </div>
                <div class="item">
                    <h3 class="title">
                        <img src="@/modules/cloudart/assets/images/staking@2x.png" alt="" />{{
                            $t("home.model-item3-title")
                        }}
                    </h3>
                    <p>{{ $t("home.model-item3-desc") }}</p>
                </div>
            </div>
            <div class="right">
                <div class="table" style="margin-bottom: 50px;">
                    <div class="title">
                        <span>UART</span> {{ $t("home.model-table-title1") }}
                    </div>
                    <div class="table-body">
                        <div class="header">
                            <div class="td">
                                {{ $t("home.model-table-colum1") }}
                            </div>
                            <div class="td">
                                {{ $t("home.model-table-colum3") }}
                            </div>
                            <div class="td">
                                {{ $t("home.model-table-colum2") }}
                            </div>
                        </div>
                        <div class="body">
                            <div class="row">
                                <div class="td">
                                    {{ $t("home.model-table-colum4") }}
                                </div>
                                <div class="td">
                                    {{
                                        $store.state.language == "en"
                                            ? "25 Million"
                                            : "2500万"
                                    }}
                                </div>
                                <div class="td"></div>
                            </div>
                            <div class="row">
                                <div class="td">
                                    {{ $t("home.model-table-colum5") }}
                                </div>

                                <div class="td">
                                    {{
                                        $store.state.language == "en"
                                            ? "10 Million"
                                            : "1000万"
                                    }}
                                </div>
                                <div class="td">40%</div>
                            </div>
                            <div class="row">
                                <div class="td">
                                    {{ $t("home.model-table-colum6") }}
                                </div>

                                <div class="td">
                                    {{
                                        $store.state.language == "en"
                                            ? "5 Million"
                                            : "500万"
                                    }}
                                </div>
                                <div class="td">25%</div>
                            </div>
                            <div class="row">
                                <div class="td">
                                    {{ $t("home.model-table-colum7") }}
                                </div>

                                <div class="td">
                                    {{
                                        $store.state.language == "en"
                                            ? "1.5 Million"
                                            : "150万"
                                    }}
                                </div>
                                <div class="td">6%</div>
                            </div>
                            <div class="row">
                                <div class="td">
                                    {{ $t("home.model-table-colum8") }}
                                </div>

                                <div class="td">
                                    {{
                                        $store.state.language == "en"
                                            ? "1 Million"
                                            : "100万"
                                    }}
                                </div>
                                <div class="td">4%</div>
                            </div>
                            <div class="row">
                                <div class="td">
                                    {{ $t("home.model-table-colum26") }}
                                </div>

                                <div class="td">
                                    {{
                                        $store.state.language == "en"
                                            ? "1.5 Million"
                                            : "150万"
                                    }}
                                </div>
                                <div class="td">6%</div>
                            </div>
                            <div class="row">
                                <div class="td">
                                    {{ $t("home.model-table-colum27") }}
                                </div>

                                <div class="td">
                                    {{
                                        $store.state.language == "en"
                                            ? "2 Million"
                                            : "200万"
                                    }}
                                </div>
                                <div class="td">8%</div>
                            </div>
                            <div class="row">
                                <div class="td">
                                    {{ $t("home.model-table-colum28") }}
                                </div>
                                <div class="td">
                                    {{ $t("home.model-table-colum30") }}
                                </div>
                                <div class="td"></div>
                            </div>
                            <div class="row">
                                <div class="td">
                                    {{ $t("home.model-table-colum29") }}
                                </div>
                                <div class="td">
                                    {{ $t("home.model-table-colum31") }}
                                </div>
                                <div class="td"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="table bottom-table">
                    <div class="title">
                        <span>UINK</span> {{ $t("home.model-table-title2") }}
                    </div>
                    <div class="table-body">
                        <div class="header">
                            <div class="td">
                                {{ $t("home.model-table-colum9") }}
                            </div>
                            <div class="td">
                                {{ $t("home.model-table-colum10") }}
                            </div>
                            <div class="td">
                                {{ $t("home.model-table-colum11") }}
                            </div>
                        </div>
                        <div class="body">
                            <div class="row">
                                <div class="td">
                                    {{ $t("home.model-table-colum12") }}
                                </div>
                                <div class="td">
                                    {{ $t("home.model-table-colum13") }}
                                </div>
                                <div class="td">30%</div>
                            </div>
                            <div class="row">
                                <div class="td">
                                    {{ $t("home.model-table-colum14") }}
                                </div>
                                <div class="td">
                                    {{ $t("home.model-table-colum15") }}
                                </div>
                                <div class="td">15%</div>
                            </div>
                            <div class="row">
                                <div class="td">
                                    {{ $t("home.model-table-colum16") }}
                                </div>
                                <div class="td">
                                    {{ $t("home.model-table-colum17") }}
                                </div>
                                <div class="td">15%</div>
                            </div>
                            <div class="row">
                                <div class="td">
                                    {{ $t("home.model-table-colum18") }}
                                </div>
                                <div class="td">
                                    {{ $t("home.model-table-colum19") }}
                                </div>
                                <div class="td">20%</div>
                            </div>
                            <div class="row">
                                <div class="td">
                                    {{ $t("home.model-table-colum20") }}
                                </div>
                                <div class="td">
                                    {{ $t("home.model-table-colum21") }}
                                </div>
                                <div class="td">5%</div>
                            </div>
                            <div class="row">
                                <div class="td">
                                    {{ $t("home.model-table-colum22") }}
                                </div>
                                <div class="td">
                                    {{ $t("home.model-table-colum23") }}
                                </div>
                                <div class="td">10%</div>
                            </div>
                            <div class="row">
                                <div class="td">
                                    {{ $t("home.model-table-colum24") }}
                                </div>
                                <div class="td">
                                    {{ $t("home.model-table-colum25") }}
                                </div>
                                <div class="td">5%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <CusCircle class="circle1" r="107.5" bg="#ffca50"></CusCircle>
        <CusCircle class="circle2" r="15" bg="#ffca50"></CusCircle>
        <CusCircle class="circle3" r="29" bg="#50c3ff"></CusCircle>
    </div>
</template>

<script>
    import CusCircle from "@/modules/cloudart/components/Circle"
    export default {
        name: "model",
        components: {
            CusCircle,
        },
    }
</script>

<style scoped lang="scss">
    .model {
        padding-top: 100px;
        position: relative;
        padding-bottom: 100px;
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
    .container {
        overflow: hidden;
    }
    .left {
        width: 40%;
        float: left;
        .item {
            margin-bottom: 57px;
            .title {
                font-size: 24px;
                line-height: 30px;
                color: #101010;
                letter-spacing: 0px;
                margin-bottom: 23px;
                display: flex;
                align-items: flex-end;
                font-weight: 600;
            }
            .title > img {
                width: 32px;
                height: 32px;
                margin-right: 15px;
            }
            p {
                font-size: 16px;
                font-weight: 400;
                text-align: left;
                color: #101010;
                line-height: 30px;
                letter-spacing: 0px;
            }
        }
    }
    .right {
        float: right;
        width: 55%;
        height: 100%;
        padding-left: 5%;
        .table {
            .title {
                text-align: right;
                font-size: 18px;
                color: #101010;
                letter-spacing: 0px;
                margin-bottom: 12px;
                span {
                    font-weight: 600;
                }
            }
            .header,
            .body {
                float: left;
                width: 100%;
            }
            .table-body {
                overflow: hidden;
                background-color: #fff;
            }
            .table-body .header .td {
                font-size: 16px;
                font-weight: 500;
                text-align: center;
                color: #101010;
                line-height: 30px;
                letter-spacing: 0px;
            }
            .table-body .body .td {
                font-size: 16px;
                font-weight: 400;
                color: #101010;
                line-height: 30px;
                letter-spacing: 0px;
                padding: 3px 0;
            }
            .table-body .header {
                padding: 5px 0;
                background: #98d8ff;
            }
            .table-body .td {
                float: left;
                width: 33%;
                font-size: 16px;
            }
            .table-body .row {
                overflow: hidden;
            }
            .table-body .row:nth-child(odd) {
                background-color: #eaf7ff;
            }
        }
        .bottom-table .table-body .header {
            padding: 5px 0;
            background: #ffce57;
        }
        .bottom-table .table-body .row:nth-child(odd) {
            background-color: #fef5dc;
        }
    }

    .circle1 {
        left: -107px;
        top: 30%;
    }
    .circle2 {
        left: 10%;
        bottom: 27%;
    }
    .circle3 {
        right: 5%;
        bottom: 45%;
    }
</style>
