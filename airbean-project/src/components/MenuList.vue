<template>
  <div class>

    <!-- Visar hur många artiklar som ligger i cart -->
    <h3>Articles in cart: {{articlesInCart}}</h3>
    
    <!-- PRINTAR UT MENYN -->
    <div class="menu" v-for="art in articles"  v-bind:key="art.id">

      <!-- Wrapper runt ArticleItem. Har för mig att v-bind och v-on:click kan krocka annars -->
      <div class="menu">

        <!-- Skriver in datan i ArticleItem, oh skriver ut ArticleItem -->
        <ArticleItem class="menu" v-bind:articleItemData="art"/>
        
        <button v-on:click="addToCart(art)"> + </button>

      </div>
    </div>

  </div>
</template>

<script>


  // PLAN:
  // Visa upp cartItem.amount i menyn.

  // Fixa knapp inom v-if på ArticleItem (Lägg till)
  //   Kör en vanlig button, klipp in v-on:click på den istället för rakt i ArticleItem-taggen
  // Fixa upp/ner-pil på MenueItem i v-else (öka minska antal) - TA HJÄLP AV TOBBE

import ArticleItem from '@/components/ArticleItem.vue'

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

      ArticleItem
  }
}
</script>

<style scoped>

.menu{
  display:grid;
  grid-template-columns:75px 200px 75px;
  grid-template-rows: 40px 40px; 
} 
button{
  border: none;
  border-radius: 70%;
  width:35px;
  height:35px;
  background-color:rgba(47, 41, 38, 1);
  color:white;
  font-size: 25px;
  grid-row:1 /span 2;
  justify-self: center;
  align-self: center;
}

</style>