<template>
  <div>
    
    <Header/>

    <h2>Meny</h2>

    <MenuList />

  </div>
</template>

<script>
import MenuList from '@/components/MenuList.vue'
import Header from './Header.vue'

export default {

  components: {
    MenuList,
    Header,
  }
}
</script>

<style scoped>

h2{
  font-family: serif;
  font-size: 42px;
  color:rgba(47, 41, 38, 1);
  margin: 15px;
}


</style>
