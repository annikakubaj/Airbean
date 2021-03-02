<template>
    <div class="header">

        <img class ="navicon" src="../assets/navicon.svg" alt="navicon" @click="showNav">

        <!-- Visar cart-ikonen ifall man är på meny-sidan -->
        <div v-if="currentRouteName === 'Meny'">
            <img class ="carticon" src="../assets/cart.svg" alt="cart" @click="showCart">
            <p>{{articlesInCart}}</p>
        </div>

        <CartList v-if="show === true"/>

    </div>
</template>


<script>

import CartList from '@/components/CartList.vue'

export default {
    
    // FIXA RÄKNAREN I CART!!

    data: function() {
        return {

            show: false
        }  
    },
    computed: {

        currentRouteName: function() {
            return this.$route.name;
        },
        articlesInCart: function() { // hämtar orderSum från store

            return this.$store.getters.articlesInCart;
        }
    },
    methods: {

        showNav: function() {
            this.$router.push("/nav")
        },
        showCart: function(){
            this.show = this.show == true ? false : true;
        }
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
    /* shoppingcart-iconen var lite lurig och har en egen inbyggd marginal */
    /* För att jobba runt det gjorde jag de två bilderna till unika klasser och hanterar dem separat */
    width: 75px;
    height: 75px;
}


</style>