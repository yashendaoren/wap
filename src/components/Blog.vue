<template>
  <div class="blog">
    <input type="text" v-model="search" placeholder="search">
      <ul>
        <li v-for='(blog,index) in filteredBlogs' :key="index">
            {{blog}}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data(){
      return{
          blogs:['hehe','zhang','wang','li','zhou','wu','zheng'],
          search:''
      }
  },
  computed:{
    filteredBlogs:function(){
      return this.blogs.filter((name)=>{
        return name.match(this.search)
      })
    }
  }
}
</script>

<style scoped>
.blog{
  width: 800px;
  min-height: 800px;
  margin: 10px auto;
}
ul {
  list-style: none;
}
input{
  width: 80%;
  height: 30px;
  margin: 10px 10%;
}


</style>
