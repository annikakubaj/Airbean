<template>

  <div>

      <p> <router-link to="/">Landing</router-link> </p>
      <hr>
      <p> <router-link to="/meny">Meny</router-link> </p>
      <hr>
      <p> <router-link to="/minprofil">Min profil</router-link> </p>
      <hr>
      <p> <router-link to="/orderstatus">Orderstatus</router-link> </p>
      <hr>
      <p> <router-link to="/status">Status</router-link> </p>
      <hr>
      <p> <router-link to="/vartkaffe">Vårt kaffe</router-link> </p>
      <hr>
      <p> <router-link to="/userprofile"> Inloggad profil </router-link> </p>

    </div>
 
</template>


<script>
export default {
    

}

</script>

<style scoped>

hr{
  width:20%;
  height:20%
}

div{
    background-color: rgba(47, 41, 38, 1);
    padding:25px;
}

p{
    color:white;
    font-size: 200%;
    font-weight: bold;
    font-family: serif;
}

a:link {
  text-decoration: none;

}

a:visited {
    text-decoration: none;
    color:white;
}


</style>