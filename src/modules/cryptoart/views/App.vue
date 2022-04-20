<template>
    <div id="app">
        <Background />
    </div>
</template>

<script>
    import Background from "@/modules/cryptoart/components/Background"
    export default {
        name: "App",
        components: {
            Background
        },
        data() {
            return {
                
            }
        },
    }
</script>

<style lang="scss">
    @import "@/modules/cryptoart/assets/styles/index.scss";

    #app {
        font-family: "Work Sans", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        min-height: 100%;
        position: relative;
        display: flex;
        height: 100%;
        flex-direction: column;
    }

    main {
        flex: 1 0 auto;
    }
</style>
