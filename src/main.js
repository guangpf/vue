// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//ajax引入
import Http from './common/http'
// 封装方法
import cookie from './common/cookie'
import M from './common/util'
// import VueResource from 'vue-resource'
Vue.prototype.$cookie = cookie;
Vue.prototype.$http = Http;
Vue.prototype.$M = M;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
// Vue.use(VueResource);

