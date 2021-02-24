<template>

<section class="wrapper">
  
  <img class="profilBild" src="../assets/Profile.svg" alt="profilePicture">

  <div class="profilinfo">
      <div v-for="user in user" v-bind:key="user.index">
          <h2> {{user.name}} </h2>
          <p> {{user.email}} </p> 
          </div>
          </div>
          

  <section class="orderhistory">

      <h2> Orderhistorik </h2>

      <div v-for="ord in orderhistory"  v-bind:key="ord.id">

        <div class="sum">
          <h3> #AB{{ord.number}} </h3>
           
          <p> Total ordersumma  {{ord.total}} </p>
         </div>



      </div>

      

  </section>
  </section>
</template>

<script>



export default {
    computed: {

    orderhistory: function(){ // Hämtar menyn från Store

      return this.$store.state.orderhistory;
    },

    user() {
        return this.$root.$data.user
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
    font-size: 15px;
    
    
    
}

.orderhistory {

color: white;
align-self: flex-start; 
margin-left: 20px;
font-size: 15px;

}

.orderhistory p {
    font-size: 10px;
  

}

.sum {
justify-self: end;
}






</style>