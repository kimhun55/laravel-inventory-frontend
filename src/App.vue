<template>
  <router-view/>
</template>


<script>
let brand = " | inventory vue spa"
export default {
  name : 'App',
  watch:{
    $route(to){
      document.title = to.meta.title+ brand
      document.description = to.meta.description + brand
    }
  }
}
</script>