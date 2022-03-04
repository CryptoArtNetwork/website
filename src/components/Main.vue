/** * Created by Lay Hunt on 2020-12-08 18:01:04. */
<template>
	<div class="main">
		<div class="banner">
			<img src="@/assets/title1@2x.png" alt="">
			<div class="banner-desc">
				值得信赖的原创艺术品交易平台
			</div>
		</div>
		<div class="advantage">
			<div class="container">
				<div class="advantage-item">
					<img src="@/assets/yewu@2x.png" alt="" />
					<h2>业务优势</h2>
					<p>以艺术品溯源作为切入点，通过艺术品属性和买卖信息上链，保证艺术品的唯一性、真实性。</p>
				</div>
				<div class="advantage-item">
					<img src="@/assets/jishu@2x.png" alt="" />
					<h2>技术优势</h2>
					<p style="width:280px;">基于自研的UNIT链建立艺术品交易平台，实现交易对象、交易主体、交易信息、交易服务信息（签证）上链后的交易服务创新。</p>
				</div>
				<div class="advantage-item">
					<img src="@/assets/tuandui@2x.png" alt="" />
					<h2>团队优势</h2>
					<p>团队初创人员均毕业于国内外高校，并在各自领域深耕多年，每个人都是链上重要的节点，强强相扣创造辉煌。</p>
				</div>
			</div>
		</div>
		<div class="uniarts">
			<div class="container">
				<img src="@/assets/pc@2x.png" alt="" />
				<div class="info">
					<h2>链接信用 助力原创</h2>
					<h3>云画链是基于Substrate开发的跨链网络，专注于建设未来文化艺术品NFT资产互联网络，包括数字文化资产拍卖市场，数字艺术品兑换等领域。</h3>
					<a href="https://uniarts.network" target="_blank">查看</a>
				</div>
			</div>
		</div>
		<div class="program container">
			<h2>技术解决方案</h2>
			<p>Technical solutions</p>
			<div class="img-group">
				<div class="item">
					<img src="@/assets/bg_NFT@2x.png" alt="" />
					<div class="icon-body">
						<img src="@/assets/zichan@2x.png" alt="" />
						<h4>NFT数字资产</h4>
					</div>
				</div>
				<div class="item">
					<img src="@/assets/bg_jinrong@2x.png" alt="" />
					<div class="icon-body">
						<img src="@/assets/jinrong@2x.png" style="height: 53px;margin-bottom: 42px;" alt="" />
						<h4>供应链金融</h4>
					</div>
				</div>
				<div class="item">
					<img src="@/assets/bg_qukuailian@2x.png" alt="" />
					<div class="icon-body">
						<img src="@/assets/lian@2x.png" alt="" />
						<h4>区块链产品溯源</h4>
					</div>
				</div>
			</div>
		</div>
		<div class="program introduction container">
			<h2>技术介绍</h2>
			<p>Technical introduction</p>
			<div class="detail-body">
				<div class="item" style="margin-bottom: 143px;">
					<div class="info" style="margin-right: -40px;">
						<h3>宗旨</h3>
						<img src="@/assets/zongzhi@2x.png" style="height: 19px;" alt="" />
						<p>
							中国首家专注于区块链技术的艺术品交易平台，成立于2020年4月。南京加密艺画科技有限公司在全国范围内聚集了领域内的专家就艺术品鉴证、信息上链、链上交易等方面进行探讨，为用户提供指引，为行业发展和标准制定提供参考，促进区块链技术服务于艺术品交易市场。
						</p>
					</div>
					<img src="@/assets/zongzhi1@2x.png" alt="" />
				</div>
				<div class="item">
					<img src="@/assets/kongjian1@2x.png" alt="" />
					<div class="info" style="margin-left: -40px">
						<h3 style="display: flex;justify-content:space-between;">
							技术空间
							<img src="@/assets/kongjian@2x.png" style="height: 44px;" alt="" />
						</h3>
						<p>构建面向艺术品交易领域的行业联盟链，开发艺术品鉴证共识算法，提供艺术品交易服务、区块链技术服务与数据服务，成为中国最具影响力的艺术品交易区块链项目。</p>
					</div>
				</div>
			</div>
		</div>
		<div class="program partner container">
			<h2>合作机构</h2>
			<p>Cooperative organization</p>
			<div class="partner-body">
				<Partner></Partner>
			</div>
		</div>
	</div>
