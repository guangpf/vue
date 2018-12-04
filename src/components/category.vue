<template>
    <div class="container">
        <v-back></v-back>
        <!--<div class="category_con">-->
            <!--<div class="search_category">-->
                <!--<div class="search_icon"><img src="../../static/img/search_ray.svg">-->
                    <!--<span>搜索型号、品牌、关键字、厂商订货号</span>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
        <div class="main">
            <div class="left_bar" ref="leftBar">
                <div class="bar_list">
                    <div id="" class="bar_item" v-for="(category,index) in categoryList"
                         :class="{bar_active:indexFlag == index }" @click="changeCate(category,index)">{{category.name}}
                    </div>
                </div>
            </div>
            <div class="category_info">
                <div class="second_category_list">
                    <div class="second_category_item" v-for="childCate in childCategoryList">
                        <div class="second_category_name">{{childCate.name}}</div>
                        <div class="third_category_list">
                            <div class="category_item" v-for="child in childCate.child" :data-id="child.id">
                                <div class="item_con">
                                    <!--<a url="/pages/category/categorySearch/categorySearch?categoryName={{child.name}}">-->
                                    <div class="category_img">
                                        <img :src="child.iconUrl">
                                    </div>
                                    <div class="category_name">{{child.name}}</div>
                                    <!--</a>-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="to_top hide"><img src="../../static/img/to_top.svg"></div>
        <v-tabBar></v-tabBar>
    </div>
</template>

<script>
    import tabBar from './tabBar'
    import back from './back'

    export default {
        name: 'category',
        data() {
            return {
                msg: '分类',
                categoryList: [],
                childCategoryList: [],
                indexFlag: 0,
                clientHeight: ''
            }
        },
        components: {
            'v-tabBar': tabBar,
            'v-back':back
        },
        mounted() {
            let c = this;
            c.getAllCategory();
            // 获取浏览器可视区域高度
            this.clientHeight = `${document.documentElement.clientHeight}`;         //document.body.clientWidth;
            //console.log(self.clientHeight);
            window.onresize = function temp() {
                this.clientHeight = `${document.documentElement.clientHeight}`;
            };
        },
        watch: {
            // 如果 `clientHeight` 发生改变，这个函数就会运行
            clientHeight: function () {
                this.changeFixed(this.clientHeight)
            }
        },
        methods: {
            getAllCategory() {
                let c = this;
                c.$fetch(c.$api.category.getAllCategory)
                  .then((d) => {
                      console.log(d)
                      if (d.status == 1) {
                          c.categoryList = d.data;
                          c.childCategoryList = d.data[0].child
                      }
                  }).catch((err) => {
                    console.log(err)
                })
            },
            changeCate(item, index) {
                this.childCategoryList = item.child;
                this.indexFlag = index;
                this.toTop();
            },
            changeFixed(clientHeight){                        //动态修改样式
                console.log(clientHeight);
                this.$refs.leftBar.style.maxHeight = clientHeight-99+'px';
            },
            toTop() {
                document.documentElement.scrollTop = document.body.scrollTop = 0;
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import '../../static/css/category/category.css';
</style>
