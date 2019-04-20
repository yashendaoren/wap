<template>
  <header>
    <div class="con">
      <div class="title">1004.FUN</div>
      <div class="setting" v-on:click='btnClick(0)'>设置</div>
      <div class="about"  v-on:click='btnClick(1)'>关于我</div>
    </div>
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
      }
  },
  methods:{
    btnClick(index){
      if(index==0){
        alert("Nothing!")
      }else{
        alert("QQ:2051735283")
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  width: 100%;
  background: #607B8B;
}
header .con{
  width: 1000px;
  height: 70px;
  margin: 0 auto;
}
header .con .title{
  float: left;
  line-height: 70px;
  color: #fff;
  font-size: 30px;
  font-style: italic;
}
.setting,.about{
  float: right;
  line-height: 70px;
  color: #fff;
  font-size: 20px;
  margin-left: 20px;
}


</style>
