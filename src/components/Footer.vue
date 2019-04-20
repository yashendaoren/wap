<template>
  <footer>
      <div class="con">
        <div class="subject">1004.fun - | - 名字随便起的</div>
        <div class="description">本站收集各方资源、资料，用于学习，也便于平时记忆。本站如有任何侵权或违规行为请联系删除，网站开发者联系方式: QQ2051735283。
</div>
        <div class="copy">Powered by  <a target="_blank" href="https://cn.vuejs.org">@Vue</a> , <a target="_blank" href="https://github.com">@Github</a> , <a target="_blank" href="https://code.1004.fun">@code.1004.fun</a></div>
        <img alt="wx" src="../assets/wx_qrcode.png">
      </div>
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
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{
  width: 100%;
  background: #607B8B;
}
footer .con{
  position: relative;
  width: 1000px;
  height: 150px;
  margin: 0 auto;
}
footer .con div{
  float: left;
  color: #fff;
  width: 600px;
}
.subject{
  line-height: 30px;
  font-size: 18px;
  margin: 15px 0;
}
.description{
  font-size: 15px;
  line-height: 20px;
  height: 55px;
}
a{
  color: #fff;
}
img{
  /* display: block; */
  /* float: right; */
  position: absolute;
  right: 0;
  width: 120px;
  height: 120px;
}


</style>
