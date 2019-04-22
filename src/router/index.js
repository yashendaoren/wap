import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routerMap = [
    // 重定向
    { path: '/', redirect: '/tools'},
    { path: '/tools', component: () => import('@/components/Tools')},
    { path: '/study', component: () => import('@/components/Study')},
    { path: '/freeresource', component: () => import('@/components/FreeResource')},
    { path: '/blog', component: () => import('@/components/Blog')},
    // 二级路由 
    { path: '/test', component: () => import('@/components/Test'),
        children:[{path: '/users', component: () => import('@/components/Users')}]
    }
]

export default new VueRouter({
    //去除 #
    // mode:'history',
    routes: routerMap
})
