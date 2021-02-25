<template>
  <div class="wrapper">

    

     <img class="statuslogo" src="../assets/status.svg" alt="statuslogo">
      <h2>Din beställning<br> är på väg!</h2>
      <p class="countdown"> {{ countDown}} min </p>

      
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
          }, 10000);
        }
      },
      immediate: true
    }
  },
 

  methods: {
  okCoolBtn() {
    this.$router.push("/UserProfile");
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
}

p {
  color: white;
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
}

</style>