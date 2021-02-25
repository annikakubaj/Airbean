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
          amount: 0,
          info: "Lättrostat kaffe som dricks bäst i sin rena form. Kaffet är mindre intensivt i smaken men har ett bredare spektrum av smaker. Dessutom har lättrostat kaffe en högre koffeinhalt eftersom koffeinet försvinner ju kraftigare rostning.",
          rost: "Lättrost"
        },
        {
          id: 2,
          name: "Caffè Doppio",
          description: "Bryggd på andra månadens bönor",
          price: "49",
          amount: 0,
          info: "En dubbel och fyllig espresso med tjock och härlig crema",
          rost: "Mörkrost"
        },   
        {
          id: 3,
          name: "Cappuccino",
          description: "Bryggd på tredje månadens bönor",
          price: "49",
          amount: 0,
          info: "Vår cappuccino serveras med en enkel men stark espresso som bas tillsammans med lika delar ångad mjölk och mjölkskum.",
          rost: "Mörkrost"
        },     
        {
          id: 4,
          name: "Latte Macchiato",
          description: "Bryggd på fjärde månadens bönor",
          price: "49",
          amount: 0,
          info: "Vår Macchiato består av 4/5 skummad mjölk toppad med en stark espresso.",
          rost: "Mellanrost"
        },     
        {
          id: 5,
          name: "Kaffe Latte",
          description: "Bryggd på femte månadens bönor",
          price: "49",
          amount: 0,
          info: "Vår Kaffe Latte är gjord på en tredjedel espresso, två tredjedelar ångad mjölk med ett tunt lager av mjölkskum på toppen.",
          rost: "Mellanrost"
        },     
        {
          id: 6,
          name: "Cortado",
          description: "Bryggd på sjätte månadens bönor",
          price: "39", 
          amount: 0,
          info: "Består av lika delar espresso och ångad mjölk.",
          rost: "Mörkrost"
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
      const foundCartItem = state.cart.find(cartItem => { return art.id == cartItem.id }) 

      if (foundCartItem){

        // Ökar amount med 1
        foundCartItem.amount ++;  

      } else {

        // Ökar amount och klonar över artikeln till cart
        art.amount += 1;
        state.cart.push(art) // Forslar in artikeln i "cart" i Store
      }
    },
    openPopup: function(state, payload){
      state.popup = []
      const art = state.articles.find(art => art.id == payload); // Loopar igenom articles och letar efter en artikel vars ID matchar det man klickat på
      

      console.log("OPEN POPUP")
      console.log(art)

      state.popup.push(art) 
    },
    onPurchase: function() {

      // Mata in all info om artiklarna i ordern in i articles
      let articles = []

      this.state.cart.forEach(art => {
        
        articles.push(art)
      });

      // Bygger objektet som ska pushas in i orderhistory
      let order = { 
        
        id: Date.now().toString(),
        number: Date.now().toString(),
        total: this.getters.orderSum + "kr",
        articles: articles
      }

      this.state.cart = [] // Tömmer cart
      
      this.state.orderhistory.push(order) // Forslar in objektet i orderhistory
    },
    saveUser: function (state, payload) {

      
      state.user.push(payload) // Forslar in artikeln i "cart" i Store
      console.log(state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
