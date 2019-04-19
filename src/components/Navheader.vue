<template>
  <div class="navHeader">
      <ul>
        <li><router-link to='/'>网站推荐</router-link></li>
        <li><router-link to='/commonuse'>常用</router-link></li>
        <li><router-link to='/blog'>blog</router-link></li>
      </ul>

  </div>
</template>

<script>
export default {
  name: 'NavHeader',
  props: {
    msg: String
  },
  data(){
      return{
          title:'',
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* router-link ==  a */
.navHeader{
  width: 800px;
  /* height: 100px; */
  margin: 0px auto;
  background: #d77;
}
ul{
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}
li{
  text-align: center;
  line-height: 50px;
  flex-grow: 1;
  flex-basis: 100px;
}


</style>
