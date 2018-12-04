<template>
    <div class="bottom-tab">
        <div class="tab-item" @click="switchTo('/index')    ">
            <img :src="'/index' === $route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal" alt="首页">
            <span :class="{on: '/index' === $route.path}">首页</span>
        </div>
        <div class="tab-item" @click="switchTo('/category')">
            <img :src="'/category' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" alt="分类">
            <span :class="{on: '/category' === $route.path}">分类</span>
        </div>
        <div class="tab-item" @click="switchTo('/find')">
            <img :src="'/find' === $route.path ? tabBarImgArr[2].selected : tabBarImgArr[2].normal" alt="发现">
            <span :class="{on: '/find' === $route.path}">发现</span>
        </div>
        <div class="tab-item" @click="switchTo('/shopcart')">
            <img :src="'/shopcart' === $route.path ? tabBarImgArr[3].selected : tabBarImgArr[3].normal" alt="购物车">
            <span :class="{on: '/shopcart' === $route.path}">购物车</span>
        </div>
        <div class="tab-item" @click="switchTo('/my')">
            <img :src="'/my' === $route.path ? tabBarImgArr[4].selected : tabBarImgArr[4].normal" alt="我的">
            <span :class="{on: '/my' === $route.path}">我的</span>
        </div>
    </div>
</template>
<script>
  export default {
    components: {},
    name: 'index',
    data() {
      return {
        tabBarImgArr: [   //图片切换
          {
            normal: require('../../static/img/tab/icon-home-normal.svg'),
            selected: require('../../static/img/tab/icon-home-hover.svg')
          },
          {
            normal: require('../../static/img/tab/icon-category-normal.svg'),
            selected: require('../../static/img/tab/icon-category-hover.svg')
          },
          {
            normal: require('../../static/img/tab/icon-find-normal.svg'),
            selected: require('../../static/img/tab/icon-find-hover.svg')
          },
          {
            normal: require('../../static/img/tab/icon-cart-normal.svg'),
            selected: require('../../static/img/tab/icon-cart-hover.svg')
          },
          {
            normal: require('../../static/img/tab/icon-my-normal.svg'),
            selected: require('../../static/img/tab/icon-my-hover.svg')
          }
        ],
        tabShow: true
      }
    },
    mounted() {
      let c = this;
    },
    methods: {
      switchTo(path) {
        // console.log(this.$router)
        this.$router.push(path)
      }
    }


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
    /*.bottom-tab{*/
    /*width: 100%;*/
    /*height: 50px;*/
    /*background-color: #fff;*/
    /*position: fixed;*/
    /*left: 0px;*/
    /*bottom: 0px;*/
    /*display: flex;*/
    /*z-index: 999;*/
    /*.tab-item{*/
    /*display:flex;*/
    /*flex: 1;*/
    /*flex-direction:column;*/
    /*align-items:center;*/
    /*justify-content:center;*/
    /*font-size:14px;*/
    /*color:#666;*/
    /*}*/
    /*img{*/
    /*width:35%;margin-bottom:2px*/
    /*}*/
    /*.on{color:#ee9911}*/
    /*}*/
    .bottom-tab
        width 100%
        max-width: 640px
        height 50px
        background-color #fff
        position fixed
        left 0px
        bottom 0px
        display flex
        z-index 999
        right 0
        margin 0 auto
        padding-top 3px
        border-top:1px solid #ddd

        .tab-item
            display flex
            flex 1
            flex-direction column
            align-items center
            justify-content center
            font-size 12px
            color #666
            cursor pointer
            img
                width 30px
                margin-bottom 2px
            .on
                color #ee9911

    .hide
        display: none
</style>
