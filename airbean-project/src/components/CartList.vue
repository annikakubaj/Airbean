<template>
  <div>

    {{orderSum}}
    <!-- PRINTAR UT MENYN -->
    <div v-for="art in cart"  v-bind:key="art.id">

      <!-- Skriver in datan i MenuItem, och skriver ut MenuItem -->
      <MenuItem v-bind:cartItemData="art"/>
        
    </div>

  </div>
</template>

<script>

import MenuItem from '@/components/MenuItem.vue'


//  loopa igenom cart
//    VAR DÅ?
//  plocka computedPrice från varje element
//    MEN VAD FAN RETURNAR JAG?
//  
//



export default {

  computed: {

    cart: function() { // Hämtar cart från Store

      return this.$store.state.cart;
    },
    orderSum: function() { // Summerar ihop den totala kostnaden för beställningen
      let sum = 0

      this.cart.forEach(art => { // Loopar igenom cart
        
        sum += art.price * art.amount // multiplicerar pris med antal på varje artikel, och slänger in i sum
      });

      return sum 
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