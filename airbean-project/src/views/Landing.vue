<template>
<main>
<section class="container">

<div class="logo"> <img src="../assets/landing logo.svg"/> </div>
<div class="left"> <img src="../assets/landing left.svg"/> </div>
<div class="right"> <img src="../assets/landing right.svg"/> </div>

</section>

</main>
</template>

<script>
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

main {
  display: flex;
  justify-content: center;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  width: 570px;
  background-color: #0E927D;

}

.logo {
  grid-column: 2;
  grid-row: 1;
  margin-top: 100%;
  ;
  


}

</style>
