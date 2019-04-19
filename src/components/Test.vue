<template>
  <div class="hello">
      <div>{{title}}</div>
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
          title:'Test --'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
