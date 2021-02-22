<template>
  <div>

    <h2>ORDER SUM {{orderSum}}:-</h2>
    <router-link to="/status"><button v-on:click="onPurchase()">TAKE MY MONEY</button></router-link>

    <!-- PRINTAR UT MENYN -->
    <div v-for="art in cart"  v-bind:key="art.id">

      <!-- Skriver in datan i MenuItem, och skriver ut MenuItem -->
      <MenuItem v-bind:cartItemData="art"/>
    
      <!-- Reglage för amount -->
      <input type="number" min="1" v-model.number="art.amount">

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
    }
  },
  methods: {

    onPurchase: function(){ // säger åt store att köra mutationen onPurchase
    
      this.$store.commit('onPurchase')
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