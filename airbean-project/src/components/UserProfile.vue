<template>

<div class="wrapper">
  
  <img class="profilBild" src="../assets/Profile.svg" alt="profilePicture">

  <div class="profilinfo">
      <div v-for="user in user" v-bind:key="user.index">
          <h2> {{user.name}} </h2>
          <p> {{user.email}} </p> 
          </div>
          </div>
          

  <div class="orderhistory">

      <h2> Orderhistorik </h2>

      <div v-for="ord in orderhistory"  v-bind:key="ord.id">

          <h3 class="ordernummer"> {{ord.number}} </h3>
          <p> {{ord.total}} </p>

            <!-- Printar ut namnen och mängden på artiklarna i ordern -->
            <div v-for="art in ord.articles"  v-bind:key="art.id">

                <div v-if="art.amount > 0"> <!-- Visar bara artikeln ifall amount är mer än 0 -->
                    {{art.amount}} {{art.name}}
                </div>
                
            </div>

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
    border-bottom: white solid 2px;
    border-bottom-style: dotted;
    

}

</style>