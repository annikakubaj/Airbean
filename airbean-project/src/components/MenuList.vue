<template>
  <div>
    <!-- 
        JAG SKRIVER UT MENYN OCH GÖR MenuItems KLICKBARA
        ALLA SMARTA FUNCTIONER ETC SKÖTS I MenuList
    -->

    <h1>MENY</h1>

    <!-- PRINTAR UT MENYN -->
    <div v-for="art in articles"  v-bind:key="art.id">

      <!-- Wrapper runt MenuItem. Har för mig att v-bind och v-on:click kan krocka annars -->
      <div>

        <!-- Skriver in datan i MenuItem, oh skriver ut MenuItem -->
        <MenuItem v-bind:menuItemData="art"/>
        <!-- <MenuItem v-bind:menuItemData="art" v-if="awesome"/>   FRIDA -->
        <button v-on:click="addToCart(art)">I AM BUTTON</button>
      </div>
    </div>

  </div>
</template>

<script>

  // GJORT:
  // XXX Amount XXX
  // XXX Ge nytt ID till varje art som läggs i Cart XXX
  // XXX Så att Cart inte får dubbla IDn och börjar jiddra XXX

  // XXX Gör så att amount ökar, istället för att nya läggs till i cart, när man kör addToCart

  // PLAN:
  // Visa upp cartItem.amount i menyn.

  // Fixa knapp inom v-if på MenuItem (Lägg till)
  //   Kör en vanlig button, klipp in v-on:click på den istället för rakt i MenuItem-taggen
  // Fixa upp/ner-pil på MenueItem i v-else (öka minska antal) - TA HJÄLP AV TOBBE

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

    addToCart(art) { // Ber Store köra metoden "addToCart" och skickar med ID på artikeln som ska läggas in

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