<template>
  <div>
    <p>ORDER SUM {{orderSum}}</p>
    
    <!-- PRINTAR UT MENYN -->
    <div v-for="art in cart"  v-bind:key="art.id">

      <!-- Skriver in datan i MenuItem, och skriver ut MenuItem -->
      <MenuItem v-bind:cartItemData="art"/>
        
    </div>

  </div>
</template>

<script>
import MenuItem from '@/components/MenuItem.vue'

export default {

  computed: {

    cart: function() { // Hämtar cart från store

      return this.$store.state.cart;
    },
    orderSum: function() { // hämtar orderSum från store

      return this.$store.getters.orderSum;
    },
    
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