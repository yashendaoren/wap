<template>
  <div class="Website">
      <ul>
        <li v-for='(web,index) in webList' :key="index">
            {{web | my-filter}}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Website',
  data(){
      return{
          webList:['wang','li','zhou','wu'],
      }
  },
}
</script>

<style scoped>

</style>
