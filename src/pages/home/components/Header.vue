<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
        </div>
        <div class="header-right">
        城市
        <span class="iconfont">&#xe62d;</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/style/varibles.styl'
/** 1rem = html font-size 50px */
    .header
        display flex
        line-height  .86rem
        background $bgColor
        color white
        .header-left
            width .64rem
            float left
            .back-icon
                text-align center
                font-size 0.4rem
        .header-input
            flex 1
            background #ffffff
            height 0.64rem
            line-height 0.64rem
            margin 0 0.2rem
            padding-left 0.2rem
            border-radius .1rem
            margin-top .12rem
            color #ccc
        .header-right
            float right
            width 1.24rem
            text-align center
</style>
