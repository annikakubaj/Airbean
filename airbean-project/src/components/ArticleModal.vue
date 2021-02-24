<template>
<div id="myModal" class="modal">

  <div class="modal-content">

    <!-- Krysset i högra hörnet -->
    <span class="close" v-on:click="killModal">&times;</span>

    <p>Arabica and/or Robusta</p>

    <button v-on:click="killModal">Okay</button>

  </div>

</div>
</template>


<script>
export default {

    methods: {

        killModal: function(){

          console.log('CONFIRMED!')
          this.$emit('killModal') 
        }
    }
}
</script>


<style scoped>
/* The Modal (background) */
.modal {
  display: block;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
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
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>