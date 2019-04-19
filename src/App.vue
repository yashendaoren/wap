<template>
  <div id="app">
    <Header />
    <img alt="Vue logo" src="./assets/logo.png">
    <NavHeader></NavHeader>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import NavHeader from './components/Navheader'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    NavHeader
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
img{
  margin: 10px auto;
  display: block;
  width: 100px;
}

</style>
