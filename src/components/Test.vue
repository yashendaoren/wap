<template>
  <div class="container">
    <div class="test">
      <div v-on:click='navClick(0)'>{{title}}0</div>
      <div v-on:click='navClick(1)'>{{title}}1</div>
      <div v-on:click='navClick(2)'>{{title}}2</div>
    </div>  
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Test',
  props: {
    msg: String
  },
  data(){
      return{
          title:'nav --'
      }
  },
  methods:{
    navClick(id){
      // debugger
      this.$router.push('/users?id='+id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test{
  margin: 0 auto;
  width: 1000px;
  height: 50px;
  background: #fed;
  display: flex;
}
.test div{
  flex-grow: 1;
  margin:0 20px;
  text-align: center;
  line-height: 50px;
  border: 1px solid red;
}


</style>
