<template>
	<div class="partner">
		<div class="partner-item">
			<div class="item">
				<div class="logo-box">
					<img src="@/modules/cryptoart/assets/linzone@2x.png" style="height: 120px;" alt="" />
				</div>
				<!-- <span>LinZone</span> -->
			</div>
			<div class="item">
				<div class="logo-box">
					<img src="@/modules/cryptoart/assets/hh-logo.png" alt="" />
				</div>
			</div>
			<div class="item">
				<div class="logo-box">
					杭州超体云网络有限公司
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "partner",
	};
</script>

<style scoped lang="scss">
	.partner {
		padding-top: 29px;
		position: relative;
		padding-bottom: 112px;
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
	.partner-item {
		padding-left: 40px;
		padding-right: 40px;
		display: flex;
		justify-content: space-between;
		.item {
			.logo-box {
				height: 84px;
				display: flex;
				align-items: center;
				justify-content: space-around;
				margin-bottom: 40px;
				font-size: 30px;
			}
			.logo-box > img {
				height: 100%;
			}
		}
		.item > span {
			font-size: 18px;
			font-weight: 400;
			text-align: left;
			color: #101010;
			letter-spacing: 0px;
		}
	}
	.circle1 {
		right: 5%;
		top: 140px;
	}
	.circle2 {
		left: 5%;
		top: 240px;
	}
	.circle3 {
		right: -40px;
		bottom: 10%;
	}
</style>
