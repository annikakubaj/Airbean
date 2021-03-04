<template>

  <div v-if="close === false">



    <img class ="close" src="../assets/close.svg" alt="close" @click="hideDiv">
    <div class="container">
      
      <p> <router-link to="/meny">Meny</router-link> </p>
      <p class="line"> _____ </p>
      <p> <router-link to="/vartkaffe">Vårt kaffe</router-link> </p>
      <p class="line"> _____ </p>

      <div v-if="user[0]"> <!-- Om man HAR en användare -->
        <p> <router-link to="/userprofile">Min profil</router-link> </p> <!-- Se orderhistorik -->
        <p class="line"> _____ </p>
      </div>
      <div v-else> <!-- Om man INTE HAR en användare -->
        <p> <router-link to="/minprofil">Min profil</router-link> </p> <!-- Skapa ny profil -->
        <p class="line"> _____ </p>
      </div>

      <div v-if="orderhistory.length > 0"> <!-- Om man har grejor i sin cart -->
        <p> <router-link to="/status"> Orderstatus </router-link> </p>
      </div>

    </div>

  </div>
 
</template>


<script>
export default {

  data() {
   return{

     close: false
   }  
  },
  computed: {

    orderhistory: function(){ // Hämtar orderhistory från store

      return this.$store.state.orderhistory;
    },
    user: function(){ // Hämtar orderhistory från store

      return this.$store.state.user;
    }
  },
  methods:{

    hideDiv: function(){
      return this.close= true,
      this.$router.go(-1)
    }
  },

    

}

</script>

<style scoped>

.container{
   padding:110px 25px 170px;
}

.close{
  padding-top:30px;
  padding-right: 270px;
}

.line{
  font-size: 12px;
  color:rgba(255, 255, 255, 0.2);
}


div{
    background-color: rgba(47, 41, 38, 1);

}

p{
    color:white;
    font-size: 200%;
    font-weight: bold;
    font-family: serif;
    margin:12px;
}

a:link {
  text-decoration: none;

}

a:visited {
    text-decoration: none;
    color:white;
}


</style>