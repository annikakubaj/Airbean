<template>

<section class="container" @click="showNav">


<div class="left"><img src="../assets/landing left.svg"/> </div>
<div class="logo"><img src="../assets/landing logo.svg"/> </div> 
<div class="right"><img src="../assets/landing right.svg"/> </div>

</section>


</template>

<script>

export default {

  methods: {

    showNav: function(){
      this.$router.push("/nav")
    }
  }
    
}
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'Landing',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style scoped>




.container {
   display: flex;
    justify-content: center;
    height:665px;
    width: 375px;
    background-color: #0E927D;
    
}


.logo {
  margin-top: 250px;
  align-self: baseline;
  position: absolute;
  
}

.left {
padding-left: 1px;

}

.right {
  margin-left: 64px;
}




</style>
