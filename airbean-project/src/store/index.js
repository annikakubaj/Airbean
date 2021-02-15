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
        },
        
      ]

  },
  mutations: {

      increment (state, payload) { // ökar id på första artikeln med värdet på payload
        state.articles[0].id = state.articles[0].id + payload;
      }
  },
  actions: {
  },
  modules: {
  }
})
