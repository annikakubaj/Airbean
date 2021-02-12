import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  
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
          description: "Bryggd på månadens bönor",
          price: "49"
        },   
        {
          id:3,
          name: "Cappuccino",
          description: "Bryggd på månadens bönor",
          price: "49"
        },     
        {
          id:4,
          name: "Latte Macchiato",
          description: "Bryggd på månadens bönor",
          price: "49"
        },     
        {
          id:5,
          name: "Kaffe Latte",
          description: "Bryggd på månadens bönor",
          price: "49"
        },     
        {
          id:6,
          name: "Cortado",
          description: "Bryggd på månadens bönor",
          price: "39"
        }
      ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
