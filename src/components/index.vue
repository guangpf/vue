<template>
    <div class="main">
        <div class="all_category"><span class="all_tit">全部分类</span><span class="all_right"></span></div>
        <div class="banner" style="margin:0 auto;width:1200px;margin-bottom:15px">
            <!--<img style="width:100%" src="http://img.labtaobao.com/885009140518201806.png" alt="">-->
            <swiper  :options="swiperOption"  ref="myswiper" v-if="length>1">
                <!-- 这部分放你要渲染的那些内容 -->
                <swiper-slide v-for="(banner,index) in bannerList" :key="index">
                    <img style="width:100%" :src="banner.Image" alt="">
                </swiper-slide>
                <!-- 这是轮播的小圆点 -->
                <!--<div class="swiper-pagination" slot="pagination"></div>-->
                <!--<div class="swiper-scrollbar" slot="scrollbar"></div> //滚动条-->
                <!--<div class="swiper-button-next" slot="button-next"></div> //下一项-->
                <!--<div class="swiper-button-prev" slot="button-prev"></div> //上一项-->
            </swiper>
        </div>

        <div class="lab_content">
            <div class="main_info main_info_add">
                <ul class="info_list">
                    <li class="info_item">
                        <div class="cat_item">
                            <div class="item_title">
                                <img src="../../static/img/home/suppliers.png" alt="供应商入驻">
                            </div>
                            <div class="cat_list">
                                <div class="information_tit">淘资讯</div>
                                <ul class="cat_ul">
                                    <!--<a href="/TaoInformation/Detail/" target="_blank">-->
                                    <li class="list_item" v-for="(item,index) in Information">
                                        <div class="item_img" :data-id="item.Id">
                                            <span>{{index+1}}.{{item.InformationTitle}}</span>
                                        </div>
                                    </li>
                                    <!--</a>-->
                                </ul>
                                <div class="more_information" data-url="" @click="jumpMore">更多</div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="promotion_box">
                    <div class="promotion_tit_info">
                        <div class="the_tit">每周热淘 <span>HOT</span></div>
                        <div class="brand_img">
                            <div class="brand_img_item" data-id="">
                                <img src="http://img.labtaobao.com/479709592611201709.png" alt="">
                            </div>
                        </div>
                        <div class="promotion_time">10月16日</div>
                        <div class="promotion_time">至</div>
                        <div class="promotion_time">10月20日</div>
                    </div>
                    <div class="promotion_con">
                        <div class="thead">
                            <div class="th brand">品牌</div>
                            <div class="th model">型号</div>
                            <div class="th market_price">参考市场价</div>
                            <div class="th promotion_price">零售促销价</div>
                            <div class="th promotion_price">批发促销价</div>
                        </div>
                        <div class="marquee">
                            <ul class="promotion_list">
                                <li class="tr promotion_item" data-productNo="">
                                    <div class="td td_brand">sigma希格玛</div>
                                    <div class="td td_model"><span class="model_txt">Sigma 1-14K</span></div>
                                    <div class="td td_market_price">￥46800</div>
                                    <div class="td td_promotion_price">￥3????</div>
                                    <div class="td td_promotion_price">￥2????</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="scheme">
                <div class="scheme_item inquiry">
                    <div class="scheme_txt">如何在实验淘一键询价？</div>
                </div>
                <div class="scheme_item item_scheme">
                    <div class="scheme_txt">如何找到适合我的选型方案？</div>
                </div>
            </div>
            <div class="hot_cat">
                <div class="hot_c_tit">
                    <span class="hot_txt">热门分类</span>
                </div>
                <div class="cat_list">
                    <div class="cat_item" v-for="category in HotCategory">
                        <div class="item_left balance" :style="{'background':'url('+category.Image+') no-repeat','background-size':'100% 100%'}" :data-url="category.LinkUrl">
                            <div class="cat2_name">{{category.Name}}</div>
                            <div class="cat3_con">
                                <div class="cat3_list">
                                    <div class="cat3_item" :data-url="cateC.LinkUrl" v-for="cateC in category.HotKeyword">{{cateC.Name}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="item_right">
                            <div class="pro_list">
                                <div class="pro_item" :data-productno="product.ProductId" v-for="product in category.HotProduct">
                                    <div class="pro_img">
                                        <img :src="product.Image" :alt="product.ProductName">
                                    </div>
                                    <div class="pro_info">
                                        <div class="pro_name">{{product.ProductName}}</div>
                                        <div class="model">型号：{{product.CommodityModel}}</div>
                                        <div class="market_pri">参考市场价：<span class="real_price" v-if="product.Price == 0.00">询价</span><span class="real_price" v-else>{{product.Price}}</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hot_cat">
                <div class="hot_c_tit">
                    <span class="hot_txt">合作品牌</span>
                </div>
                <div class="brand_lst">
                    <div class="b_item" title="" data-id="" v-for="item in HotBrand">
                        <div class="b_item_img">
                            <img :src="item.ImageUrl" :alt="item.Name">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="scheme_mask hide">
            <div class="scheme_alert">
                <div class="close_alert"></div>
                <div class="scheme_tit">一对一专属预算制定</div>
                <div class="scheme_tit">一站式专业方案选型</div>
                <div class="scheme_icon"></div>
                <div class="scheme_t">现有方案直接选型</div>
                <div class="scheme_t">联系实验淘帮您制定选型方案</div>
                <div class="scheme_phone"><span></span>021-31009321</div>
                <div class="scheme_down"></div>
            </div>
        </div>
        <v-tabBar></v-tabBar>
    </div>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import jquery from 'jquery'
    import tabBar from './tabBar'
    export default {
        name: 'index',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                bannerList:[],
                HotCategory:[],
                HotBrand:[],
                Information:[],
                length:0,
                swiperOption: {
                    //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                    pagination: {
                        el:'.swiper-pagination'
                    },
                    // slidesPerView: 'auto',
                    autoplay:{
                        delay:3000,
                    },
                    loop:{
                        loop:true
                    },
                    currentPage: 0,
                    thresholdDistance: 500,
                    thresholdTime: 100,
                    // loopedSlides:'auto',
                    infinite:1,
                    slidesToScroll:1,
                    timingFunction: 'ease',
                    duration: 300,
                    speed:2000
                }
            }
        },
        components: {
            swiper,
            swiperSlide,
            'v-tabBar':tabBar
        },
        //定义这个sweiper对象
        computed: {

        },
        mounted() {
            let c=this;
            c.getMainData();
            c.getInformationData();
            this.tabShow = false;
            //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
        },
        methods: {
            getMainData() {
                let c=this;
                c.$fetch(c.$api.home.getHome)
                    .then((d) => {
                        if(d.status==1){
                            c.msg = d.status;
                            c.bannerList = d.data.Banner;
                            c.HotCategory = d.data.HotCategory;
                            c.HotBrand = d.data.HotBrand;
                            c.length = c.bannerList.length;
                            // c.swiper.slideTo(0, 0, false);
                        }
                    }).catch((err) =>{
                    console.log(err)
                })
            },
            getInformationData(){
              let c=this;
              c.$fetch(c.$api.baseData.getHomeInformation).then((d)=>{
                  if(d.status==1){
                      c.Information = d.data.ItemList;
                  }

              }).catch((err)=>{
                  console.log(err)
              })
            },
            jumpMore:function(){

            }
        }


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import '../../static/css/index.css';
</style>
