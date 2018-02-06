<template lang="pug">
  div#app
    header-component
    router-view
    footer-component
    preloader-component
    //coming-soon-component
</template>

<script type="text/babel">
  import { mapActions } from 'vuex'
  import HeaderComponent from './components/layout/HeaderComponent'
  import FooterComponent from './components/layout/FooterComponent'
  import PreloaderComponent from './components/preloader/PreloaderComponent.vue'
  import ComingSoonComponent from './components/tmp/ComingSoonComponent'

  export default {
    name: 'app',
    components: {
      ComingSoonComponent,
      PreloaderComponent,
      HeaderComponent,
      FooterComponent
    },
    methods: {
      ...mapActions(['loadSiteContent'])
    },
    created () {
      this.loadSiteContent()
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "assets/stylus/app";
</style>
