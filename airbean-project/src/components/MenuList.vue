<template>
  <div>

    <h1>MENY</h1>

    <!-- PRINTAR UT MENYN -->
    <div v-for="art in articles"  v-bind:key="art.id">

        <!-- Wrapper runt MenuItem. Har för mig att v-bind och v-on:click kan krocka annars -->
        <div v-on:click="doStuff(art)">

            <!-- Skriver in datan i MenuItem, oh skriver ut MenuItem -->
            <MenuItem v-bind:menuItemData="art" />
        </div>
    </div>

    <button v-on:click="increment">INCREMENT BUTTON</button>

  </div>
</template>

<script>

import MenuItem from '@/components/MenuItem.vue'

export default {

  computed: {

    articles: function(){ // Hämtar första kaffesorten från global space.
      return this.$store.state.articles;
    }
  },
  methods: {

    increment: function() {
      this.$store.commit('increment', 10) // Kallar på "Increment" i Store
      console.log(this.$store.state.articles)
    },
    doStuff: function(art) {

      console.log("DET HÄR ÄR MITT ID: " + art.id)
    }
  },
  components: {
      MenuItem
  }
}
</script>

<style>

</style>