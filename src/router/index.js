import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Categroy = () => import('../views/categroy/Categroy.vue')
const Profile = () => import('../views/profile/Profile.vue')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建路由对象
const routes =  [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/categroy',
        component: Categroy
    },
    {
        path: '/profile',
        component: Profile
    }

]
const router = new VueRouter({
    routes,
    mode: 'history'
})

// 3.导出router
export default router