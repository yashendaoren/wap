<template>
  <header>
      <div>{{title}}</div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  data(){
      return{
          title:'Header'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  width: 100%;
  height: 50px;
  background: burlywood;
  text-align: center;
}


</style>
