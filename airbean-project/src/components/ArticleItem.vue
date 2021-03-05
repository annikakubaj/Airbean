<template>
<div>

  <!-- Skriver ut datan i menyn, givet att det finns data i menyn -->
  <div class="menu" v-if="articleItemData" >
    <h2 class="name">
      {{articleItemData.name}}
    </h2>

    <p class="description">
      {{articleItemData.description}}
    </p>

    <p class="price">
      {{articleItemData.price}} kr
    </p>

  </div>

  <!-- Skriver ut datan i cart, givet att det finns data i cart -->
  <div class="cart-item" v-if="cartItemData" >
    <h2 class="cart-name">
      {{cartItemData.name}}
    </h2>
    <div class="dots"></div>
  
    <p class="computed">
      {{computedPrice}} kr
    </p>

    <!-- Reglage för amount -->
    <div class="change-amount">
      <img class ="btn-up" src="../assets/up.svg" alt="up" v-on:click="increaseAmount()"> 
      <p class="amount"> {{cartItemData.amount}} </p>
      <img class ="btn-down" src="../assets/down.svg" alt="down" v-on:click="decreaseAmount()">
    </div>
  </div>



</div>
</template>

<script>

// MISSION:
// Fixa mörk grå zon utanför cart-popup
// Se till att man fortfarande kan stänga cart-popup

export default {
  props: [

    'articleItemData',
    'cartItemData'
  ],
  methods: {

    increaseAmount: function() {
      this.cartItemData.amount ++;

    },
    decreaseAmount: function() {
      this.cartItemData.amount --;

    }
  },
  computed: {

    computedPrice: function() {

      if (this.cartItemData) {

        return this.cartItemData.price * this.cartItemData.amount;
      }
      return 0;
    }
  }
}
</script>

<style scoped>

.menu{
  display:grid;
  grid-template-columns:0px 210px 60px;
  grid-template-rows: 50px 50px; 
}

.name{
  color:rgba(47, 41, 38, 1);
  font-family: serif;
  font-size:23px;
  font-weight:bold;
  margin-bottom:0px;
  grid-column-start:2;
  text-align: left;
}

.price{
  color:rgba(47, 41, 38, 1);
  font-family: serif;
  font-size:23px;
  font-weight:bold;
  grid-column:3;
  grid-row:1;
  margin-bottom:0px;
  text-align:right;
}

.description{
  color: rgba(47, 41, 38, 1);
  font-size:12px;
  font-weight:thin;
  text-align: left;
  margin-top:0px;
  grid-column-start:2;
}

.cart-item{
  margin:10px 0px;
  display: grid;
  grid-template-columns: 300px 25px;
  grid-template-rows: 15px 25px 15px;
  
}

.dots{
  flex:1;
  border-bottom: 2px dotted #000;
  grid-row: 2;
  grid-column: 1;
  width:70%;
  margin-right: 10px;
  justify-self: flex-end;
  align-self: baseline;
  font-size: medium;
  font-weight: lighter;
  opacity: 40%;
} 

.cart-name{
  font-size: 21px;
  font-family: serif;
  color:rgba(47, 41, 38, 1);
  text-align: left;
  margin:3px 15px;
  font-weight: bold;
  grid-row:2;
  grid-column: 1;
  align-self: baseline;

  } 

.computed{
  font-size: 12px;
  text-align: left;
  margin: 3px 15px;
  grid-row:3;
}

.amount{
  font-size: 17px;
  font-family: serif;
  color:rgba(47, 41, 38, 1);
  margin:2px;
  font-weight:bolder;
}

.change-amount{
  grid-column: 2;
}



</style>