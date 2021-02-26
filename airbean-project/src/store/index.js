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
      orderhistory: [

      ],
      user: [

      ],
      popup: [

      ]
  },

  getters: { // Getters funkar som computed properites fast i store

    // Om man inte är inloggad när man checkar ut sina varor så ska man komma till inloggningssidan.
      // Lagra user i store

    // Codealong - forsla upp "person" från NewProfile till store, och sedan till ??
    // ersätt rad 
    // forsla 


    articlesInCart: function(state){

      let sum = 0

      state.cart.forEach(art => { // Loopar igenom cart ("art" är den specifika artikel som loopen tittar för tillfället)
        
        sum += art.amount // räknar ihop antalet artiklar
      });

      return sum;
    },
    orderSum: function(state){ 

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
      const foundCartItem = state.cart.find(function(cartItem) { return art.id == cartItem.id }) 

      if (foundCartItem){

        // Ökar amount med 1
        foundCartItem.amount ++;  

      } else {

        // Ökar amount och klonar över artikeln till cart
        let artCopy = JSON.parse(JSON.stringify(art))

        artCopy.amount ++; 
        state.cart.push(artCopy) // Forslar in artikeln i "cart" i Store
      }
    },
    openPopup: function(state, payload){
      state.popup = []
      const art = state.articles.find(art => art.id == payload); // Loopar igenom articles och letar efter en artikel vars ID matchar det man klickat på
      

      console.log("OPEN POPUP")
      console.log(art)

      state.popup.push(art) 
    },
    onPurchase: function(state) {

      // Mata in all info om artiklarna i ordern in i articles
      let articles = []

      state.cart.forEach(art => {
        
        articles.push(art)
      });

      // Bygger objektet som ska pushas in i orderhistory
      let order = { 
        
        id: Date.now().toString(),
        number: Date.now().toString(),
        total: this.getters.orderSum + "kr",
        articles: articles
      }

      state.cart = [] // Tömmer cart??
      //this.state.cart.length = 0 // Tömmer cart??
      //this.state.cart.splice(0,this.state.cart.length)
      
      state.orderhistory.push(order) // Forslar in objektet i orderhistory
    },
    saveUser: function (state, payload) {

      state.user.push(payload) // Forslar in artikeln i "cart" i Store
    }
  },
  actions: {
  },
  modules: {
  }
})
