<template>

  <div v-if="close === false">



    <img class ="close" src="../assets/close.svg" alt="close" @click="hideDiv">
    <div>
      <p> <router-link to="/meny">Meny</router-link> </p>
      <p class="line"> _____ </p>
      <p> <router-link to="/status">Status</router-link> </p>
      <p class="line"> _____ </p>
      <p> <router-link to="/vartkaffe">Vårt kaffe</router-link> </p>
      <p class="line"> _____ </p>
      <p> <router-link to="/userprofile"> Inloggad profil </router-link> </p>
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

  methods:{

    hideDiv: function(){
      return this.close= true,
      this.$router.go(-1)
    }
  }
    

}

</script>

<style scoped>

.close{
  padding-right: 270px;
}

.line{
  font-size: 12px;
  color:rgba(255, 255, 255, 0.2);
}

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