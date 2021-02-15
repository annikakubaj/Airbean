<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">LANDING</router-link> |
      <router-link to="/meny">MENY</router-link> |
      <router-link to="/minprofil">MIN PROFIL</router-link> |
      <router-link to="/orderstatus">ORDERSTATUS</router-link> |
      <router-link to="/status">STATUS</router-link> |
      <router-link to="/vartkaffe">VÅRT KAFFE</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
  background-color:rgba(243, 228, 225, 1)
}
</style>
