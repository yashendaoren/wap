<template>
  <div id="app">
    <Header />
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
ul{
  margin: 0px auto;
  width: 1000px;
  list-style: none;
}
a{
  text-decoration: none;
}

</style>
