<template>

<section class="wrapper">
  
  <img class="profilBild" src="../assets/Profile.svg" alt="profilePicture">

  <div class="profilinfo">
      <div v-for="user in user" v-bind:key="user.index">
          <h2> {{user.name}} </h2>
          <p> {{user.email}} </p> 
          </div>
          </div>
          

  
      <div class="orderhistory">
      <h2> Orderhistorik </h2>
      <section class="container">
        
      <div v-for="ord in orderhistory"  v-bind:key="ord.id" class="best">
          
 <div class="left">
          <h3 class="ordernummer"> {{ord.number}} </h3>
          <!-- Printar ut namnen och mängden på artiklarna i ordern -->
            <div v-for="art in ord.articles"  v-bind:key="art.id">
 
                <div v-if="art.amount > 0"> <!--  Visar bara artikeln ifall amount är mer än 0  -->
                    {{art.amount}} {{art.name}}
                </div>
                </div> 
                </div>
                
                
            
            <div class="rightside">
          <p> {{ord.total}} </p>
          </div>
          </div>
 
            
 
      </section>
    </div>
    

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

.left {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: yellow solid 3px;
    align-items: flex-start;
    

}

h3 {
    margin: 0;
}

.container {
    border: red solid 3px;
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
}

.best {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%}

.profilBild {
    width: 80px;
    
    
}

.profilinfo {
    color: white;
    font-size: 15px;
    
    
    
}

.orderhistory {
color: white;
align-self: center; 
margin-left: 20px;
font-size: 15px;

}

.orderhistory p {
    font-size: 10px;
  

}

.rightside {
display: flex;
flex-direction: row;
border: gray solid 3px;
align-items: center;
margin-right: 10px;

}

.rightside > p {
    margin:0;
}






</style>