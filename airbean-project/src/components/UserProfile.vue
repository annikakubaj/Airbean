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

                    <h3 class="ordernummer"> Ordernummer: {{ord.number}} </h3>

                    <!-- Printar ut namnen och mängden på artiklarna i ordern -->
                    <div v-for="art in ord.articles"  v-bind:key="art.id">
            
                        <div v-if="art.amount > 0"> <!--  Visar bara artikeln ifall amount är mer än 0  -->

                            {{art.amount}} {{art.name}} 
                        </div>
                    </div> 
                </div>
                            
                            
                        
                <div class="rightside">

                    <p> {{date}}  </p>
                    <p> {{ord.total}} kr </p>
                </div>
            
            </div>

            <div class="rightTotalSum">  

                <h3 class="total"> Totalt spenderat </h3>
                <h3 class="sum"> {{totalMoneySpent}} kr </h3> 
            </div>
    
                
    
        </section>
    </div>
    

</section>
</template>

<script>



export default {
    computed: {

    orderhistory: function(){ // Hämtar orderHistory från store

      return this.$store.state.orderhistory;
    },

    user: function() { // Hämtar user från store

        return this.$store.state.user;
    },

    totalMoneySpent: function() { // Hämtar totalMoneySpent från store

      return this.$store.getters.totalMoneySpent;
    },

    date: function() { // Skär bort sekunder och dylikt från datum

        let rawDate = new Date().toLocaleString();
        let refinedDate = rawDate.split(" ") 
        // Stringen som ligger i rawDate har ett mellanslagmellan datumet och tiden (" ").

        // rawDate.split(" ") kapar strängen vid det mellanslaget
        // och ger refinedDate som är en array med två strängar

        return refinedDate[0] // date laddas in med den första av de två strängarna
    },
  },

}
</script>

<style scoped>

.wrapper {
    display: flex;
    justify-content: flex-start; 
    height:620px;
    flex-direction: column;
    align-items: center;
   
}

.left {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-bottom:grey solid 1px;
    align-items: flex-start;
    margin-bottom: 10px;
    width: 350px;
    padding-bottom: 5px;
    /* border-style: ridge; */
    

}

h3 {
    margin: 0;
}

.container {
    /* border: red solid 3px; */
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
flex-direction: column;
/* border: gray solid 3px; */
align-items: center;
margin-right: 10px;
justify-content: space-evenly;

}

.rightside > p {
    margin:0;
}

.rightTotalSum {
display: flex;
flex-direction: row;
/* border: gray solid 3px; */
align-items: flex-end;
margin-right: 10px;
justify-content: space-evenly;
margin-top: 20px;
width: 345px;

}

.total {
padding-right: 130px;
}


</style>