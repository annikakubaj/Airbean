<template>
  <div class="cart">

    
    <div v-if="orderSum > 0">
      
      <h2>ORDER SUM {{orderSum}}:-</h2>
      <button v-on:click="onPurchase()">TAKE MY MONEY</button>
    </div>


    <!-- PRINTAR UT MENYN -->
    <div v-for="art in cart"  v-bind:key="art.id">
      
      <div v-if="art.amount > 0"> <!-- Tar bort artikeln ifall amount inte är över 0 -->
        
        <ArticleItem v-bind:cartItemData="art"/>

        <!-- Reglage för amount -->
        <input type="number" v-model.number="art.amount">

      </div>
    </div>

  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem.vue'

export default {

  computed: {

    cart: function() { // Hämtar cart från store

      return this.$store.state.cart;
    },
    orderSum: function() { // Hämtar orderSum från store

      return this.$store.getters.orderSum;
    },
    user: function() { // Hämtar orderSum från store

      return this.$store.state.user;
    }
  },
  methods: {

    onPurchase: function(){ // Säger åt store att köra mutationen onPurchase
    
      if (this.user.length == 0) {

        this.$router.push("/MinProfil") // Navigerar till MinProfil
      } else {

        this.$store.commit('onPurchase')
        this.$router.push("/Status") // Navigerar till Status
      }
    }
  },
  props: [

    // Tar emot datan
    'cartItemData'
  ],
  components: {

    ArticleItem
  }
}
</script>

<style scoped>

  .cart{
  background-color: white;
  width:350px;
  position: absolute;
  margin: 0px 13px;
}

</style>
