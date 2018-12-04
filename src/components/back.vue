<template>
    <div class="back">
        <div class="back_icon"><i></i></div>
    </div>
</template>
<style scoped lang="stylus">
    .back
         width 100%
         height 44px
         max-width 640px
         background #fff
         border-bottom:1px solid #ddd
         position fixed
         top 0
         left 0
         .back_icon
                   width 44px
                   height 44px
                   position relative
                   &:before
                    content ''
                    display inline-block
                    width 15px
                    height 15px
                    background-image url(../../static/img/icon-back.svg)
                    background-size 100% 100%
                    position absolute
                    top 0
                    left 0
                    right 0
                    bottom 0
                    margin auto

</style>