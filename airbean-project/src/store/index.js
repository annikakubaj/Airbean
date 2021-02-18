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

    addToCart: function (state, payload) { // Notis: Man får tydligen inte ta bort "state", då havererar allt.

      // Loopar igenom articles och letar efter en artikel vars ID matchar det man klickat på
      this.state.articles.forEach(art => {
        if(art.id == payload) {
              
          art.amount += 1;

          this.state.cart.forEach(cartItem => {

            if (cartItem.name == art.name) {
              console.log("HEJ")
            }

          });

          // klonar över artikeln till cart.
          let parsedArt = JSON.parse(JSON.stringify(art)) // Tar bort pekaren, så att man kan uppdatera cart.id utan att röra articles.id
          this.state.cart.push(parsedArt)// Forslar in artikeln i "cart" i Store 
        
          // Ger ett nytt id till artikeln som läggs i cart
              
          this.state.cart[this.state.cart.length -1].id = Date.now().toString() 

        }
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
