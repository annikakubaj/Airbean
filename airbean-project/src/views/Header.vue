<template>
    <div class="header">

        <img class ="navicon" src="../assets/navicon.svg" alt="navicon" @click="showNav">

        <!-- Visar cart-ikonen ifall man är på meny-sidan -->
        <div v-if="currentRouteName === 'Meny'">
            <img class ="carticon" src="../assets/cart.svg" alt="cart" @click="showCart">
            <p class="cart-counter">{{articlesInCart}}</p>
        </div>

        <CartList v-on:killModal="showCart" v-if="show === true"/>   

    </div>
</template>


<script>

import CartList from '@/components/CartList.vue'

export default {

    data: function() {
        return {

            show: false
        }  
    },
    computed: {

        currentRouteName: function() {
            return this.$route.name;
        },
        articlesInCart: function() {

            return this.$store.getters.articlesInCart;
        }
    },
    methods: {

        showNav: function() {
            this.$router.push("/nav")
        },
        showCart: function() {
            this.show = this.show == true ? false : true;
        },
    },
    components: {
        CartList
    } 


  
}

</script>

<style scoped>

.header{
    /* background-image repeterar sig själv bakom allt annat */
    /* Här får den dock ingen möjlighet att repetera, eftersom höjden är inställd på 110 px*/
    height: 110px;
    background-image: url("../assets/header.svg");

    display: flex;
    justify-content: space-between;
}

.navicon{
    width: 47px;
    height: 47px;
    margin: 12px;
}

.carticon{ 
    /* Shoppingcart-iconen var lite lurig och har en egen inbyggd marginal */
    /* För att jobba runt det gjorde jag de två bilderna till unika klasser och hanterar dem separat */
    width: 75px;
    height: 75px;
}

.cart-counter{
  width: 18px;
  background-color:rgba(229, 103, 78, 1);
  border-radius: 50%;
  position: relative;
  color:white;
  left:49px;
  top:-80px;
  font-size: 15px;
  
  
}

.close {
  background-color:  rgba(47, 41, 38, 1);
  width:30px;
  height:30px;
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


</style>