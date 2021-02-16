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
      <div v-on:click="addToCart(art)" >

        <!-- Skriver in datan i MenuItem, oh skriver ut MenuItem -->
        <MenuItem v-bind:menuItemData="art"/>
        <!-- <MenuItem v-bind:menuItemData="art" v-if="awesome"/>   FRIDA -->

      </div>
    </div>

  </div>
</template>

<script>

import MenuItem from '@/components/MenuItem.vue'

export default {

//  data: function(){
//    return {

//      awesome: true // FRIDA
//    }
//  },
  computed: {

    articles: function(){ // Hämtar menyn från Store

      return this.$store.state.articles;
    }
  },
  methods: {

    addToCart(art) { // ber Store köra metoden "addToCart" och skickar med ID på artikeln som ska läggas in

      this.$store.commit('addToCart', art.id)
      this.awesome = false
    }
  },
  components: {

      MenuItem
  }
}
</script>

<style>

</style>