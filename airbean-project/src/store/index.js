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
        {
          id: 27,
          number: "#AB12837283Z",
          total: "443kr"
        },
        {
          id: 32,
          number: "#AC12837283Z",
          total: "40kr"
        },
        { 
          id: 60,
          number: "#AD12837283Z",
          total: "25kr"
        }
      ]

  },
  mutations: {

    addToCart: function (state, payload) {

      this.state.articles.forEach(art => { // Loopar igenom articles och letar efter en artikel vars ID matchar det man klickat på
        if(art.id == payload) { // Stanna på rätt plats i articles

          // Ser ifall artikeln redan finns i cart
          let foundCartItem = this.state.cart.find(cartItem => { return art.id == cartItem.id }) 

          if (foundCartItem){

            // Ökar amount
            foundCartItem.amount += 1;  

          } else {

            // Ökar amount och klonar över artikeln till cart
            art.amount += 1;
            this.state.cart.push(art) // Forslar in artikeln i "cart" i Store
          }

        }
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
