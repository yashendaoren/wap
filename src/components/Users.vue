<template>
  <div class="user">
    <input type="text" v-model="search" placeholder="search">
      <ul>
        <li v-for='(user,index) in filteredUsers' :key="index">
            {{user | my-filter}}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'User',
  data(){
      return{
          users:['zhang','wang','li','zhou','wu','zheng'],
          search:''
      }
  },
  filters:{
    //局部过滤
    // "my-filter":function(value){
    //   return value.toUpperCase()
    // }
    myFilter(value){
      return value.toUpperCase()
    }
  },
  computed:{
    filteredUsers:function(){
      return this.users.filter((name)=>{
        return name.match(this.search)
      })
    }

  }
}
</script>

<style scoped>

</style>
