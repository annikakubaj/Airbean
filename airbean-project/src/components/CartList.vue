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

    cart: function() { // Hämtar cart från Store

      return this.$store.state.cart;
    },
    orderSum: function() { // Ber Store köra metoden "calculateOrderSum" och hämtar sen den uträknade orderSum

      return this.$store.getters.orderSum;
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