</template>
<script>
import Partner from "@/components/Partner";
	export default {
		name: "index",
		components: {
			Partner,
		},
		data() {
			return {};
		},
	};
</script>
<style lang="scss" scoped>
	.main {
		flex: 1 0 auto;
	}

	.banner {
		width: 100%;
		height: 598px;
		background: url(~@/assets/bg@2x.png) no-repeat;
		background-size: 100% auto;
		background-position: top;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		>img{
			height: 85px;
			margin-bottom: 51px;
		}
		.banner-desc {
			background: url(~@/assets/changfangxing@2x.png) no-repeat;
			background-size: 100%;
			width: 444px;
			height: 57px;
			font-size: 24px;
			font-weight: 500;
			text-align: left;
			color: #ffffff;
			line-height: 24px;
			letter-spacing: 2px;
			text-align: center;
			background-position: 0 10px;
		}
	}
	.advantage {
		padding-top: 109px;
		padding-bottom: 112px;
		.container {
			display: flex;
			justify-content: space-between;
		}
		.advantage-item {
			text-align: center;
			max-width: 260px;
			img {
				height: 65px;
				margin-bottom: 30px;
			}
			h2 {
				font-size: 24px;
				font-weight: 600;
				text-align: center;
				color: #111111;
				letter-spacing: 0px;
				margin-bottom: 25px;
			}
			p {
				font-size: 14px;
				font-weight: 400;
				text-align: left;
				color: #333333;
				line-height: 24px;
				letter-spacing: 0px;
			}
		}
	}
	.uniarts {
		padding-top: 114px;
		padding-bottom: 52px;
		background-color: #f8f8f8;
		.container {
			display: flex;
			justify-content: center;
		}
		.info {
			margin-left: 102px;
			margin-top: 10px;
		}
		img {
			height: 382px;
		}
		h2 {
			font-size: 30px;
			font-weight: 600;
			text-align: left;
			color: #333333;
			letter-spacing: 0px;
			margin-bottom: 28px;
		}
		h3 {
			font-size: 20px;
			font-weight: 400;
			text-align: left;
			color: #333333;
			line-height: 36px;
			letter-spacing: 1px;
			max-width: 513px;
			margin-bottom: 56px;
		}
		a {
			font-size: 20px;
			font-weight: 400;
			text-align: center;
			color: #ffffff;
			letter-spacing: 0px;
			width: 190px;
			height: 55px;
			background: linear-gradient(to left, #9580ec 0%, #321d88 100%);
			border-radius: 10px;
			line-height:55px;
			border: none;
			display: block;
			cursor: pointer;
			float: left;
			outline: none;
			text-decoration: none;
		}
	}
	.program {
		padding-top: 110px;
		> h2 {
			font-size: 30px;
			font-weight: 600;
			text-align: center;
			color: #333333;
			letter-spacing: 0px;
			margin-bottom: 23px;
		}
		> p {
			font-size: 22px;
			font-weight: 400;
			text-align: center;
			text-transform: uppercase;
			color: #999999;
			letter-spacing: 0px;
			margin-bottom: 81px;
		}
		.img-group {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.item {
				height: 269px;
				position: relative;
				> img {
					height: 100%;
				}
			}

			.icon-body {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translateX(-50%) translateY(-40%);
				> img {
					height: 63px;
					margin-bottom: 32px;
				}
				h4 {
					font-size: 24px;
					font-weight: 600;
					text-align: left;
					color: #ffffff;
					letter-spacing: 0px;
				}
			}
		}
	}
	.introduction {
		.item {
			display: flex;
			align-items: center;
			justify-content: space-between;
			> img {
				height: 502px;
			}
		}
		.info {
			text-align: left;
			margin-bottom: 10px;
			h3 {
				font-size: 24px;
				font-weight: 600;
				text-align: left;
				color: #333333;
				line-height: 36px;
				letter-spacing: 1px;
				margin-bottom: 22px;
			}
			> img {
				margin-bottom: 29px;
			}
			p {
				font-size: 18px;
				font-weight: 400;
				text-align: left;
				color: #333333;
				line-height: 30px;
				letter-spacing: 1px;
			}
		}
		.detail-body {
		}
	}

	@media screen and (max-width: 1440px) {
		.banner {
			background-size: auto 100%;
		}
	}
</style>
