<template>
  <div>

    <div class="meny-vy">

    <!-- Modal -->
    <div v-if="showPopup">
      <ArticleModal v-on:killModal="closePopup"/>
    </div>

    <div class="drop-down">
      <label for="dropdown">Filtrera: </label>
      <select name="filter" @change="onChange($event)">
      <option value="Alla" v-on:>Visa alla</option>
      <option value="Lättrost">Lättrost</option>
      <option value="Mellanrost">Mellanrost</option>
      <option value="Mörkrost">Mörkrost</option>
      </select>
    </div>
    
    <!-- PRINTAR UT DE VALDA PRODUKTERNA IFALL DE FINNS -->
    <div v-if="filteredArray.length > 0">

      <!-- Printar ut den filtrerade menyn -->
      <div class="menu" v-for="art in filteredArray"  v-bind:key="art.id">

        <!-- Wrapper runt ArticleItem. Har för mig att v-bind och v-on:click kan krocka annars -->
        <div class="menu">

          <!-- Gör så att artikeln zoomas in på om man klickar på den -->
          <div v-on:click="openPopup(art)">

            <!-- Skriver in datan i ArticleItem, och skriver ut ArticleItem -->
            <ArticleItem class="menu" v-bind:articleItemData="art"/>

          </div>
          
          <button v-on:click="addToCart(art)"> + </button>

        </div>
      </div>
    </div>

    
    <!-- PRINTAR UT ALLA PRODUKTER OM INGET FILTER VALTS -->
    <div v-if="filteredArray.length == 0">

      <!-- Printar hela menyn -->
      <div class="menu" v-for="art in articles"  v-bind:key="art.id">

        <!-- Wrapper runt ArticleItem. Har för mig att v-bind och v-on:click kan krocka annars -->
        <div class="menu">
          
          <!-- Gör så att artikeln zoomas in på om man klickar på den -->
          <div v-on:click="openPopup(art)">

            <!-- Skriver in datan i ArticleItem, och skriver ut ArticleItem -->
            <ArticleItem class="menu" v-bind:articleItemData="art"/>

          </div>
          
          <button v-on:click="addToCart(art)"> + </button>

        </div>
      </div>
    </div>
  </div>
    <img class="footer" src="../assets/footer.svg" />
  </div>
</template>

<script>

import ArticleItem from '@/components/ArticleItem.vue'
import ArticleModal from '@/components/ArticleModal.vue'

export default {

  data: function(){
    return {

      showPopup: false,
      filteredArray: [] // <--------- NY
    }
  },

  computed: {
    getUser: function() {

      return this.$store.state.user
    },
    articles: function(){ // Hämtar menyn från store

      return this.$store.state.articles;
    },
    articlesInCart: function() { // hämtar orderSum från store

      return this.$store.getters.articlesInCart;
    }
  },
  methods: {

    addToCart: function(art) { // Ber store köra metoden "addToCart" och skickar med ID på artikeln som ska läggas in

      this.$store.commit('addToCart', art.id);
    },
    openPopup: function(art){ // Zoomar in på den valda artikeln

      this.showPopup = true;
      this.$store.commit('openPopup', art.id); // Ber store köra openPop och skickar med datan
    },
    closePopup: function(){

      this.showPopup = false;
    },
    onChange(event) { // filtrerar menyn

      // filter loopar igenom articles och jämför alla artiklars "rost" med det man valde i dropdown
      this.filteredArray = this.articles.filter(art => art.rost == event.target.value);

      // event sker då man väljer ett alternativ i dropdown-menyn
    }
  },
  components: {

      ArticleItem,
      ArticleModal
  }
}
</script>

<style scoped>

.meny-vy{
  min-height: 400px;
}

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
padding-top: 5px;
}

</style>