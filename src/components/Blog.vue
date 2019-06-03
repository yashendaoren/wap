<template>
  <div class="blog">
    <input type="text" v-model="search" placeholder="关键词搜索">
      <ul>
        <li v-for='(item,index) in filteredBlogs' :key="index">
            <a target="_blank" :href="item.address" >
              <div>{{item.name}}</div>              
          </a>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data(){
      return{
          blogs:[
            {
              name:'常用命令',
              description:'一段时间不用，就忘了，简单记录一下',
              address:'https://jsrun.net/note/Drjpp'
            },
            {
              name:'常用易错css',
              description:'常用易错CSS',
              address:'https://jsrun.net/note/5eKKp'
            },
            {
              name:'canvas简单用法',
              description:'canvas简单用法',
              address:'https://jsrun.net/note/SeKKp'
            },
            {
              name:'常用正则及常用js',
              description:'常用正则及常用js',
              address:'https://jsrun.net/note/ReKKp'
            },
            {
              name:'jQuery入门',
              description:'jQuery入门',
              address:'https://jsrun.net/note/AeKKp'
            },
            {
              name:'idea破解',
              description:'idea破解码生成',
              address:'https://blog.csdn.net/voke_/article/details/76418116'
            }
          ],
          search:''
      }
  },
  computed:{
    filteredBlogs:function(){
      return this.blogs.filter((item)=>{
        return item.name.match(this.search)
      })
    }
  }
}
</script>

<style scoped>
.blog{
  padding: 10px;
  background: #eef;
}
ul{
  margin: 0px auto;
  width: 800px;
  min-height: 500px;
  list-style: none;
}
li{
  border:1px solid #c1c1c1;
  border-radius: 5px;
  padding: 10px;
  margin: 5px 0;
  background: #fff;
}
 li a:hover{
   color: #4e5;
 }
input{
  width: 600px;
  height: 30px;
  display: block;
  margin: 10px auto;
  font-size: 18px;
  border-radius: 5px;
  padding-left: 10px;
}



</style>
