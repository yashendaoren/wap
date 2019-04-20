import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routerMap = [
    { path: '/', component: () => import('@/components/Tools')},
    { path: '/study', component: () => import('@/components/Study')},
    { path: '/freeresource', component: () => import('@/components/FreeResource')},
    { path: '/blog', component: () => import('@/components/Blog')}
]

export default new VueRouter({
    //去除 #
    // mode:'history',
    routes: routerMap
})
