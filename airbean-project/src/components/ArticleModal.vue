<template>
<div id="myModal" class="modal">

  <div class="modal-content">

    <!-- Krysset i högra hörnet -->
    <span class="close" v-on:click="killModal">&times;</span>
    
    <p class="name">{{selectedItemData.name}}</p>
    {{selectedItemData.info}}
    <img class ="footer" src="../assets/modal.svg" alt="footer">
   
  </div>

</div>
</template>


<script>
export default {

    methods: {

        killModal: function(){

          this.$emit('killModal') 
        }
    },
    computed: {

      selectedItemData: function(){

        return this.$store.state.popup[0]
      }
    }
}
</script>


<style scoped>
/* The Modal (background) */
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed; /* Stay in place */
  z-index: 99; /* Sit on top */
  left:570;
  top: 0;
  width: 375px; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 90%; /* Could be more or less, depending on screen size */
  font-size: 15px;
  line-height: 150%;
  color: rgba(47, 41, 38, 1);
  background-image: linear-gradient(white, rgba(243, 228, 225, 1));
  text-align: left;
}

/* The Close Button */
.close {
  background-color:  rgba(47, 41, 38, 1);
  width:30px;
  height:30px;
  border-radius: 50%;
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}

.close:hover,
.close:focus {
  color:white;
  text-decoration: none;
  cursor: pointer;
}

.name{
  font-family: serif;
  font-size: 23px;
  font-weight: bold;
}

.footer{
  display: flex;
  margin-left: auto;
}
</style>