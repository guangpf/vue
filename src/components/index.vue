<template>
    <div class="main">
        <div class="all_category"><span class="all_tit">全部分类</span><span class="all_right"></span></div>
        <div class="banner" style="margin:0 auto;width:1200px;margin-bottom:15px"><img style="width:100%" src="http://img.labtaobao.com/885009140518201806.png" alt=""></div>
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
                                    <li class="list_item">
                                        <div class="item_img">
                                            <span>1.电子天平产品的选购要点</span>
                                        </div>
                                    </li>
                                    <!--</a>-->
                                </ul>
                                <div class="more_information" data-url="" v-on:click="getData">更多</div>
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
                    <div class="cat_item">
                        <div class="item_left balance"
                             style="background:url(http://img.labtaobao.com/678402462819201839.jpg) no-repeat;background-size:100% 100%">
                            <div class="cat2_name">磁力搅拌器</div>
                            <div class="cat3_con">
                                <div class="cat3_list">
                                    <div class="cat3_item" data-url="">磁力搅拌器</div>
                                </div>
                            </div>
                        </div>
                        <div class="item_right">
                            <div class="pro_list">
                                <div class="pro_item" data-productno="">
                                    <div class="pro_img">
                                        <img src="http://img.labtaobao.com/299708052210201824.png" alt="">
                                    </div>
                                    <div class="pro_info">
                                        <div class="pro_name">微量高速离心机,5424, 非冷冻型, 含气密性固定角转 FA-45-24-11, 旋钮式</div>
                                        <div class="model">型号：ME104/02</div>
                                        <div class="market_pri">参考市场价：<span class="real_price">询价</span></div>
                                    </div>
                                </div>
                                <div class="pro_item" data-productno="">
                                    <div class="pro_img">
                                        <img src="http://img.labtaobao.com/299708052210201824.png" alt="">
                                    </div>
                                    <div class="pro_info">
                                        <div class="pro_name">微量高速离心机,5424, 非冷冻型, 含气密性固定角转 FA-45-24-11, 旋钮式</div>
                                        <div class="model">型号：ME104/02</div>
                                        <div class="market_pri">参考市场价：<span class="real_price">询价</span></div>
                                    </div>
                                </div>
                                <div class="pro_item" data-productno="">
                                    <div class="pro_img">
                                        <img src="http://img.labtaobao.com/299708052210201824.png" alt="">
                                    </div>
                                    <div class="pro_info">
                                        <div class="pro_name">微量高速离心机,5424, 非冷冻型, 含气密性固定角转 FA-45-24-11, 旋钮式</div>
                                        <div class="model">型号：ME104/02</div>
                                        <div class="market_pri">参考市场价：<span class="real_price">询价</span></div>
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
                    <div class="b_item" title="品牌" data-id="品牌">
                        <div class="b_item_img">
                            <img src="http://img.labtaobao.com/524104521416201831.png" alt="">
                        </div>
                    </div>
                    <div class="b_item" title="品牌" data-id="品牌">
                        <div class="b_item_img">
                            <img src="http://img.labtaobao.com/524104521416201831.png" alt="">
                        </div>
                    </div>
                    <div class="b_item" title="品牌" data-id="品牌">
                        <div class="b_item_img">
                            <img src="http://img.labtaobao.com/524104521416201831.png" alt="">
                        </div>
                    </div>
                    <div class="b_item" title="品牌" data-id="品牌">
                        <div class="b_item_img">
                            <img src="http://img.labtaobao.com/524104521416201831.png" alt="">
                        </div>
                    </div>
                    <div class="b_item" title="品牌" data-id="品牌">
                        <div class="b_item_img">
                            <img src="http://img.labtaobao.com/524104521416201831.png" alt="">
                        </div>
                    </div>
                    <div class="b_item" title="品牌" data-id="品牌">
                        <div class="b_item_img">
                            <img src="http://img.labtaobao.com/524104521416201831.png" alt="">
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
    </div>

</template>
<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            getData() {
                this.$Http({
                    url: '/Page/GetHomePageCfg',
                    method: 'Get',
                    params: {

                    }
                }).then((res) => {
                    console.log('res =', res)
                }).catch((err) => {
                    console.log('err =', err)
                })
                // let api = 'http://192.168.1.66:8066/WxAppHome/GetMiniAppHomePageCfg'
                // c.$http.jsonp(api,{credentials:true}).then( res=> {
                //     console.log(res.body);
                // }).catch(error =>{
                //
                // })

            },
            //点击搜索
            toSearch: function () {
                alert(1)
            }
        }


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import '../../static/css/index.css';
</style>
