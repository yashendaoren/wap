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
  name: 'Tools',
  data(){
      return{
          commonList:[
            {
              name:'JSON.CN',
              description:'json在线格式化工具',
              address:'https://www.json.cn'
            },
            {
              name:'草料二维码',
              description:'在线生成二维码工具',
              address:'https://cli.im'
            },
            {
              name:'压缩图',
              description:'图片在线压缩工具',
              address:'https://www.yasuotu.com'
            },
            {
              name:'WePy',
              description:'WePy 小程序开发框架',
              address:'https://tencent.github.io/wepy/'
            }
          ],
      }
  },
}
</script>

<style scoped>



</style>
