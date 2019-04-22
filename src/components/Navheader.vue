<template>
    <div class="navHeader">
      <img alt="logo" src="../assets/logo.png">
      <ul class="nav">
        <li v-bind:class="{ active: isActive==0 }" v-on:click="liClick(0)"><router-link to='/tools'>常用工具</router-link></li>
        <li v-bind:class="{ active: isActive==1 }" v-on:click="liClick(1)"><router-link to='/freeresource'>免费资源</router-link></li>
        <li v-bind:class="{ active: isActive==2 }" v-on:click="liClick(2)"><router-link to='/study'>在线学习</router-link></li>
        <li v-bind:class="{ active: isActive==3 }" v-on:click="liClick(3)"><router-link to='/blog'>博客</router-link></li>
        <!-- <li v-bind:class="{ active: isActive==4 }" v-on:click="liClick(4)"><router-link to='/test'>test</router-link></li> -->
      </ul>
    </div>  
</template>

<script>
import { confirmEnding } from '@/utils/util'

export default {
  name: 'NavHeader',
  props: {
    msg: String
  },
  data(){
      return{
        isActive:0
      }
  },
  mounted(){
    // this.isActive = sessionStorage.getItem('isActive') 
    // if(!this.isActive){
    //   this.isActive = 0
    // }
    if(location.href.match('#/tools')||confirmEnding(location.href,'#/')){
      this.isActive = 0
    }else if(location.href.match('#/freeresource')){
      this.isActive = 1
    }else if(location.href.match('#/study')){
      this.isActive = 2
    }else if(location.href.match('#/blog')){
      this.isActive = 3
    }else if(location.href.match('#/test')){
      this.isActive = 4
    }
    // else{
    //   this.isActive = 5
    // }    
  },
  methods:{
    liClick(index){
      this.isActive = index
       sessionStorage.setItem('isActive', this.isActive) 
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* router-link ==  a */

img{
  margin: 20px auto;
  display: block;
  height: 200px;
}
ul.nav{
  width: 800px;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
}

.nav li{
  text-align: center;
  line-height: 50px;
  flex-grow: 1;
  flex-basis: 100px;
  font-size: 24px;
  margin:0 20px;
  height: 50px;
}
li a{
  display: block;
  width: 100%;
  height: 100%;
  color: #333;
}
.active{
  background: #eef;
  color: #fde;
}
.active a{
  color: #4e5;
}

/*  */
.container{
  background: #eef;
  min-height: 500px;
}
.container ul{
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0 10px 10px;
}
.container li{
  width: 228px;
  height: 120px;
  border:1px solid #c1c1c1;
  border-radius: 5px;
  padding: 5px;
  margin: 20px 10px 0 0;   
  background: #fff;
}
.container li:hover{
  margin-top: 15px;
}
.container li .item div{
  max-width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
.container li .item div:nth-child(1){
  font-size: 20px;
  color: #000;
  padding: 3px 0;
  border-bottom: 1px solid #ccc;
  -webkit-line-clamp: 1;
}
.container li .item div:nth-child(2){
  font-size: 16px;
  color: #bbb;
  padding: 3px 0;
  height: 60px;
  line-height: 30px;
  -webkit-line-clamp: 2;
}
.container li .item div:nth-child(3){
  font-size: 12px;
  color: #ccc;
  padding: 3px 0;
  -webkit-line-clamp: 1;
}


</style>
