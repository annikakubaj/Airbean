<template>
  <div>

    <!-- Visar hur många artiklar som ligger i cart -->
    <h3>Articles in cart: {{articlesInCart}}</h3>
    
    <!-- Modal -->
    <div v-if="showGdpr">
      <ArticleModal v-on:killModal="closeModal"/>
    </div>

    <!-- PRINTAR UT MENYN -->
    <div v-for="art in articles"  v-bind:key="art.id">

      <!-- Wrapper runt ArticleItem. Har för mig att v-bind och v-on:click kan krocka annars -->
      <div>

        <!-- Skriver in datan i ArticleItem, oh skriver ut ArticleItem -->
        <ArticleItem v-bind:articleItemData="art"/>

        <button v-on:click="addToCart(art)">I AM BUTTON</button>

      </div>
    </div>

  </div>
</template>

<script>


  // PLAN:
  //  När en användare klickar på en produkt ska en ruta visas med mer information om varan. 
  //  Detta kan exempelvis göras som en popup.

import ArticleItem from '@/components/ArticleItem.vue'
import ArticleModal from '@/components/ArticleModal.vue'

export default {

  data: function(){
    return {

      showGdpr: true
    }
  },

  computed: {

    articles: function(){ // Hämtar menyn från Store

      return this.$store.state.articles;
    },
    articlesInCart: function() { // hämtar orderSum från store

      return this.$store.getters.articlesInCart;
    },
  },
  methods: {

    addToCart: function(art) { // Ber Store köra metoden "addToCart" och skickar med ID på artikeln som ska läggas in

      this.$store.commit('addToCart', art.id)
    },
    closeModal: function(){

      localStorage.setItem('gdpr', true);
      this.showGdpr = false;
    }
  },
  components: {

      ArticleItem,
      ArticleModal
  }
}
</script>

<style>

</style>