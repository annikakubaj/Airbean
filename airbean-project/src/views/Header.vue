<template>
    <div>

    <div class ="container">
    <img class ="header" src="../assets/header.svg" alt="header">
    <img class ="navicon" src="../assets/navicon.svg" alt="navicon" @click="showNav">



    </div>
    </div>

</template>


<script>

export default {


  

    methods:{

        showNav: function (){
            this.$router.push("/nav")
        },


    }
  
}

</script>

<style scoped>

.container{
    height:100px;

}

img{
    display:flex;
}

.header{
    position: absolute;
  
}

.navicon{
   margin:20px;
    position: absolute;

    
}

</style>