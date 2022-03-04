<template>
    <div class="hello">
        <div class="body">
            <h1>
                <img src="@/assets/images/logo.png" alt="" />
            </h1>
            <h2>SOMETHING BIG IS <strong>COMING SOON</strong></h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HelloWorld",
        props: {
            msg: String,
        },
    }
</script>

<style scoped lang="scss">
    .hello {
        position: relative;
        z-index: 1;
        min-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h1 {
        font-size: 55px;
        color: #fff;
        line-height: 55px;
        font-weight: 500;
        margin-bottom: 4rem;
        strong {
            font-weight: 900;
        }
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img {
        height: 10rem;
        margin-right: 2rem;
    }
    h2 {
        font-size: 40px;
        color: #fff;
        line-height: 1.2;
        font-weight: 500;
        margin-bottom: 1.5rem;
        strong {
            font-weight: 900;
        }
    }
    a {
        border: 2px solid #ee76ad;
        border-color: #fff;
        color: #fff;
        border-radius: 30px;
        display: inline-block;
        font-weight: 600;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        // border: 1px solid transparent;
        padding: 1rem 2.5rem;
        font-size: 1.1rem;
        line-height: 1.5;
    }

    @media screen and (max-width: 768px) {
        h1 {
            font-size: 1.8rem;
            margin-bottom: 1.1rem;
        }
        img {
            height: 4rem;
        }

        h2 {
            font-size: 1rem;
        }
    }
</style>
