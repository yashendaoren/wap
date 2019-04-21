<template>
  <div class="container">
      <ul>
        <li v-for='(item,index) in webList' :key="index">
          <a target="_blank" :href="item.address" >
            <div class="item">
              <div>{{item.name}}</div>
              <div>{{item.description}}</div>
              <div>{{item.address}}</div>
            </div>
          </a>          
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Study',
  data(){
      return{
          webList:[
            {
              name:'菜鸟教程',
              description:'学习笔记 记录点滴',
              address:'http://www.runoob.com/'
            },
            {
              name:'node.js',
              description:'nodejs中文网',
              address:'http://nodejs.cn'
            },
            {
              name:'React Native',
              description:'React Native中文网',
              address:'https://reactnative.cn'
            },
            {
              name:'ES6入门',
              description:'ES6入门教程',
              address:'http://es6.ruanyifeng.com'
            },
            {
              name:'网易云课堂',
              description:'网易在线视频学习',
              address:'https://study.163.com'
            },
            {
              name:'WePy',
              description:'WePy 小程序开发框架',
              address:'https://tencent.github.io/wepy/'
            }],
      }
  },
}
</script>

<style scoped>



</style>
