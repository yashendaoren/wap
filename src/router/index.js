import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routerMap = [
    { path: '/', component: () => import('../components/Website')},
    { path: '/commonuse', component: () => import('../components/CommonUse')},
    { path: '/blog', component: () => import('../components/Blog')},
    
]

export default new VueRouter({
    //去除 #
    mode:'history',
    routes: routerMap
})
