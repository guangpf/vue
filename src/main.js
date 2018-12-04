// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from 'axios'
import Vue from 'vue'
import App from './App'
import router from './router'
import {post,fetch,patch,put} from './common/http'
import api from './common/api'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import M from '../static/js/util';
import jquery from '../static/js/jquery-1.11.3.min'
Vue.config.productionTip = false
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.prototype.$api = api;
Vue.prototype.$M = M;
import 'swiper/dist/css/swiper.css'    //在全局没引入，这里记得要！
import 'lib-flexible/flexible'

// Vue.prototype.$swiper=VueAwesomeSwiper;
Vue.use(VueAwesomeSwiper);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
