<template>
  <div class="commonuse">
      <ul>
        <li v-for='(item,index) in commonList' :key="index">
            {{item}}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'commonuse',
  data(){
      return{
          commonList:['zhang','wang','li','zhou','wu','zheng'],
      }
  },
}
</script>

<style scoped>

</style>
