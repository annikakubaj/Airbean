<template>
  <div class="menu">
    <Header/>

    <MenuList />

  </div>
</template>

<script>
import MenuList from '@/components/MenuList.vue'
import Header from './Header.vue'

export default {

  components: {
    MenuList,
    Header
  }
}
</script>

<style>

</style>