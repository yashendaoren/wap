import Vue from 'vue'
import App from './App.vue'
// import Users from './components/Users'
import router from './router'

Vue.config.productionTip = false

// Vue.component('users',Users); //全局注册组件 可在任何地方使用

//全局过滤 User 中有局部过滤
// Vue.filter('my-filter',function(value){
//   return value.toUpperCase()
// })


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
