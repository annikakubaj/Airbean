import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  // PLAN:
  // Ge nytt ID till varje art som läggs i Cart
  //   Så att Cart inte får dubbla IDn och börjar jiddra.

  // Fixa knapp inom v-if på MenuItem (Lägg till)
  //   Kör en vanlig button, klipp in v-on:click på den istället för rakt i MenuItem-taggen
  // Fixa upp/ner-pil på MenueItem i v-else (öka minska antal) - TA HJÄLP AV TOBBE

  
  state: {

      articles: [
        {
          id:1,
          name: "Bryggkaffe",
          description: "Bryggd på månadens bönor",
          price: "49"
        },
        {
          id:2,
          name: "Caffè Doppio",
          description: "Bryggd på andra månadens bönor",
          price: "49"
        },   
        {
          id:3,
          name: "Cappuccino",
          description: "Bryggd på tredje månadens bönor",
          price: "49"
        },     
        {
          id:4,
          name: "Latte Macchiato",
          description: "Bryggd på fjärde månadens bönor",
          price: "49"
        },     
        {
          id:5,
          name: "Kaffe Latte",
          description: "Bryggd på femte månadens bönor",
          price: "49"
        },     
        {
          id:6,
          name: "Cortado",
          description: "Bryggd på sjätte månadens bönor",
          price: "39"
        }
      ],
      cart: [
        
      ]

  },
  mutations: {

    addToCart: function (state, payload) { // Notis: Man får tydligen inte ta bort "state", då havererar allt.

      // Loopar igenom articles och letar efter en artikel vars ID matchar det man klickat på
      this.state.articles.forEach(art => {
        if(art.id == payload) {

          // Forslar in artikeln i "cart" i Store
          this.state.cart.push(art)

          // Debugg
          console.log("CART")
          console.log(this.state.cart)
        }
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
