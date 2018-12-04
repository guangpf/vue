import Vue from 'vue'
import Router from 'vue-router'
// const appIndex = () => import('@/components/index');
const appIndex = r => require.ensure([], () => r(require('@/components/index.vue')), 'home');
const home = r => require.ensure([], () => r(require('@/view/home.vue')), 'home');
//品牌
const brand = r => require.ensure([], () => r(require('@/components/brand.vue')), 'chunknamebrand');
const brandIndex = r => require.ensure([], () => r(require('@/components/brand/index.vue')), 'chunknamebrand');
const category = r => require.ensure([], () => r(require('@/components/category.vue')), 'chunknamebrand');
const find = r => require.ensure([], () => r(require('@/components/find.vue')), 'chunknamebrand');
const shopcart = r => require.ensure([], () => r(require('@/components/shopcart.vue')), 'chunknamebrand');
const my = r => require.ensure([], () => r(require('@/components/my.vue')), 'chunknamebrand');

Vue.use(Router);
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      redirect: '/index',
      meta: {
        title: '实验淘'
      }
    },
    {path: '/index', component: appIndex, meta: {title: '实验淘'}},
    {
      path: '/brand',
      name: 'brand',
      component: brand,
      children: [
        {
          path: '/brand/brandIndex',
          name: 'brand',
          component: brandIndex
        }
      ]
    }
    ,
    {
      path: '/category',
      name: 'category',
      meta: {
        title: '分类'
      },
      component: category,
    },
    {
      path: '/find',
      name: 'find',
      meta: {
        title: '发现'
      },
      component: find,
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      meta: {
        title: '购物车'
      },
      component: shopcart
    },
    {
      path: '/my',
      name: 'my',
      meta: {
        title: '个人中心'
      },
      component: my
    }

  ]
});
router.beforeEach((to,form,next) =>{
  /*路由变化修改title*/
  if(to.meta.title){
    document.title=to.meta.title
  }
  next();
});
export default router;
