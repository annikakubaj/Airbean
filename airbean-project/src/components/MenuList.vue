<template>
  <div>

    <!-- Visar hur många artiklar som ligger i cart -->
    <h3>Articles in cart: {{articlesInCart}}</h3>
    
    <!-- PRINTAR UT MENYN -->
    <div v-for="art in articles"  v-bind:key="art.id">

      <!-- Wrapper runt MenuItem. Har för mig att v-bind och v-on:click kan krocka annars -->
      <div>

        <!-- Skriver in datan i MenuItem, oh skriver ut MenuItem -->
        <MenuItem v-bind:menuItemData="art"/>

        <button v-on:click="addToCart(art)">I AM BUTTON</button>

      </div>
    </div>

  </div>
</template>

<script>


  // PLAN:
  // Visa upp cartItem.amount i menyn.

  // Fixa knapp inom v-if på MenuItem (Lägg till)
  //   Kör en vanlig button, klipp in v-on:click på den istället för rakt i MenuItem-taggen
  // Fixa upp/ner-pil på MenueItem i v-else (öka minska antal) - TA HJÄLP AV TOBBE

import MenuItem from '@/components/MenuItem.vue'

export default {

  computed: {

    articles: function(){ // Hämtar menyn från Store

      return this.$store.state.articles;
    },
    articlesInCart: function() { // hämtar orderSum från store

      return this.$store.getters.articlesInCart;
    },
  },
  methods: {

    addToCart(art) { // Ber Store köra metoden "addToCart" och skickar med ID på artikeln som ska läggas in

      this.$store.commit('addToCart', art.id)
    }
  },
  components: {

      MenuItem
  }
}
</script>

<style>

</style>