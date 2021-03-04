<template>
  <div class="wrapper">

    <!-- <div v-for="ord in orderhistory"  v-bind:key="ord.id"> -->
         <div class="ordernummer">
          <h3>Ordernummer: </h3> <p> {{orderhistory[0].number}} </p>
          
      </div>

    

     <img class="statuslogo" src="../assets/status.svg" alt="statuslogo">
      <h2>Din beställning<br> är på väg!</h2>
      <p class="countdown"> {{ countDown }} min </p>

      
      <button @click= "okCoolBtn"> Ok, cool! </button>
  </div>
</template>

<script>

export default {

  data () {
    return {
      countDown: 13,
    }
  },

  watch: {
    countDown:
    { 
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.countDown--;
          }, 5000);
        }
      },
      immediate: true
    }
  },
 

  methods: {
  okCoolBtn() {
    this.$router.push("/UserProfile");
  },
    
  }, 

  computed: {

    orderhistory: function(){ // Hämtar orderHistory från store

      return this.$store.state.orderhistory;
    },
  }
      


}


</script>

<style scoped>

.wrapper {
 display: flex;
 justify-content: center; 
 height: 700px;
 flex-direction: column;
 align-items: center; 
 background-color: #E5674E;
}

.statuslogo {
  width: 160px;
  
}

h2 {
  color: white;
  margin-top: 40px;
  font-family: serif;
  font-size: 36px;
}

p {
  color: white;
  align-self: center;
  font-weight: bold;
  font-family: sans-serif;
}

button {
  border-radius: 20px; 
  width: 150px;
  height: 40px;
  background-color: white;
  color: black;
  font-family: PT serif;
  font-weight: bold;
  font-size: 24px;
  border: none;
  margin-top: 30px;
}

.ordernummer {
  display: flex;
  flex-direction: row;
  color: white;
  margin-bottom: 70px;
  font-family: sans-serif;

}

.ordernummer > h3 {
  font-weight: 100;
}



</style>