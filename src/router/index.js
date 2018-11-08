import Vue from 'vue'
import Router from 'vue-router'
// const appIndex = () => import('@/components/index');
const appIndex = r => require.ensure([], () => r(require('@/components/index.vue')), 'home');
const home = r => require.ensure([], () => r(require('@/view/home.vue')), 'home');
//品牌
const brand = r => require.ensure([], () => r(require('@/components/brand.vue')), 'chunknamebrand');
const brandIndex = r => require.ensure([], () => r(require('@/components/brand/index.vue')), 'chunknamebrand');

Vue.use(Router)

export default new Router({
  model:history,
  routes: [
    {
      path: '/',
      name: 'home',
      component:home,
        redirect: '/index',
      meta: {
         title: '实验淘', tabName: '/'
      },
        children:[
            {path: '/index', name: 'index', component: appIndex, meta: {title: '信公小安', tabName: 'index'}}
        ]
    },
      {
          path: '/brand',
          name: 'brand',
          component: brand
      }
      ,
      {
          path: '/brand/brandIndex',
          name: 'index',
          component: brandIndex
      }

  ]
})
