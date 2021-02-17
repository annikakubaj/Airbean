<template>

<div class="wrapper">
  
  <img class="profilBild" src="../assets/Profile.svg" alt="profilePicture">

  <div class="profilinfo">
          <h3> userData.name </h3>
          <p> userData.email </p> 
          </div>

  <div class="orderhistory">
      </div>

      

  </div>
</template>

<script>
export default {

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

</style>