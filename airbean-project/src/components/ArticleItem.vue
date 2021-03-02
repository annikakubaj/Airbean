<template>
<div>
  <!-- 
    JAG SKA HÅLLA OCH PRESENTERA DATA
    ALLA SMARTA FUNCTIONER ETC SKÖTS I MenuList
  -->

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
  <div v-if="cartItemData" >
    <h2 class="cart-name">
      {{cartItemData.name}}
    </h2>

    <p class="computed">
      {{computedPrice}} kr
    </p>


  </div>



</div>
</template>

<script>
export default {
  props: [

    'articleItemData',
    'cartItemData'
  ],
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

.cart-name{
  font-size: 21px;
  font-family: serif;
  color:rgba(47, 41, 38, 1);
  text-align: left;
  margin:3px 15px;
  font-weight: bold;
} 

.cart-name:after {
    clip: rect(0px, 190px, 20px, 0px);
    content: ".........................................";
     font-size: medium;
    font-weight: lighter;
    opacity: 40%;
}

.computed{
  font-size: 12px;
  text-align: left;
  margin: 3px 15px;
}


</style>