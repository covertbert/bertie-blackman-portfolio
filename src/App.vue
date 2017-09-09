<template>
  <div id="app">
    <header-component></header-component>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script type="text/babel">
  import HeaderComponent from './components/layout/HeaderComponent'
  import FooterComponent from './components/layout/FooterComponent'

  export default {
    name: 'app',
    components: {
      HeaderComponent,
      FooterComponent
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./assets/scss/app";
</style>
