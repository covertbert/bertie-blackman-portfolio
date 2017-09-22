<template lang="pug">
  transition(name="fade")
    div.preloader-component(v-show="siteIsLoading")
      sync-loader.preloader-component__loader(:loading="true", :color="color", :size="size")
</template>

<script type="text/babel">
  import SyncLoader from 'vue-spinner/src/SyncLoader.vue'
  import { mapState } from 'vuex'
  /* ============
   PreloaderComponent
   * ============
   *
   * todo: add documentation here!
   */

  export default {
    name: 'PreloaderComponent',

    extends: {},

    props: {},

    data () {
      return {
        color: '#e0a80d',
        size: '.8rem'
      }
    },

    computed: {
      ...mapState(['siteIsLoading'])
    },

    components: {
      SyncLoader
    },

    watch: {},

    methods: {},

    beforeCreate () {
    },

    mounted () {
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/variables.styl"

  .preloader-component
    position fixed
    display flex
    justify-content center
    align-items center
    top 0
    left 0
    width 100%
    height 100%
    background-color $primary-gray

</style>
