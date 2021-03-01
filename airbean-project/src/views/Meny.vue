<template>
  <div>
    <Header/>
    <img class="cart-img" src="../assets/cart.svg" alt="" @click="showCart">
    <CartList v-if="show === true"/>
    <h2>Meny</h2>
    <MenuList />
  

  </div>
</template>

<script>
import MenuList from '@/components/MenuList.vue'
import Header from './Header.vue'
import CartList from '../components/CartList.vue'

export default {

   data() {
   return{
     show: false
   }  
  },

  components: {
    MenuList,
    Header,
    CartList
  },

  methods:{
    showCart: function(){
      this.show = this.show == true ? false : true;
    },
  }
}
</script>

<style scoped>

h2{
  font-family: serif;
  font-size: 42px;
  color:rgba(47, 41, 38, 1);
  margin: 15px;
}

.cart-img{
  position: relative;
  left:140px;
  top: -100px;
}

</style>
