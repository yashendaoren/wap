<template>
  <div class="container">
      <ul>
        <li v-for='(item,index) in commonList' :key="index">
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
  name: 'FreeResource',
  data(){
      return{
          commonList:[
            {
              name:'阿里图标库',
              description:'阿里矢量图标库',
              address:'https://www.iconfont.cn'
            },
            {
              name:'BootCDN',
              description:'CND加速服务',
              address:'https://www.bootcdn.cn'
            },{
              name:'jekyll',
              description:'Github静态网站框架',
              address:'https://www.jekyll.com.cn'
            },
            {
              name:'element',
              description:'vue 饿了么组件',
              address:'https://element.eleme.cn/#/zh-CN/'
            },
            {
              name:'GitHub',
              description:'github代码库',
              address:'https://github.com'
            },
            {
              name:'万维易源',
              description:'测试接口大全',
              address:'https://www.showapi.com'
            },
            {
              name:'JSONPlaceholder',
              description:'接口、数据库',
              address:'http://jsonplaceholder.typicode.com'
            }
          ],
      }
  },
}
</script>

<style scoped>



</style>
