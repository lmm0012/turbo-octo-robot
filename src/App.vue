<template>
  <div id="app">
    <div class="tabbar">
      <tabbar></tabbar>
    </div>
    <router-view/>
  </div>
</template> 

<script>
import tabbar from './components/tabbar/tabbar'
export default {
  name: 'App',
  components:{tabbar}
}
</script>

<style>

.tabbar{width:100%; height:6.6rem; margin: 0 auto; }

</style>
