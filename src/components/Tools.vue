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
              name:'改图宝',
              description:'图片在线压缩工具',
              address:'http://www.gaitubao.com'
            },
            {
              name:'压缩图',
              description:'修改图片尺寸，添加水印，pdf格式转换等，挺好用的',
              address:'https://www.yasuotu.com'
            },
            {
              name:'UZER.ME',
              description:'ppt、excel、ps等云协作办公',
              address:'https://uzer.me/index.html'
            },
            {
              name:'JSRUN',
              description:'jsrun在线编辑器、支持多重语言在线编辑。同时也是一个代码库',
              address:'https://jsrun.net'
            }
          ],
      }
  },
}
</script>

<style scoped>



</style>
