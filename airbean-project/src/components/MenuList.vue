<template>
  <div>
    <!-- 
        JAG SKRIVER UT MENYN OCH GÖR MenueItems KLICKBARA
        ALLA SMARTA FUNCTIONER ETC SKÖTS I MenuList
    -->

    <h1>MENY</h1>

    <!-- PRINTAR UT MENYN -->
    <div v-for="art in articles"  v-bind:key="art.id">

        <!-- Wrapper runt MenuItem. Har för mig att v-bind och v-on:click kan krocka annars -->
      <div v-on:click="addToCart(art)">

        <!-- Skriver in datan i MenuItem, oh skriver ut MenuItem -->
        <MenuItem v-bind:menuItemData="art" />
      </div>
    </div>



  </div>
</template>

<script>

import MenuItem from '@/components/MenuItem.vue'

export default {

  computed: {

    articles: function(){ // Hämtar menyn från Store

      return this.$store.state.articles;
    },
    cart: function(){ // Hämtar cart från Store

      return this.$store.state.cart;
    }    
  },
  methods: {

    addToCart(art) {
        
        this.$store.commit('addToCart', art.id)
    }
  },
  components: {

      MenuItem
  }
}
</script>

<style>

</style>