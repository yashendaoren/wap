<template>
  <footer>
      <div>{{title}}</div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  },
  data(){
      return{
          title:'Footer'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{
  width: 100%;
  height: 50px;
  background: burlywood;
  text-align: center;
}


</style>
