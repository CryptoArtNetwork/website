<template>
    <div class="background">
        <canvas ref="c"></canvas>
    </div>
</template>

<script>
    import { initMethod } from '@/modules/cryptoart/plugins/visualization'
    export default {
        name: "background",
        mounted(){
            initMethod(this.$refs.c)
        }
    }
</script>

<style scoped lang="scss">
    .background {
        width: 100%;
        height: 100%;
    }
    canvas {
        position: absolute;
        top: 0;
        left: 0;
    }

    @media screen and (max-width: 768px) {
        
    }
</style>
