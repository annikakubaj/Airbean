import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {

      articles: [
        {
          id: 1,
          name: "Bryggkaffe",
          description: "Bryggd på månadens bönor",
          price: "49",
          amount: 0
        },
        {
          id: 2,
          name: "Caffè Doppio",
          description: "Bryggd på andra månadens bönor",
          price: "49",
          amount: 0
        },   
        {
          id: 3,
          name: "Cappuccino",
          description: "Bryggd på tredje månadens bönor",
          price: "49",
          amount: 0
        },     
        {
          id: 4,
          name: "Latte Macchiato",
          description: "Bryggd på fjärde månadens bönor",
          price: "49",
          amount: 0
        },     
        {
          id: 5,
          name: "Kaffe Latte",
          description: "Bryggd på femte månadens bönor",
          price: "49",
          amount: 0
        },     
        {
          id: 6,
          name: "Cortado",
          description: "Bryggd på sjätte månadens bönor",
          price: "39", 
          amount: 0
        }
      ],
      cart: [
        
      ],
      orderhistory: []
  },

  getters: { // Getters funkar som computed properites fast i store
    articlesInCart: function(state){

      let sum = 0

      state.cart.forEach(art => { // Loopar igenom cart ("art" är den specifika artikel som loopen tittar för tillfället)
        
        console.log(art.amount)
        sum += art.amount // räknar ihop antalet artiklar
      });

      return sum;
    },
    orderSum: function(state){ // <----- orderSum. Just nu hämtas den i CartList.

      let sum = 0

      state.cart.forEach(art => { // Loopar igenom cart ("art" är den specifika artikel som loopen tittar för tillfället)
        
        sum += art.price * art.amount // multiplicerar pris med antal på varje artikel, och slänger in i sum
      });

      return sum;
    }
  },
  mutations: {

    addToCart: function (state, payload) {

      const art = state.articles.find(art => art.id == payload); // Loopar igenom articles och letar efter en artikel vars ID matchar det man klickat på
      const foundCartItem = state.cart.find(cartItem => { return art.id == cartItem.id }) 

      if (foundCartItem){

        // Ökar amount
        foundCartItem.amount ++;  

      } else {

        // Ökar amount och klonar över artikeln till cart
        art.amount += 1;
        state.cart.push(art) // Forslar in artikeln i "cart" i Store
      }
    },
    onPurchase: function() {

      let order = { // Bygger objektet som ska pushas in i orderhistory
        id: Date.now().toString(),
        number: Date.now().toString(),
        total: this.getters.orderSum + "kr"
      }

      this.state.cart = [] // Tömmer cart
      this.state.orderhistory.push(order) // Forslar in objektet i orderhistory
    }
  },
  actions: {
  },
  modules: {
  }
})
