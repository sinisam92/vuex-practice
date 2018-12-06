<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    {{ currentCount }}
    
    <button @click="handleClick" >Increment</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'app',
  components: {
    HelloWorld
  },
  async created() {
    // console.log(this.$store);
    // this.$store.commit('DEMO', {
    //  name: 'Sinisa',
    //  age: 26 }
    //   )
    await this.getTodos();
    
  },
  methods: {
    handleClick() {
      this.$store.dispatch('increment')
    },
    ...mapActions([
      'getTodos'
    ])
  },
 
  computed: {
    // brojcanik() {
    //   return this.$store.getters.currentCount
    // }

    ...mapGetters([
      'currentCount'
    ]),
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
