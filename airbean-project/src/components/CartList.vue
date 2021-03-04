<template>
  <div class="modal">

  <div class="cart">

    <span class="close" v-on:click="killModal()">&times;</span>

    <h2>Din beställning</h2>
  
    <!-- PRINTAR UT MENYN -->
    <div v-for="art in cart"  v-bind:key="art.id">
      
      <div v-if="art.amount > 0"> <!-- Tar bort artikeln ifall amount inte är över 0 -->
        
        <ArticleItem v-bind:cartItemData="art"/>

      </div>
    </div>

    <div v-if="orderSum > 0">
      <div>
        <h3>Total</h3> 
        <p class="total">{{orderSum}} kr </p>
        <p class="info"> inkl moms + drönarleverans</p>
      </div>
      <button class="cart-button" v-on:click="onPurchase()">Take my money!</button>
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

    onPurchase: function() { // Säger åt store att köra mutationen onPurchase

      if (this.user.length === 0) {

        this.$router.push("/MinProfil") // Navigerar till MinProfil


      } else {

        this.$store.commit('onPurchase')
        this.$router.push("/Status") // Navigerar till Status
      }
    },
    killModal: function(){

      this.$emit('killModal') 
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

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed; /* Stay in place */
  z-index: 99; /* Sit on top */
  left:570;
  top: 0;
  width: 375px; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.close {
  background-color:  rgba(47, 41, 38, 1);
  width:30px;
  height:30px;
  margin-top:10px;
  margin-right:15px;
  border-radius: 50%;
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}

.close:hover,
.close:focus {
  color:white;
  text-decoration: none;
  cursor: pointer;
}

h2{
  font-family: serif;
  font-size: 32px;
  color: rgba(47, 41, 38, 1);
}

h3{
  text-align: left;
  margin:50px 0px 0px 15px;
  font-family: serif;
  font-size: 25px;
  color: rgba(47, 41, 38, 1);
}

h3:after {
    clip: rect(0px, 200px, 20px, 0px);
    content: "............................................";
    font-size: medium;
    font-weight: lighter;
    opacity: 40%;
}

.total{
  text-align: right;
  margin: 0px 25px;
  font-family: serif;
  font-size:25px;
  font-weight: bold;
  color: rgba(47, 41, 38, 1);
  position: relative;
  top: -28px;
}

.info{
  font-size: 12px;
  margin:0px 18px;
  text-align: left;
  position: relative;
  top:-26px;
}

  .cart{
  background-color: white;
  width:350px;
  position: absolute;
  top:80px;
  border-radius: 3px;
  }

.cart-button{
    border:none;
    border-radius: 50px;
    width:250px;
    height:50px;
    background-color: rgba(47, 41, 38, 1);
    margin:25px 50px;
    color:white;
    font-size:24px;
    font-weight: bold;
    font-family: serif;
    
}

.change-amount{
  width:40px;
  height:25px;
  display: flex;  
  margin-left: auto;
  margin-right: 25px;
  position: relative;
  top:-40px;
  
}

.btn{
  background-color: white;
  border: none;
}

</style>
