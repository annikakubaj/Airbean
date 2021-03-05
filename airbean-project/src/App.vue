<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>

export default {

  created: function() {  // <------ LOCAL STORAGE

    // MINNS USER
    let user = JSON.parse(localStorage.getItem("user")) // Hämtar user från localStorage

    if (user) { // Kollar om det finns en user i localStorage

      this.$store.commit('onCreatedLoadUser', user) // Muterar in usern i store
    }

    // MINNS ORDERHISTORIK
    let orderhistory = JSON.parse(localStorage.getItem("orderhistory")) // Hämtar ANNAN från localStorage

    if (orderhistory) { // Kollar om det finns en orderhistory i localStorage

      this.$store.commit('onCreatedLoadOrderHistory', orderhistory)
    }
  }
}
</script>

<style>

* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

html{
  background-color: white;
  display: flex;
  justify-content: center;
}

body{
  width:375px;
  background-image: linear-gradient(white, rgba(243, 228, 225, 1));

}
</style>
