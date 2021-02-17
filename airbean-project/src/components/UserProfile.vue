<template>

<div class="wrapper">
  
  <img class="profilBild" src="../assets/Profile.svg" alt="profilePicture">

  <div class="profilinfo">
      <div v-for="user in user" v-bind:key="user.id">
          <h2> {{user.name}} </h2>
          <p> {{user.email}} </p> 
          </div>
          </div>
          

  <div class="orderhistory">

      <h2> Orderhistorik </h2>

      <div v-for="ord in orderhistory"  v-bind:key="ord.id">

          <h3> {{ord.number}} </h3>
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
    },

    userinfo() {
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
    
    
}

.orderhistory {
color: white;
align-self: flex-start;
margin-top: 90px;
margin-left: 20px;
}

.orderhistory p {
    font-size: 15px;
    border-bottom: white solid 2px;
    border-bottom-style: dotted;
    

}

</style>