<template>
<!--  <div id="app">-->
<!--&lt;!&ndash;    <img src="./assets/logo.png">&ndash;&gt;-->
<!--    <router-view/>-->
<!--  </div>-->
<!--  <v-btn color="info">Info</v-btn>-->

  <v-app id='app'>
    <router-view></router-view>
  </v-app>　
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
