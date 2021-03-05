import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {

    // Jag kommer till "NewProfile" när jag klickar Min Proil i Nav, trots att jag är inloggad


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
    },
    totalMoneySpent: function(state) {

      let sum = 0

      state.orderhistory.forEach(order => { // Loopar igenom cart ("art" är den specifika artikel som loopen tittar för tillfället)
        
        sum += order.total
      });

      return sum;
    } 
  },
  mutations: {

    addToCart: function (state, payload) {

      const art = state.articles.find(art => art.id == payload); // Loopar igenom articles och letar efter en artikel vars ID matchar det man klickat på
      const foundCartItem = state.cart.find(function(cartItem) { return art.id == cartItem.id }) 

      if (foundCartItem) {

        // Ökar amount med 1
        foundCartItem.amount ++;  

      } else {

        // Dödar pekaren som bor i art
        let artCopy = JSON.parse(JSON.stringify(art))

        // Ökar amount och klonar över artikeln till cart
        artCopy.amount ++; 
        state.cart.push(artCopy)
      }
    },
    openPopup: function(state, payload) {
      state.popup = []

      // Loopar igenom articles och letar efter en artikel vars ID matchar det man klickat på
      const art = state.articles.find(art => art.id == payload); 

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
        total: this.getters.orderSum, // <--- TOG BORT " + 'kr'"
        articles: articles

      }

      state.cart = [] // Tömmer cart
      
      state.orderhistory.push(order) // Forslar in objektet i orderhistory

      localStorage.setItem("orderhistory", JSON.stringify(state.orderhistory)); // <-------- HÄR

    },
    saveUser: function (state, person) {

      state.user.push(person);
      localStorage.setItem("user", JSON.stringify(person)); // <-------- Forslar upp i localStorage

    },
    onCreatedLoadUser: function(state, user) { // Hämtar användare från localStorage vid uppstart. Körs i app.

      state.user.push(user);
    },
    onCreatedLoadOrderHistory: function(state, orderhistory) { // Hämtar orderhistorik från localStorage vid uppstart. Körs i app.

      orderhistory.forEach(order => {

        state.orderhistory.push(order);
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
