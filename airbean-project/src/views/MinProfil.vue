<template>
  <div class="profile">
      <Header/>
      <NewProfile/>
  </div> 
  

</template>

<script>
import NewProfile from '../components/NewProfile.vue'
import Header from './Header.vue'


export default {

  components: {
    NewProfile,
    Header,
  } 

}
</script>




<style scoped>

  div{
    background-color:rgba(47, 41, 38, 1);
  }

</style>


        
    