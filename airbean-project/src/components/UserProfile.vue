<template>

<div class="wrapper">
  
  <img class="profilBild" src="../assets/Profile.svg" alt="profilePicture">

  <div class="profilinfo">
          <h3> userData.name </h3>
          <p> userData.email </p> 
          </div>

  <div class="orderhistory">

      <h3> Orderhistorik </h3>

      <div v-for="ord in orderhistory"  v-bind:key="ord.id">

          <p> {{ord.number}} </p>
          <p> {{ord.total}} </p>

          </div>



      </div>

      

  </div>
</template>

<script>

export default {
    computed: {

    orderhistory: function(){ // Hämtar menyn från Store

      return this.$store.state.orderhistory;
    }
  },

}
</script>

<style scoped>

.wrapper {
    display: flex;
    justify-content: flex-start; 
    height:470px;
    flex-direction: column;
    align-items: center;
   
}

.profilBild {
    width: 80px;
    
    
}

.profilinfo {
    color: white;
    
    
}

.orderhistory {

}

</style>