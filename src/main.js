import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 0,
    todos: []
  },
  actions: {
    increment({ commit }) {
      commit('INCREMENT')
    },
    async getTodos({ commit }) {
      try {
       const response = await axios.get('https://jsonplaceholder.typicode.com/todos/')
        commit('SET_TODOS', response.data)
       return response.data
       
      } catch(error) {
        console.log(error);
        
      }
    }
  },
  mutations: {
    INCREMENT(state) {
      state.counter++
    },
    DEMO(state, payload) {
      console.log(payload);
      
    },
    SET_TODOS(state, todos) {
      state.todos = todos
    }
  }, getters: {
    currentCount: state => state.counter
  },
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
