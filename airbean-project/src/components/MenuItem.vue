<template>
<div>
  <!-- 
    JAG SKA HÅLLA OCH PRESENTERA DATA
    ALLA SMARTA FUNCTIONER ETC SKÖTS I MenuList
  -->

  <!-- Skriver ut datan i menyn, givet att det finns data i menyn -->
  <div v-if="menuItemData" >
    <h2>
      {{menuItemData.name}}
    </h2>

    <p>
      {{menuItemData.description}}
    </p>

    <p>
      PRICE: {{menuItemData.price}}
    </p>

    <p v-if="cartItemData">
      HEJ
    </p>

    <button>I AM POINTLESS BUTTON</button>

  </div>

  <!-- Skriver ut datan i cart, givet att det finns data i cart -->
  <div v-if="cartItemData" >
    <h2>
      {{cartItemData.name}}
    </h2>

    <p>
      {{cartItemData.description}}
    </p>

    <p>
      AMOUNT: {{cartItemData.amount}}
    </p>

    <p>
      PRICE: {{cartItemData.price}}
    </p>

    <p>
      COMPUTED PRICE: {{computedPrice}}
    </p>

    <p v-if="cartItemData"></p>
  </div>



</div>
</template>

<script>
export default {
  props: [

    'menuItemData',
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

<style>

</style>