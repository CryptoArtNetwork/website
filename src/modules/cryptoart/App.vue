<template>
	<div id="app">
			<Navbar></Navbar>
			<Main></Main>
			<FooterBar></FooterBar>
	</div>
</template>

<script>
	import Navbar from "@/modules/cryptoart/components/Navbar";
	import FooterBar from "@/modules/cryptoart/components/Footerbar";
	import Main from "@/modules/cryptoart/components/Main";
	export default {
		name: "HelloWorld",
		components: {
			Navbar,
      FooterBar,
      Main,
		},
	};
</script>

<style>
	#app {
		/* font-family: Avenir, Helvetica, Arial, sans-serif; */
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
    min-height: 100%;
    display: flex;
    flex-direction: column;
	}
  * {
    margin: 0;
    padding:0;
    list-style: none;
    box-sizing: border-box;
  }
  html,body {
    height: 100%;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
