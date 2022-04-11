<template>
    <div class="circle">
        <svg
            :width="boxRadius"
            :height="boxRadius"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle :cx="cx" :cy="cy" :r="radius" :fill="bg">
                <animateMotion
                    :dur="`${duration}s`"
                    repeatCount="indefinite"
                    v-if="this.type <= 2"
                    :path="`m0 0 a ${d} ${d}, ${firstFlag}, -${d} ${d} m0 0 a ${d} ${d}, ${lastFlag} ${d} -${d}`"
                />
                <animateMotion
                    v-else
                    :dur="`${duration}s`"
                    repeatCount="indefinite"
                    :path="`m0 0 a ${d} ${d}, ${firstFlag}, ${d} -${d} m0 0 a ${d} ${d}, ${lastFlag} -${d} ${d}`"
                />
            </circle>
        </svg>
    </div>
</template>

<script>
    import anime from "animejs"
    export default {
        name: "background",
        props: ["r", "bg"],
        data() {
            return {
                d: 20,
                duration: anime.random(10, 20),
                boxRadius: 0,
                firstFlag: "0, 1, 1",
                lastFlag: "0, 0, 1",
                sweepFlag: 0,
                type: 1,
                radius: "100",
            }
        },
        created() {
            this.radius = parseFloat(this.r)
            this.boxRadius = (this.radius + this.d) * 2
            this.type = Math.ceil(anime.random(1, 4))

            // 0 为逆时针, 1 为顺时针
            this.sweepFlag = anime.random(0, 1) > 0.5 ? 0 : 1

            // 上边起点，顺时针  0, 1, 1 ----- 0, 0, 1
            // 右边起点，顺时针  0, 0, 1 ----- 0, 1, 1
            // 下边起点，顺时针  0, 1, 1 ----- 0, 0, 1
            // 左边起点，顺时针  0, 0, 1 ----- 0, 1, 1

            // 上边起点，逆时针  0, 0, 0 ----- 0, 1, 0
            // 右边起点，逆时针  0, 1, 0 ----- 0, 0, 0
            // 下边起点，逆时针  0, 0, 0 ----- 0, 1, 0
            // 左边起点，逆时针  0, 1, 0 ----- 0, 0, 0
            if (this.sweepFlag == 1) {
                switch (this.type) {
                    case 1:
                        this.cx = this.boxRadius / 2
                        this.cy = this.radius
                        this.firstFlag = "0, 1, 1"
                        this.lastFlag = "0, 0, 1"
                        break
                    case 2:
                        this.cx = this.boxRadius - this.radius
                        this.cy = this.boxRadius / 2
                        this.firstFlag = "0, 0, 1"
                        this.lastFlag = "0, 1, 1"
                        break
                    case 3:
                        this.cx = this.boxRadius / 2
                        this.cy = this.boxRadius - this.radius
                        this.firstFlag = "0, 1, 1"
                        this.lastFlag = "0, 0, 1"
                        break
                    case 4:
                        this.cx = this.radius
                        this.cy = this.boxRadius / 2
                        this.firstFlag = "0, 0, 1"
                        this.lastFlag = "0, 1, 1"
                        break
                }
            } else {
                switch (this.type) {
                    case 1:
                        this.cx = this.boxRadius / 2
                        this.cy = this.radius
                        this.firstFlag = "0, 0, 0"
                        this.lastFlag = "0, 1, 0"
                        break
                    case 2:
                        this.cx = this.boxRadius - this.radius
                        this.cy = this.boxRadius / 2
                        this.firstFlag = "0, 1, 0"
                        this.lastFlag = "0, 0, 0"
                        break
                    case 3:
                        this.cx = this.boxRadius / 2
                        this.cy = this.boxRadius - this.radius
                        this.firstFlag = "0, 0, 0"
                        this.lastFlag = "0, 1, 0"
                        break
                    case 4:
                        this.cx = this.radius
                        this.cy = this.boxRadius / 2
                        this.firstFlag = "0, 1, 0"
                        this.lastFlag = "0, 0, 0"
                        break
                }
            }
        },
    }
</script>

<style scoped lang="scss">
    .circle {
        line-height: 10px;
        position: absolute;
        z-index: -1;
    }

    @media screen and (max-width: 768px) {
    }
</style>
