<template>
  <div>

    <!-- PRINTAR UT MENYN -->
    <div v-for="art in cart"  v-bind:key="art.id">

      <!-- Skriver in datan i MenuItem, oh skriver ut MenuItem -->
      <MenuItem v-bind:cartItemData="art"/>
        
    </div>

  </div>
</template>

<script>

import MenuItem from '@/components/MenuItem.vue'

export default {
  computed: {

    cart: function(){ // Hämtar cart från Store

      return this.$store.state.cart;
    }
  },
  props: [

    // Tar emot datan
    'cartItemData'
  ],
  components: {

    MenuItem
  }
}
</script>

<style>

</style>