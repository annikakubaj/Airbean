<template>
  <div>

    <h1>MENY</h1>

    <div v-for="art in articles" :key="art.id">
      <div v-on:click="doStuff">
        <h2>{{art.name}}</h2>
        <p>Beskrivning: {{art.description}}</p>
        <p>Pris: {{art.price}}</p>
      </div>
    </div>

    <button v-on:click="increment">INCREMENT BUTTON</button>
  </div>
</template>

<script>
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
    doStuff: function() {
      console.log("HEJ") // Lirar
      console.log(this.atricle.id) // Lirar inte
    }
  }
}
</script>

<style>

</style>