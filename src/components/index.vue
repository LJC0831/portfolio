<template>
  <AppHeader/>
  <router-view/>
</template>

<script>
/* eslint-disable */
import AppHeader from './AppHeader.vue'
export default {
  components:{AppHeader,},
  name: 'index',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
