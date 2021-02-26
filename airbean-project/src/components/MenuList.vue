<template>
  <div class>

    <!-- Visar hur många artiklar som ligger i cart -->
    <h3>Articles in cart: {{articlesInCart}}</h3>
       <div class="drop-down">
        <label for="dropdown">Filtrera: </label>
        <select name="filter">
        <option value="Alla">Visa alla</option>
        <option value="Lättrost">Lättrost</option>
        <option value="Mellanrost">Mellanrost</option>
        <option value="Mörkrost">Mörkrost</option>
        </select>
        </div>
        
    <!-- Modal -->
    <div v-if="showPopup">
      <ArticleModal v-on:killModal="closeModal"/>
    </div>

    <!-- PRINTAR UT MENYN -->
    <div class="menu" v-for="art in articles"  v-bind:key="art.id">

      <!-- Wrapper runt ArticleItem. Har för mig att v-bind och v-on:click kan krocka annars -->
      <div class="menu">

        <div v-on:click="openPopup(art)">

          <!-- Skriver in datan i ArticleItem, och skriver ut ArticleItem -->
          <ArticleItem class="menu" v-bind:articleItemData="art"/>

        </div>
        
        <button v-on:click="addToCart(art)"> + </button>

      </div>
    </div>
  <img class="footer" src="../assets/footer.svg" />
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

      showPopup: false
    }
  },

  computed: {

    articles: function(){ // Hämtar menyn från store

      return this.$store.state.articles;
    },
    articlesInCart: function() { // hämtar orderSum från store

      return this.$store.getters.articlesInCart;
    },

  },
  methods: {

    addToCart: function(art) { // Ber store köra metoden "addToCart" och skickar med ID på artikeln som ska läggas in

      this.$store.commit('addToCart', art.id)
    },
    openPopup: function(art){

      this.showPopup = true;
      this.$store.commit('openPopup', art.id)
    },
    closeModal: function(){

      this.showPopup = false;
    }
  },
  components: {

      ArticleItem,
      ArticleModal
  }
}
</script>

<style scoped>

label{
  color:rgba(47, 41, 38, 1);
  font-size: 13px;
  
}

.drop-down{
  text-align: left;
  margin: 25px 25px 10px;


}

select{
  border:none;
  color:rgba(47, 41, 38, 1);
  font-size: 13px;
  background-color: rgb(255, 248, 248);
}

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

.footer{
  padding-top: 25px;
}

</style>