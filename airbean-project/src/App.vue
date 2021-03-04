<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>

export default {

  created: function() {

    let user = JSON.parse(localStorage.getItem("user")) // Gör om sträng till objekt

    if (user) {

      console.log("APP, GET ITEM")
      console.log(user)

      this.$store.commit('loadUser', user)
    }
  },


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
