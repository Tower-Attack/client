<template>
  <div id="app">

    <!-- <MainComp></MainComp> -->
    <navHeader></navHeader>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import MainComp from './components/Main'
import navHeader from './components/navHeader'

export default {
  name: 'app',
  components: {
    MainComp,
    navHeader
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
