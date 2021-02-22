<template>
  <div class="orderstatus">
    <Header/>
      <h1>ORDERSTATUS</h1>
      <CartList/>
  </div>
</template>

<script>

import CartList from '@/components/CartList.vue'
import Header from './Header.vue'

export default {

  components: {

    CartList,
    Header,
  }

}
</script>

<style>

</style>