<template>
  <div class="userProfile">

      <img src="../assets/header.svg" alt="header">
      <UserProfile/>


      </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'

export default {
    components: {
        UserProfile,
    }

}
</script>

<style>

div {
    background-color:rgba(47, 41, 38, 1);
  }

</style>