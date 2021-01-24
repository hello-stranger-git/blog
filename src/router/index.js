import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/index'
import Category from '../views/category/index'
// import WebSocket from '../views/webSocket/index'
// import Index from '../views/index/index'
// import IndexComponent from '../components/index/index'
import About from '../components/about/index'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/index',
  },
  {//登陆
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      Authorization:false
    }
  },
  // {
    // path: '/category',
    // name: 'Category',
    // component: Category,
    // meta:{
    //   Authorization:true
    // }
  // },
  {//首页
    path: '/index',
    name: 'Index',
    component: () => import('../views/index/index'),
    children:[
      {//主页
        path: '/index',
        name: 'Index',
        component: () => import('../components/index/index'),
        meta:{
          Authorization:true
        }
      },
      {//留言
        path: '/about',
        name: 'About',
        component: About,
      },
      {//分类
        path: '/category',
        name: 'Category',
        component: Category,
      },
    ],
    meta:{
      Authorization:true
    }
  },
]

const router = new VueRouter({
  routes
});
router.beforeEach((to,from,next)=>{//路由导航
  if(to.meta.Authorization){
    if(store.state.token){
      next();
    }else{
      router.replace({name:"Login"})
    }
  }else{
    next();
  }
})
export default router
