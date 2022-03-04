/** * Created by Lay Hunt on 2020-12-08 17:55:24. */
<template>
	<div class="navbar">
		<div class="container">
			<div class="logo">
				<div class="logo-img">
					<img src="@/assets/logo@2x.png" />
				</div>
				<div class="logo-text">
					<span>南京加密艺画科技有限公司</span>
					<span>Nanjing CryptoArt Technology Co.,LTD</span>
				</div>
			</div>
			<ul class="menu">
				<li class="item"><a href="/">首页</a></li>
				<li class="item"><a href="https://uniarts.network/" target="_blank">云画链</a></li>
				<li class="item"><a href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftestnet.uniarts.me#/explorer" target="_blank">浏览器</a></li>
				<li class="item"><i></i></li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		name: "navbar",
		data() {
			return {};
		},
	};
</script>
<style lang="scss" scoped>
	.navbar {
		flex: 0 0 auto;
		height: 85px;
		.container {
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.logo {
			overflow: hidden;
			height: 100%;
			display: flex;
			align-items: center;
			.logo-img {
				position: relative;
				width: 150px;
				height: 100%;
			}
			.logo-text {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				color: #bc944e;
				span:first-child {
					font-size: 20px;
					font-weight: 500;
				}
				span:last-child {
					font-size: 13px;
				}
			}
			img {
				position: absolute;
				top: 50%;
				left: 50%;
				width: 200px;
				transform: translateY(-50%) translateX(-50%);
			}
		}
	
		.menu {
			display: flex;
			align-items: center;
		}
		.menu .item {
			display: block;
			min-width: 160px;
			display: flex;
			justify-content: center;
			font-size: 16px;
			font-weight: 400;
			text-align: center;
			color: #321d88;
			letter-spacing: 1px;
            a {
                text-decoration: none;
				color: #321d88;
				cursor: pointer;
            }
            a:focus, a:active, a:hover {
                color: #321d88;
            }
            i {
				display: block;
                cursor: pointer;
				width: 17px;
				height: 18px;
				background-size: 17px 18px;
				background-image: url(~@/assets/search@2x.png);
			}
		}
	}
</style>
