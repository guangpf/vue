<template>
    <div class="header_top_temp_content">
        <div class="header">
            <div class="lab_header">
                <div class="lab_logo">
                    <img src="../../static/img/home/logo.svg" alt="实验淘">
                </div>
                <ul class="tab">
                    <li class="tab_item home tab_active" data-url="/">首页</li>
                    <li class="tab_item brand" data-url="/home/brand">品牌中心</li>
                    <li class="tab_item promotion" data-url="/PromotionActivity/promotion">每周热淘</li>
                    <li class="tab_item endproduct" data-url="/EndProduct/index ">尾品汇</li>
                    <li class="tab_item information" data-url="/TaoInformation/index">淘资讯</li>
                    <li class="tab_item about" data-url="/home/about_us">关于实验淘</li>
                </ul>
                <div class="search">
                    <span class="search_in"  id="search_in">请输入产品名称 品牌 型号</span>
                    <div class="search_img"><span><img src="/img/home/search.png" alt=""></span></div>
                </div>
            </div>
        </div>
        <div class="search_mask hide"></div>
        <div class="search_box hide">
            <input type="text" id="search_key" placeholder="请输入产品名称 品牌 型号 厂商订货号">
            <span class="to_search" id="to_search"></span>
        </div>
    </div>
</template>
<style scoped>
    @import '../../static/css/temp/header_search.css';
</style>