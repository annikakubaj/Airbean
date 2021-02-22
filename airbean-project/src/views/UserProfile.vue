<template>
  <div class="userProfile">
    <Header/>
      <UserProfile/>


      </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
import Header from './Header.vue'

export default {
    components: {
        UserProfile,
        Header,
    }

}
</script>

<style scoped>

div {
    background-color:rgba(47, 41, 38, 1);
  }

</style>